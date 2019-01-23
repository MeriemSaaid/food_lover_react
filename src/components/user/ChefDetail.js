import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default class ChefDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      follower: "",
      chef: [],
      followers: [],
      nbFollowers: 0,
      recipes: []
    };
  }

  getChef = async id => {
    const res = await axios.get(`/api/user/${id}`);
    this.setState({
      chef: res.data
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
        follower: res.data._id
      });
      const id = this.props.match.params.id;
      this.getChef(id);
      this.getFollowers(id);
      this.getRecipes();
    }
  }
  async getFollowers(id) {
    // console.log("ddd");
    const res = await axios.get(`/api/followers/${id}`);
    this.setState({
      followers: res.data,
      nbFollowers: res.data.length
    });

    const idFollower = this.props.match.params.id;
    // console.log(this.handleCheck(idFollower));
  }
  async addfollow(followerId, followedId) {
    const follow = {
      followerId: followerId,
      followedId: followedId
    };
    const res = await axios.post(`/api/follow`, follow);
    this.setState({
      followers: [...this.state.followers, res.data]
    });
  }
  //Unfollow
  async Unfollow(followerId, followedId) {
    const res = await axios.delete(`/api/unfollow/${followerId}/${followedId}`);
    // console.log(res.data);
    // const id = this.props.match.params.id;
    // this.getFollowers(id);
    this.setState({
      followers: this.state.followers.filter(follower => {
        return follower.followerId !== followerId;
      })
    });
  }

  handleCheck(val) {
    return this.state.followers.some(function(el) {
      return el.followerId === val;
    });
  }

  //Get recipes
  getRecipes = async () => {
    // const type = this.props.match.params.type;
    const res = await axios.get(`/api/recipe/list`);
    const id = this.props.match.params.id;
    this.setState({
      recipes: res.data.filter(recipe => {
        return recipe.userId && recipe.userId === id;
      })
    });
    console.log(this.state.recipes);
  };
  showDetail = id => {
    this.props.history.push({
      pathname: `/detail`,
      state: { id: id }
    });
  };
  render() {
    const { chef, follower, followers, nbFollowers, recipes } = this.state;
    // console.log(this.handleCheck(follower));
    return (
      <div className="container padding_div intro-single">
        <div className="agent-single padding_div border">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="agent-avatar-box">
                      <img
                        src="http://placekitten.com/400/252"
                        alt=""
                        className="rounded-circle float-right fixed_width_heigth_chef_detail"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 section-md-t3">
                    <div className="agent-info-box">
                      {/* <div className="agent-title"> */}
                      {/* <div className="title-box-d">
                        <h3 className="title-d">
                          {chef.firstname}
                          <br /> {chef.lastname}
                        </h3>
                      </div> */}
                      {/* </div> */}
                      <div className="agent-content mb-3">
                        <p className="content-d color-text-a">fff{chef.bio}</p>
                        <div className="info-agents color-a">
                          <p>
                            <strong>Email: </strong>
                            <span className="color-text-a"> {chef.email}</span>
                          </p>
                          <p>
                            <strong>Publications: </strong>
                            <span className="color-text-a">
                              {recipes.length}
                            </span>
                          </p>
                          <p>
                            <strong>Experience: </strong>
                            <span className="color-text-a">
                              {chef.experience}
                            </span>
                          </p>

                          <p>
                            <strong>Followers: </strong>
                            <span className="color-text-a">
                              {followers.length}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="socials-footer">
                        <ul className="list-inline">
                          {!this.handleCheck(follower) && (
                            <li className="list-inline-item">
                              <button
                                className="link-one"
                                onClick={this.addfollow.bind(
                                  this,
                                  follower,
                                  chef._id
                                )}
                              >
                                Follow{" "}
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                />
                              </button>
                            </li>
                          )}
                          {this.handleCheck(follower) && (
                            <li className="list-inline-item">
                              <button
                                className="link-one"
                                onClick={this.Unfollow.bind(
                                  this,
                                  follower,
                                  chef._id
                                )}
                              >
                                Unfollow
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                />
                              </button>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="products" className="row view-group padding_div">
          {recipes.map((recipe, i) => {
            // console.log(recipe);
            return (
              <div className="item col-xs-4 col-lg-4" key={recipe._id}>
                <div className="thumbnail card">
                  <div className="img-event">
                    <img
                      className="group list-group-image img-fluid fixed_width_heigth cursor_pointer"
                      src={recipe.picture}
                      alt={recipe.name}
                      onClick={this.showDetail.bind(this, recipe._id)}
                    />
                  </div>
                  <div className="caption card-body">
                    <h4 className="group card-title inner list-group-item-heading">
                      {recipe.name}
                    </h4>
                    <p className="group inner list-group-item-text limit_p">
                      {recipe.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          /> */}
        </div>
      </div>
    );
  }
}
