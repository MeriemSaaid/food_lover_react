import React, { Component } from "react";
import "../App.css";
import { Spring, Trail } from "react-spring";
export default class Home extends Component {
  LOVE = "LOVE".split("");
  WHAT = "WHAT".split("");
  YOU = "YOU".split("");
  COOK = [
    {
      id: 1,
      letter: "C"
    },
    {
      id: 2,
      letter: "O"
    },
    {
      id: 3,
      letter: "O"
    },
    {
      id: 4,
      letter: "K"
    }
  ];
  EVERYDAY = [
    {
      id: 1,
      letter: "E"
    },
    {
      id: 2,
      letter: "V"
    },
    {
      id: 3,
      letter: "E"
    },
    {
      id: 4,
      letter: "R"
    },
    {
      id: 5,
      letter: "Y"
    },
    {
      id: 6,
      letter: "D"
    },
    {
      id: 7,
      letter: "A"
    },
    {
      id: 8,
      letter: "Y"
    }
  ];
  render() {
    const divStyle1 = {
      backgroundImage: "url(../logo.jpg)"
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
                        <div className="intro-title mb-4">
                          <div style={{ display: "flex" }}>
                            <div
                              style={{ marginRight: "10px", display: "flex" }}
                            >
                              <Trail
                                items={this.LOVE}
                                key={item => item.key}
                                from={{
                                  transform: "translate3d(0,-40px,0)",
                                  opacity: 0
                                }}
                                to={{
                                  transform: "translate3d(0,0px,0)",
                                  opacity: 1
                                }}
                                config={{ delay: 170, duration: 180 }}
                              >
                                {item => props => (
                                  <div
                                    className="color-b"
                                    style={props}
                                    key={item}
                                  >
                                    {item}
                                  </div>
                                )}
                              </Trail>
                            </div>
                            <Trail
                              items={this.WHAT}
                              key={item => item.key}
                              from={{
                                transform: "translate3d(0,-40px,0)",
                                opacity: 0
                              }}
                              to={{
                                transform: "translate3d(0,0px,0)",
                                opacity: 1
                              }}
                              config={{ delay: 200, duration: 240 }}
                            >
                              {item => props => (
                                <div className="color-w" style={props} key="2">
                                  {item}
                                </div>
                              )}
                            </Trail>
                          </div>

                          <div style={{ display: "flex" }}>
                            <Trail
                              items={this.YOU}
                              key={item => item.key}
                              from={{
                                transform: "translate3d(0,-40px,0)",
                                opacity: 0
                              }}
                              to={{
                                transform: "translate3d(0,0px,0)",
                                opacity: 1
                              }}
                              config={{ delay: 250, duration: 300 }}
                            >
                              {item => props => (
                                <div
                                  className="color-w"
                                  style={props}
                                  key={item.key}
                                >
                                  {item}
                                </div>
                              )}
                            </Trail>

                            <Trail
                              items={this.COOK}
                              keys={item => item.id}
                              from={{
                                transform: "translate3d(0,-40px,0)",
                                opacity: 0
                              }}
                              to={{
                                transform: "translate3d(0,0px,0)",
                                opacity: 1
                              }}
                              config={{ delay: 300, duration: 340 }}
                            >
                              {item => props => (
                                <div
                                  className="color-w"
                                  style={props}
                                  key={item.id}
                                >
                                  {item.letter}
                                </div>
                              )}
                            </Trail>
                          </div>
                          <div style={{ display: "flex" }}>
                            <Trail
                              items={this.EVERYDAY}
                              keys={item => item.id}
                              from={{
                                transform: "translate3d(0,-40px,0)",
                                opacity: 0
                              }}
                              to={{
                                transform: "translate3d(0,0px,0)",
                                opacity: 1
                              }}
                              config={{ delay: 340, duration: 400 }}
                            >
                              {(item, i) => props => (
                                <div
                                  className="color-w"
                                  style={props}
                                  key={item.id}
                                >
                                  {item.letter}
                                </div>
                              )}
                            </Trail>
                          </div>
                        </div>

                        <Spring
                          from={{ opacity: 0 }}
                          to={{ opacity: 1 }}
                          config={{ delay: 400, duration: 500 }}
                        >
                          {props => (
                            <p
                              className="intro-subtitle intro-price"
                              style={props}
                            >
                              <a href="/">
                                <span className="price-a">Explore</span>
                              </a>
                            </p>
                          )}
                        </Spring>
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
