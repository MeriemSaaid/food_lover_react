import React, { Component } from "react";
import axios from "axios";

export default class RecipeList extends Component {
  state = {
    recipes: []
  };

  getRecipes = async () => {
    //const { uid } = this.props.match.params;
    const res = await axios.get(`/api/recipe/list`);
    this.setState({
      recipes: res.data
    });
  };

  componentDidMount() {
    const ar = this.getRecipes();
  }
  render() {
    const { recipes } = this.state;
    // console.log(recipes);
    // let i = 0;
    // Object.keys(recipes).map(key => {
    //   i++;
    //   console.log(recipes[key].name);
    // });
    // console.log(i);
    return (
      <div className="container">
        <div id="products" className="row view-group">
          {recipes.map((recipe, i) => {
            // console.log(recipe);
            return (
              <div className="item col-xs-4 col-lg-4">
                <div className="thumbnail card">
                  <div className="img-event">
                    <img
                      className="group list-group-image img-fluid fixed_width_heigth"
                      src={recipe.picture}
                      alt=""
                    />
                  </div>
                  <div className="caption card-body">
                    <h4 className="group card-title inner list-group-item-heading">
                      {recipe.name}
                    </h4>
                    <p className="group inner list-group-item-text">
                      {recipe.description}
                    </p>

                    <div className="row">
                      {/* <div className="col-xs-12 col-md-6">
                        <p className="lead">$21.000</p>
                      </div> */}
                      {/* <div className="col-xs-12 col-md-6">
                        <a
                          className="btn btn-success"
                          href="http://www.jquery2dotnet.com"
                        >
                          Add to cart
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Object.keys(recipes).map(key =>
          {
            <div className="item col-xs-4 col-lg-4">
              <div className="thumbnail card">
                <div className="img-event">
                  <img
                    className="group list-group-image img-fluid"
                    src="https://www.cookhalaal.com/wp-content/uploads/2018/01/Grilled-Tandoori-Chicken-original.jpg"
                    alt=""
                  />
                </div>
                <div className="caption card-body">
                  <h4 className="group card-title inner list-group-item-heading">
                    Product title
                  </h4>
                  <p className="group inner list-group-item-text">
                    Product description... Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  </p>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p className="lead">$21.000</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <a
                        className="btn btn-success"
                        href="http://www.jquery2dotnet.com"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            //console.log(recipes[key].name);
          } */}
          {/* ); */}
        </div>
      </div>
    );
  }
}
