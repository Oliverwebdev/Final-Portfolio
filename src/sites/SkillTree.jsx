import React from 'react';
import styled, { keyframes } from 'styled-components';
import skills from '../assets/skills.json';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const brainPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 20px 20px rgba(0, 0, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7);
  }
`;

const SkillTreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #121212, #1f1f1f);
  min-height: 100vh;
  color: #ffffff;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  perspective: 1000px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Section = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 20px 0;
  padding: 0 20px;
  box-sizing: border-box;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;

  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.6s; }
  &:nth-child(4) { animation-delay: 0.8s; }
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 2em;
  text-align: center;
  background: linear-gradient(90deg, #007cf0, #00abff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform-style: preserve-3d;
  transform: translateZ(20px);

  @media (max-width: 480px) {
    font-size: 1.25em;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 10px;
    justify-content: space-around;
  }
`;

const Icon = styled.div`
  position: relative;
  margin: 10px;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${brainPulse} 5s infinite ease-in-out;
  transition: transform 0.3s;
  transform-style: preserve-3d;

  &:hover {
    transform: scale(1.1) translateZ(20px);
  }

  @media (max-width: 480px) {
    margin: 5px;
    width: 60px;
    height: 60px;
  }

  @media (min-width: 769px) {
    margin: 20px;
    width: 100px;
    height: 100px;
  }
`;

const IconImage = styled.i`
  font-size: 40px;
  color: ${props => props.color};
  text-shadow: 0 0 10px ${props => props.color};
  transition: color 0.3s, text-shadow 0.3s;

  &:hover {
    color: white;
    text-shadow: 0 0 20px ${props => props.color};
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }

  @media (min-width: 769px) {
    font-size: 50px;
  }
`;

const IconName = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  color: #cccccc;

  @media (max-width: 480px) {
    font-size: 10px;
  }

  @media (min-width: 769px) {
    font-size: 14px;
  }
`;

const SkillTree = () => {
  return (
    <SkillTreeContainer>
      {Object.keys(skills).map(section => (
        <Section key={section}>
          <SectionTitle>{section}</SectionTitle>
          <IconContainer>
            {skills[section].map(skill => (
              <Icon key={skill.name}>
                <IconImage className={skill.icon} color={skill.color} />
                <IconName>{skill.name}</IconName>
              </Icon>
            ))}
          </IconContainer>
        </Section>
      ))}
    </SkillTreeContainer>
  );
};

export default SkillTree;