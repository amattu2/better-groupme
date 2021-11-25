// Imports
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthProvider';
import { Alert, CloseButton, InputGroup, FormControl, ButtonGroup, Button, Dropdown, DropdownButton, Card, Form } from 'react-bootstrap';
import { BsFileBarGraphFill } from "react-icons/bs";
import "./chat.css";

const formatURL = (type : string | undefined, id : string | undefined, token : string) : string => {
  return type === "group" ? `https://api.groupme.com/v3/groups/${id}/messages?access_token=${token}` :
   `https://api.groupme.com/v3/direct_messages?other_user_id=${id}&access_token=${token};`
};

/**
 * Conversation container
 */
const Conversation = (props: any): JSX.Element => {
  const { accessToken } : any = useAuth();
  const { type, id } : HashArgumentFormat = useParams();
  const [data, dataSet] = useState<ConversationMessage[]>([]);

  useEffect(() => {
    (async function() {
      // Fetch Messages
      const d = await fetch(formatURL(type, id, accessToken));
      if (d.status !== 200) {
        window.location.hash = "";
        return;
      }

      // Parse JSON
      const { meta, response } = await d.json();
      if (!response || !meta || meta.code !== 200) {
        window.location.hash = "";
        return;
      }

      // Format Response
      let messages : Array<ConversationMessage> = [];
      response.messages.forEach((message : any) => {
        messages.push({
           avatar_url: message.avatar_url,
           created_at: message.created_at,
           name: message.name,
           text: message.text,
           sender_id: message.sender_id,
           sender_type: message.sender_type,
           id: message.id,
           favorites: message.favorited_by,
           attachments: message.attachments,
           event: message.event,
        });
      });

      // Set Data
      dataSet(messages);
    })();
  }, [accessToken, id, type]);

  return (
    <div className="d-flex-fill w-100 bg-light position-relative">
      <span className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom bg-white">
        <span className="fs-5 fw-semibold">Ben Mourside</span>
        <CloseButton className="ms-auto" onClick={() => window.location.hash = ""} />
      </span>
      <div className="overflow-auto chat-history p-3">
        <Alert variant="warning" dismissible>
          <Alert.Heading>Reminder</Alert.Heading>
          <p>This is a public access group, anyone can join with the invite link. Any message you send is visible to past and present group members, and once sent, messages cannot be reliably deleted.</p>
        </Alert>
        <ul className="m-b-0">
          <li className="clearfix">
            <div className="message-data text-end">
              <span className="message-data-time">November 21st, 2021 at 10:22am</span>
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
            </div>
            <div className="message other-message float-end"> Hi Aiden, how are you? How is the project coming along? </div>
          </li>
          <li className="clearfix">
            <div className="message-data">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
              <span className="message-data-time">November 21st, 2021 at 10:26am</span>
            </div>
            <div className="message my-message float-start">Are we meeting today?</div>
          </li>
          <Alert variant="secondary" className="text-center">
            November 21st, 2021
          </Alert>
          <li className="clearfix">
            <div className="message-data">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
              <span className="message-data-time">10:15 AM, Today</span>
            </div>
            <div className="message my-message float-start w-100">
              <Card>
                <Card.Header as="h6" className="d-flex align-items-center">
                  <BsFileBarGraphFill />
                  <span className="ms-2">Poll</span>
                </Card.Header>
                <Card.Body>
                  <Card.Title>What's your favorite color?</Card.Title>
                  <Form>
                    <Form.Check type="radio">
                      <Form.Check.Input type="radio" />
                      <Form.Check.Label>Label 1</Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="radio">
                      <Form.Check.Input type="radio" />
                      <Form.Check.Label>Label 2</Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="radio">
                      <Form.Check.Input type="radio" />
                      <Form.Check.Label>Label 3</Form.Check.Label>
                    </Form.Check>
                  </Form>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </li>
          <li className="clearfix">
            <div className="message-data">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
              <span className="message-data-time">10:15 AM, Today</span>
            </div>
            <div className="message my-message float-start">Project has been already finished and I have results to show you.</div>
          </li>
        </ul>
      </div>
      <div className="position-absolute bottom-0 start-0 end-0 p-2 bg-white d-flex border-top">
        <InputGroup>
          <FormControl
            as="textarea"
            placeholder="Enter your message"
            rows={1}
          />
        </InputGroup>
        <div className="align-items-center d-flex justify-content-center">
          <ButtonGroup className="ms-1">
            <Button variant="dark">Send</Button>
            <DropdownButton as={ButtonGroup} title="Attach" variant="dark">
              <Dropdown.Item eventKey="1">Upload</Dropdown.Item>
              <Dropdown.Item eventKey="2">Link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
