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
      _id: "",
      pictures: [],
      admin: false,
      chef: false
    };
  }

  getFormattedDate(param) {
    var date = new Date(param);
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  }

  onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
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
        chef
      } = res.data;
      this.setState({
        username,
        firstname,
        lastname,
        email,
        gender,
        admin,
        chef
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
      gender
    } = this.state;
    return (
      <div>
        <div className="container padding_div div_center bottom_space">
          <form method="post">
            <div className="row">
              {/* Profile PHOTO is here */}
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  {/* FULL NAME IS HERE */}
                  <h5>
                    {firstname} {lastname}
                  </h5>
                  <div className="">
                  <Link to="/profileedit" className="far " id="">Edit Profile 
                  </Link>
                  <br/>
                  <Link to="/admin" className="far " id=""> Admin
                  </Link>
                </div>
                  {/* <h6>Restaurant Cook</h6>
                  <p className="proile-rating"> RATING : <span> 8/10 </span> </p> */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                        About
                      </a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                    </li> */}
                  </ul>
                </div>
              </div>
              {/* Edit profile and Admin page goes here */}
              <div className="col-md-2">
              </div>
            </div>
            {/* Left side of profile page */}
            <div className="row">
              <div className="col-md-4">
                <div className="">
                  <p>Specialty Dish (Link to recipes)</p>
                  <a href="/">Beef Wellington</a>
                  <br />
                  {/* <p>Experiences</p>
                  <a href="/">Working with a good manager</a> */}
                </div>
              </div>
              <div className="col-md-8">
              {/* USER INFORMATION */}
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Username</label>
                      </div>
                      <div className="col-md-6">
                        <p>{username}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>First Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{firstname}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Last Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{lastname}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gender</label>
                      </div>
                      <div className="col-md-6">
                        <p>{gender}</p>
                      </div>
                    </div>
                    <br/>
                    <br/>
                  </div>
                  {/* TAB 2 */}
                  {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
