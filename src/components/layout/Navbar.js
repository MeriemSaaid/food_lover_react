import React, { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li className="menu-active">
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#about">Recipes</a>
            </li>
            <li>
              <a href="#services">Features</a>
            </li>
            <li className="menu-has-children">
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
            <li>
              <a href="#contact">Search</a>
              <input type="text" />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
