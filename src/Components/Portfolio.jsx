/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

const carouselImages = [
  {
    src: require("../images/poc1.png"),
    alt: "Portfolio image 1",
  },
  {
    src: require("../images/poc2.jpg"),
    alt: "Portfolio image 2",
  },
  {
    src: require("../images/poc3.jpg"),
    alt: "Portfolio image 3",
  },
  {
    src: require("../images/poc4.jpg"),
    alt: "Portfolio image 4",
  }
];

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  const [current, setCurrent] = React.useState(0);
  const nextImage = () => setCurrent((current + 1) % carouselImages.length);
  const prevImage = () => setCurrent((current - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", position: "relative" }}>
          <button onClick={prevImage} style={{ position: "absolute", left: 0, top: "45%", background: "#007BFF", color: "#fff", border: "none", borderRadius: "50%", width: "2.5rem", height: "2.5rem", fontSize: "1.5rem", cursor: "pointer", zIndex: 2 }} aria-label="Previous image">&#8592;</button>
          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: 0,
              top: "45%",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              zIndex: 2,
            }}
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <img
            src={carouselImages[current].src}
            className="portfolio-carousel-img"
            alt={carouselImages[current].alt}
          />
          <button onClick={nextImage} style={{ position: "absolute", right: 0, top: "45%", background: "#007BFF", color: "#fff", border: "none", borderRadius: "50%", width: "2.5rem", height: "2.5rem", fontSize: "1.5rem", cursor: "pointer", zIndex: 2 }} aria-label="Next image">&#8594;</button>
          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: 0,
              top: "45%",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              zIndex: 2,
            }}
            aria-label="Next image"
          >
            &#8594;
          </button>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            {carouselImages.map((img, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: idx === current ? "#007BFF" : "#E9ECEF",
                  margin: "0 4px",
                }}
              ></span>
            ))}
          </div>
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
