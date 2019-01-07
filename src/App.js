import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import RecipeAdd from "./components/recipes/RecipeAdd";
import RecipeList from "./components/recipes/RecipeList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Switch> */}
          <header id="header">
            <Navbar />
          </header>
          <section id="about">
            <Route exact path="/add" component={RecipeAdd} />
            <Route exact path="/list" component={RecipeList} />
          </section>
          {/* </Switch> */}
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
