import React, { useState, useRef } from 'react';

const LOADING_TEXTS = [
  'Brain cells dhundh raha hoon...',
  'Aukaat calculate ho rahi hai...',
  'Kundli se shani aur mangal scan ho rahe hain...',
  'Zomato ke unpaid bills ki raseed nikaal raha hoon...',
  'Fake Goa trip ki ticket verify ho rahi hai...',
  'Aalsi quota check kiya ja raha hai...'
];

/**
 * Roast Machine 3000
 * Generates random non-repeating roasts with 1-second fake loading, copy and WhatsApp share buttons.
 */
export function RoastMachine({ roasts, targetName = 'Kaustya' }) {
  const [currentRoast, setCurrentRoast] = useState(
    roasts[0] || 'Kaustya bhai, tu time pe tabhi aata hai jab agle din aana ho saale!'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_TEXTS[0]);
  const [copied, setCopied] = useState(false);

  const lastIndexRef = useRef(0);
  const timerRef = useRef(null);

  const handleGenerateRoast = () => {
    if (isLoading) return;

    setIsLoading(true);
    setCopied(false);
    const randomLoading = LOADING_TEXTS[Math.floor(Math.random() * LOADING_TEXTS.length)];
    setLoadingMsg(randomLoading);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      // Pick a random roast never repeated twice in a row
      let nextIndex = Math.floor(Math.random() * roasts.length);
      if (nextIndex === lastIndexRef.current && roasts.length > 1) {
        nextIndex = (nextIndex + 1) % roasts.length;
      }
      lastIndexRef.current = nextIndex;

      setCurrentRoast(roasts[nextIndex]);
      setIsLoading(false);
    }, 1000);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentRoast);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareText = encodeURIComponent(`🔥 Oye ${targetName}! Roast Machine 3000 ka verdict:\n\n"${currentRoast}"\n\nHappy Birthday bakchod! 🎂`);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  return (
    <section id="roast" className="section" aria-labelledby="roast-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">AI-POWERED BAKAR</span>
          <h2 id="roast-title" className="section-title">🔥 Roast Machine 3000</h2>
          <p className="section-desc">
            Single button click par Kaustya ke liye customized, taaza aur kanned gaali-mishrit roast generate karein!
          </p>
        </div>

        <div className="roast-machine-box">
          <div className="stamp stamp-danger" style={{ marginBottom: '1rem' }}>
            ⚡ 100% UNFILTERED HINGLISH ROASTS
          </div>

          <div
            className="roast-screen"
            role="region"
            aria-live="polite"
            aria-atomic="true"
          >
            {isLoading ? (
              <p className="roast-loading">⏳ {loadingMsg}</p>
            ) : (
              <p className="roast-text">"{currentRoast}"</p>
            )}
          </div>

          <div className="roast-actions-row">
            <button
              type="button"
              className="btn btn-pink"
              onClick={handleGenerateRoast}
              disabled={isLoading}
              aria-label="Generate new roast for Kaustya"
            >
              {isLoading ? 'Dhundh Raha Hoon...' : '💥 ROAST KAUSTYA AGAIN!'}
            </button>

            <button
              type="button"
              className="btn btn-yellow"
              onClick={handleCopy}
              disabled={isLoading}
              aria-label="Copy roast to clipboard"
            >
              {copied ? '✅ COPIED TO CLIPBOARD!' : '📋 COPY ROAST'}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-teal"
              aria-label="Share roast on WhatsApp"
            >
              💬 SHARE ON WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoastMachine;
