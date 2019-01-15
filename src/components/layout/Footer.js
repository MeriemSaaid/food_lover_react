import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          {/* <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">EstateAgency</h3>
                </div>
                <div className="w-body-a">
                  <p className="w-text-a color-text-a">
                    Enim minim veniam quis nostrud exercitation ullamco laboris
                    nisi ut aliquip exea commodo consequat duis sed aute irure.
                  </p>
                </div>
                <div className="w-footer-a">
                  <ul className="list-unstyled">
                    <li className="color-a">
                      <span className="color-text-a">Phone .</span>{" "}
                      contact@example.com
                    </li>
                    <li className="color-a">
                      <span className="color-text-a">Email .</span> +54 356 945234
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">The Company</h3>
                </div>
                <div className="w-body-a">
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <Link to="/">Site Map</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <Link to="/">Legal</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" />{" "}
                        <Link to="/">Agent Admin</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <Link to="/">Careers</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" />{" "}
                        <Link to="/">Affiliate</Link>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" />{" "}
                        <Link to="/">Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 section-md-t3">
              <div className="widget-a">
                <div className="w-header-a">
                  <h3 className="w-title-a text-brand">International sites</h3>
                </div>
                <div className="w-body-a">
                  <ul className="list-unstyled">
                    <li className="item-list-a">
                      <i className="fa fa-angle-right" /> <Link to="/">Venezuela</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="fa fa-angle-right" /> <Link to="/">China</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="fa fa-angle-right" /> <Link to="/">Hong Kong</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="fa fa-angle-right" /> <Link to="/">Argentina</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="fa fa-angle-right" /> <Link to="/">Singapore</Link>
                    </li>
                    <li className="item-list-a">
                      <i className="fa fa-angle-right" />{" "}
                      <Link to="/">Philippines</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-12">
              <nav className="nav-footer">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">About </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link to="/">Contact</Link>
                  </li>
                </ul>
              </nav>
              <div className="socials-a">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.fb.me/foodloverrecipe">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fa fa-pinterest-p" aria-hidden="true" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/">
                      <i className="fa fa-dribbble" aria-hidden="true" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="copyright-footer">
                <p className="copyright color-text-a">
                  &copy; Copyright&nbsp;
                  <span className="color-a">FoodLover</span> All Rights
                  Reserved.
                </p>
              </div>
              <div className="credits">
                Designed by <Link to="/">MWG</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
