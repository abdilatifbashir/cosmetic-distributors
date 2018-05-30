import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact_data">
        <p style={{ textAlign: "center", fontSize: "200%" }}>contact us</p>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s4">
                <input id="first_name" type="text" class="validate" />
                <label class="active" for="first_name">
                  <i
                    class="fa fa-user-circle"
                    style={{ fontSize: "48px", color: "gray" }}
                  />First Name
                </label>
              </div>
              <div class="input-field col s4">
                <input id="last_name" type="text" class="validate" />
                <label class="active " for="last_name">
                  <i
                    class="fa fa-user-circle"
                    style={{ fontSize: "48px", color: "gray" }}
                  />Last Name
                </label>
              </div>
              <div class="col s4 ">
                <p>
                  <i
                    class="fa fa-map-marker-alt "
                    style={{ fontSize: "20px", color: "gray" }}
                  />&nbsp &nbsp
                  <span class="contact-info ">
                    Address:Eastleigh,5th street,ubah shopping centre
                  </span>
                </p>
                <br />
                <p>
                  <i
                    class="fa fa-phone "
                    style={{ fontSize: "20px", color: "gray" }}
                  />&nbsp &nbsp
                  <span class="contact-info ">
                    Phone:+254722140240/+254721707523
                  </span>
                </p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s4">
                <input id="email" type="email" class="validate" />
                <label class="active" for="email">
                  <span class="glyphicon">&#x2709;</span>Email
                </label>
              </div>
              <div class="input-field col s4">
                <input id="phone" type="tel" class="validate" />
                <label class="active" for="phone">
                  <i
                    class="fa fa-phone-square"
                    style={{ fontSize: "48px", color: "gray" }}
                  />telephone
                </label>
              </div>
              <div class="col s4">
                <p>
                  <i
                    class="fa fa-envelope "
                    style={{ fontSize: "20px", color: "gray" }}
                  />&nbsp &nbsp
                  <span class="contact-info ">
                    Email:habadistributors@gmail.com
                  </span>
                </p>
                <br />
                <p>
                  <i
                    class="fa fa-globe "
                    style={{ fontSize: "20px", color: "gray" }}
                  />&nbsp &nbsp
                  <span class="contact-info ">website:www.haba.com</span>
                </p>
              </div>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
