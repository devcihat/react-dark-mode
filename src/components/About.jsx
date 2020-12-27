import React from "react";

function About(props) {
  return (
    <div className="container">
      <h3 className="pt-5 text-center">Yapılacak Listesi</h3>
      <div className="row pt-5 px-3 mb-3 ms-3">
        <div className="list-group">
          <a
            className="list-group-item list-group-item-action mb-3 "
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a className="list-group-item list-group-item-action mb-3">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </a>
          <a className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
