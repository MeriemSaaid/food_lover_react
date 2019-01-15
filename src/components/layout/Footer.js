import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (

<div className="f2r nav justify-content-center">
          {/* Modal goes here */}
          
          <div className="modal" id="exampleModal" tabIndex={"-1"} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">About Us</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">Hello!
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div></div>
<div className="f2rfollow float-left">
          <button  type="button" style={{color:"white"}} className="btn adjsp" data-toggle="modal" data-target="#exampleModal" >About Us</button>
          <button  type="button" style={{color:"white"}} className="btn adjsp" data-toggle="modal" data-target="#exampleModal" >Contact Us</button>
          <button  type="button" style={{color:"white"}} className="btn adjsp" data-toggle="modal" data-target="#exampleModal" >FAQ</button>
          <button  type="button" style={{color:"white"}} className="btn adjsp" data-toggle="modal" data-target="#exampleModal" >Customer Support</button>
          <button  type="button" style={{color:"white"}} className="btn adjsp" data-toggle="modal" data-target="#exampleModal" >Online Store</button>

          </div>

         <div className="f2rfollow float-right d-none d-lg-block">
<h6 className="f2rfollow pl-5 pr-4">Follow us here:</h6>
          <a className="" href="">
              <i className="fab fa-facebook-f fa-lg white-text mr-md-3"> </i>
            </a>

            <a className="" href="">
              <i className="fab fa-twitter fa-lg white-text mr-md-3"> </i>
            </a>

            <a className="" href="">
              <i className="fab fa-google-plus-g fa-lg white-text mr-md-3"> </i>
            </a>

            <a className="" href="">
              <i className="fab fa-linkedin-in fa-lg white-text mr-md-3"> </i>
            </a>

            <a className="" href="">
              <i className="fab fa-instagram fa-lg white-text mr-md-3"> </i>
            </a>

            <a className="" href="">
              <i className="fab fa-pinterest fa-lg white-text"> </i>
            </a>
            </div> 

          


  </div>
  
    );
  }
}
