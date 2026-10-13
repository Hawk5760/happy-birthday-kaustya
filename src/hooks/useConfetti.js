import { useCallback, useEffect, useRef } from 'react';

/**
 * Custom canvas confetti engine (No external libraries!).
 * Creates smooth particle animations with gravity, rotation, wobble, and decay.
 * Respects prefers-reduced-motion and cleans up all animation frames automatically.
 */
export function useConfetti() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animFrameIdRef = useRef(null);

  // Helper to initialize and resize canvas
  const setupCanvas = useCallback(() => {
    let canvas = canvasRef.current;
    if (!canvas) {
      canvas = document.getElementById('court-confetti-canvas');
      canvasRef.current = canvas;
    }
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    return canvas;
  }, []);

  // Main fire function
  const fire = useCallback((options = {}) => {
    // Respect user's reduced motion setting
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = setupCanvas();
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const {
      count = 80,
      originX = 0.5, // 0 to 1
      originY = 0.5,
      spread = 70,
      startVelocity = 35,
      colors = ['#FFD400', '#FF2E88', '#00A896', '#1B1030', '#FFF6D6', '#FF8500', '#7209B7']
    } = options;

    const startX = originX * canvas.width;
    const startY = originY * canvas.height;

    const newParticles = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI / 180) * (270 + (Math.random() - 0.5) * spread);
      const velocity = startVelocity * (0.6 + Math.random() * 0.8);

      newParticles.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.random() * 0.1 + 0.05,
        opacity: 1,
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
        decay: Math.random() * 0.015 + 0.01
      });
    }

    particlesRef.current.push(...newParticles);

    // Animation loop if not already running
    if (!animFrameIdRef.current) {
      const render = () => {
        const c = canvasRef.current;
        if (!c) {
          animFrameIdRef.current = null;
          return;
        }

        const context = c.getContext('2d');
        context.clearRect(0, 0, c.width, c.height);

        const activeParticles = [];
        const particles = particlesRef.current;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Apply physics
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.8; // Gravity
          p.vx *= 0.98; // Drag
          p.rotation += p.rotationSpeed;
          p.wobble += p.wobbleSpeed;
          p.opacity -= p.decay;

          if (p.opacity > 0 && p.y < c.height + 50) {
            context.save();
            context.globalAlpha = Math.max(0, p.opacity);
            context.translate(p.x, p.y);
            context.rotate((p.rotation * Math.PI) / 180);

            context.fillStyle = p.color;

            if (p.shape === 'rect') {
              const width = p.size * Math.cos(p.wobble);
              context.fillRect(-p.size / 2, -p.size / 2, width, p.size);
            } else {
              context.beginPath();
              context.arc(0, 0, p.size / 2, 0, Math.PI * 2);
              context.fill();
            }

            context.restore();
            activeParticles.push(p);
          }
        }

        particlesRef.current = activeParticles;

        if (activeParticles.length > 0) {
          animFrameIdRef.current = requestAnimationFrame(render);
        } else {
          context.clearRect(0, 0, c.width, c.height);
          animFrameIdRef.current = null;
        }
      };

      animFrameIdRef.current = requestAnimationFrame(render);
    }
  }, [setupCanvas]);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setupCanvas();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [setupCanvas]);

  // Grand celebration burst: left and right cannons + center burst
  const fireCelebration = useCallback(() => {
    fire({ originX: 0.5, originY: 0.6, count: 100, spread: 100, startVelocity: 40 });
    setTimeout(() => {
      fire({ originX: 0.2, originY: 0.7, count: 70, spread: 60, startVelocity: 45 });
      fire({ originX: 0.8, originY: 0.7, count: 70, spread: 60, startVelocity: 45 });
    }, 250);
  }, [fire]);

  return { fire, fireCelebration, setupCanvas };
}

export default useConfetti;
