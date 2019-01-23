import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class RecipeDetail extends Component {
  state = {
    name: "",
    picture: "",
    description: "",
    ingredients: "",
    datePosted: "",
    username: "",
    content: "",
    recipeId: "",
    comments: [],
    editingComment: "",
    editingContent: "",
    topRecipes: [],
    user: "",
    userId: ""
  };
  //Function to get recipes
  getRecipe = async id => {
    const res = await axios.get(`/api/recipe/${id}`);
    const { name, picture, description, datePosted, ingredients } = res.data;
    // console.log(res.data.userId.username);
    // const {username } = res.data.userId.username;
    this.setState({
      name,
      picture,
      description,
      ingredients,
      username: res.data.userId.username,
      userId: res.data.userId._id,
      datePosted
    });
  };
  //Call function on load
  async componentDidMount() {
    const user = await this.props.loggedIn();
    // console.log(res.data);
    if (user.data === 0) {
      // console.log("not connected");
      this.props.history.push("/login");
    } else {
      const res = await axios.get(`/api/top`);
      this.setState({
        topRecipes: res.data
      });
      // console.log(this.state.topRecipes);

      const id = this.props.location.state.id;

      this.setState({
        recipeId: id,
        user: user.data._id
      });
      this.getRecipe(id);
      this.getComments(id);
    }
  }
  //
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //Post a comment
  postComment = async comment => {
    const res = await axios.post("/api/comment", comment);
    // console.log(res.data);
    this.setState({
      comments: [...this.state.comments, res.data],
      content: ""
    });
    const id = this.props.location.state.id;
    this.getComments(id);
  };

  //Get All comments for a recipe
  getComments = async id => {
    const res = await axios.get(`/api/comment/${id}`);
    this.setState({
      comments: res.data
    });
    console.log("this.state.comments");
  };

  //Fuction to submit form
  onSubmit = async e => {
    e.preventDefault();
    //Check form errors
    const comment = {
      content: this.state.content,
      recipeId: this.state.recipeId,
      userId: this.state.user
    };
    this.postComment(comment);
  };
  //Edit mode
  editComment = (id, val) => {
    this.setState({
      editingComment: id,
      editingContent: val
    });
  };

  //Post a comment
  updateComment = async (comment, id) => {
    //const res = await axios.put("/api/update", comment);
    await axios.put(`/api/comment`, comment);
    this.setState({
      comments: this.state.comments.map(comment => {
        if (comment._id === id) {
          comment.content = this.state.editingContent;
        }
        return comment;
      }),
      editingComment: ""
    });
    // console.log(this.state.comments[0].content);
    // this.getComments(this.state.recipeId);
  };
  //Submit comment changes
  saveChanges = async e => {
    // e.preventDefault();
    const comment = {
      content: this.state.editingContent,
      _id: this.state.editingComment
    };
    this.updateComment(comment, this.state.editingComment);
  };
  //Cancel changes
  cancel = e => {
    this.setState({
      editingComment: ""
    });
  };

  //Consult details
  showDetail = id => {
    this.getRecipe(id);
  };
  render() {
    const {
      name,
      picture,
      description,
      ingredients,
      datePosted,
      username,
      content,
      comments,
      user,
      userId
    } = this.state;

    console.log(comments);
    return (
      <div className="container padding_div">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mt-4">{name}</h1>
            <p className="lead">
              by
              <Link to={`/chefdetail/${userId}`}>&nbsp;{username}</Link>
            </p>
            <hr />
            <p>Posted on {datePosted}</p>

            <hr />

            <img className="card-img-top" src={picture} alt="rsdsd" />

            <hr />

            <h1>Description</h1>
            <pre
              className="lead font_pop"
              dangerouslySetInnerHTML={createMarkup(description)}
            />
            <h1>Ingredients</h1>

            <pre
              className="lead font_pop"
              dangerouslySetInnerHTML={createMarkup(ingredients)}
            />
            <hr />

            <div className="card my-4">
              <h5 className="card-header">Leave a Comment:</h5>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="3"
                      name="content"
                      onChange={this.onChange}
                      value={content}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {// console.log(comments)
            comments.map((comment, i) => (
              <div className="media mb-4" key={comment._id}>
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="http://placehold.it/50x50"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">
                    {comment.userId.firstname}&nbsp;{comment.userId.lastname}
                  </h5>
                  {this.state.editingComment === comment._id ? (
                    <div>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="editingContent"
                        onChange={this.onChange}
                        value={this.state.editingContent}
                      />
                      {/* </div> */}
                      <p className="text-right">
                        <br />
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={this.saveChanges}
                        >
                          Save changes
                        </button>
                        &nbsp; &nbsp;
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={this.cancel}
                        >
                          Cancel
                        </button>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>{comment.content}</p>
                      {comment.userId._id === user && (
                        <p className="text-right">
                          <button
                            type="button"
                            className="btn btn-default btn-sm"
                            onClick={this.editComment.bind(
                              this,
                              comment._id,
                              comment.content
                            )}
                          >
                            <i className="fa fa-edit" /> edit
                          </button>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card my-4">
              <h5 className="card-header">Top Recipes</h5>

              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  />
                </ol>
                <div className="carousel-inner">
                  {this.state.topRecipes.map((recipe, i) => {
                    if (i === 0) {
                      return (
                        <div
                          className="carousel-item active card-body"
                          key={recipe._id}
                        >
                          <img
                            className="card-img-top fixed_size cursor_pointer"
                            src={recipe.picture}
                            alt={recipe.name}
                            onClick={this.showDetail.bind(this, recipe._id)}
                          />
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className="carousel-item card-body"
                          key={recipe._id}
                        >
                          <img
                            className="card-img-top fixed_size cursor_pointer"
                            src={recipe.picture}
                            alt={recipe.name}
                            onClick={this.showDetail.bind(this, recipe._id)}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>

            <div className="card my-4">
              <h5 className="card-header">Our videos</h5>
              <div className="card-body">
                <img
                  className="card-img-top"
                  src="https://2.bp.blogspot.com/-vvG5hMTFOro/W6RaoxdAikI/AAAAAAAAK1k/jezYdP7fvfYvt15Jv8a0agrGQE2lMU8YgCKgBGAs/s1600/MASAI-2.jpg"
                  alt="Card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// TODO: check if comments is empty
function createMarkup(description) {
  return { __html: description };
}
