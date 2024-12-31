// Year.jsx
import React from 'react';
import SnowfallEffect from './SnowfallEffect';
import BlossomEffect from './BlossomEffect';
import FirefliesEffect from './FirefliesEffect';
import LeavesEffect from './LeavesEffect';

// Definiere für jede Jahreszeit einen passenden (Farb-)Hintergrund
const seasonBackgrounds = {
  winter: 'linear-gradient(to bottom, #D4E9FA, #A9CDE7)',   // Kühle Blautöne
  spring: 'linear-gradient(to bottom, #E3FFBA, #C2F977)',  // Frische Grüntöne
  summer: 'linear-gradient(to bottom, #FFE47D, #FFA937)',  // Sonniges Gelb/Orange
  autumn: 'linear-gradient(to bottom, #FFC2A2, #FF7E47)',  // Warme Herbsttöne
};

function getSeason() {
//   const month = new Date().getMonth(); // 0 = Jan, 1 = Feb, ... 11 = Dez
    const month = 0; 
  
  if (month === 11 || month === 0 || month === 1) {
    return 'winter';  // Dezember, Januar, Februar
  } else if (month >= 2 && month <= 4) {
    return 'spring';  // März, April, Mai
  } else if (month >= 5 && month <= 7) {
    return 'summer';  // Juni, Juli, August
  } else {
    return 'autumn';  // September, Oktober, November
  }
}

function Year() {
  const season = getSeason();

  const backgroundStyle = {
    width: '100%',
    minHeight: '100vh',
    background: seasonBackgrounds[season],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background 0.5s ease-in-out',
    position: 'relative', // wichtig, damit die Effekte als Overlay funktionieren
    overflow: 'hidden',
  };

  return (
    <div style={backgroundStyle}>
      {/* Saisonale Effekte: */}
      {season === 'winter' && <SnowfallEffect />}
      {season === 'spring' && <BlossomEffect />}
      {season === 'summer' && <FirefliesEffect />}
      {season === 'autumn' && <LeavesEffect />}

      {/* <h1>Portfolio: {season.toUpperCase()}</h1> */}
      {/* nur zur übersicht eingebaut */}
      {/* Dein weiterer Portfolio-Content */}
    </div>
  );
}

export default Year;
