import React, { Component } from "react";
import BannerGroup from "./../common/BannerGroup";
import Services from "../services/Services";

class Contact extends Component {
  render() {
    return (
      <div>
        <BannerGroup title="Contact" url="/contact" />
        <section className="contact-page-area section-gap">
          <div className="container">
            <div className="row">
              {/* <div className="map-wrap" style={{width:"100%", height: "445px"}} id="map"></div> */}
              <div className="col-lg-4 d-flex flex-column address-wrap">
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-home" />
                  </div>
                  <div className="contact-details">
                    <h5>Eastleigh</h5>
                    <p>5th street,ubah shopping centre</p>
                  </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-phone-handset" />
                  </div>
                  <div className="contact-details">
                    <h5>+254 722 140 240 / +254 721 707 523</h5>
                    <p>Mon to Fri 9am to 6 pm</p>
                  </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                  <div className="icon">
                    <span className="lnr lnr-envelope" />
                  </div>
                  <div className="contact-details">
                    <h5>habadistributors@gmail.com</h5>
                    <p>Send us your query anytime!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <form className="form-area contact-form text-right">
                  <div className="row">
                    <div className="col-lg-6 form-group">
                      <input
                        name="name"
                        placeholder="Enter your name"
                        className="common-input mb-20 form-control"
                        required=""
                        type="text"
                      />

                      <input
                        name="email"
                        placeholder="Enter email address"
                        pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                        className="common-input mb-20 form-control"
                        required=""
                        type="email"
                      />

                      <input
                        name="subject"
                        placeholder="Enter your subject"
                        className="common-input mb-20 form-control"
                        required=""
                        type="text"
                      />
                      <div
                        className="mt-20 alert-msg"
                        style={{ textAlign: "left" }}
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <textarea
                        className="common-textarea form-control"
                        name="message"
                        placeholder="Messege"
                        required=""
                      />
                      <button
                        className="primary-btn mt-20 text-white"
                        style={{ float: "right" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Services />
      </div>
    );
  }
}

export default Contact;
