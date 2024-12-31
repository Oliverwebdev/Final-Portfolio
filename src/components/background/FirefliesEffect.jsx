// FirefliesEffect.jsx
import React, { useEffect, useState } from 'react';

function FirefliesEffect() {
  const [fireflies, setFireflies] = useState([]);

  useEffect(() => {
    const count = 30;
    const newFireflies = [];

    // Verschiedene Gelbtöne für mehr Abwechslung
    const colors = [
      'rgba(255, 255, 150, 0.9)',
      'rgba(255, 255, 200, 0.9)',
      'rgba(255, 255, 180, 0.9)',
      'rgba(255, 250, 170, 0.9)',
    ];

    for (let i = 0; i < count; i++) {
      const left = Math.random() * 100;       // Position zwischen 0% - 100%
      const top = Math.random() * 100;        // Position zwischen 0% - 100%
      const delay = Math.random() * 5;        // Startverzögerung 0 - 5s
      const duration = Math.random() * 5 + 3; // 3s - 8s
      const colorIndex = Math.floor(Math.random() * colors.length);

      newFireflies.push({
        left,
        top,
        delay,
        duration,
        color: colors[colorIndex],
        // Für individuell zufällige Bewegung in keyframes (s.u.)
        moveX: Math.random() * 40 - 20, // -20px bis +20px
        moveY: Math.random() * 40 - 20, // -20px bis +20px
        id: i,
      });
    }

    setFireflies(newFireflies);
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {fireflies.map((fly) => (
        <div
          key={fly.id}
          // Jede Firefly bekommt eigene CSS-Variablen, die wir im @keyframes auslesen können
          style={{
            position: 'absolute',
            left: `${fly.left}%`,
            top: `${fly.top}%`,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: fly.color,
            boxShadow: `0 0 8px 4px ${fly.color}`,
            opacity: 0,
            // Individuelle Variablen für die Keyframe-Animation
            '--rand-move-x': `${fly.moveX}px`,
            '--rand-move-y': `${fly.moveY}px`,
            animation: `
              flickerAndMove 
              ${fly.duration}s 
              ease-in-out 
              ${fly.delay}s 
              infinite
            `,
          }}
        />
      ))}

      <style>
        {`
          @keyframes flickerAndMove {
            0% {
              opacity: 0;
              transform: translate(0, 0) scale(0.8);
            }
            10% {
              opacity: 0.8;
              transform: translate(0, 0) scale(1);
            }
            25% {
              opacity: 1;
              transform: translate(
                var(--rand-move-x),
                var(--rand-move-y)
              ) scale(1.1);
            }
            50% {
              opacity: 0.6;
              transform: translate(
                calc(var(--rand-move-x) * -1),
                calc(var(--rand-move-y) * -1)
              ) scale(0.9);
            }
            75% {
              opacity: 1;
              transform: translate(
                calc(var(--rand-move-x) / 2),
                calc(var(--rand-move-y) / 2)
              ) scale(1.1);
            }
            90% {
              opacity: 0.8;
            }
            100% {
              opacity: 0;
              transform: translate(0, 0) scale(0.8);
            }
          }
        `}
      </style>
    </div>
  );
}

export default FirefliesEffect;
