import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
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

// Wrapper for the container to control background size
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;  // Ensure some space around the container
  // background-color: #1e1e1e;  // Slightly lighter dark gray for the background
`;

const Container = styled.div`
  background-color: #2a2a2a;  // Darker gray for the container background
  color: #f0f0f0;  // Light gray for text
  padding: 20px;
  border-radius: 12px;  // Slightly rounded corners
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 80%;  // Full width with max limit for responsiveness
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;

  @media (min-width: 600px) {
    max-width: 70%;
  }

  @media (min-width: 900px) {
    max-width: 60%;
  }

  @media (min-width: 1200px) {
    max-width: 50%;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 1.1em;  // Slightly smaller font size
  line-height: 1.8;  // Increased line height for better readability
  animation: ${fadeIn} 1s ease-in-out, ${pulse} 6s infinite;
  
  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }

  &:nth-child(4) {
    animation-delay: 1.5s;
  }

  &:nth-child(5) {
    animation-delay: 2s;
  }
  
  @media (max-width: 600px) {
    font-size: 1em;  // Adjust font size for smaller screens
    margin-bottom: 15px;
  }
`;

function MyWay() {
  return (
    <Wrapper>
      <Container>
        <Paragraph>
          On June 6th, 2023, I embarked on a journey to become a Web and Software Developer at DCI. After 14 months of coding, debugging, and probably way too much coffee, I proudly graduated on August 8th, 2024.
        </Paragraph>
        <Paragraph>
          Since then, I've been diving headfirst into the world of Artificial Intelligence, earning some fancy certificates to prove it.
        </Paragraph>
        <Paragraph>
          Not one to sit still, I then ventured into the mysterious realm of Kali Linux and its ecosystem—no, I didn't become a hacker, but I did learn a thing or two!
        </Paragraph>
        <Paragraph>
          Currently, I'm leveling up my IT security skills with an eye on becoming a Junior Pen Tester in the near future.
        </Paragraph>
        <Paragraph>
          Oh, and in case you were wondering, I'm still coding away as a freelance web developer, because, why not?
        </Paragraph>
      </Container>
    </Wrapper>
  );
}

export default MyWay;
