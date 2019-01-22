import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="nav-footer">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/about">About </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="socials-a">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.fb.me/foodloverrecipe">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright-footer">
                <p className="copyright color-text-a">
                  &copy; Copyright&nbsp;
                  <span className="color-a">FoodLover</span> All Rights
                  Reserved.
                </p>
              </div>
              <div className="credits">
                Designed by <Link to="/">MWG</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
