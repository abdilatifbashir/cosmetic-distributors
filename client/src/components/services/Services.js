import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <section className="section-service" id="service_data">
        <div>
          <p className="service-content">
            dedicated to offering quality service with the speed, reliability
            and value you deserve
          </p>
          {/* <!-- <img src="resources/images/profile.png" className="profile-img"> -->
            <!-- Start WOWSlider.com BODY section --> */}
          <div id="wowslider-container1">
            <div className="ws_images">
              <ul>
                <li>
                  <img
                    src="data1/images/cos1.jpg"
                    alt="slider_img1"
                    title="slider_img1"
                    id="wows1_0"
                  />
                </li>
                <li>
                  <img
                    src="data1/images/cos2.jpg"
                    alt="slider_img2"
                    title="slider_img2"
                    id="wows1_1"
                  />
                </li>
                <li>
                  <img
                    src="data1/images/cos3.jpeg"
                    alt="slider_img3"
                    title="slider_img3"
                    id="wows1_2"
                  />
                </li>
                <li>
                  <img
                    src="data1/images/cos4.jpg"
                    alt="slider_img4"
                    title="slider_img4"
                    id="wows1_3"
                  />
                </li>
                <li>
                  <img
                    src="data1/images/cos5.jpg"
                    alt="slider_img5"
                    title="slider_img5"
                    id="wows1_4"
                  />
                </li>
                <li>
                  <img
                    src="data1/images/cos6.png"
                    alt="slider_img6.jpg"
                    title="slider_img6.jpg"
                    id="wows1_5"
                  />
                </li>
                <li>
                  <a href="http://wowslider.net">
                    <img
                      src="data1/images/cos7.jpg"
                      alt="css slider"
                      title="slider_img7"
                      id="wows1_6"
                    />
                  </a>
                </li>
                <li>
                  <img
                    src="data1/images/cos8.jpg"
                    alt="slider_img8"
                    title="slider_img8"
                    id="wows1_7"
                  />
                </li>
              </ul>
            </div>
            <div className="ws_bullets">
              <div>
                <a href="#" title="slider_img1">
                  <span>
                    <img src="data1/tooltips/cos1.jpg" alt="slider_img1" />1
                  </span>
                </a>
                <a href="#" title="slider_img2">
                  <span>
                    <img src="data1/tooltips/cos2.jpg" alt="slider_img2" />2
                  </span>
                </a>
                <a href="#" title="slider_img3">
                  <span>
                    <img src="data1/tooltips/cos3.jpeg" alt="slider_img3" />3
                  </span>
                </a>
                <a href="#" title="slider_img4">
                  <span>
                    <img src="data1/tooltips/cos4.jpg" alt="slider_img4" />4
                  </span>
                </a>
                <a href="#" title="slider_img5">
                  <span>
                    <img src="data1/tooltips/cos5.jpg" alt="slider_img5" />5
                  </span>
                </a>
                <a href="#" title="slider_img6.jpg">
                  <span>
                    <img src="data1/tooltips/cos6.png" alt="slider_img6.jpg" />6
                  </span>
                </a>
                <a href="#" title="slider_img7">
                  <span>
                    <img src="data1/tooltips/cos7.jpg" alt="slider_img7" />7
                  </span>
                </a>
                <a href="#" title="slider_img8">
                  <span>
                    <img src="data1/tooltips/cos8.jpg" alt="slider_img8" />8
                  </span>
                </a>
              </div>
            </div>
            <div
              className="ws_script"
              style={{ position: "absolute", left: "-99%" }}
            >
              <a href="http://wowslider.net">html5 slideshow</a> by
              WOWSlider.com v8.8
            </div>
            <div className="ws_shadow" />
          </div>
          <script type="text/javascript" src="engine1/wowslider.js" />
          <script type="text/javascript" src="engine1/script.js" />
          {/* <!-- End WOWSlider.com BODY section --> */}
          <p className="service-content">
            our able team who are passionate about looking good are ready for
            you all the times, that is why we want to accomplish that goal with
            our esteem customers
          </p>
        </div>
      </section>
    );
  }
}

export default Services;
