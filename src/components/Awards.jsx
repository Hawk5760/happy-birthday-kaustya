import React from 'react';

/**
 * Fake Awards & Trophies
 * 6 hilarious honorary degrees and medals awarded to Kaustya for his lifelong bakchodi.
 */
export function Awards({ awards, photos }) {
  return (
    <section id="awards" className="section" aria-labelledby="awards-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">NATIONAL HONOURS</span>
          <h2 id="awards-title" className="section-title">🎖️ Fake Awards & Trophies</h2>
          <p className="section-desc">
            Kaustya ki azeem kaabiliyat aur aalsi record ke liye pesh kiye gaye Rashtrapati samman ke barabar trophies!
          </p>
        </div>

        <div className="awards-grid">
          {awards.map((award) => {
            const photoSrc = photos[award.photoIndex]?.src || './photos/photo1.jpg';

            return (
              <article key={award.id} className="award-card">
                <span className="award-badge-top">{award.badge}</span>
                <div className="award-img-wrap">
                  <img
                    src={photoSrc}
                    alt={award.title}
                    className="award-img"
                    loading="lazy"
                  />
                </div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-citation">"{award.citation}"</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Awards;
