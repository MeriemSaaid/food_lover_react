import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      fullname: "",
      email: "",
      subject: "",
      message: "",
      errors: {},
      subject: "",
      sendMessage: false
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.fullname === "") {
      this.setState({
        errors: { fullname: "Full Name is required" }
      });
      return;
    }
    if (this.state.email === "") {
      this.setState({
        errors: { email: "email is required" }
      });
      return;
    }
    if (this.state.subject === "") {
      this.setState({
        errors: { subject: "A subject line must be entered" }
      });
      return;
    }
    if (this.state.message === "") {
      this.setState({
        errors: { message: "A message and or description must be entered " }
      });
      return;
    }

    this.submitMessage();
  };

  submitMessage = async e => {
    const content = {
      name: this.state.fullname,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    };
    console.log(content);
    await axios.post("/api/contact", content);
    this.setState({ sendMessage: true });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.errors.sendMessage && (
            <div>
              {" "}
              Thank you for your concern. We'll notify you as soon possible!
            </div>
          )}
          <section className="intro-single">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="title-single-box">
                    <h1 className="title-single">Contact US</h1>
                    <span className="color-text-a">
                      Need to learn more about FoodLover Recipe or have any
                      subjection! Please feel free to fill out this form or
                      contact us at the toll free below and we will get back to
                      you as soon as possible.
                    </span>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <nav
                    aria-label="breadcrumb"
                    className="breadcrumb-box d-flex justify-content-lg-end"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="contact">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="contact-map box">
                    <div id="map" className="contact-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.6868084692733!2d-71.08501898454476!3d42.32787837918902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a307f4c2e1d%3A0x9d13b52f5a486d1e!2sUrban+League+of+Eastern+Massachusetts+(ULEM)!5e0!3m2!1sen!2sus!4v1547671600068"
                        title="company location"
                        style={{
                          border: 0,
                          frameborder: 0,
                          width: 600,
                          height: 450
                        }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 section-t8">
                  <div className="row">
                    <div className="col-md-7">
                      {this.state.sendMessage && (
                        <div>
                          Your message has been sent. Thank you for notify us!
                        </div>
                      )}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          {this.state.errors.fullname && (
                            <div className="alert alert-warning">
                              {this.state.errors.fullname}
                            </div>
                          )}
                          <div className="form-group">
                            <input
                              type="text"
                              name="fullname"
                              className="form-control form-control-lg form-control-a"
                              placeholder="Your Full Name"
                              value={this.state.fullname}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-group">
                            <input
                              name="email"
                              type="email"
                              className="form-control form-control-lg form-control-a"
                              placeholder="Your Email"
                              value={this.state.email}
                              onChange={this.onChange}
                            />
                            {this.state.errors.email && (
                              <div className="alert alert-warning">
                                {this.state.errors.email}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              name="subject"
                              className="form-control form-control-lg form-control-a"
                              placeholder="Subject"
                              value={this.state.subject}
                              onChange={this.onChange}
                            />
                          </div>
                          {this.state.errors.subject && (
                            <div className="alert alert-warning">
                              {this.state.errors.subject}
                            </div>
                          )}
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea
                              name="message"
                              className="form-control"
                              cols="45"
                              rows="8"
                              value={this.state.message}
                              onChange={this.onChange}
                              placeholder="Message or Description"
                            />
                          </div>
                          {this.state.errors.message && (
                            <div className="alert alert-warning">
                              {this.state.errors.message}
                            </div>
                          )}
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn btn-a"
                            // onClick={this.submitMessage}
                          >
                            Send Message{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 section-md-t3">
                      <div className="icon-box section-b2">
                        <div className="icon-box-icon">
                          <i className="fas fa-paper-plane" />
                        </div>
                        <div className="icon-box-content table-cell">
                          <div className="icon-box-title">
                            <h4 className="icon-title">Say Hello</h4>
                          </div>
                          <div className="icon-box-content">
                            <p className="mb-1">
                              Email.
                              <span className="color-a">
                                msimbo2018@gmail.com
                              </span>
                            </p>
                            <p className="mb-1">
                              Phone.
                              <span className="color-a">+1 800 222 1212</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="icon-box section-b2">
                        <div className="icon-box-icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="icon-box-content table-cell">
                          <div className="icon-box-title">
                            <h4 className="icon-title">Find us in</h4>
                          </div>
                          <div className="icon-box-content">
                            <p className="mb-1">
                              Roxbury, MA 02119,
                              <br /> U.S.A.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="icon-box">
                        <div className="icon-box-icon">
                          <i className="fas fa-share" />
                        </div>
                        <div className="icon-box-content table-cell">
                          <div className="icon-box-title">
                            <h4 className="icon-title">Social network</h4>
                          </div>
                          <div className="icon-box-content">
                            <div className="socials-footer">
                              <ul className="list-inline">
                                <li className="list-inline-item">
                                  <a
                                    href="https://www.fb.me/foodloverrecipe"
                                    className="link-one"
                                  >
                                    <i
                                      className="fa fa-facebook"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}
export default Contact;
