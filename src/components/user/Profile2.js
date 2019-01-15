import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { types } from 'util';

class Profile extends Component {

  constructor (props){
    super(props);
    this.state = {
     username:"",
     firstname:"",
     lastname:"",
     email:"",
     birthday: "",
     gender: { type: Selection },
     _id:"",
     admin: false,
     chef: {type: Boolean}
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

  // onChange = e => {
  //   this.setState({
  //       [e.target.name]: e.target.value
  //   });
  //   };
  
    // findUser = async user => {
    //   const uid = this.props.location.state.user._id;
    //  console.log(uid);
    //   const res = await axios.get(`/api/user/${uid}`);
    //   const {username,firstname,lastname,email, birthday, gender, _id}= res.data
    //   this.setState ({
    //     username,
    //     firstname,
    //     lastname,
    //     email,
    //     birthday : this.getFormattedDate(birthday),
    //     gender,
    //     _id
    // });
    // };

   
  componentDidMount() {
    this.loggedIn();
    // this.findUser();
    //console.log(my_user);
    //alert(111);
  }

  loggedIn = async () => {
    const res = await axios.post("/api/loggedIn");
if (res.data === 0) {
    this.props.history.push("/login");
} else {
    const { username, firstname,lastname,email,birthday,gender, admin,chef } = res.data;
    this.setState ({
      username,
      firstname,
      lastname,
      email,
      birthday,
      gender,
      admin,
      chef
    });
    
}
};

updateUser = async newUser => {
  await axios.put("/api/user", newUser);
  // this.setState({
  //     success: true
  // });
}

  render() {
    const { username,firstname, lastname,email, birthday, gender, admin,chef} = this.state;
   
    return (
      <div className="container">
      <div className="row">
      {/* Advertisement Message, Left Div */}
      <div className="col container prowelcome	d-none d-lg-block" src="">
    <h1 className="centered2">“Life is uncertain. Eat dessert first.” -Ernestine Ulmer</h1>
    </div>
        
        {/* Register Form is Here, Right Div */}
        <div className="col">
        <div className="">
        <Link className="float-left" to="/admin">Manage Users</Link>
        <Link to="/profileedit" className="far fa-edit float-right" id="editicon">Edit Profile</Link>
        </div>
        <br/>
        <br/>
          <div className="container defaultprofile"></div>
            <div className="container">            
              <form className="form-style" id="myForm">
                <legend>
                  <h1>Profile</h1>
                </legend>
                <hr />
                {/* User's information input fields */}
                
                <div className="form-group">
                <h6 className="d-inline">Username</h6>
                  <input placeholder="Username" className="form-control text-center" name ="username" readOnly value ={username}/>
                </div>
                
                <div className="form-group">
                <h6 className="d-inline">First Name</h6>
                  <input placeholder="First Name" className="form-control text-center" name ="firstname"  readOnly value ={firstname}/>
                </div>
                
                <div className="form-group">
                <h6 className="d-inline">Last Name</h6>
                  <input placeholder="Last Name" className="form-control text-center"  name ="lastname"  readOnly value ={lastname}/>
                </div>
                
                <div className="form-group">
                <h6 className="d-inline">Email</h6>
                  <input placeholder="Email" className="form-control text-center"  name ="email"  readOnly value ={email}/>
                </div>
                <div className="form-group">
              <h6 className="d-inline">Date of Birth</h6>
                <input type="date" className="form-control text-center"  placeholder="Date of Birth" value ={birthday} readOnly name ="birthday"/>
              </div>
              <div className="form-group">
              <h6 className="d-inline">Gender</h6>
            <input className="form-control text-center" readOnly value ={gender} name ="gender"  />
            </div>
              </form> 
            </div>
            <Link to="/login" className="btn btn-danger btn-block">
                Logout
              </Link>
        </div>
      </div>
      <br/>
      <br/>
      </div>     
    )
  }
}

export default Profile;