import React from 'react';

/**
 * Gawaahon Ke Bayaan (Witness Statements)
 * Statements from school friends testifying against Kaustya's daily antics.
 */
export function Witnesses({ witnesses }) {
  return (
    <section id="witnesses" className="section" aria-labelledby="witnesses-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">TESTIMONIES UNDER OATH</span>
          <h2 id="witnesses-title" className="section-title">🗣️ Gawaahon Ke Bayaan</h2>
          <p className="section-desc">
            Geeta par haath rakh kar doston dwara diye gaye dil hilane wale bayaan. Aise dost ho toh dushman ki kya zaroorat!
          </p>
        </div>

        <div className="witness-grid">
          {witnesses.map((w) => (
            <article key={w.id} className="witness-card">
              {w.badge && <span className="witness-badge-tag">{w.badge}</span>}
              <div>
                <h3 className="witness-name">{w.name}</h3>
                <p className="witness-relation">{w.relation}</p>
              </div>
              <blockquote className="witness-text">
                "{w.text}"
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Witnesses;
