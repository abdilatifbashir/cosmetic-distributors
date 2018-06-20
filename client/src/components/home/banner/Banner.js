import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <section className="banner-area relative" id="home">
        <div className="overlay overlay-bg" />
        <div className="container">
          <div className="row fullscreen d-flex align-items-center justify-content-start">
            <div className="banner-content col-lg-9">
              <h6 className="text-white">Hello, we are Haba Cosmetics</h6>
              <h1 className="text-white">
<<<<<<< HEAD
                your premium cosmetics and makeups delivery service.
=======
                your new premium genuine cosmetic distributors in Kenya and East
                Africa.
>>>>>>> 9bfecef092f53c3698271b646cfc149ff426b773
              </h1>
              <p className="pt-20 pb-20 text-white">
                The ideal distributors of quality affordable cosmetics-hair
                product,perfumes and makeups.
              </p>
              <a href="#service" className="primary-btn text-uppercase">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
