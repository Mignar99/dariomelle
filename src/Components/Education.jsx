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
    ]
  },
  {
    degree: "POST GRADUATE MASTER’S DEGREE in Applied Artificial Intelligence",
    institution: "University of Salento",
    location: "Lecce, Italy",
    period: "Jan 2025 ‑ Jan 2026 (Ongoing)",
    details: [
      "Focused on machine learning, deep learning, data analysis, and big data.",
      "Final grade: 70/70 with honors."
    ]
  },
  {
    degree: "POSTGRADUATE MASTER’S DEGREE (Honors Program)",
    institution: "ISUFI (University Institute of Interdisciplinary Education)",
    location: "Lecce, Italy",
    period: "Oct 2018 ‑ May 2023",
    details: [
      "Honors program for top students, offering interdisciplinary exams, language training, and a merit‑based scholarship including accommodation."
    ]
  },
  {
    degree: "M.S. in Theoretical Physics",
    institution: "University of Salento",
    location: "Lecce, Italy",
    period: "Apr 2021 ‑ Sep 2022",
    details: [
      "Final grade: 110/110 with honors.",
      "Recipient of a competitive merit‑based scholarship covering tuition, accommodation, and a monthly stipend, successfully renewed for the entire M.S. program."
    ]
  },
  {
    degree: "B.S. in Physics",
    institution: "University of Salento",
    location: "Lecce, Italy",
    period: "Oct 2017 ‑ Feb 2021",
    details: [
      "Final grade: 110/110 with honors.",
      "Awarded a merit‑based scholarship (granted to the top 1% of students) providing full tuition coverage, accommodation, and a monthly stipend for the entire B.S. program."
    ]
  }
];

const Education = () => (
  <section className="padding" id="education">
    <h2>Education</h2>
    <div style={{ margin: "2rem auto", maxWidth: "900px" }}>
      {educationData.map((edu, idx) => (
        <div key={idx} style={{ marginBottom: "2.5rem", padding: "1.5rem", background: "#f8f8f8", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>{edu.degree}</h3>
          <strong>{edu.institution}</strong> — <span>{edu.location}</span><br />
          <span style={{ fontStyle: "italic", color: "#555" }}>{edu.period}</span>
          <ul style={{ marginTop: "1rem", marginBottom: 0 }}>
            {edu.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
