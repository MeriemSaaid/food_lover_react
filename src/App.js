import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import RecipeAdd from "./components/recipes/RecipeAdd";
import RecipeList from "./components/recipes/RecipeList";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import Profile2 from "./components/user/Profile2";
import ProfileEdit from "./components/user/ProfileEdit";
import Admin from "./components/user/Admin";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
            <Route exact path="/list" component={RecipeList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile2" component={Profile2} />
            <Route exact path="/profileedit" component={ProfileEdit} />
            <Route exact path="/admin" component={Admin} />
          </section>
          {/* </Switch> */}
          <footer>
            {/* <Footer /> */}
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
