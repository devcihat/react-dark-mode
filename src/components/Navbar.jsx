import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "#e3f2fd" }}
      className="navbar navbar-expand-lg navbar-light"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand ms-4" href="/Home">
            <b>Cihat S.</b>
          </a>
          <ul className="navbar-nav  mb-2 mb-lg-0 mx-auto ">
            <li className="nav-item">
              <Link to="/Home" className="nav-link">
                <i>Home</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i>About</i>
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/contact" className="nav-link">
                <i>Contact</i>
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
