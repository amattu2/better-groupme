import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, ListGroup, Spinner, Card } from 'react-bootstrap';
import { useBotListData } from './Contexts/BotList';

/*
 * Generates a Bot Edit View
 */
const BotView = (props: any): JSX.Element => {
  const { id } = useParams();
  const { status, value } : BotListProviderState = useBotListData();
  const [bot, setBot] = React.useState<BotInfo | null>(null);

  useEffect(() => {
    if (status !== 'LOADED') {
      return;
    }

    const bot = value.find((bot: BotInfo) => bot.id === id);
    if (bot) {
      setBot(bot);
    }
  }, [status, value, id]);

  if (status === 'LOADING') {
    return (
      <ListGroup variant="flush" className="border-bottom scrollarea">
        <Spinner animation="border" />
      </ListGroup>
    );
  }

  if (status === 'ERROR' || !bot) {
    return <div>Error loading selected bot</div>;
  }

  return (
    <div className="d-flex-fill w-100 bg-light position-relative">
      <Card className='p-3 mt-5 w-75 mx-auto'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter a name" value={bot.name} />
            <Form.Text className="text-muted">
              This will appear as the bot's name in the chat.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Callback URL</Form.Label>
            <Form.Control type="text" placeholder="Enter a callback URL" value={bot.callback_url} />
            <Form.Text className="text-muted">
              This is the URL that will be called when a message is sent to the bot.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Avatar URL</Form.Label>
            <Form.Control type="text" placeholder="Enter a avatar URL" value={bot.avatar_url} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Group</Form.Label>
            <Form.Control type="text" placeholder="Enter the assigned group ID" value={"#" + bot.group_id} disabled />
          </Form.Group>

          <Button variant="primary" type="submit" disabled>
            Save
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default BotView;
