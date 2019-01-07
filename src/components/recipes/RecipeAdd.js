import React, { Component } from "react";
import axios from "axios";

export default class RecipeAdd extends Component {
  state = {
    name: "",
    description: "",
    picture: "",
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
      pathname: `/list`,
      state: { recipe: res.data }
    });
    // } catch {
    //     this.setState(
    //         errors: {
    //             match: "Username and password are not matched"
    //         }
    //     });
    // }
  };
  //Fuction to submit form
  onSubmit = async e => {
    e.preventDefault();
    //Check form errors
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
    const { name, picture, description } = this.state;

    const recipe = {
      name,
      picture,
      description
    };
    this.addRecipe(recipe);
  };
  render() {
    return (
      <div>
        <div className="container">
          <form className="form-style" id="myForm" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>
                <b>Name</b>
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={this.onChange}
              />
            </div>
            {this.state.errors.name && (
              <div className="alert alert-danger">{this.state.errors.name}</div>
            )}
            <div className="form-group">
              <label>
                <b>Picture</b>
              </label>
              <input
                type="text"
                name="picture"
                className="form-control"
                onChange={this.onChange}
              />
            </div>
            {this.state.errors.picture && (
              <div className="alert alert-danger">
                {this.state.errors.picture}
              </div>
            )}
            <div className="form-group">
              <label>
                <b>Description</b>
              </label>
              <textarea
                rows="4"
                cols="50"
                onChange={this.onChange}
                name="description"
              />
            </div>
            {this.state.errors.description && (
              <div className="alert alert-danger">
                {this.state.errors.description}
              </div>
            )}
            <div>
              <button className="btn btn-success btn-block">Submit</button>
              <button className="btn btn-danger btn-block">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
