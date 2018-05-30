import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    return (
      <section className="testimonials">
        <div className="row">
          <div className="col span-1-of-3">
            <blockquote>
              I love your perfume ranges! I am using them all the time and it`s
              smell brings back my confidence. I am your biggest fan
              <cite>
                <img
                  src="resources/images/abdilatif.jpg"
                  className="happy-customer"
                />Bongani Sizwe, South Africa{" "}
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-3">
            <blockquote>
              i thank HABA COSMETICS for providing good and quality customer
              service ,it makes us feel good.
              <cite>
                <img
                  src="resources/images/latifo.jpeg"
                  className="happy-customer"
                />Jane Njorege{" "}
              </cite>
            </blockquote>
          </div>
          <div className="col span-1-of-3">
            <blockquote>
              My skin reacts badly to so many ingreadients, yet with your
              products it seems to simply relax.
              <cite>
                <img
                  src="resources/images/abdilatif.jpg"
                  className="happy-customer"
                />Fatuma Abdullahi nairobi Eastleigh
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
