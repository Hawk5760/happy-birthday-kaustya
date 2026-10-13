import { useState, useEffect } from 'react';

/**
 * Custom hook to calculate live countdown to Kaustya's birthday.
 * Target: 14 October 2026 00:00:00 local time (from ISO string in config)
 * Handles:
 * - Before birthday: Live countdown timer (days, hours, minutes, seconds)
 * - On birthday (14 Oct): isBirthday = true ("AAJ HAI BHAI! HAPPY BIRTHDAY!")
 * - After birthday (15 Oct onwards): isPast = true ("Late wish bhi chalega.")
 */
export function useCountdown(targetIsoDate) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetIsoDate));

  useEffect(() => {
    // Initial check
    setTimeLeft(calculateTimeLeft(targetIsoDate));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetIsoDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIsoDate]);

  return timeLeft;
}

function calculateTimeLeft(targetIsoDate) {
  const now = new Date();
  const target = new Date(targetIsoDate);

  // Define the end of the birthday (23:59:59.999 of the target day)
  const targetEnd = new Date(target);
  targetEnd.setHours(23, 59, 59, 999);

  const diffMs = target.getTime() - now.getTime();

  // If now is on the exact birthday day (between target start and targetEnd)
  if (diffMs <= 0 && now.getTime() <= targetEnd.getTime()) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isBirthday: true,
      isPast: false,
      message: 'AAJ HAI BHAI! HAPPY BIRTHDAY! 🎂🎉'
    };
  }

  // If birthday day has passed
  if (now.getTime() > targetEnd.getTime()) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isBirthday: false,
      isPast: true,
      message: 'Late wish bhi chalega. Ab party kab dega?'
    };
  }

  // Still counting down to the birthday
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isBirthday: false,
    isPast: false,
    message: null
  };
}

export default useCountdown;
