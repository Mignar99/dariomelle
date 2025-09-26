import React from "react";

/**
 * Publications component
 *
 * Add your publications below. You can use a list, cards, or any format you prefer.
 */
const publications = [
  {
    title: "Heavy Quark Decays in the Bilepton Model",
    authors: "Gennaro Corcella, Claudio Corianò, Paul H. Frampton, Dario Melle",
    journal: "e-Print: 2507.12556 [hep-ph]",
    year: 2025,
    link: "https://arxiv.org/abs/2507.12556"
  },
  {
    title: "Gravitational Form Factors and the QCD Dilaton at Large Momentum Transfer",
    authors: "Claudio Corianò, Stefano Lionetti, Dario Melle, Riccardo Tommasi, Leonardo Torcellini",
    journal: "e-Print: 2504.20884 [hep-ph]",
    year: 2025,
    link: "https://arxiv.org/abs/2504.20884"
  },
  {
    title: "A dilaton sum rule for the conformal anomaly form factor in QCD at order $\\alpha _s$",
    authors: "Claudio Corianò, Stefano Lionetti, Dario Melle, Leonardo Torcellini",
    journal: "Eur.Phys.J.C 85 (2025) 9, 983",
    year: 2025,
    link: "https://doi.org/10.1140/epjc/s10052-025-14686-w"
  },
  {
    title: "Topological sum rules and spectral flows of chiral and gravitational axionlike interactions",
    authors: "Claudio Corianò, Stefano Lionetti, Dario Melle",
    journal: "Phys.Rev.D 112 (2025) 1, 015031",
    year: 2025,
    link: "https://doi.org/10.1103/qd7t-4dhl"
  },
  {
    title: "The 33311 left-right bilepton model",
    authors: "Claudio Corianò, Paul H. Frampton, Dario Melle",
    journal: "Phys.Lett.B 866 (2025), 139498",
    year: 2025,
    link: "https://doi.org/10.1016/j.physletb.2025.139498"
  },
  {
    title: "The gravitational form factor of the pion and proton and the conformal anomaly",
    authors: "Claudio Corianò, Stefano Lionetti, Dario Melle, Riccardo Tommasi",
    journal: "EPJ Web Conf. 314 (2024), 00030",
    year: 2024,
    link: "https://doi.org/10.1051/epjconf/202431400030"
  },
  {
    title: "Conformal Backreaction, Chiral and Conformal Anomalies in the Early Universe",
    authors: "Claudio Corianò, Stefano Lionetti, Dario Melle, Riccardo Tommasi, Leonardo Torcellini",
    journal: "e-Print: 2409.18004 [astro-ph.CO]",
    year: 2024,
    link: "https://arxiv.org/abs/2409.18004"
  },
  {
    title: "The gravitational form factors of hadrons from CFT in momentum space and the dilaton in perturbative QCD",
    authors: "Claudio Corianò, Stefano Lionetti, Dario Melle, Riccardo Tommasi",
    journal: "Eur.Phys.J.C 85 (2025) 5, 498",
    year: 2025,
    link: "https://doi.org/10.1140/epjc/s10052-025-14104-1"
  },
  {
    title: "The SU(3)C × SU(3)L × U(1)X (331) Model: Addressing the Fermion Families Problem within Horizontal Anomalies Cancellation",
    authors: "Claudio Corianò, Dario Melle",
    journal: "Entropy 26 (2024) 5, 420",
    year: 2024,
    link: "https://doi.org/10.3390/e26050420"
  },
  {
    title: "Axion-Like Interactions and CFT in Topological Matter, Anomaly Sum Rules and the Faraday Effect",
    authors: "Claudio Corianò, Mario Cretì, Stefano Lionetti, Dario Melle, Riccardo Tommasi",
    journal: "Adv.Phys.Res. 4 (2025) 7, 2400043, Adv.Phys.Res. (2024)",
    year: 2025,
    link: "https://doi.org/10.1002/apxr.202400043"
  },
  {
    title: "An SU(15) approach to bifermion classification",
    authors: "Claudio Corianò, Paul H. Frampton, Dario Melle, Thomas W. Kephart, Tzu-Chiang Yuan",
    journal: "Mod.Phys.Lett.A 38 (2023) 26n27, 2350124",
    year: 2023,
    link: "https://doi.org/10.1142/S0217732323501249"
  },
];

const Publications = () => {
  return (
    <section className="padding" id="publications" style={{ color: "#fff", background: "#222", borderRadius: "1rem" }}>
      <h2 style={{ color: "#fff" }}>Publications</h2>
      <p style={{ fontSize: "1.15rem", margin: "1.5rem 3rem 2rem 3rem", color: "#eee" }}>
        My research lies at the intersection of conformal field theory and quantum chromodynamics (QCD), with a particular focus on next-to-leading order (NLO) corrections to the gravitational form factors of hadrons. I am also deeply interested in physics beyond the Standard Model, especially in exploring the phenomenology of the 331 Model.
      </p>
      <ul style={{ textAlign: "left", fontSize: "1.1rem", margin: "2rem 3rem", color: "#fff" }}>
        {publications.map((pub, idx) => (
          <li key={idx} style={{ marginBottom: "1.5rem", color: "#fff" }}>
            <strong style={{ color: "#fff" }}>{pub.title}</strong><br />
            <span style={{ color: "#fff" }}>{pub.authors}</span><br />
            <span style={{ color: "#fff" }}>
              {pub.journal} ({pub.year})
            </span><br />
            {pub.link !== "#" && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-readmore-btn" style={{ color: "#fff" }}>
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
