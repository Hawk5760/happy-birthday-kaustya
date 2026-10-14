import React, { useState } from 'react';
import { useSessionState } from '../hooks/useSessionState';
import { useConfetti } from '../hooks/useConfetti';

/**
 * Secret Vault / Page Component
 * Password-protected confidential letter that persists only for the current browser session.
 */
export function SecretPage({ secretPassword, secretMessage, secretHint }) {
  const [isUnlocked, setIsUnlocked] = useSessionState('kaustya_secret_vault_unlocked', false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { fireCelebration } = useConfetti();

  const handleUnlock = (e) => {
    e.preventDefault();
    const cleanEntered = enteredPassword.trim().toLowerCase().replace(/\s+/g, ' ');
    const noSpaceEntered = cleanEntered.replace(/\s+/g, '');
    const cleanSecret = (secretPassword || 'choti luli').trim().toLowerCase().replace(/\s+/g, ' ');
    const noSpaceSecret = cleanSecret.replace(/\s+/g, '');

    if (
      cleanEntered === cleanSecret ||
      noSpaceEntered === noSpaceSecret ||
      cleanEntered === 'choti luli' ||
      noSpaceEntered === 'chotiluli'
    ) {
      setIsUnlocked(true);
      setErrorMessage('');
      fireCelebration();
    } else {
      const wrongRoasts = [
        'Abe gadhe! Password bhi bhool gaya kya?',
        'Wrong password saale! Itna aasan sawaal nahi pata?',
        'Galat hai! CBI ko report bhej di gayi hai.',
        'Abe dimaag laga, hint padh le thoda!'
      ];
      setErrorMessage(wrongRoasts[Math.floor(Math.random() * wrongRoasts.length)]);
    }
  };

  const handleLockAgain = () => {
    setIsUnlocked(false);
    setEnteredPassword('');
    setErrorMessage('');
  };

  return (
    <section id="secret" className="section" aria-labelledby="secret-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">TOP SECRET CLASSIFIED</span>
          <h2 id="secret-title" className="section-title">🔐 Secret Vault: Dil Ki Baat</h2>
          <p className="section-desc">
            Sirf asli doston aur Kaustya ke liye password-protected locker. Yahan bakchodi ke peeche ka asli pyaar chupa hai!
          </p>
        </div>

        <div className="secret-vault-box">
          {!isUnlocked ? (
            <div>
              <span className="stamp stamp-danger" style={{ marginBottom: '1.25rem' }}>
                🔒 VAULT IS CURRENTLY LOCKED
              </span>

              <form onSubmit={handleUnlock} style={{ maxWidth: '420px', margin: '1rem auto' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <input
                    type="password"
                    className="secret-input"
                    value={enteredPassword}
                    onChange={(e) => setEnteredPassword(e.target.value)}
                    placeholder="Enter Secret Password..."
                    aria-label="Secret vault password"
                    required
                  />
                  <button type="submit" className="btn btn-yellow" style={{ minWidth: '110px' }}>
                    UNLOCK 🔓
                  </button>
                </div>

                {errorMessage && (
                  <p style={{ color: '#FF2E88', fontWeight: 800, marginTop: '0.75rem', fontSize: '0.95rem' }} role="alert">
                    ❌ {errorMessage}
                  </p>
                )}

                {secretHint && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.75rem', fontWeight: 600 }}>
                    💡 {secretHint}
                  </p>
                )}
              </form>
            </div>
          ) : (
            /* Unlocked Heartfelt Message */
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="stamp stamp-success">
                  🔓 ACCESS GRANTED: THE REAL TRUTH
                </span>
                <button
                  type="button"
                  onClick={handleLockAgain}
                  className="btn btn-white"
                  style={{ minHeight: '38px', padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}
                >
                  🔒 LOCK AGAIN
                </button>
              </div>

              <div className="secret-letter">
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-pink)', fontSize: '1.35rem', borderBottom: '2px dashed var(--color-ink)', paddingBottom: '0.5rem' }}>
                  💌 Dearest Kaustya (Mere Bhai),
                </h3>

                {secretMessage.map((line, idx) => (
                  <p key={idx} className="secret-letter-line">
                    {line}
                  </p>
                ))}

                <div style={{ textAlign: 'right', marginTop: '1rem', fontStyle: 'italic', fontWeight: 700 }}>
                  — Tere Sabse Jigri Yaar ❤️
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SecretPage;
