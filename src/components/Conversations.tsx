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
        <div className="list-group list-group-flush border-bottom scrollarea" style={styles2}>
          <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>

          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
        </div>
      </div>
    );
  }
}
