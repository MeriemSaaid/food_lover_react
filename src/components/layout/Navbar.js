import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
          <div className="container">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            <a className="navbar-brand text-brand" href="index.html">
              Food<span className="color-b">Lover</span>
            </a>
            <button
              type="button"
              className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-expanded="false"
            >
              <span className="fa fa-search" aria-hidden="true" />
            </button>
            <div
              className="navbar-collapse collapse justify-content-center"
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Recipes
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/list/chicken" className="dropdown-item">
                      Chicken
                    </Link>

                    <Link to="/list/pasta" className="dropdown-item">
                      Pasta
                    </Link>

                    <Link to="/list/dessert" className="dropdown-item">
                      Desserts
                    </Link>

                    <Link to="/list/pizza" className="dropdown-item">
                      Pizza
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    Videos
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Our Chefs
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="property-single.html">
                      Chicken
                    </a>
                    <a className="dropdown-item" href="blog-single.html">
                      Pasta
                    </a>
                    <a className="dropdown-item" href="agents-grid.html">
                      Desserts
                    </a>
                    <a className="dropdown-item" href="agent-single.html">
                      Pizza
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-expanded="false"
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
