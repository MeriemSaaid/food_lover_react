import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      bio: "",
      specialty: "",
      picture:"",
      dateCreated: new Date().toLocaleDateString(),
      admin: false,
      chef: false
    };
  }

  redirectAdmin = id => {
    this.props.history.push({
      pathname: `/admin`,
      state: { id: id }
    });
  };
  getFormattedDate(param) {
    var date = new Date(param);
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  }

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
        firstname,
        lastname,
        email,
        gender,
        admin,
        chef,
        dateCreated,
        bio,
        specialty,
        picture,
      } = res.data;
      this.setState({
        username,
        firstname,
        lastname,
        email,
        gender,
        admin,
        chef,
        dateCreated,
        bio,
        specialty,
        picture,
      });
    }
  };

  updateUser = async newUser => {
    await axios.put("/api/user", newUser);
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
        <div className="row">
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
                    {admin === true && (<small className="user_title"> Administrator </small>)}
                    {chef === true && ( <small className="user_title"> Chef </small> )}
                    {chef === false && admin === false && ( <small className="user_title"> User </small> )}
                  </h4>
                  {/* User's Bio */}
                  <div className="d-block">
                    {chef === false && <span>About me:</span>}
                    {chef === false && ( <span className="text-muted"> {bio}</span> )}
                  </div>
                  {/* Chef's Bio */}
                  <div className="d-block">
                    {chef === true && <span>Bio:</span>}
                    {chef === true && ( <span className="text-muted"> {bio}</span> )}
                  </div>
                  <br />
                  <div>
                    {/* Chef's Specialties */}
                    {chef === true && <span>Specialties:</span>}
                    {chef === true && ( <span placeholder="specialties"> {specialty}</span> )}
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <hr className="hr_silver" />
            {/* <!-- User Info Area --> */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Information</h4>
              </div>
              <br />
              <div className="panel-body">
                <table className="table profile__table">
                  <tbody>
                    <tr>
                      <th> <strong>Username</strong> </th>
                      <td>{username}</td>
                    </tr>
                    <tr>
                      <th> <strong>First Name</strong> </th>
                      <td>{firstname}</td>
                    </tr>
                    <tr>
                      <th> <strong>Last Name</strong> </th>
                      <td>{lastname}</td>
                    </tr>
                    <tr>
                      <th> <strong>Gender</strong> </th>
                      <td>{gender}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
          </div>
          <div className="col-xs-12 col-sm-3">
            {/* Edit Profile Button */}
              <p>
                <Link to="/profileedit" href="#" className="profile__contact-btn btn btn-lg btn-block btn-b-n" >
                  Edit Profile
                </Link>
              </p>
            <hr className="hr_silver" />
            <br />
            {/* <!-- Contact Info --> */}
            <div className="profile__contact-info">
              <div className="profile__contact-info-item">
                <div className="profile__contact-info-icon">
                  <i className="fa fa-envelope-square" />
                </div>
                <div className="profile__contact-info-body">
                  <h5 className="profile__contact-info-heading">
                    E-mail address
                  </h5>
                  <a href="mailto:admin@domain.com">{email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
