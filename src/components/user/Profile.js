import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { types } from 'util';


export default class Profile extends Component {
    constructor (props){
        super(props);
        this.state = {
         username:"",
         firstname:"",
         lastname:"",
         email:"",
         birthday: "",
         gender: "",
         _id:"",
         admin: false,
         chef: false
        };
      }

      getFormattedDate(param) {
        var date = new Date(param)
       var year = date.getFullYear();
     
       var month = (1 + date.getMonth()).toString();
       month = month.length > 1 ? month : '0' + month;
     
       var day = date.getDate().toString();
       day = day.length > 1 ? day : '0' + day;
       
       return month + '/' + day + '/' + year;
     }

     componentDidMount() {
        this.loggedIn();
      }

      loggedIn = async () => {
        const res = await axios.post("/api/loggedIn");
    if (res.data === 0) {
        this.props.history.push("/login");
    } else {
        const { username, firstname,lastname,email,birthday,gender, admin,chef, } = res.data;
        this.setState ({
          username,
          firstname,
          lastname,
          email,
          birthday,
          gender,
          admin,
          chef,
        });
        
    }
    };

    fullname = function() {
        var first = document.getElementById("firstname").value;
        var second = document.getElementById("lastname").value;
        var fullname = first + second;
    
        document.getElementById("fullname").innerHTML = first+" "+second;
    }

    updateUser = async newUser => {
        await axios.put("/api/user", newUser);
      }


  render() {
    const { username,firstname, lastname,email, birthday, gender, admin,chef,} = this.state;
    return (
      <div>
        <div className="container">
            <form method="post">
                <div className="row">
                {/* Profile PHOTO is here */}
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                        {/* FULL NAME IS HERE */}
                                    <h5 >
                                    {firstname} {lastname}
                                    </h5>
                                    {/* <h6>
                                        Restaurant Cook
                                    </h6>
                                    <p className="proile-rating">RATING : <span>8/10</span></p> */}
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    {/* Edit profile and Admin page goes here */}
                    <div className="col-md-2">
                    <div>
                    <Link to="/profileedit" className="far float-right editicon" id=""><i className="fas fa-edit"></i></Link>
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <Link to="/admin" className="far float-right editicon" id=""><i className="fas fa-user-secret"></i></Link>
                    </div>
                    </div>
                </div>
                <br/>
                {/* Left side of profile page */}
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>Specialty Dishes</p>
                            <a href="">Beef Wellington</a><br/>
                            <a href="">Key lime pie</a><br/>
                            <a href="">Tater tots</a>
                        <br/>
                        <br/>
                            <p>Experiences</p>
                            <a href="">Working with a good manager</a><br/>
                            <a href="">Food pairing experience</a><br/>
                            <a href="">Getting to grips with the economics</a><br/>
                            <a href=""> Making a bad decision</a><br/>
                            <a href="">Quality control</a><br/>
                        </div>
                    </div>
                    {/* USER INFORMATION */}
                    <div className="col-md-8">
                        {/* TAB 1 */}
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                                                <label>Date of Birth</label>
                                            </div>
                                            <div className="col-md-6" >
                                            <p>{birthday}</p>
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
                            </div>
                            {/* TAB 2 */}
                            {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>6 months</p>
                                            </div>
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
    )
  }
}
