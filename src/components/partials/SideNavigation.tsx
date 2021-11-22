import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsFillChatRightTextFill, BsPeopleFill , BsFillArchiveFill, BsGridFill } from "react-icons/bs";
import { AiFillRobot } from "react-icons/ai";

export default class SideNavigation extends React.Component {
  render() {
    const styles = {
      zIndex: 999,
    };

    return (
      <div className="d-flex flex-column flex-shrink-0 bg-white border-end" style={styles}>
        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">&nbsp;</span>
        </a>
        <Nav variant="pills" className="nav-flush flex-column mb-auto text-center" style={styles}>
          <Nav.Link active className="border-bottom">
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
    )
  }
}
