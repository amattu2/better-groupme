import React from 'react';

export default class Conversations extends React.Component {
  render() {
    const styles = {
      width: "350px",
      zIndex: 998,
    };
    const styles2 = {
      overflow: "auto",
    };

    return (
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white shadow" style={styles}>
        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">Conversations</span>
        </a>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Users</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Groups</a>
          </li>
        </ul>
        <div className="list-group list-group-flush border-bottom scrollarea" style={styles2}>
          <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">CMSC 216 FA2020</strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Benjamin Mourside</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">Liam Handler</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">ART 101</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">INST 314 ESG-1</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">INST 377 </strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">ENGL 393 WB11</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
        </div>
      </div>
    );
  }
}
