import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from '../assets/HeroImage.jpg';

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

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: #00FF00;
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(-45deg, #1E1E1E, #2C2C2C, #1E1E1E, #2C2C2C);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: ${fadeIn} 1s ease-out;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #333;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin: 1rem 0;
  overflow: hidden;
  border-right: .15em solid #00FF00;
  white-space: nowrap;
  animation: 
    ${typing} 3.5s steps(40, end),
    ${blink} .75s step-end infinite;
`;

const Role = styled.div`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 2s ease-out;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  text-align: center;
  line-height: 1.8;
  animation: ${fadeIn} 2.5s ease-out;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  color: #fff;
  margin: 0 1rem;
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;
  animation: ${fadeIn} 3s ease-out;
  
  &:hover {
    color: #00FF00;
    transform: scale(1.2);
  }
`;

function Aboutme() {
  const [role, setRole] = useState('');
  const roles = [
    'Full Stack Web Developer',
    'Frontend Enthusiast',
    'Backend Wizard',
    'JavaScript Lover',
    'React Master',
    'Node.js Ninja'
  ];
  let roleIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setRole(roles[roleIndex]);
      roleIndex = (roleIndex + 1) % roles.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Content>
        <ProfileImage src={Image} alt="Oliver Spörl" />
        <Heading>Hi, I'm Oliver Spörl</Heading>
        <Role>I'm a passionate {role}</Role>
        <Description>
          I'm a dedicated web developer who loves creating amazing digital experiences. 
          With a keen eye for detail and a passion for cutting-edge technologies, I strive to build web applications that are not only beautiful but also highly performant and user-friendly.
          Join me on this exciting journey as we explore the limitless possibilities of web development together!
        </Description>
        <SocialLinks>
          <SocialLink href="https://www.tiktok.com/@der_gamer_olli" target="_blank" aria-label="TikTok 1">
            <FontAwesomeIcon icon={faTiktok} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/oliver-spörl-2586a52b3/" target="_blank" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink href="https://github.com/Oliverwebdev" target="_blank" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://www.tiktok.com/@gringenerator" target="_blank" aria-label="TikTok 2">
            <FontAwesomeIcon icon={faTiktok} />
          </SocialLink>
        </SocialLinks>
      </Content>
    </Container>
  );
}

export default Aboutme;
