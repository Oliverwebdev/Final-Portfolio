// LeavesEffect.jsx
import React, { useEffect, useState } from 'react';

function LeavesEffect() {
  const [leaves, setLeaves] = useState([]);

  // Ein Satz Herbstfarben
  const colors = ['#D35400', '#E67E22', '#A04000', '#BA4A00', '#6E2C00'];

  useEffect(() => {
    const leafCount = 35;
    const newLeaves = [];

    for (let i = 0; i < leafCount; i++) {
      const size = Math.random() * (20 - 10) + 10;  // 10px - 20px
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 5;
      const colorIndex = Math.floor(Math.random() * colors.length);

      newLeaves.push({
        size,
        left,
        delay,
        duration,
        color: colors[colorIndex],
        id: i,
      });
    }

    setLeaves(newLeaves);
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
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          style={{
            position: 'absolute',
            top: '-20px',
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size * 1.5}px`,
            backgroundColor: leaf.color,
            borderRadius: '30% 70% 70% 30% / 40% 60% 40% 60%', 
            opacity: Math.random() * 0.5 + 0.3,
            animation: `leafFall ${leaf.duration}s linear ${leaf.delay}s infinite`,
            transform: `rotate(${Math.random() * 180}deg)`,
          }}
        />
      ))}

      <style>
        {`
          @keyframes leafFall {
            0% {
              transform: translateY(-100px) rotate(0deg);
            }
            50% {
              transform: translateY(50vh) rotate(180deg);
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

export default LeavesEffect;
