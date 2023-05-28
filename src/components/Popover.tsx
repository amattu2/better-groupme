// Imports
import React from 'react';
import { Offcanvas } from "react-bootstrap";

/**
 * Offcanvas popover
 */
const Popover = (props: any): JSX.Element => {
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
};

export default Popover;
