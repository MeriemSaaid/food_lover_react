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
      birthday: { type: Date },
      gender: { type: Selection },
      experience: "",
      _id: ""
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked () {
    this.setState({chef: !this.state.chef});
  }

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
      const id =this.props.location.state.id;
      const res = await axios.get(`/api/user/${id}`);
      const {
        username,
        password,
        confirmPassword,
        firstname,
        lastname,
        email,
        birthday,
        gender,
        chef,
        experience,
        _id
      } = res.data;
      this.setState({
        _id,
        username,
        password,
        confirmPassword,
        firstname,
        lastname,
        email,
        birthday,
        gender,
        chef,
        experience
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
      _id
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
      experience
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
      chef
    } = this.state;
    var txt;
    if (this.state.isChecked) {
      txt = 'checked'
    } else {
      txt = 'unchecked'
    }
    return (
      
      <div className="padding_div bottom_space container" >
      <form className="row" onSubmit={this.onSubmit}>
            <div className="col-xs-12 col-sm-9">
              
              {/* <!-- User profile --> */}
              <div className="panel panel-default">
                <div className="panel-heading">
                <h4 className="panel-title">User profile</h4>
                </div>
                <div className="panel-body">
                  <div className="profile__avatar">
                    <img src={require('../../img/onlineimg/johndoe.png')} alt="..." />
                  </div>
                  <div className="profile__header">
                    <h4>{firstname} {lastname} <small>Administrator</small></h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum repellat veniam eligendi rem cumque magnam autem delectus qui.
                    </p>
                    <p>
                      <button className="btn">Upload</button>
                    </p>
                  </div>
                </div>
              </div>
      
              {/* <!-- User info --> */}
              <div className="panel panel-default">
                <div className="panel-heading">
                <h4 className="panel-title">User info</h4>
                </div>
                <br/>
                <div className="panel-body">
                  <table className="table profile__table">
                    <tbody>
                      <tr>
                        <th><strong>Username</strong></th>
                          <td>
                            <input className="form-control" name="username" onChange={this.onChange} value={username}/>
                          </td>
                      </tr>
                      <tr>
                        <th><strong>First Name</strong></th>
                          <td>
                            <input className="form-control" name="firstname" onChange={this.onChange} value={firstname} />
                          </td>
                      </tr>
                      <tr>
                        <th><strong>Last Name</strong></th>
                          <td>
                            <input className="form-control" name="lastname" onChange={this.onChange} value={lastname} />                          
                          </td>
                      </tr>
                      <tr>
                        <th><strong>Email</strong></th>
                          <td>
                            <input className="form-control" name="email" onChange={this.onChange} value={email} />                          
                          </td>
                      </tr>
                      <tr>
                        <th><strong>Gender</strong></th>
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

              <div className="form-check text-center">

                    <br/>
                    
                    <div className="chef_box container">
                    <h6>Chef Application</h6>
                    <p onChange={this.onChange} value={experience}>{experience}</p>
                    </div>

                    <div className="">
                    <input className="form-check-input " type="checkbox" checked={chef} value={chef} name="chef" id="defaultCheck1" onChange={this.handleChecked} />                    
                    </div>
                    <br/>
                    <div className="">
                    <h5>Register as Chef?</h5>
                    </div>
                    
                    
                    
                  </div>
              <br/>
      
            </div>
            <div className="col-xs-12 col-sm-3">
              
              {/* <!-- Contact user --> */}
              <p>
                <button type="submit" className="btn-block btn-lg btn-success btn">
                  Save Changes
                </button>
              </p>
              <p>
                <Link to="/profile" href="#" className="btn btn-lg btn-block btn-secondary">
                  Cancel
                </Link>
              </p>
      
            </div>
            
          </form>
      </div>       
    );
  }
}
