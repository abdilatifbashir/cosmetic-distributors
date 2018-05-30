import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col s4">
            <img
              src="resources/css/img/logo.png"
              className="logo"
              alt="haba logo"
            />
          </div>
          <div className="col s4">
            <p className="head-sect">
              order now get it faster&nbsp;&nbsp;&nbsp;
              <span>
                <i className="fa fa-car" style={{ fontSize: "20px" }} />
              </span>
            </p>
          </div>
          <div className="col s4">
            <p className="head-sect">
              <i className="fa fa-phone" />&nbsp;&nbsp;&nbsp;+254712048306
            </p>
          </div>
        </div>
        <div className="row">
          <div className="w3-bar w3-red">
            <a href="#home_data" className="w3-bar-item w3-button">
              Home
            </a>
            <a
              href="#service_data"
              className="w3-bar-item w3-button w3-hide-small"
            >
              Our service
            </a>
            <a
              href="#customer_data"
              className="w3-bar-item w3-button w3-hide-small"
            >
              Our customer
            </a>
            <a
              href="#contact_data"
              className="w3-bar-item w3-button w3-hide-small"
            >
              Our contacts
            </a>
            <a
              href=""
              className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
              onclick="myFunction()"
            >
              &#9776;
            </a>
          </div>

          <div
            id="demo"
            className="w3-bar-block w3-red w3-hide w3-hide-large w3-hide-medium"
          >
            <a href="#service_data" className="w3-bar-item w3-button">
              Our service
            </a>
            <a href="#customer_data" className="w3-bar-item w3-button">
              Our customer
            </a>
            <a href="#contact_data" className="w3-bar-item w3-button">
              Our contacts
            </a>
          </div>
        </div>
        <div className="row">
          <h3>
            Hello, we are habas,your new premium cosmetics and makeups delivery
            service. The ideal distributors of quality affordable cosmetics-hair
            product,perfumes and makeups.
          </h3>
        </div>
      </header>
    );
  }
}

export default Header;
