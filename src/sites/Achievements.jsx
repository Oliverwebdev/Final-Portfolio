import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const certificates = [
  {
    id: 1,
    title: "Web and Software Developer",
    description: "Mastered full-stack development principles and practices",
    pdf: "/Vorläufiges-Zertifikat.pdf",
  },
  {
    id: 2,
    title: "Software Engineering Foundations",
    description: "Gained a solid understanding of software engineering concepts and methodologies",
    pdf: "/Coursera 6V7CLQ686LGP.pdf",
  },
  {
    id: 3,
    title: "AI Fundamentals",
    description: "Explored the core principles and applications of Artificial Intelligence",
    pdf: "/Coursera X49UAMWZXK2Q.pdf",
  },
  {
    id: 4,
    title: "Web Development Essentials",
    description: "Honed skills in HTML, CSS, and JavaScript for modern web development",
    pdf: "/Coursera KRYFFV2YQQJG.pdf",
  },
  {
    id: 5,
    title: "Generative AI: Prompt Engineering",
    description: "Learned advanced techniques in crafting effective prompts for AI systems",
    pdf: "/Coursera TBMWQKYS2UJD.pdf",
  },
  {
    id: 6,
    title: "Generative AI Applications",
    description: "Explored practical applications and implementation of Generative AI technologies",
    pdf: "/Coursera U3W2BURF3WTF.pdf",
  },
];

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.5); }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const appearAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Container = styled.div`
  background: linear-gradient(135deg, #0a0a2e 0%, #1a1a3a 100%);
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #00ffff;
  text-align: center;
  margin-bottom: 50px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  animation: ${floatAnimation} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
`;

const TimelinePath = styled.div`
  position: absolute;
  width: 6px;
  background: #333;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  border-radius: 3px;

  @media (max-width: 768px) {
    left: 31px;
  }
`;

const TimelineProgress = styled.div`
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, #00ffff, #ff00ff);
  top: 0;
  left: 0;
  border-radius: 3px;
  transition: height 0.05s linear;
`;

const MilestoneContainer = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: calc(50% - 80px);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${props => props.isVisible && css`
    opacity: 1;
    transform: translateY(0);
    animation: ${appearAnimation} 0.5s ease-out;
  `}

  ${props => props.position === 'left' ? css`
    left: 0;
  ` : css`
    left: 50%;
  `}

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #00ffff;
    border: 4px solid #ff00ff;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    animation: ${pulseGlow} 2s infinite;
  }

  ${props => props.position === 'left' ? css`
    &::after {
      right: -16px; // Adjusted to align with the center line
    }
  ` : css`
    &::after {
      left: -13px; // Adjusted to align with the center line
    }
    padding-left: 30px; // Reduced left padding for right-side content
  `}

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;

    &::after {
      left: 15px;
    }
  }
`;

const MilestoneContent = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03) rotate(1deg);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  }
`;

const MilestoneTitle = styled.h2`
  color: #00ffff;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const MilestoneDescription = styled.p`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5;
`;

const MilestoneDate = styled.div`
  color: #ff00ff;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 10px;
`;

const ViewCertificateButton = styled.button`
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  font-weight: bold;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 15px rgba(255, 0, 255, 0.4);
  }
`;

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
  width: 80%;
  max-width: 900px;
  max-height: 80vh;
  overflow: auto;
  position: relative;
`;

const CloseButton = styled.span`
  color: #aaa;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
  }
`;

function Achievements() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [visibleMilestones, setVisibleMilestones] = useState({});
  const [progressHeight, setProgressHeight] = useState(0);
  const milestoneRefs = useRef([]);
  const timelineRef = useRef(null);

  const updateMilestoneVisibility = (progress) => {
    if (timelineRef.current) {
      const timelineHeight = timelineRef.current.offsetHeight;
      milestoneRefs.current.forEach((ref, index) => {
        if (ref) {
          const milestoneTop = ref.offsetTop - timelineRef.current.offsetTop;
          const milestoneHeight = ref.offsetHeight;
          const milestoneCenter = milestoneTop + milestoneHeight / 2;
          const milestoneProgress = (milestoneCenter / timelineHeight) * 100;

          setVisibleMilestones(prev => ({
            ...prev,
            [index]: progress >= milestoneProgress - 5 // Show slightly before reaching the center
          }));
        }
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visibleHeight = Math.max(0, Math.min(viewportHeight - top, height));
        const progress = (visibleHeight / height) * 100;
        const newProgressHeight = Math.max(0, Math.min(progress, 100));
        setProgressHeight(newProgressHeight);
        updateMilestoneVisibility(newProgressHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (pdf) => {
    setSelectedPdf(pdf);
  };

  const closeModal = () => {
    setSelectedPdf(null);
  };

  return (
    <Container>
      <Title>Journey of Achievements</Title>
      <Timeline ref={timelineRef}>
        <TimelinePath>
          <TimelineProgress style={{ height: `${progressHeight}%` }} />
        </TimelinePath>
        {certificates.map((cert, index) => (
          <MilestoneContainer
            key={cert.id}
            position={index % 2 === 0 ? 'left' : 'right'}
            ref={(el) => (milestoneRefs.current[index] = el)}
            data-id={index}
            isVisible={visibleMilestones[index]}
          >
            <MilestoneContent>
              <MilestoneTitle>{cert.title}</MilestoneTitle>
              <MilestoneDescription>{cert.description}</MilestoneDescription>
              <MilestoneDate>{cert.date}</MilestoneDate>
              <ViewCertificateButton onClick={() => openModal(cert.pdf)}>
                View Certificate
              </ViewCertificateButton>
            </MilestoneContent>
          </MilestoneContainer>
        ))}
      </Timeline>
      {selectedPdf && (
        <Modal isOpen={!!selectedPdf}>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <Worker workerUrl={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
              <Viewer fileUrl={selectedPdf} />
            </Worker>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default Achievements;