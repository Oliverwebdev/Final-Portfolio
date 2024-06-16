import React from 'react';
import styled from 'styled-components';

const certificates = [
  { id: 1, title: 'Zertifikat 1', description: 'Vorläufiges Zertifikat zum Web- und Softwareentwickler', date: '14.06.2024', pdf: '/Vorläufiges-Zertifikat.pdf' },
  // Füge hier weitere Zertifikate hinzu
];

const Container = styled.div`
  padding: 20px;
  background-color: #2c2c2c;
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1.5em;
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
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const CardDescription = styled.p`
  font-size: 1em;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 0.9em;
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
  background-color: #3b3b3b;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

function Achievements() {
  return (
    <Container>
      <Title>Meine Achievements</Title>
      <Grid>
        {certificates.map((cert) => (
          <Card key={cert.id}>
            <CardTitle>{cert.title}</CardTitle>
            <CardDescription>{cert.description}</CardDescription>
            <CardDate>{cert.date}</CardDate>
            <PdfLink href={cert.pdf} target="_blank" rel="noopener noreferrer">
              PDF anzeigen
            </PdfLink>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Achievements;
