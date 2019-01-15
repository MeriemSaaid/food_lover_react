import React, { Component } from "react";
import axios from "axios";
// import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");

export default class RecipeList extends Component {
  state = {
    recipes: [],
    type: "",
    title: "",
    activePage: 15
  };
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  getRecipes = async () => {
    //const { uid } = this.props.match.params;
    const res = await axios.get(`/api/recipe/list`);
    const { type } = this.props.match.params;
    let title = "";
    if (type === "chicken") {
      title =
        "These recipes prove how many directions you can take a simple piece of chicken. Take full advantage of its tender meat with hot soups, cold salads, and easy oven-baked recipes";
    } else if (type === "pasta") {
      title =
        "Gnocchi, spaghetti, ramen, ravioli––We could keep going all day. Instead, we'll let these pasta recipes speak for themselves.";
    } else if (type === "desserts") {
      title = "Best dessert ever";
    } else if (type === "pizza") {
      title = "Best pizza ever";
    }
    this.setState({
      recipes: res.data,
      type: type.toUpperCase(),
      title: title
    });
  };

  componentDidMount() {
    this.getRecipes();
  }
  redirectAdd = e => {
    this.props.history.push({
      pathname: `/add`
    });
  };
  //Consult details
  showDetail = id => {
    this.props.history.push({
      pathname: `/detail/${id}`
    });
  };

  render() {
    const { recipes, type } = this.state;
    return (
      <div className="container padding_div">
        <div className="row">
          <div className="col-3">&nbsp;&nbsp;</div>
          <div className="col-4">
            <h1 className="text-center">{type} RECIPES</h1>
          </div>
        </div>
        <br />

        <div className="form-group row">
          <div className="col-3">&nbsp;&nbsp;</div>
          <div className="col-4">
            <select
              className="form-control"
              name="category"
              onChange={this.onChange}
            >
              <option value="">Select a category</option>
              <option value="chicken">Chicken</option>
              <option value="pasta">Pasta</option>
              <option value="dessert">Desserts</option>
              <option value="pizza">Pizza</option>
            </select>
          </div>
          <div className="col-5">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.redirectAdd}
            >
              Add recipes
            </button>
          </div>
        </div>

        <br />
        <div id="products" className="row view-group">
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
                    <p className="group inner list-group-item-text">
                      {recipe.description}
                    </p>

                    <div className="row" />
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
