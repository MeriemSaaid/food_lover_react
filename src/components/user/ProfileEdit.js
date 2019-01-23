import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ImageUploader from 'react-images-upload';

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
      dateCreated : new Date().toLocaleDateString(),
      gender: "",
      _id: ""
    };
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
      const {
        username,
        password,
        confirmPassword,
        firstname,
        lastname,
        email,
        birthday,
        gender,
        _id,
        dateCreated
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
        dateCreated
      });
    }
  };

  onSubmit = e => {
    // alert('The submitted value: ' + this.state.value)
    e.preventDefault();
    const {
      username,
      password,
      confirmPassword,
      bio,
      specialty,
      firstname,
      lastname,
      email,
      birthday,
      gender,
      _id,
      dateCreated
    } = this.state;
    const newUser = {
      _id,
      username,
      password,
      confirmPassword,
      bio,
      specialty,
      firstname,
      lastname,
      email,
      birthday,
      gender,
      dateCreated
    };
    // console.log(newUser);
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
      specialty,
      gender
    } = this.state;
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
                    <input className="form-control" type="text" name="bio" onChange={this.onChange} value={bio} placeholder="Edit Bio"/>
                    <input className="form-control" type="text" name="specialty" onChange={this.onChange} value={specialty} placeholder="Add Specialties" />                    
                    <p>
                      <button type="file" className="btn">Update Photo</button>
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
              <br/>
      
              {/* <!-- Community --> */}
              {/* <div className="panel panel-default">
                <div className="panel-heading">
                <h4 className="panel-title">Community</h4>
                </div>
                <br/>
                <div className="panel-body">
                  <table className="table profile__table">
                    <tbody>
                      <tr>
                        <th><strong>Comments</strong></th>
                        <td>58584</td>
                      </tr>
                      <tr>
                        <th><strong>Member since</strong></th>
                        <td>{dateCreated}</td>
                      </tr>
                      <tr>
                        <th><strong>Last login</strong></th>
                        <td>1 day ago</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> */}
      
              {/* <!-- Latest posts --> */}
              {/* <div className="panel panel-default">
                <div className="panel-heading">
                <h4 className="panel-title">Latest posts</h4>
                </div>
                <div className="panel-body">
                  <div className="profile__comments">
                    <div className="profile-comments__item">
                      <div className="profile-comments__controls">
                        <a href="#"><i className="fa fa-share-square-o"></i></a>
                        <a href="#"><i className="fa fa-edit"></i></a>
                        <a href="#"><i className="fa fa-trash-o"></i></a>
                      </div>
                      <div className="profile-comments__avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                      </div>
                      <div className="profile-comments__body">
                        <h5 className="profile-comments__sender">
                          Richard Roe <small>2 hours ago</small>
                        </h5>
                        <div className="profile-comments__content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, corporis. Voluptatibus odio perspiciatis non quisquam provident, quasi eaque officia.
                        </div>
                      </div>
                    </div>
                    <div className="profile-comments__item">
                      <div className="profile-comments__controls">
                        <a href="#"><i className="fa fa-share-square-o"></i></a>
                        <a href="#"><i className="fa fa-edit"></i></a>
                        <a href="#"><i className="fa fa-trash-o"></i></a>
                      </div>
                      <div className="profile-comments__avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." />
                      </div>
                      <div className="profile-comments__body">
                        <h5 className="profile-comments__sender">
                          Richard Roe <small>5 hours ago</small>
                        </h5>
                        <div className="profile-comments__content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero itaque dolor laboriosam dolores magnam mollitia, voluptatibus inventore accusamus illo.
                        </div>
                      </div>
                    </div>
                    <div className="profile-comments__item">
                      <div className="profile-comments__controls">
                        <a href="#"><i className="fa fa-share-square-o"></i></a>
                        <a href="#"><i className="fa fa-edit"></i></a>
                        <a href="#"><i className="fa fa-trash-o"></i></a>
                      </div>
                      <div className="profile-comments__avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." />
                      </div>
                      <div className="profile-comments__body">
                        <h5 className="profile-comments__sender">
                          Richard Roe <small>1 day ago</small>
                        </h5>
                        <div className="profile-comments__content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, esse, magni aliquam quisquam modi delectus veritatis est ut culpa minus repellendus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
      
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
      
              {/* <hr className="profile__contact-hr" /> */}
              
              {/* <!-- Contact info --> */}
              {/* <div className="profile__contact-info">
                <div className="profile__contact-info-item">
                  <div className="profile__contact-info-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="profile__contact-info-body">
                    <h5 className="profile__contact-info-heading">Work number</h5>
                    (000)987-65-43
                  </div>
                </div>
                <div className="profile__contact-info-item">
                  <div className="profile__contact-info-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="profile__contact-info-body">
                    <h5 className="profile__contact-info-heading">Mobile number</h5>
                    (000)987-65-43
                  </div>
                </div>
                <div className="profile__contact-info-item">
                  <div className="profile__contact-info-icon">
                    <i className="fa fa-envelope-square"></i>
                  </div>
                  <div className="profile__contact-info-body">
                    <h5 className="profile__contact-info-heading">E-mail address</h5>
                    <a href="mailto:admin@domain.com">{email}</a>
                  </div>
                </div>
                <div className="profile__contact-info-item">
                  <div className="profile__contact-info-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <div className="profile__contact-info-body">
                    <h5 className="profile__contact-info-heading">Work address</h5>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </div>
                </div>
              </div> */}
      
            </div>
          </form>
      </div>       
    );
  }
}
