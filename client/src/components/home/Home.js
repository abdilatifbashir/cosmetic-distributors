import React, { Component } from "react";
import Banner from "./banner/Banner";
import Services from "./../services/Services";
import Galery from "./galery/Galery";
import Features from "../features/Features";

class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Services />
        <Features />
        <Galery />
      </div>
    );
  }
}

export default Home;
