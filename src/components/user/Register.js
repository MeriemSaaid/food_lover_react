import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Register extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    firstname: "",
    lastname: "",
    gender: "",
    email:"",
    experience: "",
    chef: false,
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  async register(user) {
    //  Check if the username is taken
    let res = await axios.get(`/api/user?username=${user.username}`);
    if (res.data) {
      this.setState({
        errors: {
          taken: "This username is taken. Please try another one."
        }
      });
    } else {
      // Adding user to db
      res = await axios.post("/api/register", user);
      this.props.history.push({
        pathname: `/profile`,
        state: { user: res.data }
      });
    }
    // this.props.history.push({
    //   pathname: `/profile/${res.data._id}`,
    //   state: { user: res.data }
    //  });
  }

  yesnoCheck = e => {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';

}

  onSubmit = async e => {
    e.preventDefault();
    const {
      username,
      password,
      confirmPassword,
      firstname,
      lastname,
      email,
      gender,
      experience,
      chef
    } = this.state;
    const user = {
      username,
      password,
      confirmPassword,
      firstname,
      lastname,
      email,
      gender,
      experience,
      chef
    };
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

    if (confirmPassword === "") {
      this.setState({
        errors: { confirmPassword: "You need to verify the password" }
      });
      return;
    }
    if (password !== confirmPassword) {
      this.setState({
        errors: {
          match: "Two passwords are not matched, please try it again"
        }
      });
      return;
    }
    this.register(user);
  };
  render() {
    const {
      username,
      password,
      confirmPassword,
      firstname,
      lastname,
      email,
      gender,
      experience,
      chef,
      errors
    } = this.state;
    return (
      <div className="container padding_div div_center">
        <div className="row">
          {/* Advertisement Message, Left Div */}
          <div className="col container regbg	d-none d-lg-block" src="">
            <h1 className="centered">
              Want to learn new recipes? Join us now!
            </h1>
          </div>
          {/* Register Form is Here, Right Div */}
          <div className="col">
            <div className="container">
              <form className="form-style" onSubmit={this.onSubmit}>
                <legend>
                  <h1>Register</h1>
                </legend>
                <hr />
                {errors.taken && (
                  <div className="alert alert-danger">{errors.taken}</div>
                )}
                {errors.match && (
                  <div className="alert alert-danger">{errors.match}</div>
                )}
                {/* User's information input fields */}
                <div className="form-group">
                  <input
                    placeholder="Username"
                    className="form-control"
                    name="username"
                    onChange={this.onChange}
                    value={username}
                  />
                </div>
                {errors.username && (
                  <div className="alert alert-warning">{errors.username}</div>
                )}
                <div className="form-group">
                  <input
                    placeholder="First Name"
                    className="form-control"
                    name="firstname"
                    onChange={this.onChange}
                    value={firstname}
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Last Name"
                    className="form-control"
                    name="lastname"
                    onChange={this.onChange}
                    value={lastname}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    require
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Password"
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </div>
                {errors.password && (
                  <div className="alert alert-warning">{errors.password}</div>
                )}
                <div className="form-group">
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    onChange={this.onChange}
                    value={confirmPassword}
                  />
                </div>
                {errors.confirmPassword && (
                  <div className="alert alert-warning">
                    {errors.confirmPassword}
                  </div>
                )}
                <select
                  className="form-control form-control-sm"
                  id=""
                  name="gender"
                  value={gender}
                  onChange={this.onChange}
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <br />
                {/* APPLY AS CHEF FIELD */}
                <div>
                  <h6>Register as a chef?</h6>                
                    Yes <input type="radio" onClick={this.yesnoCheck} name="chef" value={chef} id="yesCheck"/>
                    No <input type="radio" onClick={this.yesnoCheck} name="chef" value={chef} id="noCheck"/>
                <br/>
                <div id="ifYes" style={{visibility:"hidden"}}>
                <fieldset >
                  <br/>
                    <label>Tell us about your cooking experience:</label>
                  <br/>
                    <textarea  name="experience" value={experience} onChange={this.onChange}></textarea>
                </fieldset>
                </div>
                </div>
                <br />
                {/* Terms of Service */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    required
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                    onChange={this.onChange}
                  />
                  <label className="form-check-label">
                    I accept the new <a href="/">Terms of Service</a>.
                  </label>
                </div>

                <br />
                {/* Buttons are here*/}
                <div>
                  <button
                    type="submit"
                    className="active1 btn-success btn btn-block"
                  >
                    Join Now!
                  </button>
                  <Link
                    to="/login"
                    type="submit"
                    className="btn btn-danger btn-block"
                  >
                    Cancel
                  </Link>
                </div>
                <br />
                <h6>
                  Already have an account?{" "}
                  <Link to="/login">Sign In here!</Link>
                </h6>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Register;
