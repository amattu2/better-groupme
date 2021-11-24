// Imports
import React from 'react';
import { Offcanvas } from "react-bootstrap";

/**
 * Offcanvas popover
 */
export default class Popover extends React.Component {
  /**
   * Render component
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
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
