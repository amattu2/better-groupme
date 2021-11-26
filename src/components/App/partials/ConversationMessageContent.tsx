// Imports
import React from 'react';
import { Badge, Col, Figure, ButtonGroup, Button, Card, Form, Accordion } from 'react-bootstrap';
import { BsFileBarGraphFill } from "react-icons/bs";

/**
 * Conversation message container
 */
const ConversationMessageContent = (props: any): JSX.Element => {
  const { text, attachments, event } : any = props;

  console.log("---- MESSAGE PROPS ----");
  console.log(props);

  // Raw Text
  if (text && attachments.length === 0 && !event) {
    return <p className="mb-0">{text}</p>;
  }

  // Image Attachment(s)
  if (attachments.length > 0 && !event) {
    const images = attachments.filter((a : any) => a.type === 'image');
    console.log(attachments, images);

    return (
      <>
        {text && text.length > 0 &&
          <div className="text-start mb-2">
            {text}
          </div>
        }

        <Card>
          <Card.Body>
            <Accordion defaultActiveKey="0">
              {images.map((a : any, index : number) => {
                return (
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header>Image #{index+1}</Accordion.Header>
                    <Accordion.Body>
                      <Figure>
                        <Figure.Image src={a.url} fluid />
                        <Figure.Caption>
                          <Badge bg="primary">Meme</Badge>
                        </Figure.Caption>
                      </Figure>
                    </Accordion.Body>
                </Accordion.Item>
                );
              })}
            </Accordion>
          </Card.Body>
        </Card>
      </>
    );
  }

  // Default
  return <i><b>Oops, I'm unsure how to parse this content. Please report it.</b></i>;

    /*
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
                  <Form.Group className="mb-3">
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="first radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="second radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="third radio"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                    </Col>
                  </Form.Group>
                </Form>
              <div className="float-end">
                <Button variant="outline-secondary">Results</Button>
                <Button variant="primary ms-2">Submit</Button>
              </div>
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
      <li className="clearfix">
        <div className="message-data">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
          <span className="message-data-time">10:15 AM, Today</span>
        </div>
        <div className="message my-message float-start w-100">
          <blockquote className="mb-0 text-muted">
            <p className="mb-0">Here is a long quote <br/> xyz xyz do abc <br/> long quote</p>
          </blockquote>
        </div>
      </li>
      <li className="clearfix">
        <div className="message-data text-end">
          <span className="message-data-time">7:25 PM, Today &middot; <a href="#/">User A</a></span>
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
        </div>
        <div className="message other-message float-end w-100">
          <div className="text-start mb-2">
            This is long text that was sent with the image. Perhaps it wraps, perhaps it does not. Point being, it is long and takes up space.
          </div>

          <Card>
            <Card.Body>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://via.placeholder.com/171x180"
                  fluid
                />
                <Figure.Caption>
                  <Badge bg="primary">Meme</Badge>
                </Figure.Caption>
              </Figure>
            </Card.Body>
          </Card>
        </div>
      </li>
      <li className="clearfix">
        <div className="message-data">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
          <span className="message-data-time">11:42 PM, Today</span>
        </div>
        <div className="message my-message float-start">
          Hey
          <span className="d-inline-flex align-items-center mx-1">
            <b>@<a href="#/">Alan Miller</a></b>
            <Badge bg="warning" className="ms-1">YOU</Badge>
          </span>
          can you PM me asap?
        </div>
      </li>
      <li className="clearfix">
        <div className="message-data">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
          <span className="message-data-time">11:50 PM, Today</span>
        </div>
        <div className="message my-message float-start w-100">

        </div>
      </li>
      <li className="clearfix text-end">
        <div className="message-data">
          <span className="message-data-time">Today 11:52 PM &middot; <b>GroupMe</b></span>
        </div>
        <i>Benjamin Mourside Added bot TestBot to Group</i>
      </li>
      <li className="clearfix text-end">
        <div className="message-data">
          <span className="message-data-time">Today 11:55 PM &middot; <b>Test Bot</b></span>
          <img src="https://i.groupme.com/700x623.jpeg.98a1c69b708e46c3affbaaae39416e9d" alt="Avatar" />
        </div>
        <div className="message other-message float-end">
          Hello from a bot
        </div>
      </li>
    */
};

export default ConversationMessageContent;
