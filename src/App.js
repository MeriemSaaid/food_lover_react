import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

import RecipeAdd from "./components/recipes/RecipeAdd";
import RecipeList from "./components/recipes/RecipeList";
import RecipeDetail from "./components/recipes/RecipeDetail";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import ProfileEdit from "./components/user/ProfileEdit";
import Admin from "./components/user/Admin";
import ListUsers from "./components/user/ListUsers";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/add" component={RecipeAdd} />
            <Route exact path="/list/:type" component={RecipeList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profileedit" component={ProfileEdit} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/detail/:id" component={RecipeDetail} />
            <Route exact path="/listUsers" component={ListUsers} />
          </Switch>
          <footer>{<Footer />}</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
