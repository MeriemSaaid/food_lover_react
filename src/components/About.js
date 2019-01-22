import React, { Component } from "react";
import { Link } from 'react-router-dom';

 class About extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
          <div className="container">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarDefault"
              aria-controls="navbarDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <a className="navbar-brand text-brand" href="/">
              FoodLover<span className="color-b">Recipe</span>
            </a>

            <div
              className="navbar-collapse collapse justify-content-center"
              id="navbarDefault"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link active" href="about.html">
                    About
                  </a> */}
                  <Link to =""></Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-expanded="false"
            >
              <span className="fa fa-search" aria-hidden="true" />
            </button>
          </div>
        </nav>

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
                      <a href="#">Home</a>
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
                <div className="about-img-box">
                  <img
                    src={require("../img/Foodloverlogo.png")}
                    alt=""
                    className="HaitianLunch"
                  />
                </div>
                <div className="sinse-box">
                  <span />
                  <span />
                  <span />
                  <h3 className="sinse-title">
                    FoodLover Recipe
                    <span />
                    <br /> December 2018
                  </h3>
                  <p>Blend of Recipes</p>
                </div>
              </div>
              <div className="col-md-12 section-t8">
                <div className="row">
                  <div className="col-md-6 col-lg-5">
                    <img src="img/about-2.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-2  d-none d-lg-block">
                    <div className="title-vertical d-flex justify-content-start">
                      <span>FoodLover A blend of food recipes</span>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 section-md-t3">
                    <div className="title-box-d">
                      <span />
                      <h3 className="title-d">
                        Sed
                        <span className="color-d">porttitor</span> lectus
                        <br /> nibh.
                      </h3>
                    </div>
                    <p className="color-text-a">
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                      a. Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices posuere cubilia
                      Curae; Donec velit neque, auctor sit amet aliquam vel,
                      ullamcorper sit amet ligula.
                    </p>
                    <p className="color-text-a">
                      Sed porttitor lectus nibh. Vivamus magna justo, lacinia
                      eget consectetur sed, convallis at tellus. Mauris blandit
                      aliquet elit, eget tincidunt nibh pulvinar a. Vivamus
                      magna justo, lacinia eget consectetur sed, convallis at
                      tellus.
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
                  <a className="#" class="link-one">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
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
                    <p class="w-text-a color-text-a">
                      Enim minim veniam quis nostrud exercitation ullamco
                      laboris nisi ut aliquip exea commodo consequat duis sed
                      aute irure.
                    </p>
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
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <nav class="nav-footer">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">About</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div class="socials-a">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="copyright-footer">
                  <p class="copyright color-text-a">
                    &copy; Copyright
                    <span class="color-a">FoodLoverRecipe</span> All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default About;