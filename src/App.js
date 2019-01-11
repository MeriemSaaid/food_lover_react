import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import RecipeAdd from "./components/recipes/RecipeAdd";
import RecipeList from "./components/recipes/RecipeList";
import RecipeDetail from "./components/recipes/RecipeDetail";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Switch> */}
          <header id="header">
            <Navbar />
          </header>
          <section id="main">
            <Route exact path="/add" component={RecipeAdd} />
            <Route exact path="/list/:type" component={RecipeList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/detail/:id" component={RecipeDetail} />
          </section>
          {/* </Switch> */}
          <footer>{/* <Footer /> */}</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
