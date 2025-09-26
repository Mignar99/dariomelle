/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import PersonalProjects from "./Components/Portfolio";
import Publications from "./Components/Publications";
import Education from "./Components/Education";
import Industry from "./Components/Industry";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Dario Melle",
  title: "PH.D Candidate in Theoretical Physics & Machine Learning and AI Specialist",
  email: "dariomelle18@gmail.com",
  gitHub: "Mignar99",
  instagram: "",
  linkedIn: "dario-melle",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Industry />
      <Education />
      <Publications />
  <PersonalProjects />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
