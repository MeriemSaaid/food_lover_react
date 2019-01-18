import React, { Component } from "react";
import axios from "axios";
import PopupDesc from "./PopupDesc";
import { Link } from "react-router-dom";

export default class RecipeList extends Component {
  state = {
    recipes: [],
    title: "",
    showPopup: false,
    query: "",
    user: [],
    type: ""
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleInputChange = async e => {
    // alert(this.props.match.params.type);
    const res = await axios.get(`/api/recipe/list/${e.target.value}`);
    // console.log(res.data);
    this.setState(
      {
        recipes: res.data
      },
      () => {
        this.filterType();
      }
    );
  };
  //Get recipes
  getRecipes = async () => {
    // const type = this.props.match.params.type;
    const res = await axios.get(`/api/recipe/list`);
    this.setState({
      recipes: res.data
    });

    this.filterType();
  };
  //Filter by category
  filterType = () => {
    this.setState({
      recipes: this.state.recipes.filter(recipe => {
        return (
          recipe.category &&
          recipe.category.toLowerCase() === this.state.type.toLowerCase()
        );
      })
    });
  };

  componentDidUpdate() {
    // Typical usage (don't forget to compare props):
    if (this.state.type !== this.props.match.params.type) {
      this.setState(
        {
          type: this.props.match.params.type
        },
        () => {
          this.getRecipes();
        }
      );
    }
  }

  async componentDidMount() {
    // console.log(this.props.type);
    const res = await this.props.loggedIn();
    // console.log(res.data);
    if (res.data === 0) {
      // console.log("not connected");
      this.props.history.push("/login");
    } else {
      this.setState(
        {
          user: res.data,
          type: this.props.match.params.type
        },
        () => {
          this.getRecipes();
        }
      );
    }
  }

  redirectAdd = e => {
    this.props.history.push({
      pathname: `/add`
    });
  };
  //Consult details
  showDetail = id => {
    this.props.history.push({
      pathname: `/detail`,
      state: { id: id }
    });
  };

  render() {
    const { recipes, user } = this.state;

    return (
      <div className="container padding_div intro-single">
        <div className="row">
          {/* <div className="col-3">&nbsp;&nbsp;</div>
          <div className="col-4">
            <h1 className="text-center">{type} RECIPES</h1>
          </div> */}
          <div className="col-md-12 col-lg-8">
            <div className="title-single-box">
              <h1 className="title-single">{this.state.type} Recipes</h1>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-box d-flex justify-content-lg-end"
            >
              {user.chef === true && (
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link to={`/add/${this.state.type}`}>Add a Recipe</Link>
                  </li>
                </ol>
              )}
            </nav>
          </div>
        </div>
        <br />
        <div className="row property-grid grid">
          <div className="col-sm-12">
            <div className="grid-option">
              <form>
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Search"
                  // ref={input => (this.search = input)}
                  onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
              </form>
            </div>
          </div>
        </div>
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
                    <p className="group inner list-group-item-text limit_p">
                      {recipe.description}
                    </p>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target={`#recipe_${recipe._id}`}
                    >
                      Read more
                    </button>
                  </div>
                </div>
                <PopupDesc recipe={recipe} />
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
        {/* <div className="row">
          <div className="col-sm-12">
            <nav className="pagination-a">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" ="#">
                    <span className="ion-ios-arrow-back" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" ="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" ="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" ="#">
                    3
                  </a>
                </li>
                <li className="page-item next">
                  <a className="page-link" ="#">
                    <span className="ion-ios-arrow-forward">next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
      </div>
    );
  }
}
