import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contactus from './Contactus';
import { Modal } from 'semantic-ui-react'
import About from'./About';
export default class Footer extends Component {
  constructor (props){
    super (props);
    this.state = {
      ContactUs: false,
      AboutUs: false,
      redirectbutton: false
    };
}

  showContact = (bool) => {
    this.setState({
      ContactUs: false,
      redirectbutton:true
    });
  }

    showAbout = (bool) => {
      this.setState({
        redirectbutton: false,
        AboutUs: true
      });
    }


  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-bottom">
          <div className="full-width">
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                {/* {this.state.AboutUs ? (<About/>) : (<div></div>)} */}
                <About open={this.state.About}/>
            </li>
            <li className="menu-active">
               {/* <button className= 'contactus'onClick={this.showContact.bind(this, true)}>Contact Us</button> */}
                  <Contactus open={this.state.ContactUs}/>
                  <button type="button" className="btn btn-primary btn-small" data-toggle="modal" data-target="#exampleModalCenter">Contact Us </button>
                  <button type ="close" className='btn btn-primary btn-small' data-toggle='modal' data-target ='#exampleModalLong'> About US</button>
            </li>
            <li className="menu-active">
            <a href="https://www.fb.me/foodloverrecipe"><i id="social-fb" className="fab fa-facebook-square fa-3x social"></i></a>
            </li>
            </ul>
            </nav>
          </div>

        </nav>
      </div>
    );
  }
}
