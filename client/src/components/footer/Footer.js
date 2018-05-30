import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="row">
          <div class="col span-1-of-2">
            <ul class="footer-nav">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">press</a>
              </li>
              <li>
                <a href="#">Android App</a>
              </li>
            </ul>
          </div>
          <div class="col span-1-of-2">
            <ul class="social-links">
              <li>
                <a href="#">
                  <i class="ion-social-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-social-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-social-googleplus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-social-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <p>copyright &copy; 2018 by habas cosmetics.All rights reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
