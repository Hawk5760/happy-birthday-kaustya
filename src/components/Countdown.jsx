import React, { useEffect, useRef } from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { useConfetti } from '../hooks/useConfetti';

/**
 * Birthday Live Countdown Component
 * Displays live days, hours, minutes, seconds.
 * Triggers confetti celebration automatically on the birthday!
 */
export function Countdown({ birthdayIso }) {
  const timeLeft = useCountdown(birthdayIso);
  const { fireCelebration } = useConfetti();
  const hasFiredRef = useRef(false);

  // Auto-fire confetti on the birthday day once
  useEffect(() => {
    if (timeLeft.isBirthday && !hasFiredRef.current) {
      hasFiredRef.current = true;
      fireCelebration();
    }
  }, [timeLeft.isBirthday, fireCelebration]);

  if (timeLeft.isBirthday) {
    return (
      <div className="birthday-today-box" role="region" aria-live="polite">
        <h2 className="birthday-today-title">🎉 AAJ HAI BHAI! HAPPY BIRTHDAY! 🎂</h2>
        <p style={{ fontSize: '1.2rem', fontWeight: 800 }}>
          Court ki karwayi sthagit! Aaj Kaustya ka din hai, ab turant party nikal!
        </p>
      </div>
    );
  }

  if (timeLeft.isPast) {
    return (
      <div className="birthday-today-box" style={{ background: '#FF2E88', color: '#FFF' }} role="region" aria-live="polite">
        <h2 className="birthday-today-title" style={{ color: '#FFD400' }}>⏰ LATE WISH BHI CHALEGA!</h2>
        <p style={{ fontSize: '1.15rem', fontWeight: 700 }}>
          Birthday nikal gaya par party ka bill abhi bhi pending hai saale!
        </p>
      </div>
    );
  }

  return (
    <div className="countdown-box" role="region" aria-label="Birthday Countdown Timer">
      <div className="countdown-heading">
        <span>⏳ TIME LEFT UNTIL 14 OCT 2026 00:00:</span>
      </div>

      <div className="countdown-grid" aria-live="off">
        <div className="countdown-item">
          <span className="countdown-num">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-num">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="countdown-label">Mins</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="countdown-label">Secs</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
