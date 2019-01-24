import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  redirect = type => {
    // this.props.changeType(type);
    this.props.history.push(`/list/${type}`);
  };
  loggeOut = async () => {
    await axios.post("/api/logout");
    this.props.loggedIn();
    this.props.history.push(`/login`);
  };
  // async componentDidMount() {
  //   const res = await this.props.loggedIn();
  //   this.setState({
  //     user: res.data
  //   });
  // }
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
            {!this.props.logged ? (
              <Link
                to="/login"
                className="btn btn-b-n nav-search navbar-toggle-box-collapse d-md-none"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-expanded="false"
              >
                Login
              </Link>
            ) : (
              <button
                type="button"
                className="btn btn-b-n nav-search navbar-toggle-box-collapse d-md-none"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-expanded="false"
                onClick={this.loggeOut}
              >
                Logout
              </button>
            )}
            <div
              className="navbar-collapse collapse justify-content-center"
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
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
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={this.redirect.bind(this, "Chicken")}
                    >
                      Chicken
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={this.redirect.bind(this, "Pasta")}
                    >
                      Pasta
                    </button>

                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={this.redirect.bind(this, "Desserts")}
                    >
                      Desserts
                    </button>

                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={this.redirect.bind(this, "Pizza")}
                    >
                      Pizza
                    </button>
                  </div>
                </li>

                <li className="nav-item">
                  <Link to="/chef" className="nav-link">
                    Our Chefs
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>

                <li className="nav-item">
                  {this.props.admin && (
                    <Link to="/listUsers" className="nav-link">
                      {" "}
                      Manage users
                    </Link>
                  )}
                </li>
                {this.props.logged && (
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            {!this.props.logged ? (
              <Link
                to="/login"
                className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
                // data-toggle="collapse"
                // data-target="#navbarTogglerDemo01"
                aria-expanded="false"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={this.loggeOut}
                className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
                // data-toggle="collapse"
                // data-target="#navbarTogglerDemo01"
                aria-expanded="false"
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
