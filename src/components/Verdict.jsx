import React, { useState } from 'react';
import { useConfetti } from '../hooks/useConfetti';

/**
 * Birthday Celebration Component (Replaced Final Faisla)
 * Clean, high-energy Happy Birthday button with grand confetti explosion,
 * heartfelt birthday decree, and direct WhatsApp wishing button.
 */
export function Verdict({ config }) {
  const [isCelebrated, setIsCelebrated] = useState(false);
  const { fireCelebration } = useConfetti();

  const handleHappyBirthday = () => {
    setIsCelebrated(true);
    fireCelebration();
  };

  // WhatsApp wishing link construction
  const prefilledMessage = encodeURIComponent(
    `🎂 HAPPY BIRTHDAY KAUSTYA! 👑\n\nBhai janamdin ki bohot bohot badhai! Tu hum sabka sabse favourite aur jigri yaar hai!\n\nYe link dekh aur jaldi grand party ka intezaam kar: ${window.location.href}`
  );

  const whatsappUrl = config.whatsappNumber
    ? `https://api.whatsapp.com/send?phone=${config.whatsappNumber.replace(/[^0-9]/g, '')}&text=${prefilledMessage}`
    : `https://api.whatsapp.com/send?text=${prefilledMessage}`;

  return (
    <section id="birthday" className="section" aria-labelledby="birthday-title" style={{ scrollMarginTop: '60px' }}>
      <div id="verdict" aria-hidden="true" style={{ position: 'relative', top: '-60px' }} />
      <div className="content-container">
        <div className="verdict-box" style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="stamp stamp-success" style={{ fontSize: '1rem', padding: '0.4rem 1.2rem' }}>
              🎉 THE GRAND FINALE 🎉
            </span>
          </div>

          <button
            id="birthday-title"
            type="button"
            className="btn btn-pink birthday-btn-pulse"
            onClick={handleHappyBirthday}
            style={{
              fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)',
              padding: '1.1rem 2.8rem',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            aria-label="Happy Birthday Kaustya Button - Click for celebration"
          >
            🎂 HAPPY BIRTHDAY KAUSTYA! 🎉
          </button>

          <p style={{ marginTop: '0.9rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            👆 Button pe click kar aur celebration start kar!
          </p>

          {isCelebrated && (
            <div className="verdict-celebration-card" role="region" aria-live="polite">
              <span className="stamp stamp-success" style={{ marginBottom: '1rem' }}>
                🌟 OFFICIAL BIRTHDAY WISHES 🌟
              </span>

              <h3 className="verdict-wish-title">
                {config.finalWishHeadline || "HAPPY BIRTHDAY KAUSTYA! 🎂👑"}
              </h3>

              <p className="verdict-wish-desc">
                {config.finalWishText}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-teal"
                  style={{ fontSize: '1.05rem', padding: '0.85rem 1.8rem' }}
                >
                  📱 SEND WISHES ON WHATSAPP
                </a>

                <button
                  type="button"
                  className="btn btn-white"
                  onClick={fireCelebration}
                >
                  🎊 AUR CONFETTI UDAO!
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Verdict;
