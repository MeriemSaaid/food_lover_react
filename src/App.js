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
import Chef from "./components/user/Chef";
import ChefDetail from "./components/user/ChefDetail";
import axios from "axios";

// import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    logged: false
  };

  // changeType = type => {
  //   // this.setState({
  //   //   recipeType: type
  //   // });
  //   this.props.history.push('/list/${type}');
  // };
  loggedIn = () => {
    return axios.post("/api/loggedIn");
  };
  async componentDidMount() {
    const res = await this.loggedIn();
    // console.log(res.data);
    if (res.data === 0) {
      // console.log("not connected");
      this.setState({
        logged: false
      });
    } else {
      this.setState({
        logged: true
      });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar
            // changeType={this.changeType}
            logged={this.state.logged}
            loggedIn={this.loggedIn}
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profileedit" component={ProfileEdit} />
            <Route exact path="/admin" component={Admin} />
            {/* <Route exact path="/detail" component={RecipeDetail} /> */}

            <Route
              exact
              path="/detail"
              render={props => (
                <RecipeDetail
                  {...props}
                  // type={this.state.recipeType}
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
                <ChefDetail
                {...props}
              loggedIn={this.loggedIn}/>
              )}
            />
          </Switch>
          <footer>{<Footer />}</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
