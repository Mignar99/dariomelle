/**
 * Personal Projects component
 *
 * Highlights some of your personal projects. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to continually add to and refine
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
    src: require("../images/poc1.jpg"),
    alt: "Personal Project image 1",
  },
  {
    src: require("../images/poc2.jpg"),
    alt: "Personal Project image 2",
  },
  {
    src: require("../images/poc3.jpg"),
    alt: "Personal Project image 3",
  },
  {
    src: require("../images/poc4.jpg"),
    alt: "Personal Project image 4",
  }
];
const carouselImages2 = [
  {
    src: require("../images/w1.jpg"),
    alt: "Personal Project image 1",
  },
  {
    src: require("../images/w2.jpg"),
    alt: "Personal Project image 2",
  },
  {
    src: require("../images/w3.jpg"),
    alt: "Personal Project image 3",
  },
  {
    src: require("../images/w4.jpg"),
    alt: "Personal Project image 4",
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

const PersonalProjects = () => {
  const [current1, setCurrent1] = React.useState(0);
  const [current2, setCurrent2] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);
  const nextImage1 = () => setCurrent1((current1 + 1) % carouselImages.length);
  const prevImage1 = () => setCurrent1((current1 - 1 + carouselImages.length) % carouselImages.length);
  const nextImage2 = () => setCurrent2((current2 + 1) % carouselImages2.length);
  const prevImage2 = () => setCurrent2((current2 - 1 + carouselImages2.length) % carouselImages2.length);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="padding" id="personal-projects">
  <h2 style={{ textAlign: "center", color: "#B58A61", fontWeight: 700 }}>Personal Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div
          style={{
            minWidth: "600px",
            minHeight: "450px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <button
              onClick={prevImage1}
              style={{
                background: "#B58A61",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "3.5rem",
                height: "3.5rem",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 2,
                marginRight: "2rem",
                marginLeft: "2.5rem",
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <img
              src={carouselImages[current1].src}
              className={`personal-projects-carousel-img${current1 === 1 ? " poc2" : ""}`}
              alt={carouselImages[current1].alt}
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                background: "#f8f9fa",
                margin: "0 1rem",
              }}
            />
            <button
              onClick={nextImage1}
              style={{
                background: "#B58A61",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "3.5rem",
                height: "3.5rem",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 2,
                marginLeft: "2rem",
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Next image"
            >
              &#8594;
            </button>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            {carouselImages.map((img, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: idx === current1 ? "#B58A61" : "#E9ECEF",
                  margin: "0 8px",
                  border: idx === current1 ? "2px solid #B58A61" : "2px solid #E9ECEF",
                  transition: "background 0.2s, border 0.2s",
                }}
              ></span>
            ))}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ color: "#1313139f", marginBottom: "1rem", paddingRight: "4rem"}}>
            {"H2Algae – Monitoring System for Hydrogen Production from Microalgae  "}<a href="https://github.com/Mignar99/data_sensor_collector"><strong>[git]</strong></a><br />{"Team Project"}
          </h3>
          <ul style={{ fontSize: "1.1rem", color: "#B58A61", lineHeight: 1.7, paddingLeft: "1.5rem", paddingRight: "4rem", textAlign: "justify"}}>
            <li style={{ color: "#222" }}>
              Designed and optimized grow and sensor chambers, integrating hardware with
              Python‑based data acquisition.
            </li>
            <li style={{ color: "#222" }}>
              Won the Makerspace Call, participated in entrepreneurial programs PDAI 2023 and Call
              for Startups 2023 and presented at Startup Day 2023.
            </li>
          </ul>
        </div>
      </div>
      
      <hr style={{ width: "100%", margin: "3rem 0", border: "1px solid #E9ECEF" }} />

      <div style={{ display: "flex", flexDirection: "row-reverse", paddingTop: "3rem" }}>
        <div
          style={{
            minWidth: "600px",
            minHeight: "450px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "4rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <button
              onClick={prevImage2}
              style={{
                background: "#B58A61",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "3.5rem",
                height: "3.5rem",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 2,
                marginRight: "2rem",
                marginLeft: "2.5rem",
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Previous image"
            >
              &#8592;
            </button>
            <img
              src={carouselImages2[current2].src}
              className={`personal-projects-carousel-img2${current2 === 1 ? " w2" : ""}`}
              alt={carouselImages2[current2].alt}
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                background: "#f8f9fa",
                margin: "0 1rem",
              }}
            />
            <button
              onClick={nextImage2}
              style={{
                background: "#B58A61",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "3.5rem",
                height: "3.5rem",
                fontSize: "2rem",
                cursor: "pointer",
                zIndex: 2,
                marginLeft: "2rem",
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Next image"
            >
              &#8594;
            </button>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            {carouselImages2.map((img, idx) => (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: idx === current2 ? "#B58A61" : "#E9ECEF",
                  margin: "0 8px",
                  border: idx === current2 ? "2px solid #B58A61" : "2px solid #E9ECEF",
                  transition: "background 0.2s, border 0.2s",
                }}
              ></span>
            ))}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            marginLeft: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ color: "#1313139f", marginBottom: "1rem", paddingLeft: "4rem"}}>
            {"Deep Learning for Geospatial Temperature Season Classification and Forecasting  "}<a href="https://github.com/Mignar99/WeatherVisionNN"><strong>[git]</strong></a>
          </h3>
          <ul style={{ fontSize: "1.1rem", color: "#B58A61", lineHeight: 1.7, paddingRight: "1.5rem", paddingLeft: "4rem", textAlign: "justify"}}>
            <li style={{ color: "#222" }}>
              Built a CNN classifier for temporal attribution, converting weather maps into a labeled month-prediction dataset reaching an accuracy of 99.32%.
            </li>
            <li style={{ color: "#222" }}>
              Developed U-Net–based forecasting models using NetCDF temperature data improving by 22% the 9 hours predictions compared to the baseline.
            </li>
            <li style={{ color: "#222" }}>
              Testing Vision Transformers to solve the same weather-map prediction problem improving by 27% the 21 hours prediction with respect to the baseline.
            </li>
          </ul>
        </div>
      </div>

     
          
    </section>

  );
};

export default PersonalProjects;
