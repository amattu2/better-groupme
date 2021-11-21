import React from 'react';
import { Offcanvas } from "react-bootstrap";

export default class Popover extends React.Component {
  render() {
    return (
      <Offcanvas show="true" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Canvas Title</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Canvas Content
          <pre>Example Content abc 123</pre>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }
}
