import React from 'react';
import { CloseButton, InputGroup, FormControl, ButtonGroup, Button, Dropdown, DropdownButton } from 'react-bootstrap';

export default class Conversation extends React.Component {
  render() {
    return (
      <>
        <div className="d-flex-fill w-100 bg-light position-relative">
          <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom bg-white">
            <span className="fs-5 fw-semibold">Ben Mourside</span>
            <CloseButton className="ms-auto" />
          </a>
          <div className="overflow-auto">
            <h3>Message Content Goes Here</h3>
          </div>
          <div className="position-absolute bottom-0 start-0 end-0 p-2 bg-white d-flex border-top">
            <InputGroup>
              <FormControl
                as="textarea"
                placeholder="Enter your message"
              />
            </InputGroup>
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
      </>
    );
  }
}
