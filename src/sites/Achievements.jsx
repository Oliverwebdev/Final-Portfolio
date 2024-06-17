import React from 'react';
import styled, { keyframes } from 'styled-components';

const certificates = [
  { id: 1, title: 'Achievements 1', description: 'Certificate as a web and software developer', date: '14.06.2024', pdf: '/Vorläufiges-Zertifikat.pdf' },
  // Füge hier weitere Zertifikate hinzu
];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const hoverEffect = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
`;

const Container = styled.div`
  padding: 20px;
  background-color: #121212;
  color: #fff;
  font-family: 'Arial', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 30px;
  color: #00d4ff;
  text-shadow: 0 0 5px rgba(0, 212, 255, 0.5);

  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: linear-gradient(145deg, #1e1e1e, #2e2e2e);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${hoverEffect} 5s infinite;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.7em;
  margin-bottom: 10px;
  color: #ff007f;

  @media (max-width: 600px) {
    font-size: 1.4em;
  }
`;

const CardDescription = styled.p`
  font-size: 1.1em;
  margin-bottom: 10px;
  color: #d1d1d1;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

const CardDate = styled.p`
  font-size: 0.9em;
  color: #888;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

const PdfLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #555;
    transform: scale(1.1);
  }
`;

function Achievements() {
  return (
    <Container>
      <Title>My Achievements</Title>
      <Grid>
        {certificates.map((cert) => (
          <Card key={cert.id}>
            <CardTitle>{cert.title}</CardTitle>
            <CardDescription>{cert.description}</CardDescription>
            <CardDate>{cert.date}</CardDate>
            <PdfLink href={cert.pdf} target="_blank" rel="noopener noreferrer">
              show PDF
            </PdfLink>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Achievements;
