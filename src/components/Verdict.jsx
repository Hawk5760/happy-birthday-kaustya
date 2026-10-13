import React, { useState } from 'react';
import { useConfetti } from '../hooks/useConfetti';

/**
 * Final Faisla (Court Verdict) Component
 * Supreme Court verdict announcement, "Faisla Sunao" button with grand confetti,
 * and direct WhatsApp wishing button with prefilled message.
 */
export function Verdict({ config }) {
  const [isAnnounced, setIsAnnounced] = useState(false);
  const { fireCelebration } = useConfetti();

  const handleAnnounceVerdict = () => {
    setIsAnnounced(true);
    fireCelebration();
  };

  // WhatsApp wishing link construction
  const prefilledMessage = encodeURIComponent(
    `🎂 HAPPY BIRTHDAY KAUSTYA! 👑\n\nBhai court ne faisla suna diya hai: Tu 100% harami aur hum sabka favourite dost hai!\n\nYe link dekh aur turant grand party ka intezaam kar: ${window.location.href}`
  );

  const whatsappUrl = config.whatsappNumber
    ? `https://api.whatsapp.com/send?phone=${config.whatsappNumber.replace(/[^0-9]/g, '')}&text=${prefilledMessage}`
    : `https://api.whatsapp.com/send?text=${prefilledMessage}`;

  return (
    <section id="verdict" className="section" aria-labelledby="verdict-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">FINAL JUDGEMENT</span>
          <h2 id="verdict-title" className="section-title">⚖️ Final Faisla (Court Verdict)</h2>
          <p className="section-desc">
            Tamaam gawaahon, forensic photo sabooton aur bakchodi ke baad Court ka aakhri aadesh!
          </p>
        </div>

        <div className="verdict-box">
          <span className="stamp stamp-danger" style={{ marginBottom: '1rem' }}>
            ORDER! ORDER! ORDER! 🔨
          </span>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-main)', marginTop: '0.5rem' }}>
            {config.verdictTitle}
          </h3>

          <div className="verdict-text-block">
            {config.verdictText}
          </div>

          {!isAnnounced ? (
            <button
              type="button"
              className="btn btn-pink"
              onClick={handleAnnounceVerdict}
              style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}
              aria-label="Announce final verdict with celebration"
            >
              🔨 FAISLA SUNAO (DELIVER VERDICT) 🎉
            </button>
          ) : (
            <div className="verdict-celebration-card" role="region" aria-live="polite">
              <span className="stamp stamp-success" style={{ marginBottom: '1rem' }}>
                🌟 OFFICIAL BIRTHDAY DECREE 🌟
              </span>

              <h4 className="verdict-wish-title">
                {config.finalWishHeadline}
              </h4>

              <p className="verdict-wish-desc">
                {config.finalWishText}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
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
