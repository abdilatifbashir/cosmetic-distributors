import React, { Component } from "react";
import Services from "../services/Services";
import BannerGroup from "./../common/BannerGroup";
import Features from "../features/Features";

class Service extends Component {
  render() {
    return (
      <div>
        <BannerGroup title="Services" url="/service" />
        <Services />
        <Features />
      </div>
    );
  }
}

export default Service;
