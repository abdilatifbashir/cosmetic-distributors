import React, { Component } from "react";
import BannerGroup from "./../common/BannerGroup";
import Services from "../services/Services";

class About extends Component {
  render() {
    return (
      <div>
        <BannerGroup title="About" url="/about" />
        <section className="about-top-area section-gap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 about-top-left">
                <h1>
                  Everything <br />
                  You can imagine <br />
                  is right here
                </h1>
                <p>
                  All our cosmetics are fresh natural.Good for your health,the
                  environment and smell good. We dont limit your choose &
                  creativity,which means you can order anything you feel like.
                </p>
              </div>
              <div className="col-lg-6 about-top-right">
                <img className="img-fluid" src="img/pages/at.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <Services />
      </div>
    );
  }
}

export default About;
