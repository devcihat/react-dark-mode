import React from "react";
import { motion } from "framer-motion";

function About(props) {
  const pageVariants = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "-100vw"
    }
  };
  const pageeTransition = {
    duration: 2
  };

  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100vw"
    }
  };
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      className="container"
    >
      <h3 className="pt-5 text-center">About Us</h3>

      <div className="row  pt-2 px-3 mb-3 ms-3">
        <div className="list-group">
          <a
            className="list-group-item list-group-item-action mb-3 "
            aria-current="true"
          >
            <div className="d-flex  w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a
            className="list-group-item list-group-item-action mb-3"
            aria-current="true"
          >
            <div className="d-flex   w-100 justify-content-between">
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
            <div className="d-flex w-100 justify-content-between ">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">4 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </a>
        </div>

        <div className="list-group pt-3">
          <a
            className="list-group-item list-group-item-action  "
            aria-current="true"
          >
            <div className="d-flex w-100 justify-content-between ">
              <h5 className="mb-1">List group item heading</h5>
              <small>5 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a className="list-group-item list-group-item-action mt-3">
            <div className="d-flex   w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">7 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </a>
          <a className="list-group-item list-group-item-action mt-3">
            <div className="d-flex  w-100 justify-content-between ">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">8 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </a>
        </div>
        <div className="list-group pt-3 ">
          <a
            className="list-group-item list-group-item-action mb-3 "
            aria-current="true"
          >
            <div className="d-flex  w-100 justify-content-between ">
              <h5 className="mb-1">List group item heading</h5>
              <small>6 days ago</small>
            </div>
            <p className="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed
              diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a className="list-group-item list-group-item-action mb-3">
            <div className="d-flex  w-100 justify-content-between">
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
            <div className="d-flex col-xs-12 col-sm-6 col-md-8 w-100 justify-content-between">
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
    </motion.div>
  );
}

export default About;
