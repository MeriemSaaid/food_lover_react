import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <div>
        <header id="header">
          <Navbar />        
        </header>
        <section id="intro">
          <div className="loginForm">
          <div className="">
          <Route exact path="/login" component={Login}/>
          </div>
          
          <Route exact path="/register" component={Register}/>
          </div>
        </section>
      </div>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;


