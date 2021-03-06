import React from "react";
import { motion } from "framer-motion";

function Home(props) {
  const homeTransition = {
    duration: 2
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={homeTransition}
      className="container"
    >
      <h3 className="pt-5 text-center">Home Page</h3>
      <div className="row  pt-5 px-3 mb-3 ms-3">
        <div className="col-sm-4 col-md-4">
          <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
            <h6 className="card-header header text-center">Header</h6>
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-md-4">
          <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header header text-center">Header</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-sm-4 col-md-4">
          <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header header text-center">Header</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-3">
          <p style={{ lineHeight: "28px", maxWidth: "1000px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="col-sm-4 col-md-4">
          <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header header text-center">Header</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-sm-4 col-md-4">
          <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header header text-center">Header</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-sm-4 col-md-4">
          <div className="card border-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header header text-center">Header</div>
            <div className="card-body text-dark">
              <h5 className="card-title">Dark card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center pt-3">
          <p style={{ lineHeight: "28px", maxWidth: "1000px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
