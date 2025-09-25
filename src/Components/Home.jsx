/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me.jpg";

const imageAltText = "Photo of Dario Melle";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh", background: "#f5f5f5" }}>
      <div style={{ flex: 1, textAlign: "left", padding: "3rem 2rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <div style={{ marginTop: "2rem" }}>
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
        </div>
      </div>
      <div style={{ flex: 1, textAlign: "center", padding: "3rem 2rem" }}>
        <img src={image} alt={imageAltText} style={{ maxWidth: "350px", width: "100%", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
