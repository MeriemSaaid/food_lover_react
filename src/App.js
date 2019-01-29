import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

import RecipeAdd from "./components/recipes/RecipeAdd";
import RecipeList from "./components/recipes/RecipeList";

import RecipeDetail from "./components/recipes/RecipeDetail";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ManageRecipe from "./components/recipes/ManageRecipe";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import ProfileEdit from "./components/user/ProfileEdit";
import Admin from "./components/user/Admin";

import Chef from "./components/user/Chef";
import ChefDetail from "./components/user/ChefDetail";
import axios from "axios";

import Contact from "./components/Contact";
import About from "./components/About";

// import Home from "./components/Home";

import ListUsers from "./components/user/ListUsers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditRecipe from "./components/recipes/EditRecipe";

class App extends Component {
  state = {
    logged: false,
    loggedOut: false,
    admin: false
  };

  loggedIn = async () => {
    const res = await axios.post("/api/loggedIn");
    // console.log("not connected");
    this.setState({
      logged: !(res.data === 0),
      admin: res.data.admin
    });
    return res;
  };

  async componentDidMount() {
    await this.loggedIn();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.logged !== prevState.logged) {
  //     console.log(123);
  //     this.setState(
  //       {
  //         logged: this.props.logged
  //       },
  //       () => {
  //         console.log(this.state.logged);
  //       }
  //     );
  //   }
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar
            // changeType={this.changeType}
            logged={this.state.logged}
            loggedIn={this.loggedIn}
            admin={this.state.admin}
          />
          <Switch>
            <Route exact path="/" component={Home} />,
            {/* <Route exact path="/add" component={RecipeAdd} /> */}
            <Route
              exact
              path="/add/:type"
              render={props => (
                <RecipeAdd {...props} loggedIn={this.loggedIn} />
              )}
            />
            {/* <Route exact path="/list/:type" component={RecipeList} /> */}
            <Route
              exact
              path="/list/:type"
              render={props => (
                <RecipeList
                  {...props}
                  // type={this.state.recipeType}
                  loggedIn={this.loggedIn}
                />
              )}
            />
            {/* <Route exact path="/edit" component={EditRecipe} /> */}
            <Route
              exact
              path="/edit"
              render={props => (
                <EditRecipe
                  {...props}
                  loggedOut={this.state.loggedOut}
                  loggedIn={this.loggedIn}
                  admin={this.state.admin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  loggedOut={this.state.loggedOut}
                  loggedIn={this.loggedIn}
                />
              )}
            />
            {/* <Route exact path="/register" component={Register} /> */}
            <Route
              exact
              path="/register"
              render={props => (
                <Register
                  {...props}
                  loggedOut={this.state.loggedOut}
                  loggedIn={this.loggedIn}
                />
              )}
            />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profileedit" component={ProfileEdit} />
            <Route
              exact
              path="/admin"
              render={props => (
                <Admin
                  {...props}
                  // type={this.state.recipeType}
                  loggedIn={this.loggedIn}
                />
              )}
            />
            {/* <Route exact path="/detail" component={RecipeDetail} /> */}
            <Route
              exact
              path="/detail"
              render={props => (
                <RecipeDetail
                  {...props}
                  admin={this.state.admin}
                  loggedIn={this.loggedIn}
                />
              )}
            />
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/chef"
              render={props => (
                <Chef
                  {...props}
                  // type={this.state.recipeType}
                  loggedIn={this.loggedIn}
                />
              )}
            />
            <Route
              exact
              path="/chefdetail/:id"
              render={props => (
                <ChefDetail {...props} loggedIn={this.loggedIn} />
              )}
            />
            <Route exact path="/detail/:id" component={RecipeDetail} />
            {/* <Route exact path="/listUsers" component={ListUsers} /> */}
            <Route
              exact
              path="/listUsers"
              render={props => (
                <ListUsers {...props} admin={this.state.admin} />
              )}
            />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/managerecipe" component={ManageRecipe} /> */}
            <Route
              exact
              path="/managerecipe"
              render={props => (
                <ManageRecipe {...props} loggedIn={this.loggedIn} />
              )}
            />
          </Switch>
          <section className="section-footer">{<Footer />}</section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
