import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { types } from 'util';

class ProfileEdit extends Component {

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
            // this.setState({
            //     success: true
            // });
            this.props.history.push("/profile");
        }
        


  render() {
    const { username,firstname, lastname,email, birthday, gender} = this.state;
    return (
      <div>
          <div className="container defaultprofile"></div>
            <div className="container">            
              <form className="form-style" onSubmit={this.onSubmit}>
                <legend>
                  <h1>Profile</h1>
                </legend>
                <hr />
                {/* User's information input fields */}
                
                <div className="form-group">
                <label className="d-inline" htmlFor="Username">Username</label>
                  <input className="form-control text-center" name ="username" onChange={this.onChange} value={username}/>
                </div>
                
                <div className="form-group">
                <label className="d-inline" htmlFor="First Name">First Name</label>
                  <input className="form-control text-center" name ="firstname" onChange={this.onChange} value={firstname}/>
                </div>
                
                <div className="form-group">
                <label className="d-inline" htmlFor="Last Name">Last Name</label>
                  <input className="form-control text-center"  name ="lastname" onChange={this.onChange} value={lastname}/>
                </div>
                
                <div className="form-group">
                <label className="d-inline" htmlFor="Email">Email</label>
                  <input className="form-control text-center"  name ="email" onChange={this.onChange} value={email}/>
                </div>
                <div className="form-group">
              <label className="d-inline" htmlFor="Date of Birth">Date of Birth</label>
                <input type="date" className="form-control text-center" name ="birthday" onChange={this.onChange} value={birthday}/>
              </div>
              <div className="form-group">
              <label className="d-inline" htmlFor="Gender">Gender</label>
              <select className="form-control form-control-sm" id="dropDown" name ="gender" value={gender} onChange={this.onChange}>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            </div>
            {/* Buttons are here*/}
            <div>
              <button type="submit" className="active1 btn-success btn btn-block">
                Save Changes
              </button>
              <Link to="/profile" className="btn btn-danger btn-block">
                Cancel
              </Link>
            </div>
              </form> 
            </div>
        </div>
    )
  }
}

export default ProfileEdit;