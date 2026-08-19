import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'balloon' | 'sparkle' | 'orb' | 'star';
  color: string;
}

export const FloatingParticles: React.FC = () => {
  const particles: Particle[] = useMemo(() => {
    const items: Particle[] = [];
    const colors = [
      'rgba(180, 151, 214, 0.45)', // Lavender
      'rgba(230, 217, 242, 0.55)', // Lilac
      'rgba(232, 200, 117, 0.5)',  // Soft Gold
      'rgba(244, 194, 194, 0.45)', // Pastel Rose
    ];

    // Floating balloons (lavender and gold hues)
    for (let i = 0; i < 6; i++) {
      items.push({
        id: i,
        x: Math.random() * 90 + 5,
        y: Math.random() * 80 + 10,
        size: Math.random() * 24 + 30,
        duration: Math.random() * 12 + 14,
        delay: Math.random() * 5,
        type: 'balloon',
        color: colors[i % colors.length],
      });
    }

    // Sparkle stars
    for (let i = 6; i < 18; i++) {
      items.push({
        id: i,
        x: Math.random() * 95 + 2,
        y: Math.random() * 95 + 2,
        size: Math.random() * 14 + 10,
        duration: Math.random() * 6 + 6,
        delay: Math.random() * 4,
        type: 'sparkle',
        color: colors[i % colors.length],
      });
    }

    // Soft glowing bokeh orbs
    for (let i = 18; i < 26; i++) {
      items.push({
        id: i,
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        size: Math.random() * 70 + 60,
        duration: Math.random() * 14 + 16,
        delay: Math.random() * 6,
        type: 'orb',
        color: colors[i % colors.length],
      });
    }

    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => {
        if (p.type === 'balloon') {
          return (
            <motion.div
              key={p.id}
              className="absolute select-none opacity-40 hover:opacity-75 transition-opacity"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size * 1.25}px`,
              }}
              animate={{
                y: [0, -35, -15, 0],
                x: [0, 15, -10, 0],
                rotate: [-5, 6, -3, -5],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.delay,
              }}
            >
              {/* Balloon SVG */}
              <svg viewBox="0 0 40 50" className="w-full h-full drop-shadow-sm">
                <ellipse cx="20" cy="20" rx="18" ry="20" fill={p.color} />
                {/* Balloon highlight */}
                <ellipse cx="14" cy="14" rx="4" ry="7" fill="rgba(255,255,255,0.45)" transform="rotate(-20 14 14)" />
                {/* Knot */}
                <polygon points="18,39 22,39 20,43" fill={p.color} />
                {/* String */}
                <path d="M 20 43 Q 16 46 22 49 Q 18 52 20 55" stroke="rgba(180, 151, 214, 0.4)" strokeWidth="1" fill="none" />
              </svg>
            </motion.div>
          );
        }

        if (p.type === 'sparkle') {
          return (
            <motion.div
              key={p.id}
              className="absolute text-[#E8C875] select-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
              }}
              animate={{
                scale: [0.6, 1.2, 0.6],
                opacity: [0.2, 0.8, 0.2],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.delay,
              }}
            >
              ✦
            </motion.div>
          );
        }

        // Bokeh Orb
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full filter blur-2xl select-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
            }}
            animate={{
              x: [0, 25, -20, 0],
              y: [0, -30, 20, 0],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        );
      })}
    </div>
  );
};
