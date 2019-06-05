import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Us</h6>
                <p>
                  All our cosmetics are fresh natural. Good for your health,the
                  environment and smell good. We dont limit your choose &
                  creativity,which means you can order anything you feel like.
                </p>
                <p className="footer-text">
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  Copyright &copy;<script>
                    document.write(new Date().getFullYear());
                  </script>{" "}
                  by haba cosmetics. All rights reserved | This Designed with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  {/* <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a> */}
                  {/* <a
                    href="https://alphaclicksolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Alpha Nganga
                  </a> */}
                  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </p>
              </div>
            </div>
            <div className="col-lg-5  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>Stay update with our latest</p>
                <div className="" id="mc_embed_signup">
                  <form
                    target="_blank"
                    noValidate="true"
                    className="form-inline"
                  >
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Enter Email"
                      required=""
                      type="email"
                    />
                    <button className="click-btn btn btn-default">
                      <span className="lnr lnr-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h6>Follow Us</h6>
                <p>Let us be social</p>
                <div className="footer-social d-flex align-items-center">
                  <a href="https://m.facebook.com/Haba_cosmetics-2194172697264971">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="https://www.instagram.com/haba_cosmetics">
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
