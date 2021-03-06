import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {}
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async login(username, password) {
    const user = {
      username,
      password
    };
    try {
      const res = await axios.post("api/login", user);
      this.props.loggedIn();
      this.props.history.push({
        pathname: `/profile`,
        state: { user: res.data }
      });
    } catch {
      this.setState({
        errors: {
          match: "Username and Password are not matched"
        }
      });
    }
  }

  onSubmit = e => {
    const { username, password } = this.state;

    e.preventDefault();
    //alert(111);

    if (username === "") {
      this.setState({
        errors: { username: "Username is required" }
      });

      return;
    }

    if (password === "") {
      this.setState({
        errors: { password: "Password is required" }
      });

      return;
    }
    this.login(username, password);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container padding_div div_center bottom_space">
        <section className="login-block">
          <div className="container">
            <div className="row">
              {/* LEFT SIDE / ROW 1 */}
              <div className="col-md-4 login-sec login_top">
                <h2 className="text-center">Login</h2>
                {/* FORM STARTS HERE */}
                <form className="login-form" onSubmit={this.onSubmit}>
                  {/* USERNAME & PASSWORD */}
                  <div className="form-group">
                    {errors.match && (
                      <div className="alert alert-danger">{errors.match}</div>
                    )}
                    <label
                      htmlFor="exampleInputEmail1"
                      className="text-uppercase"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      onChange={this.onChange}
                      name="username"
                    />
                  </div>
                  <div className="form-group">
                    {errors.username && (
                      <div className="alert alert-warning">
                        {errors.username}
                      </div>
                    )}
                    <label
                      htmlFor="exampleInputPassword1"
                      className="text-uppercase"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder=""
                      onChange={this.onChange}
                      name="password"
                    />
                  </div>
                  {/* BUTTONS ARE HERE! */}
                  {/* LOGIN */}
                  <button
                    type="submit"
                    className="btn-success btn btn-block mt-4"
                  >
                    Login
                  </button>
                  <div className="btn-group-sm mt-2">
                    {/* LOGIN WITH FACEBOOK */}
                    <a
                      href="https://www.facebook.com/"
                      className="btn btn-primary mr-1"
                    >
                      <i className="fab fa-facebook" /> Login with Facebook
                    </a>
                    {/* LOGIN WITH GOOGLE */}
                    <a
                      href="https://www.google.com/gmail/"
                      className="btn btn-danger"
                    >
                      <i className="fab fa-google-plus-g" /> Login with Google+
                    </a>
                  </div>
                  <br />
                  <h6>
                    Haven't registered yet?{" "}
                    <Link to="/register">Sign Up here!</Link>
                  </h6>
                </form>
              </div>
              {/* RIGHT SIDE / ROW 2 */}
              <div className="col-md-8 banner-sec">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  {/* SLIDER IS HERE */}
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    />
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    {/* IMAGE #1 */}
                    <div className="carousel-item active">
                      <img
                        className="d-block img-fluid blur_image"
                        src={require("../../img/onlineimg/login1.jpg")}
                        alt="logo"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          <h2>Be one of our Online Cook!</h2>
                          <p>
                            Click register as a chef to send a request and we'd
                            like to hear about your cooking experience!
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* IMAGE #2 */}
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid blur_image"
                        src={require("../../img/onlineimg/login2.jpg")}
                        alt="First slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          <h2>Discover recipes from around the world!</h2>
                          <p>
                            Explore different recipes made by our top chefs from
                            different parts of the world.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* IMAGE #3 */}
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid blur_image"
                        src={require("../../img/onlineimg/login3.jpg")}
                        alt="First slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          <h2>Learn from our Top Chefs!</h2>
                          <p>
                            Tons of new recipes available to learn everyday!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
