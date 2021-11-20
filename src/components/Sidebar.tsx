import React from 'react';
import { BsFillChatRightTextFill, BsPeople , BsFillArchiveFill, BsGrid } from "react-icons/bs";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column flex-shrink-0 bg-light">
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom" aria-current="page">
              <BsFillChatRightTextFill />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link active py-3 border-bottom">
              <BsPeople />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link py-3 border-bottom" aria-current="page">
              <BsFillArchiveFill />
            </a>
          </li>
        </ul>
        <div className="dropdown border-top">
          <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle">
            <BsGrid />
          </a>
          <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
