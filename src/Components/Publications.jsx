import React from "react";

/**
 * Publications component
 *
 * Add your publications below. You can use a list, cards, or any format you prefer.
 */
const publications = [
  {
    title: "Sample Publication Title",
    authors: "Your Name, Coauthor Name",
    journal: "Journal Name",
    year: 2025,
  link: "#",
  },
  // Add more publications here
];

const Publications = () => {
  return (
    <section className="padding" id="publications">
      <h2>Publications</h2>
      <ul style={{ textAlign: "left", fontSize: "1.1rem", margin: "2rem 3rem" }}>
        {publications.map((pub, idx) => (
          <li key={idx} style={{ marginBottom: "1.5rem" }}>
            <strong>{pub.title}</strong><br />
            <span>{pub.authors}</span><br />
            <span>
              {pub.journal} ({pub.year})
            </span><br />
            {pub.link !== "#" && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Publications;
