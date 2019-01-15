import React, { Component } from "react";
import image from "../../img/about-vision.jpg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light fixed-top bg-dark">
          <ul className="nav-menu">
            <li className="menu-active">
              <a href="#intro">Home</a>
            </li>
            <li className="menu-active">
              <Link to="">Recipes</Link>
              <ul>
                <li>
                  <Link to="/list">Chicken</Link>
                </li>
                <li>
                  <a href="#">Pasta</a>
                </li>
                <li>
                  <a href="#">Desserts</a>
                </li>
                <li>
                  <a href="#">Pizza</a>
                </li>
              </ul>
            </li>
            <li className="menu-active">
              <a href="#services">Features</a>
            </li>
            <li className="menu-active">
              <a href="">Our Chefs</a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
                <li>
                  <a href="#">Drop Down 5</a>
                </li>
              </ul>
            </li>
            <li className="menu-active">
              <Link to="/login">Sign In</Link>
            </li>
            <li className="menu-active">
              <Link to="/register">Sign Up</Link>
            </li>
            <li className="menu-active">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
