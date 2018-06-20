import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section className="service-area section-gap" id="service">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-8">
              <div className="title text-center">
                <h1 className="mb-10">Our Offered Services</h1>
                <p>
                  Who are in extremely love with affordable cosmetics-hair
                  product,perfumes and makeups
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-service">
                <div className="thumb">
                  <img className="img-fluid" src="img/s1.png" alt="" />
                </div>
                <div className="detail">
                  <a href="#">
                    <h4>Ready in 20 minutes</h4>
                  </a>
                  <p>
                    you are only 20 minutes away from your natural and super
                    healthy cosmetics delivered right to your shop.we ensure
                    that you are 100% happy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="img/100-Natural-Logo.png"
                    alt=""
                  />
                </div>
                <div className="detail">
                  <a href="#">
                    <h4>100% organic</h4>
                  </a>
                  <p>
                    All our cosmetics are fresh natural.Good for your health,the
                    environment and smell good.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service">
                <div className="thumb">
                  <img className="img-fluid" src="img/s3.png" alt="" />
                </div>
                <div className="detail">
                  <a href="#">
                    <h4>Quality Cosmetics Delivered</h4>
                  </a>
                  <p>
                    We dont limit your choice and creativity which means you can
                    order within our range of quality cosmetic products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
