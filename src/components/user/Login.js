// import React, { Component } from 'react';
// import { Link } from "react-router-dom";

// class Login extends Component {
//   render() {
//     return (
//       <div>
//       <div className="container">
//   <form action="/action_page.php">
//     <div className="row">
//       <h2 style={{textAlign: 'center'}}>Login with Social Media or Manually</h2>
//       <div className="vl">
//         <span className="vl-innertext">or</span>
//       </div>

//       <div className="col">
//         <a href="#" className="fb btn">
//           <i className="fa fa-facebook fa-fw"></i> Login with Facebook
//         </a>
//         <a href="#" className="twitter btn">
//           <i className="fa fa-twitter fa-fw"></i> Login with Twitter
//         </a>
//         <a href="#" className="google btn">
//           <i className="fa fa-google fa-fw"></i> Login with Google+
//         </a>
//       </div>

//       <div className="col">
//         <div className="hide-md-lg">
//           <p>Or sign in manually:</p>
//         </div>

//         <input type="text" name="username" placeholder="Username" required />
//         <input type="password" name="password" placeholder="Password" required />
//         <input type="submit" value="Login" />
//       </div>

//     </div>
//   </form>
// </div>

// <div >
//   <div >
//     <div className="col">
//       <a  className="btn">Sign up</a>
//     </div>
//     <div className="col">
//       <a style={{color:'white'}} className="btn">Forgot password?</a>
//     </div>
//   </div>
// </div>
// </div>
//     )
//   }
// }

// export default Login;
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      // <div className="loginForm">
      //   <div className="loginBox col-md-2 col-md-offset-4 form-group">
      //     <form className="">
      //       <br />
      //       <legend>
      //         <h1>Login</h1>
      //       </legend>
      //       <label>Username:</label>
      //       <input className="form-control" />
      //       <label>Password:</label>
      //       <input className="form-control" />
      //       <br />
      //       <button type="submit" className="btn btn-primary">
      //         Login
      //       </button>
      //       <span>
      //         <a href="#" className="btn btn-primary">
      //           <i className="fab fa-facebook" /> Login with Facebook
      //         </a>
      //       </span>
      //       <span>
      //         <a href="#" className="btn btn-danger">
      //           <i className="fab fa-google-plus-g" /> Login with Google+
      //         </a>
      //       </span>
      //     </form>
      //   </div>
      // </div>
      <div>
        <div className="container">
          <form className="form-style">
            <legend>
              <h1>Login</h1>
            </legend>
            <div className="form-group">
              <label>Username:</label>
              <input className="form-control" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input className="form-control" />
            </div>
            <div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
              <button type="submit" className="btn btn-primary btn-block">
                <i className="fab fa-facebook" /> Login with Facebook
              </button>
              <button type="submit" className="btn btn-danger btn-block">
                <i className="fab fa-google-plus-g" /> Login with Google+
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
