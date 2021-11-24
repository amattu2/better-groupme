// Imports
import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsFillChatRightTextFill, BsPeopleFill , BsFillArchiveFill, BsGridFill } from "react-icons/bs";
import { AiFillRobot } from "react-icons/ai";

/**
 * Sidebar navigation container
 */
export default class SideNavigation extends React.Component {
  /**
   * Render component
   *
   * @author Alec M. <https://amattu.com>
   * @date 2021-11-24T14:40:56-050
   */
  render() {
    return (
      <div className="d-flex flex-column flex-shrink-0 bg-white border-end" style={{zIndex: 999}}>
        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">&nbsp;</span>
        </a>
        <Nav variant="pills" className="nav-flush flex-column mb-auto text-center">
          <Nav.Link active className="border-bottom" style={{borderRadius: 0}}>
            <BsFillChatRightTextFill />
          </Nav.Link>
          <Nav.Link className="border-bottom" title="Contacts">
            <BsPeopleFill />
          </Nav.Link>
          <Nav.Link className="border-bottom" title="Group Archive">
            <BsFillArchiveFill />
          </Nav.Link>
          <Nav.Link className="border-bottom" title="My Bots">
            <AiFillRobot />
          </Nav.Link>
        </Nav>
        <div className="border-top">
          <a href="#" className="d-flex align-items-center justify-content-center p-3 text-decoration-none">
            <BsGridFill />
          </a>
        </div>
      </div>
    );
  }
}
