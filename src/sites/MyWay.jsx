import React from "react";
import styled, { keyframes } from "styled-components";

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
  font-family: "Roboto", sans-serif;
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
      <Title>My Way: Ein Einblick in Mein Leben</Title>

      <Section>
        <SectionTitle>Über mich</SectionTitle>
        <Paragraph>
          Hallo! Mein Name ist Oliver Spörl. Ich bin ein engagierter und
          dynamischer MERN Stack Entwickler mit einer Leidenschaft für die
          Entwicklung skalierbarer Full-Stack-Webanwendungen. Hier möchte ich
          euch einen kleinen Einblick in meine Reise geben, die mich zu dem
          gemacht hat, was ich heute bin.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Persönliche Infos</SectionTitle>
        <Address>
          <p>
            <strong>Adresse:</strong> Wendelsteinstr. 19, 84508 Burgkirchen,
            Germany
          </p>
          <p>
            <strong>Telefon:</strong> 015128064881
          </p>
          <p>
            <strong>E-Mail:</strong>{" "}
            <Link href="mailto:karl78850@gmail.com">karl78850@gmail.com</Link>
          </p>
          <p>
            <strong>Geburtsdatum:</strong> 04.11.1995 in Eichstätt
          </p>
        </Address>
      </Section>

      <Section>
        <SectionTitle>Meine Reise</SectionTitle>
        <Section>
          <SectionTitle>Frühe Karriere</SectionTitle>
          <Paragraph>
            Meine berufliche Laufbahn begann in einem ganz anderen Bereich. Nach
            meiner Ausbildung zum Bäckereifachverkäufer bei Scherer Trostberg
            (09.2011 - 05.2014) habe ich verschiedene Positionen eingenommen,
            darunter Bäckereifachverkäufer bei Gerweck und Hotelfachmann bei
            Familie Zordel. Diese Erfahrungen haben mir wichtige Fähigkeiten wie
            Kundenservice, Teamarbeit und Ausdauer vermittelt.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Übergang zur Technologie</SectionTitle>
          <Paragraph>
            Mein Interesse an der Technologie wuchs stetig, und ich entschied
            mich, neue Wege zu gehen. Im April 2017 begann ich als Callcenter
            Agent bei den Stadtwerken Pforzheim und später als
            Außendienstmitarbeiter bei der Telekom. Diese Positionen haben mein
            Interesse an der Technik und Kommunikation weiter verstärkt.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Der Schritt zur Webentwicklung</SectionTitle>
          <Paragraph>
            Im Juni 2023 begann ich mein Home-Schooling zum Webentwickler an der
            DCI. Dieser Schritt war der Beginn einer aufregenden Reise. Die
            Faszination für Programmieren hat mich schnell in ihren Bann
            gezogen. Von einfachen Spielen mit JavaScript über Landing Pages bis
            hin zu komplexen Programmen mit Python – ich entdecke immer neue
            Herausforderungen und Möglichkeiten.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Abschluss und Zukunftspläne</SectionTitle>
          <Paragraph>
            Am 08. August 2024 werde ich meine Ausbildung zum Webentwickler
            offiziell abschließen. Ab diesem Zeitpunkt suche ich eine Stelle, in
            der ich meine Fähigkeiten weiter ausbauen und anwenden kann. Mein
            Ziel ist es, innovative Lösungen zu entwickeln, die das Leben
            erleichtern und bereichern.
          </Paragraph>
        </Section>
      </Section>

      <Section>
        <SectionTitle>Philosophie und Werte</SectionTitle>
        <Paragraph>
          Ich glaube fest daran, dass mit genug Willen und Spaß an der Arbeit
          keine Probleme, sondern nur Lösungsansätze existieren. Was anfangs
          schwer wirken mag, wird durch Ausdauer und Leidenschaft zu einer
          erfüllenden Herausforderung. Ein Zitat, das mich besonders inspiriert,
          ist: "Probleme sind nur verkleidete Möglichkeiten."
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Meilensteine</SectionTitle>
        <List>
          <li>
            Abgeschlossenes Home-Schooling-Programm zum Webentwickler
            (08.08.2024)
          </li>
        </List>
      </Section>

      <Section>
        <SectionTitle>Vision und Ziele</SectionTitle>
        <Paragraph>
          Meine Vision ist es, in der Webentwicklung weiter zu wachsen und immer
          neue Herausforderungen zu meistern. Langfristig strebe ich danach,
          innovative Lösungen zu entwickeln, die das Leben der Menschen
          erleichtern und bereichern.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Persönliche Reflexion</SectionTitle>
        <Section>
          <SectionTitle>Lektionen gelernt</SectionTitle>
          <Paragraph>
            Kontinuierliches Lernen und die Bereitschaft, neue Herausforderungen
            anzunehmen, sind der Schlüssel zum Erfolg in der Webentwicklung.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Ratschläge</SectionTitle>
          <Paragraph>
            Für diejenigen, die ihren eigenen Weg finden möchten: Bleibt
            neugierig und verliert nie den Spaß an dem, was ihr tut.
          </Paragraph>
        </Section>
      </Section>

      <Section>
        <SectionTitle>Abschluss</SectionTitle>
        <Paragraph>
          Ich hoffe, dieser Einblick in meine Reise hat euch gefallen. Wenn ihr
          mehr über meine Arbeit erfahren möchtet oder Interesse an einer
          Zusammenarbeit habt, zögert nicht, mich zu kontaktieren!
        </Paragraph>
      </Section>
    </Container>
  );
}

export default MyWay;
