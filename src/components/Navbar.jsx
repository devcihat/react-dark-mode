import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "#e3f2fd" }}
      class="navbar navbar-expand-lg navbar-light"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand ms-4" href="#">
            <b>Cihat S.</b>
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li class="nav-item">
              <Link to="/Home" className="nav-link">
                <i>Home</i>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">
                <i>About</i>
              </Link>
            </li>
            <li class="nav-item ">
              <Link to="/contact" className="nav-link">
                <i>Contact</i>
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
