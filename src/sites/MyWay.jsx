import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCoffee, faLaptopCode, faServer, faShieldAlt, faBug } from '@fortawesome/free-solid-svg-icons';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
  100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
`;

const typeWriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: #00FFFF; }
`;

const Container = styled.div`
  background: linear-gradient(135deg, #0a0a2e 0%, #1a1a3a 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  perspective: 1000px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  text-align: center;
  color: #00FFFF;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  animation: ${float} 6s ease-in-out infinite;
`;

const JourneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
`;

const JourneyStep = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${props => props.isVisible && css`
    opacity: 1;
    transform: translateY(0);
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const IconContainer = styled.div`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-right: 2rem;
  color: #00FFFF;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 1.8rem);
  margin-bottom: 0.5rem;
  color: #FF00FF;
`;

const StepDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const InteractiveElement = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: clamp(0.8rem, 1.5vw, 1rem);

  &:hover {
    background-color: rgba(0, 255, 255, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.4);
  }
`;

const SkillBadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SkillBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.7rem;
  margin: 0.2rem;
  background-color: rgba(255, 0, 255, 0.2);
  border-radius: 20px;
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 0, 255, 0.4);
    transform: scale(1.1);
  }
`;

const TypeWriterText = styled.div`
  overflow: hidden;
  border-right: 0.15em solid #00FFFF;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: 
    ${typeWriter} 3.5s steps(40, end),
    ${blink} 0.75s step-end infinite;
`;

const CoffeeCounter = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const CoffeeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  color: #6F4E37;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #1a1a3a;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const journeyData = [
  {
    icon: faCode,
    title: "Embarking on the Coding Journey",
    description: "On June 6th, 2023, I dove headfirst into the world of Web and Software Development at DCI. Little did I know, this decision would change my life forever.",
    skills: ["HTML", "CSS", "JavaScript"],
    interactive: "Click to see my first 'Hello World' program!",
    interactiveContent: "console.log('Hello, World! I'm Oliver, and I'm going to be a developer!');"
  },
  {
    icon: faLaptopCode,
    title: "Mastering Full-Stack Development",
    description: "After 14 months of intense coding, debugging, and probably way too much coffee, I proudly graduated on August 8th, 2024. The journey was challenging, but every line of code was worth it.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    interactive: "Click to reveal my favorite coding moment!",
    interactiveContent: "Debugging a complex API integration at 3 AM and finally seeing it work!"
  },
  {
    icon: faServer,
    title: "Diving into Artificial Intelligence",
    description: "With my developer skills sharpened, I couldn't resist the allure of AI. I immersed myself in the fascinating world of machine learning and neural networks.",
    skills: ["Python", "TensorFlow", "Natural Language Processing"],
    interactive: "Click to generate an AI-powered haiku!",
    interactiveContent: "Code flows like river\nBugs emerge, then submerge swift\nProgram blossoms bright"
  },
  {
    icon: faShieldAlt,
    title: "Exploring Cybersecurity with Kali Linux",
    description: "Curiosity led me to the mysterious realm of Kali Linux. While I didn't become a hacker, I gained valuable insights into cybersecurity and ethical hacking.",
    skills: ["Network Security", "Penetration Testing", "Cryptography"],
    interactive: "Click to decrypt a message!",
    interactiveContent: "Decoded: Testing the waters of security, one code at a time."
  },
  {
    icon: faBug,
    title: "The Next Challenge: Junior Pen Tester",
    description: "Currently, I'm leveling up my IT security skills with an eye on becoming a Junior Pen Tester. The thrill of finding and fixing vulnerabilities is addictive!",
    skills: ["Vulnerability Assessment", "Risk Analysis", "Ethical Hacking"],
    interactive: "Click to find the bug!",
    interactiveContent: "The 'eval' function in JavaScript can execute arbitrary code, posing a significant security risk if used with untrusted input."
  }
];

function MyWay() {
  const [visibleSteps, setVisibleSteps] = useState({});
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [modalContent, setModalContent] = useState(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => ({ ...prev, [entry.target.dataset.step]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleCoffeeClick = () => {
    setCoffeeCount((prev) => prev + 1);
  };

  const handleInteractiveClick = (content) => {
    setModalContent(content);
  };

  return (
    <Container>
      <Title>My Coding Odyssey</Title>
      <JourneyContainer>
        {journeyData.map((step, index) => (
          <JourneyStep
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            data-step={index}
            isVisible={visibleSteps[index]}
          >
            <IconContainer>
              <FontAwesomeIcon icon={step.icon} />
            </IconContainer>
            <StepContent>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              <SkillBadgesContainer>
                {step.skills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </SkillBadgesContainer>
              <InteractiveElement onClick={() => handleInteractiveClick(step.interactiveContent)}>
                <TypeWriterText>{step.interactive}</TypeWriterText>
              </InteractiveElement>
            </StepContent>
          </JourneyStep>
        ))}
      </JourneyContainer>
      <CoffeeCounter onClick={handleCoffeeClick}>
        <CoffeeIcon icon={faCoffee} />
        Coffees consumed: {coffeeCount}
      </CoffeeCounter>
      {modalContent && (
        <Modal onClick={() => setModalContent(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setModalContent(null)}>&times;</CloseButton>
            <pre>{modalContent}</pre>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default MyWay;