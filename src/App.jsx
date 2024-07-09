import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Aboutme from './sites/Aboutme';
import Projects from './sites/Projects';
import MyWay from './sites/MyWay';
import Contact from './sites/Contact';
import NavBar from './components/NavBar';
import SkillTree from './sites/SkillTree';
import Achievements from './sites/Achievements';
import Footer from './components/Footer';
import skills from './assets/skills.json';

// Keyframe animation for gradient movement
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AppContainer = styled.div`
  background: linear-gradient(45deg, #000000, #0a0a2a, #1c1c3c);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 15s ease infinite;
  color: #fff;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${props => props.animation} 3s ease-in-out infinite;
  opacity: 0.5;
`;

const particleAnimation = keyframes`
  0% { opacity: 0.5; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-20px); }
  100% { opacity: 0.5; transform: translateY(0); }
`;

const createIcons = (iconsData) => {
  const icons = [];
  Object.keys(iconsData).forEach((category) => {
    if (Array.isArray(iconsData[category])) {
      iconsData[category].forEach((icon, i) => {
        const size = Math.random() * 2 + 1;
        icons.push(
          <IconContainer
            key={icon.name + i}
            animation={particleAnimation}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${size}em`,
              color: icon.color,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          >
            <i className={icon.icon}></i>
          </IconContainer>
        );
      });
    }
  });
  return icons;
};

function App() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const allIcons = [
      ...skills.Frontend,
      ...skills.Backend,
      ...skills.Other,
      ...skills["Next Goals"]
    ];
    setIcons(createIcons(allIcons));
  }, []);

  return (
    <AppContainer>
      {icons}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" />} />
          <Route path="/about-me" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/my-way" element={<MyWay />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/skilltree' element={<SkillTree />} />
          <Route path="*" element={<Navigate to="/about-me" />} />
        </Routes>
      </Router>
      <Footer />
    </AppContainer>
  );
}

export default App;
