/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        background: "rgba(34,34,34,0.75)",
        width: "100vw",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 600 }}>
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "1rem",
            fontFamily: "Circular Std, Inter, sans-serif",
          }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#fff",
            fontFamily: "Circular Std, Inter, sans-serif",
            marginBottom: "2.5rem",
          }}
        >
          Feel free to reach out through any of the channels below.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img
              src={envelopeIcon}
              alt="email"
              className="socialIcon"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img
              src={devDotToIcon}
              alt="Dev.to"
              className="socialIcon"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img
              src={gitHubIcon}
              alt="GitHub"
              className="socialIcon"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="socialIcon"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className="socialIcon"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img
              src={mediumIcon}
              alt="Medium"
              className="socialIcon"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="socialIcon"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youTubeIcon}
              alt="YouTube"
              className="socialIcon"
              style={{ filter: "brightness(0.5)" }}
            />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        © 2025 {name}. All rights reserved.
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,

};

export default Footer;
