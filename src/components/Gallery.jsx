import React, { useState } from 'react';
import Lightbox from './Lightbox';

/**
 * Saboot Gallery (Evidence Gallery Grid)
 * Displays photo evidence cards with captions and opens full-screen Lightbox.
 */
export function Gallery({ photos }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="section" aria-labelledby="gallery-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">CCTV & FORENSIC PROOF</span>
          <h2 id="gallery-title" className="section-title">📸 Saboot Gallery</h2>
          <p className="section-desc">
            Court ke samaksh pesh kiye gaye 18 ajeebogareeb photographic saboot. Click karke full screen mein dekh kar sar pe hath rakhein!
          </p>
        </div>

        <div className="gallery-grid" role="list">
          {photos.map((photo, index) => (
            <article
              key={index}
              className="gallery-card"
              role="listitem"
              tabIndex={0}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`Open Exhibit ${index + 1}`}
            >
              <div className="gallery-img-wrap">
                <img
                  src={photo.src}
                  alt={photo.alt || photo.caption}
                  loading="lazy"
                  className="gallery-img"
                  onError={(e) => {
                    // Graceful fallback if image is missing
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `
                      <div style="display:flex;align-items:center;justify-content:center;height:100%;font-weight:700;color:#1B1030;text-align:center;padding:1rem;background:#FFE3E3;">
                        🚨 Exhibit Under CBI Seizure
                      </div>
                    `;
                  }}
                />
              </div>
              <p className="gallery-caption">{photo.caption}</p>
            </article>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={selectedIndex}
          onClose={closeLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}

export default Gallery;
