// BlossomEffect.jsx
import React, { useEffect, useState } from 'react';

function BlossomEffect() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalCount = 40;
    const newPetals = [];

    for (let i = 0; i < petalCount; i++) {
      const size = Math.random() * (15 - 5) + 5;    // 5px - 15px
      const left = Math.random() * 100;            // 0% - 100%
      const delay = Math.random() * 5;             // 0s - 5s
      const duration = Math.random() * 5 + 5;      // 5s - 10s

      newPetals.push({
        size,
        left,
        delay,
        duration,
        id: i,
      });
    }

    setPetals(newPetals);
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
      {petals.map((petal) => (
        <div
          key={petal.id}
          style={{
            position: 'absolute',
            top: '-20px',
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.4}px`, // etwas höhere Form (oval)
            backgroundColor: 'pink',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', // leichte Variation für oval
            opacity: Math.random() * 0.5 + 0.3,
            animation: `blossomFall ${petal.duration}s linear ${petal.delay}s infinite`,
            transform: `rotate(${Math.random() * 180}deg)`,
          }}
        />
      ))}
      <style>
        {`
          @keyframes blossomFall {
            0% {
              transform: translateY(-100px) rotate(0deg);
            }
            100% {
              transform: translateY(110vh) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default BlossomEffect;
