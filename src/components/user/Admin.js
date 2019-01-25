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
      chef: false,
      picture: "",
      gender: "",
      experience: "",
      _id: "",
      bio:"",
      specialty:""
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    this.setState({ chef: !this.state.chef });
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.loggedIn();
  }

  removeSpace = e => {
    const str = e.target.value;
    this.setState({
      [e.target.name]: str.replace( /\s/g, '')
    });
  };

  loggedIn = async () => {
    const res = await axios.post("/api/loggedIn");
    if (res.data === 0) {
      this.props.history.push("/login");
    } else {
      const id = this.props.location.state.id;
      const res = await axios.get(`/api/user/${id}`);
      const {
        username,
        password,
        confirmPassword,
        firstname,
        lastname,
        email,
        gender,
        chef,
        experience,
        _id,
        picture,
        bio,
        specialty
      } = res.data;
      this.setState({
        _id,
        username,
        password,
        confirmPassword,
        firstname,
        lastname,
        email,
        gender,
        chef,
        experience,
        picture,
        bio,
        specialty
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      username,
      password,
      confirmPassword,
      firstname,
      lastname,
      email,
      birthday,
      bio,
      specialty,
      gender,
      chef,
      experience,
      _id,
      picture
    } = this.state;
    const newUser = {
      _id,
      username,
      password,
      confirmPassword,
      firstname,
      lastname,
      email,
      bio,
      specialty,
      birthday,
      gender,
      chef,
      experience,
      picture
    };
    this.updateUser(newUser);
  };

  updateUser = async newUser => {
    await axios.put("/api/user", newUser);
    this.props.history.push("/listUsers");
  };

  render() {
    const {
      username,
      firstname,
      lastname,
      email,
      gender,
      experience,
      chef,
      picture,
      bio,
      specialty
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
                    <small className="notice_default"><strong>Link Online Image URL here: </strong><span>(Upload button COMING SOON!)</span></small>
                    <input className="form-control" name="picture" onChange={this.onChange} value={picture} placeholder="Add  your picture" />
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
                        <input className="form-control" name="email" type="email" onChange={this.removeSpace} value={email} maxLength={50} />
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
            {/* CHEF APPLICATON AREA*/}
            <div className="form-check text-center">
              <br />
              <div className="chef_box container">
                <h5>Chef Application</h5>
                <p className="text-info" readOnly >
                  {experience}
                </p>
                {experience === "" && ( <p><small className="text-danger">Notice: User did not apply as a chef.</small></p>)}
              </div>
              {/* REGISTER AS CHEF CHECKBOX */}
              <div>
                <input className="form-check-input " type="checkbox" checked={chef} value={chef} name="chef" id="defaultCheck1" onChange={this.handleChecked} />
              </div>
              <br />
              <div>
                <h5>Register as Chef?</h5>
              </div>
            </div>
            <br />
          </div>
          <div className="col-xs-12 col-sm-3">
            {/* BUTTONS are here */}
            <p>
              <button type="submit" className="btn-block btn-lg btn-success btn" >
                Save Changes
              </button>
            </p>
            <p>
              <Link to="/listUsers" className="btn btn-lg btn-block btn-secondary" >
                Cancel
              </Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
