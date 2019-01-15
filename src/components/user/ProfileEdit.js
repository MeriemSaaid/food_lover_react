import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { types } from 'util';


export default class EditProfile extends Component {
  constructor (props){
    super(props);
    this.state = {
     username:"",
     firstname:"",
     lastname:"",
     email:"",
     birthday: {type: Date },
     gender: { type: Selection },
     _id:""
    };
  }

  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
    };

    componentDidMount(){
        this.loggedIn();
    }

    loggedIn = async () => {
        const res = await axios.post("/api/loggedIn");
    if (res.data === 0) {
        this.props.history.push("/login");
    } else {
        const { username, password, confirmPassword, firstname,lastname,email,birthday,gender, _id} = res.data;
        this.setState ({
            _id,
            username,
            password,
            confirmPassword,
            firstname,
            lastname,
            email,
            birthday,
            gender
        });
        
    }
    };
    
    
    onSubmit = e => {
        e.preventDefault();
        const {username, password, confirmPassword, firstname,lastname,email,birthday,gender, _id} = this.state;
        const newUser = {
            _id,
            username,
            password,
            confirmPassword,
            firstname,
            lastname,
            email,
            birthday,
            gender
        };
        this.updateUser(newUser);
    };

    updateUser = async newUser => {
        await axios.put("/api/user", newUser);
        this.props.history.push("/profile");
    }


  render() {
    const { username,firstname, lastname,email, birthday, gender, admin,chef,} = this.state;
    return (
      <div>
        <div className="container">
            <form method="" onSubmit={this.onSubmit}>
                <div className="row">
                {/* UPLOAD IMAGE IS HERE */}
                    <div className="col-md-4">
                        <div className="">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <br/>
                            <br/>
                            <label class="btn btn-primary">
                               Update Photo <input type="file" hidden/>
                            </label>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="profile-head">
                        {/* FULL NAME IS HERE */}
                                    <h5 >
                                    {firstname} {lastname}
                                    </h5>
                                    <h6>
                                        Restaurant Cook
                                    </h6>
                                    <p className="proile-rating">RATING : <span>8/10</span></p>
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
                    <div className="col-md-2">
                    
                </div>
                </div>
                <br/>
                {/* LEFT SIDE */}
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
                    {/* EDIT USER'S INFORMATION */}
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Username</label>
                                            </div>
                                            <div className="col-md-6">
                                            <input className="form-control text-center" name ="username" onChange={this.onChange} value={username}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>First Name</label>
                                            </div>
                                            <div className="col-md-6">
                                            <input className="form-control text-center" name ="firstname" onChange={this.onChange} value={firstname}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Last Name</label>
                                            </div>
                                            <div className="col-md-6">
                                            <input className="form-control text-center"  name ="lastname" onChange={this.onChange} value={lastname}/>
                                            
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div className="col-md-6">
                                            <input className="form-control text-center"  name ="email" onChange={this.onChange} value={email}/>
                                            
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Date of Birth</label>
                                            </div>
                                            <div className="col-md-6" >
                                            <input type="date" className="form-control text-center" name ="birthday" onChange={this.onChange} value={birthday}/>
                                            
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Gender</label>
                                            </div>
                                          <div className="col-md-6">
                                            <select className="form-control form-control-sm" id="dropDown" name ="gender" value={gender} onChange={this.onChange}>
                                              <option>Select Gender</option>
                                              <option>Male</option>
                                              <option>Female</option>
                                              <option>Other</option>
                                            </select>
                                          </div>
                                        </div>
                                        {/* BUTTONS GO HERE */}
                                        <div>
                                        <br/>
                                          <button type="submit" className="active1 btn-success btn btn-block">
                                            Save Changes
                                          </button>
                                          <Link to="/profile" className="btn btn-danger btn-block">
                                            Cancel
                                          </Link>
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
