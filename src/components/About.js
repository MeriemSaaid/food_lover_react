import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <section className="intro-single">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="title-single-box">
                  <span />
                  <h1 className="title-single">
                    Blend of International Recipes
                  </h1>
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
                    <li className="breadcrumb-item active" aria-current="page">
                      About
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="section-about">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="about-img-box" style={{ opacity: ".9" }}>
                  <img
                    src={require("../img/Foodloverlogo.png")}
                    alt=""
                    className="HaitianLunch"
                  />
                </div>
                {/* <div className="sinse-box">
                  <span />
                  <span />
                  <span />
                  <h3 className="sinse-title">
                    FoodLover Recipe
                    <span />
                    <br /> December 2018
                  </h3>
                  <p>Blend of Recipes</p>
                </div> */}
              </div>
              <div className="col-md-12 section-t8">
                <div className="row">
                  <div className="col-md-6 col-lg-5" style={{ opacity: "1" }}>
                    <img
                      src={require("../img/chefResize.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-2  d-none d-lg-block">
                    <div className="title-vertical d-flex justify-content-start">
                      <span>FoodLover Recipes </span> <span />
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 section-md-t3">
                    <div className="title-box-d">
                      <span />
                      <h3 className="title-d">
                        Blend
                        <span className="color-d">of</span> international
                        <br /> recipes.
                      </h3>
                    </div>
                    <p className="color-text-a">
                      Three MSIMBO Bootcamp students from international
                      background teams up and decides to shared light on variety
                      of dishes from diverse countries as final project for
                      front web development. It started as just simple as random
                      day-to-day food connoisseur preferences conversation to a
                      big idea as suggestion from Mr. Shiyu Wang our instructor.
                      Along the way, the team decide to enlight those whose
                      enjoy fine dining with friends and family whether in a
                      restaurant or in a cozy place.
                    </p>
                    <p className="color-text-a">
                      FoodLover Recipe bring you an exquisite list of fine
                      recipe dishes idea from well reknown local and or
                      international chefs for any occasions. Whether you dine
                      alone or with family and friends, take a seat back in your
                      cozy place, enjoy making those delicious dishes and have a
                      great time!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="card-overlay card-overlay-hover">
          <div className="card-header-d">
            <div className="card-title-d align-self-center">
              <h3 className="title-d">
                <a href="agent-single.html" className="link-two">
                  Margaret Sotillo
                  <br /> Escala
                </a>
              </h3>
            </div>
          </div>
          <div className="card-body-d">
            <p className="content-d color-text-a">
              Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum
              porta two.
            </p>
          </div>
          <div className="card-footer-d">
            <div className="socials-footer d-flex justify-content-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="#" class="link-one">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="link-one">
                    <i class="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="link-one">
                    <i class="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="link-one">
                    <i className="fa fa-pinterest-p" aria-hidden="true" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="link-one">
                    <i class="fa fa-dribbble" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card-box-d">
            <div className="card-img-d">
              <img src="img/agent-6.jpg" alt="" className="img-d img-fluid" />
            </div>

            <div className="card-body-d">
              <p className="content-d color-text-a">
                Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                dictum porta two.
              </p>
              <div className="info-agents color-a">
                <p>
                  <strong>Phone: </strong> +54 356 945234
                </p>
                <p>
                  <strong>Email: </strong> agents@example.com
                </p>
              </div>
            </div>
            <div className="card-footer-d">
              <div className="socials-footer d-flex justify-content-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="link-one">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card-box-d">
            <div className="card-img-d">
              <img src="img/agent-5.jpg" alt="" className="img-d img-fluid" />
            </div>
            <div class="card-overlay card-overlay-hover">
              <div class="card-header-d">
                <div class="card-title-d align-self-center">
                  <h3 class="title-d">
                    <a href="agent-single.html" class="link-two">
                      Emma Toledo
                      <br /> Cascada
                    </a>
                  </h3>
                </div>
              </div>
              <div className="card-body-d">
                <p className="content-d color-text-a">
                  Sed porttitor lectus nibh, Cras ultricies ligula sed magna
                  dictum porta two.
                </p>
                <div className="info-agents color-a">
                  <p>
                    <strong>Phone: </strong> +54 356 945234
                  </p>
                  <p>
                    <strong>Email: </strong> agents@example.com
                  </p>
                </div>
              </div>
              <div className="card-footer-d">
                <div className="socials-footer d-flex justify-content-center">
                  <ul className="list-inline">
                    <li cclassName="list-inline-item">
                      <a href="#" class="link-one">
                        <i class="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="section-footer">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-4">
                <div class="widget-a">
                  <div class="w-header-a">
                    <h3 class="w-title-a text-brand">FoodLover Recipe</h3>
                  </div>
                  <div class="w-body-a">
                    <p class="w-text-a color-text-a ">
                      To those who love fine dishes whether in a restaurant, at
                      a cozy place or at home with family, and friends,
                      FoodLover Recipe bring you an exquisite list of fine
                      dishes from well known local and or international chefs
                      ideas of dishes for any occasions!
                    </p>
                    <span> </span>
                  </div>
                  <div class="w-footer-a">
                    <ul class="list-unstyled">
                      <li class="color-a">
                        <span class="color-text-a">Phone .</span> +1 800 222
                        1212
                      </li>
                      <li class="color-a">
                        <span class="color-text-a">Email .</span>
                        msimbo2018@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
