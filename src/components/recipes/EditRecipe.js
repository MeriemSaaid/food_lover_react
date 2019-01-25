import React, { Component } from "react";
import axios from "axios";

export default class EditRecipe extends Component {
  state = {
    userId: "",
    name: "",
    description: "",
    picture: "",
    ingredients: "",
    category: "",
    recipeEdit: [],
    _id: "",
    top: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  editRecipe = async recipe => {
    // try {
    const res = await axios.put("/api/recipe", recipe);

    if (this.props.admin) {
      this.props.history.push({
        pathname: `manageRecipe`
        // type: this.state.category,
      });
    } else {
      this.props.history.push({
        pathname: `/list/${this.state.category}`,
        // type: this.state.category,
        state: { recipe: res.data }
      });
    }
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
      _id,
      name,
      picture,
      description,
      ingredients,
      category,
      top
    } = this.state;

    const recipe = {
      _id,
      name,
      picture,
      description,
      ingredients,
      category,
      top
    };
    // console.log(userId);
    this.editRecipe(recipe);
  };

  async componentDidMount() {
    const id = this.props.location.state.recipeId;
    const res = await axios.get(`/api/recipe/${id}`);
    //  this.props.loggedIn();
    this.setState({
      // userId: res.data._id,
      name: res.data.name,
      picture: res.data.picture,
      description: res.data.description,
      ingredients: res.data.ingredients,
      category: res.data.category,
      top: res.data.top,
      _id: res.data._id
    });
    console.log(this.props.admin);
  }
  render() {
    // const recipeEdit
    // const { recipeEdit } = this.state;
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
              <h2 className="card-title">Edit Your Recipe</h2>

              <div className="row">
                {this.props.admin && (
                  <div className="form-group col-md-1 padding_half">
                    <select
                      className="form-control"
                      name="top"
                      onChange={this.onChange}
                      value={this.state.top}
                      title="Top recipe"
                    >
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                )}
                <div className="form-group col-md-2 padding_half">
                  <select
                    className="form-control"
                    name="category"
                    onChange={this.onChange}
                    value={this.state.category}
                    title="Category"
                  >
                    <option value="">Select a category</option>
                    <option value="chicken">Chicken</option>
                    <option value="pasta">Pasta</option>
                    <option value="desserts">Desserts</option>
                    <option value="pizza">Pizza</option>
                  </select>
                  {this.state.errors.category && (
                    <div className="alert alert-warning">
                      {this.state.errors.category}
                    </div>
                  )}
                </div>
                <div className="form-group col-md-4 padding_half">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Recipe Name"
                    onChange={this.onChange}
                    value={this.state.name}
                    title="Recipe Name"
                  />
                  {/* <div id="first_name_feedback" className="invalid-feedback" /> */}
                  {this.state.errors.name && (
                    <div className="alert alert-warning">
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
                    value={this.state.picture}
                    title="Recipe picture"
                  />
                  {/* <div id="last_name_feedback" className="invalid-feedback" /> */}
                  {this.state.errors.picture && (
                    <div className="alert alert-warning">
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
                        value={this.state.description}
                      />
                      {this.state.errors.description && (
                        <div className="alert alert-warning">
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
                        value={this.state.ingredients}
                      />
                      {this.state.errors.ingredients && (
                        <div className="alert alert-warning">
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
