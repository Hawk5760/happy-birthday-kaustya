import React, { useState } from 'react';
import Countdown from './Countdown';

/**
 * Hero Section
 * Giant "KAUSTYA", court case tagline, stamps, live countdown, and 5-click easter egg.
 */
export function Hero({ config }) {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleTitleClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    if (nextCount === 5) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 5000);
      setClickCount(0);
    }
  };

  return (
    <header id="hero" className="hero-section">
      <div className="content-container">
        {/* Case docket badge */}
        <div className="hero-case-stamp">
          ⚖️ CASE NO. 420/2026: SPECIAL BENCH OF DOST-YAAR
        </div>

        {/* Giant Clickable Name with Easter Egg */}
        <h1
          className="hero-giant-name"
          onClick={handleTitleClick}
          title="Click 5 times for a secret surprise!"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleTitleClick();
          }}
          aria-label={`${config.name}. Click repeatedly for a hidden easter egg.`}
        >
          {config.name}
        </h1>

        {/* Tagline */}
        <p className="hero-tagline">
          Ka Court Case: <em>{config.name} vs. Un Sab Logon Jo Isse Jhel Rahe Hain</em>
        </p>

        {/* Stamps row */}
        <div className="hero-stamps-row">
          <span className="stamp stamp-danger">
            🚨 UMAR BADHI, AQAL NAHI
          </span>
          <span className="stamp stamp-warning">
            ⭐ NICKNAME: {config.nickname}
          </span>
          <span className="stamp stamp-success">
            🏛️ SINCE: {config.friendsSince}
          </span>
        </div>

        {/* Live Countdown */}
        <Countdown birthdayIso={config.birthday} />

        {/* Easter Egg Popup Toast */}
        {showEasterEgg && (
          <div className="easter-egg-toast" role="alert">
            <p>🤫 <strong>Oye Bakchod!</strong></p>
            <p>Itni baar click karke kya property apne naam karega? Chal chupchap pehle party ka bill nikaal!</p>
          </div>
        )}
      </div>
    </header>
  );
}

export default Hero;
