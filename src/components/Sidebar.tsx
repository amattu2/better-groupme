import React from 'react';
import { BsFillChatRightTextFill, BsPeopleFill , BsFillArchiveFill, BsGridFill } from "react-icons/bs";

export default class Footer extends React.Component {
  render() {
    const styles = {
      zIndex: 999,
    };

    return (
      <div className="d-flex flex-column flex-shrink-0 bg-white border-end" style={styles}>
        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">&nbsp;</span>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom" aria-current="page">
              <BsFillChatRightTextFill />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link py-3 border-bottom">
              <BsPeopleFill />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom" aria-current="page">
              <BsFillArchiveFill />
            </a>
          </li>
        </ul>
        <div className="border-top">
          <a href="#" className="d-flex align-items-center justify-content-center p-3 text-decoration-none">
            <BsGridFill />
          </a>
        </div>
      </div>
    )
  }
}
