import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({ title, url }) => {
  return (
    <section className="banner-area relative" id="home">
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="about-content col-lg-12">
            <h1 className="text-white">{title}</h1>
            <p className="text-white link-nav">
              <a href="/">Home </a> <span className="lnr lnr-arrow-right" />{" "}
              <Link to={url}> {title}</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Banner;
