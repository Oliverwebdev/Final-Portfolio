import React from 'react';
import styled, { keyframes } from 'styled-components';
import skills from '../assets/skills.json';

/* ------------------------------ KEYFRAMES ------------------------------ */
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const neonGlow = keyframes`
  0% {
    text-shadow:
      0 0 5px  rgba(0, 255, 255, 0.7),
      0 0 10px rgba(0, 255, 255, 0.5),
      0 0 20px rgba(0, 255, 255, 0.2);
  }
  50% {
    text-shadow:
      0 0 20px rgba(0, 255, 255, 0.8),
      0 0 40px rgba(0, 255, 255, 0.5),
      0 0 60px rgba(0, 255, 255, 0.3);
  }
  100% {
    text-shadow:
      0 0 5px  rgba(0, 255, 255, 0.7),
      0 0 10px rgba(0, 255, 255, 0.5),
      0 0 20px rgba(0, 255, 255, 0.2);
  }
`;

const brainPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.6);
  }
  50% {
    box-shadow: 0 0 20px 20px rgba(0, 0, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.6);
  }
`;

const rotate3D = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

/* ------------------------------ STYLES ------------------------------ */
const SkillTreeContainer = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 40px;

  /* Parallax + Farbverlauf-Hintergrund */
  background: 
    linear-gradient(135deg, rgba(0, 0, 0, 0.9), #0c0c0c),
    url('/path/to/your/parallax-bg.jpg'); /* ANPASSEN */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax-Effekt */
  box-sizing: border-box;
  overflow-x: hidden;
  color: #ffffff;
  perspective: 1000px;

  @media (max-width: 768px) {
    padding: 20px;
    background-attachment: scroll; /* Parallax auf Mobile oft problematisch */
  }
`;

const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #00eaff, #00abff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${neonGlow} 3s infinite ease-in-out;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px 0;
  padding: 0 20px;
  box-sizing: border-box;
  opacity: 0;
  animation: ${fadeInUp} 1s ease forwards;
  
  &:nth-child(even) {
    animation-delay: 0.2s;
  }
  &:nth-child(odd) {
    animation-delay: 0.4s;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #00abff;
  text-shadow: 0 0 10px #007cf0;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotate3D} 3s linear infinite;
  cursor: default;

  /* Kleiner Trick: 3D-Text-Duplikat hinten */
  &::after {
    content: attr(data-shadow);
    position: absolute;
    top: 0;
    left: 0;
    transform: translateZ(-20px) scale(1.05);
    opacity: 0.3;
    color: #007cf0;
    z-index: -1;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 15px;
    justify-content: space-around;
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${brainPulse} 5s infinite ease-in-out;
  transition: transform 0.3s, box-shadow 0.3s;
  transform-style: preserve-3d;

  &:hover {
    transform: scale(1.1) translateZ(30px);
    box-shadow: 0 0 30px 5px rgba(0, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

const IconImage = styled.i`
  font-size: 2.5rem;
  color: ${props => props.color || '#00abff'};
  text-shadow: 0 0 10px ${props => props.color || '#00abff'};
  transition: color 0.3s, text-shadow 0.3s;

  &:hover {
    color: #ffffff;
    text-shadow: 0 0 20px ${props => props.color || '#ffffff'};
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 769px) {
    font-size: 3rem;
  }
`;

const IconName = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #cccccc;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }

  @media (min-width: 769px) {
    font-size: 1rem;
  }
`;

/* ------------------------------ COMPONENT ------------------------------ */
const SkillTree = () => {
  return (
    <SkillTreeContainer>
      <PageTitle>My Epic Skill Tree</PageTitle>
      {Object.keys(skills).map((section, i) => (
        <Section key={section}>
          <SectionTitle data-shadow={section}>{section}</SectionTitle>
          <IconContainer>
            {skills[section].map(skill => (
              <IconWrapper key={skill.name}>
                <IconImage className={skill.icon} color={skill.color} />
                <IconName>{skill.name}</IconName>
              </IconWrapper>
            ))}
          </IconContainer>
        </Section>
      ))}
    </SkillTreeContainer>
  );
};

export default SkillTree;
