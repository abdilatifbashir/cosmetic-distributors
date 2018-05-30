import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <section className="section-features" id="home_data">
        <div className="row">
          <h2 className="long-copy">
            Hello, we are Haba cosmetics,your premium cosmetics distributors.
            The ideal distributors of quality affordable cosmetics-hair
            product,perfumes and makeups.
          </h2>
        </div>
        <div className="row">
          <div className="col span-1-of-3 box">
            <i className="ion-ios-stopwatch-outline icon-big" />
            <h3>ready in 20 minutes</h3>
            <p>
              you are only 20 minutes away from your natural and super healthy
              cosmetics delivered right to your shop.we ensure that you are 100%
              happy.
            </p>
          </div>
          <div className="col span-1-of-3 box">
            <i className="ion-ios-nutrition-outline icon-big" />
            <h3>100% organic</h3>
            <p>
              All our cosmetics are fresh natural.Good for your health,the
              environment and smell good.
            </p>
          </div>
          <div className="col span-1-of-3 box">
            <i className="ion-ios-cart-outline icon-big" />
            <h3>order anything</h3>
            <p>
              we dont limit your choose and creativity,which means you can order
              anything you feel like.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
