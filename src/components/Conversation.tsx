import React from 'react';
import { CloseButton, InputGroup, FormControl, ButtonGroup, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import "../chat.css";

export default class Conversation extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex-fill w-100 bg-light position-relative">
          <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom bg-white">
            <span className="fs-5 fw-semibold">Ben Mourside</span>
            <CloseButton className="ms-auto" />
          </a>
          <div className="overflow-auto chat-history p-3">
            <ul className="m-b-0">
              <li className="clearfix">
                  <div className="message-data text-end">
                      <span className="message-data-time">10:10 AM, Today</span>
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                  </div>
                  <div className="message other-message float-end"> Hi Aiden, how are you? How is the project coming along? </div>
              </li>
              <li className="clearfix">
                  <div className="message-data">
                      <span className="message-data-time">10:12 AM, Today</span>
                  </div>
                  <div className="message my-message">Are we meeting today?</div>
              </li>
              <li className="clearfix">
                  <div className="message-data">
                      <span className="message-data-time">10:15 AM, Today</span>
                  </div>
                  <div className="message my-message">Project has been already finished and I have results to show you.</div>
              </li>
              <li className="clearfix">
                  <div className="message-data text-end">
                      <span className="message-data-time">10:10 AM, Today</span>
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                  </div>
                  <div className="message other-message float-end"> Hi Aiden, how are you? How is the project coming along? </div>
              </li>
              <li className="clearfix">
                  <div className="message-data">
                      <span className="message-data-time">10:15 AM, Today</span>
                  </div>
                  <div className="message my-message">Project has been already finished and I have results to show you.</div>
              </li>
              <li className="clearfix">
                  <div className="message-data text-end">
                      <span className="message-data-time">10:10 AM, Today</span>
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                  </div>
                  <div className="message other-message float-end"> Hi Aiden, how are you? How is the project coming along? </div>
              </li>
              <li className="clearfix">
                  <div className="message-data text-end">
                      <span className="message-data-time">10:10 AM, Today</span>
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                  </div>
                  <div className="message other-message float-end"> Hi Aiden, how are you? How is the project coming along? </div>
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
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Right</Button>
                <DropdownButton as={ButtonGroup} title="Dropdown">
                  <Dropdown.Item eventKey="1">Upload</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </>
    );
  }
}
