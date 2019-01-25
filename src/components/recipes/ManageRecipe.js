import React, { Component } from "react";
import axios from "axios";
export default class ManageRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  getAllRecipes = async () => {
    const res = await axios.get("/api/recipe/list");
    this.setState({
      recipes: res.data
    });
  };
  componentDidMount() {
    this.getAllRecipes();
  }

  onDelete = async id => {
    window.$(`#delete${id}`).modal("hide");
    //   Delete from database
    axios.delete("/api/recipe/delete/" + id);
    this.getAllRecipes();
  };

  redirectEdit = id => {
    this.props.history.push({
      pathname: `/edit`,
      // type: this.state.category,
      state: { recipeId: id }
    });
  };

  render() {
    const { recipes } = this.state;
    return (
      <div className="container padding_div div_center">
        <div className="row custyle">
          <div className="table-responsive">
            <table className="table table-striped custab">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Created by</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              {/* USERS' INFORMATIONS */}
              <tbody>
                {recipes.map((recipe, i) => {
                  return (
                    // RECEIVED USER DATA
                    <tr key={recipe._id}>
                      <td>{recipe.name}</td>
                      <td>
                        {recipe.userId.firstname}&nbsp;{recipe.userId.lastname}
                      </td>

                      <td className="text-center">
                        <button
                          onClick={this.redirectEdit.bind(this, recipe._id)}
                          className="btn btn-info btn-xs"
                        >
                          <i className="far fa-edit" />
                        </button>
                        {/* Delete User Button */}
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target={`#delete${recipe._id}`}
                          className="btn btn-danger btn-xs btnSpace"
                        >
                          <i className="far fa-trash-alt" />
                        </button>
                        {/* MODAL is located here! */}
                        <div
                          className="modal fade"
                          id={`delete${recipe._id}`}
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Important!</h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>
                                  Are you sure you want to{" "}
                                  <strong>delete</strong> this recipe?
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={this.onDelete.bind(this, recipe._id)}
                                  type="button"
                                  className="btn btn-danger"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
