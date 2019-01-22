import React, { Component } from "react";
import "../App.css";
import { Spring, Trail } from "react-spring";
export default class Home extends Component {

  LOVE = "LOVE".split("");
  WHAT = "WHAT".split("");
  YOU = "YOU".split("");
  COOK ="COOK".split("");
  EVERYDAY = "EVERYDAY".split("");

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
                          <div className="intro-title mb-4" >
                            <div style={{display: "flex"}}>
                              <div style={{marginRight: "10px", display: "flex"}}>
                              <Trail
                                items={this.LOVE} keys={(item)=> item.key}
                                from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
                                to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                                config={{delay: 500, duration: 500}}
                                >
                                {item => props => 
                                  <div className="color-b" style={props}> 
                                    {item}
                                  </div>
                                }
                              </Trail>      
                              </div>    
                              <Trail
                                items={this.WHAT} keys={(item)=> item.key}
                                from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
                                to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                                config={{delay: 650, duration: 650}}
                                >
                                {item => props => 
                                  <div className="color-w" style={props}> 
                                    {item}
                                  </div>
                                }
                              </Trail>
                            </div>
                          
                            <div  style={{display: "flex"}}>
                              
                            <Trail
                              items={this.YOU} keys={(item)=> item.key}
                              from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
                              to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                              config={{delay: 750, duration: 750}}
                              >
                              {item => props => 
                                <div className="color-w" style={props}> 
                                  {item}
                                </div>
                              }
                            </Trail>
                            
                            <Trail
                              items={this.COOK} keys={(item)=> item.key}
                              from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
                              to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                              config={{delay: 850, duration: 850}}
                              >
                              {item => props => 
                                <div className="color-w" style={props}> 
                                  {item}
                                </div>
                              }
                            </Trail>
                            </div>
                            <div  style={{display: "flex"}}>
                              
                              <Trail
                                items={this.EVERYDAY} keys={(item)=> item.key}
                                from={{ transform: 'translate3d(0,-40px,0)', opacity: 0 }}
                                to={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                                config={{delay: 950, duration: 950}}
                                >
                                {item => props => 
                                  <div className="color-w" style={props}> 
                                    {item}
                                  </div>
                                }
                              </Trail>
                              </div>
                              </div>
                             
                          <Spring 
                            from={{opacity: 0}}
                            to={{opacity: 1}}
                            config={{delay: 5000, duration: 3000}}>
                            {props => (
                              <p className="intro-subtitle intro-price" style={props}>
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
