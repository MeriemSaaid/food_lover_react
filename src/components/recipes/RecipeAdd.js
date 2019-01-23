import React, { Component } from "react";
import axios from "axios";

export default class RecipeAdd extends Component {
  state = {
    userId: "",
    name: "",
    description: "",
    picture: "",
    ingredients: "",
    category: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addRecipe = async recipe => {
    // try {
    const res = await axios.post("/api/recipe", recipe);
    this.props.history.push({
      pathname: `/list/${this.state.category}`,
      // type: this.state.category,
      state: { recipe: res.data }
    });
  };
  //Fuction to submit form
  onSubmit = async e => {
    e.preventDefault();
    //Check form errors

    if (this.state.category === "") {
      await this.setState({
        errors: { category: "Category is required" }
      });
      // console.log(this.state.errors);
      return;
    }
    if (this.state.name === "") {
      await this.setState({
        errors: { name: "Name is required" }
      });
      // console.log(this.state.errors);
      return;
    }

    if (this.state.picture === "") {
      await this.setState({
        errors: { picture: "Picture is required" }
      });
      // console.log(this.state.errors.);
      return;
    }
    if (this.state.description === "") {
      await this.setState({
        errors: { description: "Description is required" }
      });
      return;
    }
    if (this.state.ingredients === "") {
      await this.setState({
        errors: { ingredients: "Ingredients is required" }
      });
      return;
    }
    const {
      userId,
      name,
      picture,
      description,
      ingredients,
      category
    } = this.state;

    const recipe = {
      userId,
      name,
      picture,
      description,
      picture,
      ingredients,
      category
    };
    // console.log(userId);
    this.addRecipe(recipe);
  };

  async componentDidMount() {
    const res = await this.props.loggedIn();
    // console.log(res.data);
    if (res.data === 0) {
      // console.log("not connected");
      this.props.history.push("/login");
    } else {
      this.setState({
        userId: res.data._id,
        category: this.props.match.params.type.toLowerCase()
      });
    }
  }
  render() {
    return (
      <div className="container margin_top padding_div">
        <form onSubmit={this.onSubmit}>
          <div className="card person-card">
            <div className="card-body">
              <img
                id="img_sex"
                className="person-img"
                src="http://www.nationalschools.com/wp-content/uploads/2016/07/ThinkstockPhotos-175004788.jpg"
                alt="Alt"
              />
              <h2 id="who_message" className="card-title">
                Your Recipe
              </h2>

              <div className="row">
                <div className="form-group col-md-2 padding_half">
                  <select
                    className="form-control"
                    name="category"
                    onChange={this.onChange}
                    defaultValue={this.props.match.params.type.toLowerCase()}
                  >
                    <option value="">Select a category</option>
                    <option value="chicken">Chicken</option>
                    <option value="pasta">Pasta</option>
                    <option value="desserts">Desserts</option>
                    <option value="pizza">Pizza</option>
                  </select>
                  {this.state.errors.category && (
                    <div className="alert alert-danger">
                      {this.state.errors.category}
                    </div>
                  )}
                </div>
                <div className="form-group col-md-5 padding_half">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Recipe Name"
                    onChange={this.onChange}
                  />
                  {/* <div id="first_name_feedback" className="invalid-feedback" /> */}
                  {this.state.errors.name && (
                    <div className="alert alert-danger">
                      {this.state.errors.name}
                    </div>
                  )}
                </div>
                <div className="form-group col-md-5 padding_half">
                  <input
                    name="picture"
                    type="text"
                    className="form-control"
                    placeholder="Picture"
                    onChange={this.onChange}
                  />
                  {/* <div id="last_name_feedback" className="invalid-feedback" /> */}
                  {this.state.errors.picture && (
                    <div className="alert alert-danger">
                      {this.state.errors.picture}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Description</h2>
                    <div className="form-group">
                      <label className="col-form-label" />
                      <textarea
                        className="form-control"
                        type="textarea"
                        name="description"
                        placeholder="Describe your recipe"
                        rows="7"
                        onChange={this.onChange}
                      />
                      {this.state.errors.description && (
                        <div className="alert alert-danger">
                          {this.state.errors.description}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">Ingredients</h2>
                    <div className="form-group">
                      <label className="col-form-label" />
                      <textarea
                        className="form-control"
                        type="textarea"
                        name="ingredients"
                        placeholder="Add Ingredients"
                        rows="7"
                        onChange={this.onChange}
                      />
                      {this.state.errors.ingredients && (
                        <div className="alert alert-danger">
                          {this.state.errors.ingredients}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="margin_top">
            <button className="btn btn-a btn-block">Submit</button>
          </div>
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}
