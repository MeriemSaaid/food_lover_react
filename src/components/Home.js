import React, { Component } from "react";
import "../App.css";
export default class Home extends Component {
  render() {
    const divStyle1 = {
      backgroundImage: "url(../logo.jpg)"
    };
    const divStyle2 = {
      backgroundImage: "url(../logo2.jpg)"
    };
    return (
      <div className="intro intro-carousel">
        <div id="carousel" className="owl-carousel owl-theme">
          <div
            className="carousel-item-a intro-item bg-image"
            style={divStyle1}
            // id="back"
          >
            <div className="overlay overlay-a" />
            <div className="intro-content display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="intro-body">
                        {/* <p className="intro-title-top">
                          Doral, Florida
                          <br /> 78345
                        </p> */}
                        <h1 className="intro-title mb-4">
                          <span className="color-b">Love </span> What
                          <br /> You cook everyday
                        </h1>
                        <p className="intro-subtitle intro-price">
                          <a href="#">
                            <span className="price-a">Explore</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
