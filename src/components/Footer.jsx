import React from "react";

function Footer(props) {
  const {
    themeHandler,
    themeObj: { theme, bgColor, textColor, btnColor }
  } = props;

  return (
    <footer className=" my-md-4 pt-md-4 border-top">
      <div className="container">
        <div className="row pt-3">
          <div className="col-12 col-md">
            <i className="fab fa-react fa-lg" />
            <p>
              Created By<b> Cihat Sungu</b>
            </p>
            <button className={`mb-3 btn ${btnColor}`} onClick={themeHandler}>
              Toggle Color
            </button>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
