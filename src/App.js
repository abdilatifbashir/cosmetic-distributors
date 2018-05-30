import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Services from "./components/services/Services";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Features />
        <Services />
      </div>
    );
  }
}

export default App;
