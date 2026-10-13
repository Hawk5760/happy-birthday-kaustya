import React, { useState } from 'react';

/**
 * 18+ Warning / Disclaimer Splash
 * Placed at the very top before the Hero as required by language rules.
 */
export function WarningSplash() {
  const [accepted, setAccepted] = useState(false);

  const handleEnter = () => {
    setAccepted(true);
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="warning-splash" aria-label="Content Disclaimer Warning">
      <div className="warning-splash-inner">
        <div className="warning-badge">
          <span>🔞 18+ DESI SARKARI NOTICE</span>
        </div>
        <p className="warning-text">
          ⚠️ <strong>WARNING:</strong> Yahan dost-yaar wali raw Hinglish bakchodi aur mild gaaliyan milengi. Dil pe mat lena, sirf Kaustya ko roast karne ke liye banaya gaya hai!
        </p>
        <button
          type="button"
          onClick={handleEnter}
          className="btn btn-yellow"
          style={{ minHeight: '44px', padding: '0.4rem 1.25rem', fontSize: '0.9rem' }}
          aria-label="Acknowledge warning and enter court"
        >
          {accepted ? '✅ Agreed! Enter Court' : 'Enter At Your Own Risk ⚖️'}
        </button>
      </div>
    </aside>
  );
}

export default WarningSplash;
