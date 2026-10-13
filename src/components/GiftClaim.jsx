import React, { useState, useRef } from 'react';
import { useConfetti } from '../hooks/useConfetti';

/**
 * Gift Claim Dodge Game
 * Interactive mini-game where the gift button dodges cursor/tap 6 times
 * with hilarious banter, and then can be clicked to unlock the birthday treat.
 */
export function GiftClaim({ giftMessages = [], giftUnlockedMessage }) {
  const [dodgeCount, setDodgeCount] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('🎁 CLAIM BIRTHDAY GIFT');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pos, setPos] = useState({ top: '40%', left: '40%' });

  const arenaRef = useRef(null);
  const { fireCelebration } = useConfetti();

  const handleDodge = (e) => {
    if (dodgeCount >= 6) {
      // Allowed to be caught on attempt 7!
      return;
    }

    // Calculate new random position inside the arena
    const arena = arenaRef.current;
    if (arena) {
      const arenaRect = arena.getBoundingClientRect();
      const maxX = arenaRect.width - 160;
      const maxY = arenaRect.height - 60;

      const randomX = Math.max(10, Math.floor(Math.random() * maxX));
      const randomY = Math.max(10, Math.floor(Math.random() * maxY));

      setPos({
        top: `${randomY}px`,
        left: `${randomX}px`
      });
    }

    const nextCount = dodgeCount + 1;
    setDodgeCount(nextCount);

    const msg = giftMessages[nextCount - 1] || 'Pakad ke dikha saale!';
    setCurrentMessage(msg);
  };

  const handleClaim = () => {
    if (dodgeCount >= 6) {
      setIsUnlocked(true);
      fireCelebration();
    } else {
      handleDodge();
    }
  };

  const handleReset = () => {
    setDodgeCount(0);
    setIsUnlocked(false);
    setCurrentMessage('🎁 CLAIM BIRTHDAY GIFT');
    setPos({ top: '40%', left: '40%' });
  };

  return (
    <section id="gift" className="section" aria-labelledby="gift-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">BIRTHDAY SURPRISE</span>
          <h2 id="gift-title" className="section-title">🎁 Claim Your Birthday Gift</h2>
          <p className="section-desc">
            Free iPhone, Russian trip ya Zomato lifetime free? Button ko pakad kar apna gift claim karein!
          </p>
        </div>

        <div className="gift-claim-container">
          {!isUnlocked ? (
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="stamp stamp-danger">
                  DODGES: {dodgeCount} / 6
                </span>
                {dodgeCount >= 6 && (
                  <span className="stamp stamp-success">
                    🎯 AB PAKAD MEIN AA GAYA! CLICK KARO!
                  </span>
                )}
              </div>

              {/* Arena where the button dodges */}
              <div ref={arenaRef} className="gift-arena">
                <button
                  type="button"
                  className={`btn ${dodgeCount >= 6 ? 'btn-teal' : 'btn-pink'} gift-dodge-btn`}
                  style={{ top: pos.top, left: pos.left }}
                  onMouseEnter={handleDodge}
                  onTouchStart={handleDodge}
                  onClick={handleClaim}
                  aria-label="Claim Birthday Gift"
                >
                  {dodgeCount >= 6 ? '🎉 FINALLY CLICK ME! 🎉' : currentMessage}
                </button>
              </div>

              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                {dodgeCount < 6
                  ? '💡 Hint: Ye button Kaustya ke Goa plan jaisa hai, haath nahi aayega!'
                  : '🔥 Shabash! Mehnat rang laayi. Ab dabao button!'}
              </p>
            </div>
          ) : (
            /* Unlocked gift card */
            <div className="gift-unlocked-card" role="region" aria-live="polite">
              <span className="stamp stamp-danger" style={{ marginBottom: '1rem' }}>
                OFFICIAL BIRTHDAY REWARD
              </span>
              <p style={{ margin: '1rem 0', fontWeight: 800 }}>
                {giftUnlockedMessage}
              </p>
              <button
                type="button"
                className="btn btn-white"
                onClick={handleReset}
                style={{ marginTop: '1rem' }}
              >
                🔄 PLAY AGAIN
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GiftClaim;
