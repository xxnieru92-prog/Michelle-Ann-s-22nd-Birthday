import confetti from 'canvas-confetti';

const CELEBRATION_COLORS = [
  '#B497D6', // Lavender
  '#E6D9F2', // Soft lilac
  '#E8C875', // Soft gold
  '#5B3E7A', // Deep plum
  '#F4C2C2', // Soft pastel rose
  '#D4AF37', // Metallic gold
  '#FFFFFF', // Crisp white
];

/**
 * Fires a gentle burst of celebratory confetti & stars
 */
export function fireSparkleConfetti() {
  try {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: CELEBRATION_COLORS,
      disableForReducedMotion: true,
      shapes: ['circle', 'square'],
      ticks: 200,
    });
  } catch {
    // Fallback if canvas is unavailable
  }
}

/**
 * Fires full side-cannon fireworks style confetti for major milestones & wishes
 */
export function fireGrandFireworks() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 120, zIndex: 9999 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: any = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 45 * (timeLeft / duration);

    try {
      // Left burst
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: CELEBRATION_COLORS,
      });
      // Right burst
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: CELEBRATION_COLORS,
      });
    } catch {
      clearInterval(interval);
    }
  }, 250);
}

/**
 * Gentle shower of star sparkles from the top of the screen
 */
export function fireGentleStarShower() {
  try {
    confetti({
      particleCount: 35,
      angle: 90,
      spread: 120,
      origin: { x: 0.5, y: 0 },
      colors: ['#E8C875', '#B497D6', '#E6D9F2'],
      gravity: 0.8,
      scalar: 1.1,
      drift: 0,
      ticks: 250,
    });
  } catch {
    // noop
  }
}
