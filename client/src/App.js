import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <div>
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
