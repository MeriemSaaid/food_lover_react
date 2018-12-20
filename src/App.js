import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <Navbar />
        </header>
        <section id="intro">
          <div />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
