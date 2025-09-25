import React from "react";

const industryExperience = [
  {
    role: "Machine Learning Engineer",
    company: "Tech Innovations Ltd.",
    location: "Milan, Italy",
    period: "Mar 2024 – Present",
    details: [
      "Developed and deployed machine learning models for predictive analytics in finance.",
      "Collaborated with cross-functional teams to integrate AI solutions into existing products.",
      "Led workshops and training sessions for junior engineers."
    ],
  },
  {
    role: "Data Scientist (Intern)",
    company: "DataLab Solutions",
    location: "Rome, Italy",
    period: "Jun 2023 – Feb 2024",
    details: [
      "Analyzed large datasets to extract actionable insights for healthcare clients.",
      "Built dashboards and visualizations for reporting key metrics.",
      "Automated data cleaning and preprocessing pipelines."
    ],
  }
  // Add more experiences as needed
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
