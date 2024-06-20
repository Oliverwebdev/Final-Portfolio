import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from '../assets/HeroImage.jpg';

// Keyframes für Animationen
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 123, 255, 1);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #1E1E1E;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 2px solid #333;
  animation: ${pulse} 2s infinite;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: #E0E0E0;
  margin: 0.5rem 0;
  animation: ${fadeIn} 1.5s ease-out;
`;

const Role = styled.h2`
  font-size: 1.5rem;
  color: #007BFF;
  margin-top: 0.5rem;
  cursor: pointer;
  animation: ${slideIn} 1s ease-out, ${bounce} 2s infinite;
  &:hover {
    animation: ${glow} 1.5s infinite alternate, ${bounce} 1s;
  }
`;

const ModeSwitcher = styled.span`
  color: #00FF00;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  animation: ${fadeIn} 2.5s ease-out;
`;

const SocialLink = styled.a`
  color: #E0E0E0;
  margin: 0 1rem;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: #007BFF;
    animation: ${pulse} 1s;
  }
`;

function Aboutme() {
  const modes = ['Full Stack', 'Frontend', 'Backend'];
  const [modeIndex, setModeIndex] = useState(0);

  const toggleMode = () => {
    setModeIndex((prevIndex) => (prevIndex + 1) % modes.length);
  };

  useEffect(() => {
    const interval = setInterval(toggleMode, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <ProfileImage src={Image} alt="Profile" />
      <Name>Hi, I'm <span>Oliver Spörl</span></Name>
      <Role onClick={toggleMode}>
        I'm a{' '}
        <ModeSwitcher onClick={toggleMode}>
          {modes[modeIndex]}
        </ModeSwitcher>{' '}
        Web Developer
      </Role>
      <SocialLinks>
        <SocialLink href="https://www.tiktok.com/@der_gamer_olli?_t=8beBhKAadgI&_r=1" target="_blank" aria-label="TikTok 1">
          <FontAwesomeIcon icon={faTiktok} />
        </SocialLink>

        <SocialLink href="https://www.linkedin.com/in/oliver-sp%C3%B6rl-2586a52b3/" target="_blank" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>

        <SocialLink href="https://github.com/Oliverwebdev" target="_blank" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>

        <SocialLink href="https://www.tiktok.com/@gringenerator?_t=8hQxyz4bOW8&_r=1" target="_blank" aria-label="TikTok 2">
          <FontAwesomeIcon icon={faTiktok} />
        </SocialLink>
      </SocialLinks>
    </Container>
  );
}

export default Aboutme;
