import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container header-top">
          <div className="row">
            <div className="col-6 top-head-left">
              <ul>
                <li>
                  <Link to="#">
                    <i className="fa fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-dribbble" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-behance" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 top-head-right">
              <ul>
                <li>
                  <span className="text-italic text-white">
                    Order now get it faster at{" "}
                  </span>
                  <a href="tel:+254 712 048 306">
                    <span>+254712048306</span>{" "}
                    <span className="lnr lnr-phone-handset" />
                  </a>
                </li>
                {/* <li>
                  <Link to="#">Register / Login</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <Link to="/">
                {/* <img src="img/logo.png" alt="" title="" /> */}
                <h3 className="text-white">Haba</h3>
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  {/* <a href="/">Home</a> */}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            {/* <!-- #nav-menu-container -->		    		 */}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
