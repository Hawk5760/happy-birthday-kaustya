import React, { useState, useEffect } from 'react';

/**
 * Sticky Mini Navigation with smooth scroll anchors and theme switcher
 */
export function Nav({ voiceNotesCount = 0 }) {
  const [theme, setTheme] = useState('auto'); // 'auto', 'light', 'dark'

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'auto' || theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const navLinks = [
    { href: '#hero', label: 'Court' },
    { href: '#model3d', label: '3D Avataar 🕺' },
    { href: '#gallery', label: 'Saboot' },
    { href: '#witnesses', label: 'Gawah' },
    { href: '#roast', label: 'Roast 3000' },
    { href: '#awards', label: 'Awards' },
    { href: '#report', label: 'Report Card' },
    { href: '#meme', label: 'Meme Maker' },
    ...(voiceNotesCount > 0 ? [{ href: '#voice', label: 'Voice Notes' }] : []),
    { href: '#gift', label: 'Gift Claim' },
    { href: '#secret', label: 'Secret Vault' },
    { href: '#birthday', label: 'Birthday 🎂' }
  ];

  return (
    <nav className="sticky-nav" aria-label="Quick Section Navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" title="Case 420: Kaustya vs Duniya">
          ⚖️ <span style={{ fontWeight: 900 }}>CASE 420</span>
        </a>

        <div className="nav-links-scroll" role="menubar">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" role="menuitem">
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="nav-theme-btn"
          aria-label={`Current theme: ${theme}. Click to switch theme.`}
          title="Toggle Light / Dark Mode"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
