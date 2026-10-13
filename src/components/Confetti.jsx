import React, { useEffect } from 'react';
import { useConfetti } from '../hooks/useConfetti';

/**
 * Global Confetti Canvas Component
 * Renders full-screen fixed canvas for zero-dependency confetti animations.
 */
export function Confetti() {
  const { setupCanvas } = useConfetti();

  useEffect(() => {
    setupCanvas();
  }, [setupCanvas]);

  return <canvas id="court-confetti-canvas" aria-hidden="true" />;
}

export default Confetti;
