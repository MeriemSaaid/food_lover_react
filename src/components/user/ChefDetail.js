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
    console.log(this.handleCheck(follower));
    return (
      <div className="container padding_div">
        <div className="detail">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="tab-pane active" id="pic-1">
                <img src="http://placekitten.com/400/252" />
              </div>
            </div>
            <div className="details col-md-6">
              <h4 className="price">
                First name: <span>{chef.firstname}</span>
              </h4>
              <h4 className="price">
                Last name: <span>{chef.lastname}</span>
              </h4>
              <h4 className="price">
                Email: <span>{chef.email}</span>
              </h4>
              <h4 className="price">
                Publications: <span>{recipes.length}</span>
              </h4>
              <h4 className="price">
                Followers: <span>{followers.length}</span>
              </h4>
              <div className="action">
                {!this.handleCheck(follower) && (
                  <button
                    className="add-to-cart btn btn-default"
                    type="button"
                    onClick={this.addfollow.bind(this, follower, chef._id)}
                  >
                    Follow
                  </button>
                )}
                &nbsp;
                {this.handleCheck(follower) && (
                  <button
                    className="add-to-cart btn btn-default"
                    type="button"
                    onClick={this.Unfollow.bind(this, follower, chef._id)}
                  >
                    UnFollow
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <section className="col-xs-12 col-sm-6 col-md-12"> */}
        {recipes.map((recipe, i) => {
          // console.log(recipe);
          return (
            <div className="search-result row" key={recipe._id}>
              <div className="col-xs-12 col-sm-12 col-md-3">
                {/* <Link to="#" alt={recipe.name} className="thumbnail"> */}
                <img
                  src={recipe.picture}
                  alt={recipe.name}
                  className="thumbnail fixed_width_heigth_chef_detail cursor_pointer"
                  onClick={this.showDetail.bind(this, recipe._id)}
                  //   className="cursor_pointer"
                />
                {/* </Link> */}
              </div>

              <div className="col-xs-12 col-sm-12 col-md-7 excerpet">
                <h3
                  onClick={this.showDetail.bind(this, recipe._id)}
                  className="cursor_pointer"
                >
                  {recipe.name}
                </h3>
                <p className="limit_p_detail">{recipe.description}</p>
                {/* <span className="plus">
                <a href="#" title="Lorem ipsum">
                  <i className="glyphicon glyphicon-plus" />
                </a>
              </span> */}
              </div>
              <span className="clearfix borda" />
            </div>
          );
        })}
        {/* </section> */}
      </div>
    );
  }
}
