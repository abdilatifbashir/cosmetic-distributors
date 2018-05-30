import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Features />
        <Services />
        <p />
        <p />
        <div class="row">
          <h2>our customers can not live without us</h2>
          <p id="customer_data" />
        </div>
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
