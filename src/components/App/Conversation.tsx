// Imports
import React from 'react';
import { useConversationData } from '../DataProviders/ConversationProvider';
import { Alert, Badge, CloseButton, InputGroup, FloatingLabel,
  Col, Figure, ButtonGroup, Button,
  Card, Form,
  Spinner, Accordion,
} from 'react-bootstrap';
import { BsFileBarGraphFill } from "react-icons/bs";
import "./style.css";

/**
 * Conversation container
 */
const Conversation = (props: any): JSX.Element => {
  const data : any = useConversationData();

  if (data.status === 'LOADING') {
    return (
      <div className="d-flex justify-content-center align-items-center w-100 bg-light">
        <Spinner animation="border" />
      </div>
    );
  } else if (data.status === 'ERROR') {
    window.location.hash = "#";
  }

  return (
    <div className="d-flex-fill w-100 bg-light position-relative">
      <span className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom bg-white">
        <span className="fs-5 fw-semibold">{data.value.convo.name}</span>
        <CloseButton className="ms-auto" onClick={() => window.location.hash = ""} />
      </span>
      <div className="overflow-auto chat-history p-3">

        {data.value.convo.isPublic &&
          <Alert variant="warning" dismissible>
            <Alert.Heading>Reminder</Alert.Heading>
            <p>This is a public access group, anyone can join with the invite link. Any message you send is visible to past and present group members, and once sent, messages cannot be reliably deleted.</p>
          </Alert>
        }

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
            <div className="message my-message float-start">
              <blockquote className="mb-0 text-muted">
                <p className="mb-0">Here is a long quote <br/> xyz xyz do abc <br/> long quote</p>
              </blockquote>
            </div>
          </li>
          <li className="clearfix">
            <div className="message-data text-end">
              <span className="message-data-time">7:25 PM, Today</span>
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
              <div className="text-start mb-2">
                This is long text that was sent with the image. Perhaps it wraps, perhaps it does not. Point being, it is long and takes up space.
              </div>

              <Card>
                <Card.Body>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Attachment #1</Accordion.Header>
                      <Accordion.Body>
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
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Attachment #2</Accordion.Header>
                      <Accordion.Body>
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
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </div>
          </li>
        </ul>
      </div>
      <div className="position-absolute bottom-0 start-0 end-0 p-2 bg-white d-flex border-top">
        <InputGroup>
          <FloatingLabel label="Message" style={{width: "100%"}}>
            <Form.Control
              as="textarea"
              placeholder="Enter your message"
              style={{height: "55px"}}
            />
          </FloatingLabel>
        </InputGroup>
        <div className="align-items-center d-flex justify-content-center">
          <ButtonGroup className="ms-1">
            <Button variant="dark">+</Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
