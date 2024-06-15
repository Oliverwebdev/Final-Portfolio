import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  padding: 20px;
  max-width: 1080px;
  background: #121212;
  color: #e0e0e0;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 390px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: 2.5em;
  border-bottom: 2px solid #bb86fc;
  padding-bottom: 10px;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 390px) {
    font-size: 1.5em;
  }
`;

const Section = styled.section`
  margin-bottom: 30px;
  animation: ${fadeIn} 2s ease-out;
`;

const SectionTitle = styled.h2`
  color: #bb86fc;
  font-size: 1.75em;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 5px;
  animation: ${fadeIn} 2.5s ease-out;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 390px) {
    font-size: 1.25em;
  }
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin: 15px 0;
  animation: ${fadeIn} 3s ease-out;

  @media (max-width: 768px) {
    font-size: 0.95em;
  }

  @media (max-width: 390px) {
    font-size: 0.85em;
  }
`;

const List = styled.ul`
  padding-left: 20px;
  margin: 10px 0;
  animation: ${fadeIn} 3.5s ease-out;

  @media (max-width: 768px) {
    font-size: 0.95em;
  }

  @media (max-width: 390px) {
    font-size: 0.85em;
  }

  li {
    margin-bottom: 10px;
  }
`;

const Address = styled.address`
  font-style: normal;
  margin: 15px 0;
  animation: ${fadeIn} 4s ease-out;
`;

const Link = styled.a`
  color: #bb86fc;
  text-decoration: none;
  margin-right: 10px;
  animation: ${fadeIn} 4.5s ease-out;

  &:hover {
    text-decoration: underline;
  }
`;

function MyWay() {
  return (
    <Container>
      <Title>My Way</Title>

      <Section>
        <SectionTitle>Einführung</SectionTitle>
        <Paragraph>
          Mein Name ist Oliver Spörl, und das Motto "My Way" begleitet mich auf meinem beruflichen und persönlichen Weg als Webentwickler.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Meine Reise</SectionTitle>
        <Paragraph>
          Im Juni 2023 begann ich mein Home-Schooling zum Webentwickler, und am 08. August 2024 werde ich meine Ausbildung offiziell abschließen.
          Ab diesem Zeitpunkt suche ich eine Arbeitsstelle, in der ich meine Fähigkeiten weiter ausbauen kann. Programmieren hat mich in seinen Bann
          gezogen, sei es ein einfaches Spiel mit JavaScript, eine Landing Page oder ein komplexes Programm mit Python. Für mich ist dies der ideale
          Job, in dem ich mich ständig weiterentwickeln kann und fast täglich etwas Neues lerne.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Philosophie und Werte</SectionTitle>
        <Paragraph>
          Ich glaube fest daran, dass es mit genug Willen und noch mehr Spaß an der Arbeit keine Probleme, sondern nur Lösungsansätze gibt. Was anfangs
          schwer wirken mag, wird durch Ausdauer und Leidenschaft zu einer erfüllenden Herausforderung. Ein Zitat, das mich besonders inspiriert, ist:
          "Probleme sind nur verkleidete Möglichkeiten."
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Projekte und Meilensteine</SectionTitle>

        <SectionTitle>Herausragende Projekte</SectionTitle>
        <List>
          <li>
            <strong>Einfaches Spiel mit JavaScript:</strong> Ein unterhaltsames Projekt, das meine Fähigkeiten im Bereich der Spieleentwicklung demonstriert.
          </li>
          <li>
            <strong>Komplexe Full-Stack-Website:</strong> Eine umfassende Webanwendung, die meine Kenntnisse im MERN-Stack zeigt.
          </li>
        </List>

        <SectionTitle>Erfolge und Anerkennungen</SectionTitle>
        <List>
          <li>Abgeschlossenes Home-Schooling-Programm zum Webentwickler (08.08.2024)</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>Vision und Ziele</SectionTitle>
        <Paragraph>
          Ich strebe danach, in der Webentwicklung weiter zu wachsen und immer neue Herausforderungen zu meistern. Meine langfristige Vision ist es,
          innovative Lösungen zu entwickeln, die das Leben erleichtern und bereichern.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Persönliche Reflexion</SectionTitle>

        <SectionTitle>Lektionen gelernt</SectionTitle>
        <Paragraph>
          Ich habe gelernt, dass kontinuierliches Lernen und die Bereitschaft, neue Herausforderungen anzunehmen, der Schlüssel zum Erfolg in der Webentwicklung sind.
        </Paragraph>

        <SectionTitle>Ratschläge</SectionTitle>
        <Paragraph>
          Für diejenigen, die ihren eigenen Weg finden möchten: Bleibt neugierig und verliert nie den Spaß an dem, was ihr tut.
        </Paragraph>
      </Section>

     
    </Container>
  );
}

export default MyWay;
