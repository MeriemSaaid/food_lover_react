import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default class Chef extends Component {
  state = {
    chefs: [],
    userId: ""
  };

  //Get chefs
  getChefs = async () => {
    // const type = this.props.match.params.type;
    const res = await axios.get(`/api/users`);
    // this.setState({
    //   chefs: res.data
    // });
    this.setState({
      chefs: res.data.filter(chef => {
        return (
          chef.chef && chef.chef === true && chef._id !== this.state.userId
        );
      })
    });
  };

  async componentDidMount() {
    const res = await this.props.loggedIn();
    // console.log(res.data);
    if (res.data === 0) {
      // console.log("not connected");
      this.props.history.push("/login");
    } else {
      this.setState({
        userId: res.data._id
      });
      this.getChefs();
    }
  }

  render() {
    const { chefs } = this.state;
    // console.log(chefs);
    return (
      <div className="container padding_div intro-single">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">Our Amazing Chefs</h1>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div id="products" className="row view-group">
          {chefs.map((chef, i) => {
            // console.log(recipe);
            return (
              <div
                className="item col-md-3 col-sm-4 col-xs-12 single_portfolio_text"
                key={chef._id}
              >
                <div className="thumbnail card">
                  <div className="img-event ">
                    <img
                      className="group list-group-image img-fluid cursor_pointer"
                      src={chef.picture}
                      alt={chef.firstname}
                    />
                    <div className="portfolio_images_overlay text-center">
                      <h6 className="clrd-font">
                        {chef.firstname + " " + chef.lastname}
                      </h6>

                      <Link
                        to={`/chefdetail/${chef._id}`}
                        className="btn btn-primary btn-click"
                      >
                        Click here
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
