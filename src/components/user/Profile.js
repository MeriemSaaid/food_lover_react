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
      bio:"",
      specialty:"",
      _id: "",
      dateCreated: new Date().toLocaleDateString(),
      admin: false,
      chef: false
    };
  }

  redirectAdmin = (id)=> {
    this.props.history.push({
      pathname: `/admin`,
      state :{id :id}
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
        _id
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
        _id
      });
    }
  };

  updateUser = async newUser => {
    await axios.put("/api/user", newUser);
  };

  logout = async () => {
    await axios.post("/api/logout")
    this.props.history.push("/login");
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
      _id
    } = this.state;
    return (
        <div className="padding_div bottom_space container">
          <div className="row">
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
            <div className="profile__header" >
              <h4>{firstname} {lastname}
              {admin === true && (<small style={{color:"green"}}> Administrator</small>)}
              {chef === true && (<small style={{color:"green"}}> Chef</small>)}
              </h4>
              {/* User's Bio */}
              <div className="d-block">
              {chef === false && (
              <a>About me:</a>
              )}
              {chef === false && (
              <span className="text-muted"> {bio}</span>
              )}
              </div>
              {/* Chef's Bio */}
              <div className="d-block">
              {chef === true && (
              <medium>Bio:</medium>
              )}
              {chef === true && (
              <a className="text-muted"> {bio}</a>
              )}
              </div>
              <br/>
              <div>
              {/* Chef's Specialties */}
              {chef === true && (
              <medium>Specialties:</medium>
              )}
              {chef === true && (
                <a placeholder="specialties"> {specialty}</a>
              )}
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>

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
                  <td>{username}</td>
                </tr>
                <tr>
                  <th><strong>First Name</strong></th>
                  <td>{firstname}</td>
                </tr>
                <tr>
                  <th><strong>Last Name</strong></th>
                  <td>{lastname}</td>
                </tr>
                <tr>
                  <th><strong>Gender</strong></th>
                  <td>{gender}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br/>

        {/* <!-- Community --> */}
        <div className="panel panel-default">
          <div className="panel-heading">
          <h4 className="panel-title">Community</h4>
          </div>
          <br/>
          <div className="panel-body">
            <table className="table profile__table">
              <tbody>
                <tr>
                  <th><strong>Followers</strong></th>
                  <td>58584</td>
                </tr>
                {/* <tr>
                  <th><strong>Member since</strong></th>
                  <td>{dateCreated}</td>
                </tr> */}
                {/* <tr>
                  <th><strong>Recipes</strong></th>
                  <td>6</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <br/>

        {/* <!-- Latest posts --> */}
        {/* <div className="panel panel-default">
          <div className="panel-heading">
          <h4 className="panel-title">Latest Activity</h4>
          </div>
          <br/>
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
                    {username} <small>2 hours ago</small>
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
                  {username} <small>5 hours ago</small>
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
                  {username} <small>1 day ago</small>
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
        {admin===false && (
        <p>
          <Link to="/profileedit" href="#" className="profile__contact-btn btn btn-lg btn-block btn-info">
            Edit Profile
          </Link>
        </p>
        )}
        {admin===true && (
        // <p>
        //   <button onClick={this.redirectAdmin.bind(this,_id)}  className="profile__contact-btn btn btn-lg btn-block btn-info">
        //     Edit Profile
        //   </button>
        // </p>
        <Link to="/profileedit" href="#" className="profile__contact-btn btn btn-lg btn-block btn-info">
            Edit Profile
          </Link>
        )}
        <p>
          <button onClick={this.logout} className="profile__contact-btn btn btn-lg btn-block btn-danger">
            Log Out
          </button>
        </p>

        {/* <hr className="profile__contact-hr" /> */}
        <hr/>
        <br/>
        
        {/* <!-- Contact info --> */}
        <div className="profile__contact-info">
          {/* <div className="profile__contact-info-item">
            <div className="profile__contact-info-icon">
              <i className="fa fa-phone"></i>
            </div>
            <div className="profile__contact-info-body">
              <h5 className="profile__contact-info-heading">Work number</h5>
              (000)987-65-43
            </div>
          </div> */}
          {/* <div className="profile__contact-info-item">
            <div className="profile__contact-info-icon">
              <i className="fa fa-phone"></i>
            </div>
            <div className="profile__contact-info-body">
              <h5 className="profile__contact-info-heading">Mobile number</h5>
              (000)987-65-43
            </div>
          </div> */}
          <div className="profile__contact-info-item">
            <div className="profile__contact-info-icon">
              <i className="fa fa-envelope-square"></i>
            </div>
            <div className="profile__contact-info-body">
              <h5 className="profile__contact-info-heading">E-mail address</h5>
              <a href="mailto:admin@domain.com">{email}</a>
            </div>
          </div>
          {/* <div className="profile__contact-info-item">
            <div className="profile__contact-info-icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <div className="profile__contact-info-body">
              <h5 className="profile__contact-info-heading">Work address</h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div> */}
        </div>

      </div>
    </div>
</div>       
    );
  }
}
