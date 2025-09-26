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
      <div style={{ flex: 1, textAlign: "center", padding: "3rem 2rem" }}>
        <img src={image} alt={imageAltText} style={{ maxWidth: "350px", width: "100%", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }} />
      </div>
      <div style={{ flex: 1, textAlign: "left", padding: "3rem 2rem" }}>
        <h1
          style={{ color: "#333", fontWeight: 700, fontFamily: "Circular Std, Inter, sans-serif" }}
        >
          {name}
        </h1>
        <h2
          style={{ color: "#333", fontWeight: 400, fontFamily: "Circular Std, Inter, sans-serif" }}
        >
          {title}
        </h2>
        <div style={{ marginTop: "2rem", display: "flex", gap: "2rem", alignItems: "center" }}>
          <a href="#about" style={{ display: "inline-block" }}>
            <img
              src={arrowSvg}
              style={{
                height: "3rem",
                width: "3rem",
                filter:
                  "invert(54%) sepia(32%) saturate(1042%) hue-rotate(7deg) brightness(92%) contrast(90%)",
              }}
              alt={imageAltText}
            />
          </a>
          <a
            href="https://mignar99.github.io/dariomelle/DarioMelleResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              background: "#B58A61",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontFamily: "Circular Std, Inter, sans-serif",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "background 0.2s",
            }}
          >
            My Resume
          </a>
        </div>
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
