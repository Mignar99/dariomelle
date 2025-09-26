/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem 2vw",
        top: 0,
        width: "100%",
        zIndex: 10,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <a
        href="#home"
        style={{
          fontWeight: 700,
          fontSize: "1.25rem",
          fontFamily: "Circular Std, Inter, sans-serif",
          color: "#333",
        }}
      >
        Dario Melle
      </a>
      <div style={{ display: "flex", gap: "1.25rem", justifyContent: "flex-end", flex: 1}}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#industry">Industry</a>
        <a href="#education">Education</a>
        <a href="#publications">Publications</a>
        <a href="#personal-projects">Personal Projects</a>
        <a href="#footer">Contact</a>
        <span style={{ visibility: "hidden", marginLeft: "0.75rem" }}>&nbsp;</span>
        <span style={{ visibility: "hidden", marginLeft: "0.75rem" }}>&nbsp;</span>
      </div>
    </div>
  );
};

export default Header;
