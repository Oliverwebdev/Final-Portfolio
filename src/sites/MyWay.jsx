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
      <Title>My Way: An Insight into My Life</Title>

      <Section>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>
          Hello! My name is Oliver Spörl. I am a dedicated and dynamic MERN
          Stack developer with a passion for developing scalable full-stack web
          applications. Here, I want to give you a little insight into my
          journey that has made me who I am today.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>My Journey</SectionTitle>
        <Section>
          <SectionTitle>Early Career</SectionTitle>
          <Paragraph>
            My professional career began in a completely different field. After
            my training as a bakery sales assistant at Scherer Trostberg
            (09.2011 - 05.2014), I held various positions, including bakery
            sales assistant at Gerweck and hotel specialist with the Zordel
            family. These experiences have provided me with essential skills
            such as customer service, teamwork, and perseverance.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Transition to Technology</SectionTitle>
          <Paragraph>
            My interest in technology grew steadily, and I decided to take new
            paths. In April 2017, I started as a call center agent at Stadtwerke
            Pforzheim and later as a field service representative at Telekom.
            These positions further enhanced my interest in technology and
            communication.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>The Step into Web Development</SectionTitle>
          <Paragraph>
            In June 2023, I began my home-schooling to become a web developer at
            DCI. This step was the beginning of an exciting journey. The
            fascination for programming quickly captivated me. From simple games
            with JavaScript to landing pages to complex programs with Python – I
            continually discover new challenges and opportunities.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Completion and Future Plans</SectionTitle>
          <Paragraph>
            On August 8, 2024, I will officially complete my training as a web
            developer. From that point on, I am looking for a position where I
            can further develop and apply my skills. My goal is to develop
            innovative solutions that make life easier and more enriching.
          </Paragraph>
        </Section>
      </Section>

      <Section>
        <SectionTitle>Philosophy and Values</SectionTitle>
        <Paragraph>
          I firmly believe that with enough will and fun at work, there are no
          problems, only solutions. What may seem difficult at first becomes a
          fulfilling challenge through perseverance and passion. A quote that
          particularly inspires me is: "Problems are only opportunities in
          disguise."
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Milestones</SectionTitle>
        <List>
          <li>
            Completed home-schooling program for web developers (08.08.2024)
          </li>
        </List>
      </Section>

      <Section>
        <SectionTitle>Vision and Goals</SectionTitle>
        <Paragraph>
          My vision is to continue growing in web development and to master new
          challenges continuously. In the long term, I aim to develop innovative
          solutions that make people's lives easier and more enriching.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Personal Reflection</SectionTitle>
        <Section>
          <SectionTitle>Lessons Learned</SectionTitle>
          <Paragraph>
            Continuous learning and the willingness to take on new challenges
            are key to success in web development.
          </Paragraph>
        </Section>
        <Section>
          <SectionTitle>Advice</SectionTitle>
          <Paragraph>
            For those looking to find their own path: Stay curious and never
            lose the fun in what you do.
          </Paragraph>
        </Section>
      </Section>

      <Section>
        <SectionTitle>Conclusion</SectionTitle>
        <Paragraph>
          I hope you enjoyed this insight into my journey. If you want to learn
          more about my work or are interested in collaboration, don't hesitate
          to contact me!
        </Paragraph>
      </Section>
    </Container>
  );
}

export default MyWay;
