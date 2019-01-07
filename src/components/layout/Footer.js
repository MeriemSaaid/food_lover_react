import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark fixed-bottom">
        <div className="full-width">
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active">
              <a href="#intro">About Us</a>
           </li>
           <li className="menu-active">
              <a href="#intro">Contact Us</a>
           </li>
           <li className="menu-active">
           <a href="https://www.fb.me/foodloverrecipe"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
           </li>
           </ul>
           </nav>
        </div>
      </nav>
    );
  }
}
