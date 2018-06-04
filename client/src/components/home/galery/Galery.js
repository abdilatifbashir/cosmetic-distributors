import React, { Component } from "react";

class Galery extends Component {
  render() {
    return (
      <section class="galery-area section-gap" id="gallery">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="menu-content pb-70 col-lg-8">
              <div class="title text-center">
                <h1 class="mb-10">Latest From Our Gallery</h1>
                <p>
                  Dedicated to offering quality service with the speed,
                  reliability and value you deserve
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <a href="img/gallery/cos1.jpg" class="single-gallery">
                <img class="img-fluid" src="img/gallery/cos1.jpg" alt="" />
              </a>
            </div>
            <div class="col-lg-4 col-md-4">
              <a href="img/gallery/cos2.jpg" class="single-gallery">
                <img class="img-fluid" src="img/gallery/cos2.jpg" alt="" />
              </a>
            </div>
            <div class="col-lg-4 col-md-4">
              <a href="img/gallery/cos3.jpg" class="single-gallery">
                <img class="img-fluid" src="img/gallery/cos3.jpg" alt="" />
              </a>
            </div>
            <div class="col-lg-4 col-md-4">
              <a href="img/gallery/cos4.jpg" class="single-gallery">
                <img class="img-fluid" src="img/gallery/cos4.jpg" alt="" />
              </a>
            </div>
            <div class="col-lg-4 col-md-4">
              <a href="img/gallery/cos5.jpg" class="single-gallery">
                <img class="img-fluid" src="img/gallery/cos5.jpg" alt="" />
              </a>
            </div>
            <div class="col-lg-4 col-md-4">
              <a href="img/gallery/cos6.png" class="single-gallery">
                <img class="img-fluid" src="img/gallery/cos6.png" alt="" />
              </a>
            </div>
            <div class="col-lg-4 col-md-4">
              <a href="img/gallery/cos8.jpg" class="single-gallery">
                <img class="img-fluid" src="img/gallery/cos8.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Galery;
