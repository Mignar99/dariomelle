import React from "react";

const educationData = [
  {
    degree: "PH.D in Theoretical Physics",
    institution: "University of Salento",
    location: "Lecce, Italy",
    period: "Feb 2023 ‑ Feb 2026 (Ongoing)",
    details: [
      "11 peer‑reviewed publications in leading journals; full list available on InspireHEP",
      "Presented research at international conferences: 2 talks and 1 poster.",
      "Mentored a fellow PhD student, introducing them to the group’s research and methods."
    ],
  },
  {
    degree: "POST GRADUATE MASTER’S DEGREE in Applied Artificial Intelligence",
    institution: "University of Salento",
    location: "Lecce, Italy",
    period: "Jan 2025 ‑ Jan 2026 (Ongoing)",
    details: [
      "Focused on machine learning, deep learning, data analysis, and big data.",
      "Final grade: 70/70 with honors."
    ],
  },
  {
    degree: "POSTGRADUATE MASTER’S DEGREE (Honors Program)",
    institution: "ISUFI (University Institute of Interdisciplinary Education)",
    location: "Lecce, Italy",
    period: "Oct 2018 ‑ May 2023",
    details: [
      "Honors program for top students, offering interdisciplinary exams, language training, and a merit‑based scholarship including accommodation."
    ],
  },
  {
    degree: "M.S. in Theoretical Physics",
    institution: "University of Salento",
    location: "Lecce, Italy",
    period: "Apr 2021 ‑ Sep 2022",
    details: [
      "Final grade: 110/110 with honors.",
      "Recipient of a competitive merit‑based scholarship covering tuition, accommodation, and a monthly stipend, successfully renewed for the entire M.S. program."
    ],
  },
  {
    degree: "B.S. in Physics",
    institution: "University of Salento",
    location: "Lecce, Italy",
    period: "Oct 2017 ‑ Feb 2021",
    details: [
      "Final grade: 110/110 with honors.",
      "Awarded a merit‑based scholarship (granted to the top 1% of students) providing full tuition coverage, accommodation, and a monthly stipend for the entire B.S. program."
    ],
  }
];

const Education = () => (
  <section className="padding" id="education">
    <div
      style={{
        backgroundColor: "white",
        width: "60%",
        padding: "4rem",
        margin: "3rem auto",
        textAlign: "justify",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        borderRadius: "1.25rem",
      }}
    >
      <h2 style={{ color: "#333", fontWeight: 700, marginBottom: "2rem" }}>Education</h2>
      <div
        style={{
          marginBottom: "2.5rem",
          padding: "2rem 1.5rem",
          background: "#f8f8f8",
          borderRadius: "1rem",
          textAlign: "center",
          color: "#2e2e2eff",
        }}
      >
        My academic journey began with a strong foundation in physics, where I learned to break down
        complex problems into manageable pieces and build solutions step by step.<br />
        I earned both my BSc and MSc in Physics with honors, supported by an ISUFI scholarship that
        also gave me the opportunity to pursue additional interdisciplinary and language courses.<br />
        I went on to complete a second-level master’s degree at ISUFI, also with honors, before
        pursuing a PhD in Theoretical Physics.<br />
        During my doctoral studies, I published 11 peer-reviewed papers, presented at conferences,
        and collaborated with leading experts in the field.<br />
        Alongside my PhD, I began a second-level master’s in Applied Artificial Intelligence, which
        I am now finalizing with an internship at GraphAware.
      </div>
      {educationData.map((edu, idx) => (
        <div
          key={idx}
          style={{
            marginBottom: "2.5rem",
            padding: "2rem 1.5rem",
            background: "#f8f8f8",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            textAlign: "left",
            color: "#333",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem", color: "#333" }}>{edu.degree}</h3>
          <strong>{edu.institution}</strong> — <span style={{ color: "#222" }}>{edu.location}</span>
          <br />
          <span style={{ fontStyle: "italic", color: "#555" }}>{edu.period}</span>
          <ul style={{ marginTop: "1rem", marginBottom: 0, paddingLeft: "1.5rem" }}>
            {edu.details.map((detail, i) => (
              <li key={i} style={{ color: "#222" }}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
