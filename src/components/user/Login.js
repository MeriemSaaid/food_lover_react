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
    

    async login(username, password,) {
      const user = {
          username,
          password
      };
      try {
          const res =await axios.post("api/login", user);
         
         
          this.props.history.push({
            pathname: `/profile`,
            state: { user: res.data }
        });
      } catch {
          this.setState ({
              errors: {
                  match: "Username and Password are not matched"
              }
          });
      }
    }

      onSubmit = e => {

        const {username, password,id} = this.state;

        e.preventDefault();
       //alert(111);
        
        if (username === "") {
            this.setState ({
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
        this.login (username, password);
    };

  render() {
    const { username, password, errors } = this.state;
    return (
      <div>
        <div className="container container-fluid">
        {/* Login Form */}
          <form className="form-style" onSubmit={this.onSubmit}>
            <legend>
              <h1>Login</h1>
            </legend>
            <hr />
            { errors.match && (
            <div className="alert alert-danger">{errors.match}
            </div>
            )}
            {/* Username */}
            <div className="form-group">
              <input className="form-control" name="username" placeholder="Enter Username..." onChange = {this.onChange}/>
            </div>
            {errors.username && (<div className="alert alert-warning">{errors.username}</div>)}
            {/* Password */}
            <div className="form-group">
              <input className="form-control" type="password" name="password"  placeholder="Enter Password..." onChange = {this.onChange}/>
            </div>
            {errors.password && (<div className="alert alert-warning">{errors.password}</div>)}
            {/* Login Button */}
            <div>
              <button type="submit" className="btn-success btn btn-block">
                Login
              </button>
              {/* Login with Facebook */}
              <button type="submit" className="btn btn-primary btn-block">
                <i className="fab fa-facebook" /> Login with Facebook
              </button>
              {/* Login with Google */}
              <button type="submit" className="btn btn-danger btn-block">
                <i className="fab fa-google-plus-g" /> Login with Google+
              </button>
              <br/>
              <h6>Haven't registered yet? <Link to="/register">Sign Up here!</Link></h6>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
