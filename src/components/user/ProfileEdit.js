import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      bio: "",
      specialty: "",
      chef: false,
      admin: false,
      dateCreated: new Date().toLocaleDateString(),
      gender: "",
      _id: "",
      picture:""
    };
  }

  removeSpace = e => {
    const str = e.target.value;
    this.setState({
      [e.target.name]: str.replace( /\s/g, '')
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.loggedIn();
  }

  loggedIn = async () => {
    const res = await axios.post("/api/loggedIn");
    if (res.data === 0) {
      this.props.history.push("/login");
    } else {
      const {
        username,
        password,
        confirmPassword,
        firstname,
        lastname,
        bio,
        admin,
        specialty,
        email,
        birthday,
        gender,
        _id,
        chef,
        dateCreated,
        picture
      } = res.data;
      this.setState({
        _id,
        username,
        password,
        bio,
        admin,
        specialty,
        confirmPassword,
        firstname,
        lastname,
        email,
        chef,
        birthday,
        gender,
        dateCreated,
        picture
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      username,
      password,
      confirmPassword,
      bio,
      admin,
      specialty,
      firstname,
      lastname,
      email,
      birthday,
      gender,
      _id,
      dateCreated,
      picture
    } = this.state;
    const newUser = {
      _id,
      username,
      password,
      confirmPassword,
      bio,
      admin,
      specialty,
      firstname,
      lastname,
      email,
      birthday,
      gender,
      dateCreated,
      picture
    };
    this.updateUser(newUser);
  };

  updateUser = async newUser => {
    await axios.put("/api/user", newUser);
    this.props.history.push("/profile");
  };

  render() {
    const {
      username,
      firstname,
      lastname,
      email,
      bio,
      chef,
      specialty,
      gender,
      admin,
      picture
    } = this.state;
    return (
      <div className="padding_div bottom_space container">
        <form className="row" onSubmit={this.onSubmit}>
          <div className="col-xs-12 col-sm-9">
            {/* <!-- User profile --> */}
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="profile__avatar">
                  <img src={picture} alt="..." />
                </div>
                <div className="profile__header">
                  <h4>
                    {firstname} {lastname}
                    {admin === true && ( <small className="user_title"> Administrator</small> )}
                    {chef === true && ( <small className="user_title"> Chef</small> )}
                  </h4>
                  {/* Edit Bio for Users */}
                  {chef === false && (
                    <input className="form-control" name="bio" onChange={this.onChange} value={bio} placeholder="A little bit about myself.." />
                  )}
                  {/* Edit Bio for Chefs & Admin */}
                  {chef === true && (
                    <input className="form-control" name="bio" onChange={this.onChange} value={bio} placeholder="Edit Bio" />
                  )}
                  {chef === true && (
                    <input className="form-control" name="specialty" onChange={this.onChange} value={specialty} placeholder="Add Specialties" />
                  )}
                  {/* URL Paste Area for PROFILE IMAGE */}
                  <p>
                    <small className="notice_default"><strong>Link Online Image URL here: </strong><span>(Upload Button COMING SOON!)</span></small>
                    <input className="form-control" name="picture" onChange={this.onChange} value={picture} placeholder="Paste Image URL here..." />
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- User Info Edit Area --> */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">User info</h4>
              </div>
              <br />
              <div className="panel-body">
                <table className="table profile__table">
                  <tbody>
                    <tr>
                      <th>
                        <strong>Username</strong>
                      </th>
                      <td>
                        <input className="form-control" name="username" value={username} maxLength={18} onChange={this.removeSpace} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <strong>First Name</strong>
                      </th>
                      <td>
                        <input className="form-control" name="firstname" onChange={this.onChange} value={firstname} maxLength={30} required/>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <strong>Last Name</strong>
                      </th>
                      <td>
                        <input className="form-control" name="lastname" onChange={this.onChange} value={lastname} maxLength={30} required/>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <strong>Email</strong>
                      </th>
                      <td>
                        <input className="form-control" type="email" name="email" onChange={this.removeSpace} value={email} maxLength={50} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <strong>Gender</strong>
                      </th>
                      <td>
                        <select className="form-control form-control-sm" id="dropDown" name="gender" value={gender} onChange={this.onChange} >
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
          </div>
          {/* BUTTONS ARE HERE */}
          <div className="col-xs-12 col-sm-3">
            <p>
              <button type="submit" className="btn-block btn-lg btn-success btn" >
                Save Changes
              </button>
            </p>
            <p>
              <Link to="/profile" href="#" className="btn btn-lg btn-block btn-secondary" >
                Cancel
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
