import React from "react";

const industryExperience = [
  {
    role: "AI Engineer Intern — PyTorch, Transformers, Neo4j",
    company: "GraphAware",
    location: "Lecce, Italy",
    period: "Sep 2025 – Dec 2025 (Ongoing)",
    details: [
      "Fine‑tuning LLMs using cloud computing resources to convert graph database queries into html human‑readable reports.",
      "Applied PyTorch and transformer‑based architectures to improve query interpretation accuracy and usability.",
      "Collaborating with a cross‑functional team to integrate AI solutions into existing data management pipelines."
    ],
  },
  {
    role: "Professional Consultant (Freelance Contract) — Python, Hardware",
    company: "Federico II University of Naples, Department of Agricultural Sciences",
    location: "Naples, Italy",
    period: "May 2025 – Jul 2025",
    details: [
      "Designed and accomplished a measurement system to monitor CO2 and O2 production in biological systems, enabling real‑time assessment of environmental changes.",
      "Optimized system architecture, reducing costs by 30% while maintaining accuracy and reliability of data acquisition.",
      "Developed the Python pipeline for sensor integration, real‑time data processing, and visualization in a custom desktop app, supporting input from 13 sensors and improving research workflow efficiency and usability."
    ],
  }
];

const Industry = () => (
  <section className="padding" id="industry">
    <div
      style={{
        backgroundColor: "white",
        width: "60%",
        padding: "4rem",
        margin: "3rem auto",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    borderRadius: "1rem",
      }}
    >
      <h2>Industry Experience</h2>
      {industryExperience.map((exp, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "2.5rem",
            padding: "2rem 1.5rem",
            background: "#f8f8f8",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            textAlign: "left",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>
            {exp.role} @ {exp.company}
          </h3>
          <strong>{exp.location}</strong>
          <br />
          <span style={{ fontStyle: "italic", color: "#555" }}>{exp.period}</span>
          <ul style={{ marginTop: "1rem", marginBottom: 0, paddingLeft: "1.5rem" }}>
            {exp.details.map((detail, i) => (
              <li key={i} style={{ marginBottom: "0.5rem" }}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Industry;
