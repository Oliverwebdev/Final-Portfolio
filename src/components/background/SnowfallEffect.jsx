// SnowfallEffect.jsx
import React, { useEffect, useState } from 'react';

function SnowfallEffect() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakeCount = 50; // Wie viele Schneeflocken erzeugt werden sollen
    const newFlakes = [];

    // Verschiedene Schneeflocken-Symbole (Unicode)
    const snowflakeShapes = ['\u2744', '\u2745', '\u2746']; 
    // '\u2744' = ❄, '\u2745' = ❅, '\u2746' = ❆

    for (let i = 0; i < flakeCount; i++) {
      const size = Math.random() * (30 - 14) + 14;   // Fontgröße: 14px bis 30px
      const left = Math.random() * 100;             // Zufällige Position zwischen 0% - 100%
      const delay = Math.random() * 5;              // Verzögerter Start (0-5s)
      const duration = Math.random() * 5 + 5;       // Fallzeit: 5-10s
      const driftX = (Math.random() * 60) - 30;     // Seitlicher Drift: -30px bis +30px
      const shapeIndex = Math.floor(Math.random() * snowflakeShapes.length);
      const shape = snowflakeShapes[shapeIndex];

      newFlakes.push({
        id: i,
        shape,
        size,
        left,
        delay,
        duration,
        driftX,
      });
    }

    setSnowflakes(newFlakes);
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
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          style={{
            position: 'absolute',
            left: `${flake.left}%`,
            top: '-5%', // Leicht über dem Viewport starten
            fontSize: `${flake.size}px`,
            color: 'white',
            textShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
            opacity: Math.random() * 0.3 + 0.7, // 0.7 - 1.0
            // => CSS-Variablen für den Keyframe
            '--driftX': `${flake.driftX}px`,
            animation: `
              snowFall 
              ${flake.duration}s
              linear
              ${flake.delay}s
              infinite
            `,
          }}
        >
          {flake.shape}
        </div>
      ))}
      <style>
        {`
          @keyframes snowFall {
            0% {
              transform: translate(0, -100px) rotate(0deg);
            }
            50% {
              /* Auf halber Strecke schon etwas zur Seite gedriftet und gedreht */
              transform: translate(
                calc(var(--driftX) / 2), 
                50vh
              ) rotate(180deg);
            }
            100% {
              /* Am Ende noch weiter zur Seite und komplett durchrotiert */
              transform: translate(
                var(--driftX), 
                110vh
              ) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default SnowfallEffect;
