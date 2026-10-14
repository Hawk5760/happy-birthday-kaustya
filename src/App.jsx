import React, { useEffect, useRef } from 'react';
import config from './config';
import { useConfetti } from './hooks/useConfetti';

// Components
import Confetti from './components/Confetti';
import WarningSplash from './components/WarningSplash';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Model3D from './components/Model3D';
import Gallery from './components/Gallery';
import RoastMachine from './components/RoastMachine';
import Awards from './components/Awards';
import ReportCard from './components/ReportCard';
import MemeMaker from './components/MemeMaker';
import VoiceNotes from './components/VoiceNotes';
import GiftClaim from './components/GiftClaim';
import SecretPage from './components/SecretPage';
import Verdict from './components/Verdict';

export function App() {
  const { fireCelebration } = useConfetti();
  const keySequenceRef = useRef('');

  // Easter Egg: Typing "party" anywhere on the keyboard triggers confetti!
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Don't trigger if user is typing inside an input/textarea
      const activeTag = document.activeElement?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      keySequenceRef.current = (keySequenceRef.current + e.key.toLowerCase()).slice(-5);
      if (keySequenceRef.current === 'party') {
        fireCelebration();
        keySequenceRef.current = '';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [fireCelebration]);

  const marqueeText = "HORN OK PLEASE 🚚 BURI NAZAR WALE TERA MOOH KALA 🧿 DEKHO MAGAR PYAAR SE ❤️ UMAR BADHI AQAL NAHI 🎂 KAUSTYA KA BIRTHDAY HAI BHAI 🎉 DIL MEIN AATA HOON SAMAJH MEIN NAHI 🚀 HORN OK PLEASE 🚚 BURI NAZAR WALE TERA MOOH KALA 🧿";

  return (
    <div className="page-wrapper">
      {/* Zero-dependency canvas confetti */}
      <Confetti />

      {/* 18+ Warning Splash (Top Notice) */}
      <WarningSplash />

      {/* Hazard Stripe Top Bar */}
      <div className="hazard-bar" aria-hidden="true" />

      {/* Truck Art Marquee Banner */}
      <div className="truck-marquee" aria-hidden="true">
        <div className="truck-marquee-track">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <Nav voiceNotesCount={config.voiceNotes?.length || 0} />

      <main>
        {/* 1. Hero Section */}
        <Hero config={config} />

        <div className="hazard-bar" aria-hidden="true" />

        {/* 2. 3D Animated Avatar Model */}
        <Model3D />

        <div className="hazard-bar" aria-hidden="true" />

        {/* 3. Saboot Gallery (Photos) */}
        <Gallery photos={config.photos} />

        {/* 4. Roast Machine 3000 */}
        <RoastMachine roasts={config.roasts} targetName={config.name} />

        {/* 6. Fake Awards & Trophies */}
        <Awards awards={config.awards} photos={config.photos} />

        {/* 7. Life Ka Report Card */}
        <ReportCard reportCard={config.reportCard} />

        {/* 8. Meme Maker */}
        <MemeMaker photos={config.photos} />

        {/* 9. Voice Notes (Auto-hides if empty) */}
        <VoiceNotes voiceNotes={config.voiceNotes} />

        {/* 10. Gift Claim (Interactive Dodge Game) */}
        <GiftClaim
          giftMessages={config.giftMessages}
          giftUnlockedMessage={config.giftUnlockedMessage}
        />

        {/* 11. Secret Vault (Password Protected) */}
        <SecretPage
          secretPassword={config.secretPassword}
          secretMessage={config.secretMessage}
          secretHint={config.secretHint}
        />

        {/* 12. Happy Birthday Celebration */}
        <Verdict config={config} />
      </main>

      {/* Truck Art Bottom Marquee */}
      <div className="truck-marquee" aria-hidden="true">
        <div className="truck-marquee-track">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      <div className="hazard-bar" aria-hidden="true" />

      {/* Footer */}
      <footer className="site-footer">
        <div className="content-container">
          <div className="footer-stamp">
            ⚖️ CASE CLOSED: KAUSTYA GUILTY OF LIFELONG FRIENDSHIP
          </div>
          <p style={{ fontWeight: 600, margin: '0.5rem 0' }}>
            Built with 100% Pyaar & Bakchodi by School Backbencher Gang for <strong>Kaustya</strong>.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#D5C8EE' }}>
            No Kaustya was physically harmed during making of this site. Party bill strictly non-negotiable!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
