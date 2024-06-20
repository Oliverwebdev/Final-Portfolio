import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Aboutme from './sites/Aboutme';
import Projects from './sites/Projects';
import MyWay from './sites/MyWay';
import Contact from './sites/Contact';
import NavBar from './components/NavBar';
import SkillTree from './sites/SkillTree';
import Achievements from './sites/Achievements';
import Footer from './components/Footer';

// Keyframe animation for gradient movement
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Keyframe animation for particle effects
const particleAnimation = keyframes`
  0% { opacity: 0.5; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-20px); }
  100% { opacity: 0.5; transform: translateY(0); }
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

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: ${particleAnimation} 3s ease-in-out infinite;
  opacity: 0.5;
`;

const createParticles = () => {
  const particles = [];
  for (let i = 0; i < 100; i++) {
    const size = Math.random() * 3 + 1;
    particles.push(
      <Particle
        key={i}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 5 + 3}s`,
        }}
      />
    );
  }
  return particles;
};

function App() {
  return (
    <AppContainer>
      {createParticles()}
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
      <Footer/>
    </AppContainer>
  );
}

export default App;

