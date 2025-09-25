/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/me.jpg";

const imageAltText = "Photo of Dario Melle";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I’m a Ph.D. student in Theoretical Physics at the University of Salento, passionate about artificial intelligence and machine learning, and eager to turn that passion into my career.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web Python, C/C++, SQL, LaTeX",
  "PyTorch, Hugging Face, scikit‑learn",
  "Neo4j, Redis, ClickHouse, Pandas, Dask",
  "Git, Docker, Mathematica"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I thrive on tackling complex challenges with innovative approaches. By combining my background in theoretical physics with hands-on experience in AI, machine learning, and data systems, I aim to create solutions that are both powerful and accessible.";

const About = () => {
  return (
    <section className="padding" id="about">
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "4rem",
        margin: "3rem auto",
        maxWidth: "1000px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        borderRadius: "1rem"
      }}>
        <div style={{ flex: 1, textAlign: "left", paddingRight: "2rem" }}>
          <h2>About Myself</h2>
          <p className="large">{description}</p>
          <hr />
          <ul
            style={{
              textAlign: "left",
              columns: 2,
              fontSize: "1.25rem",
              margin: "2rem 0",
              gap: "3rem",
            }}
          >
            {skillsList.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <hr />
          <p style={{ padding: "1rem 0 0" }}>{detailOrQuote}</p>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src={image}
            alt={imageAltText}
            style={{
              maxWidth: "300px",
              width: "100%",
              borderRadius: "1rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
