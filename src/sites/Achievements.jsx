import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const certificates = [
  {
    id: 1,
    title: "Achievements 1",
    description: "Certificate as a web and software developer",
    date: "14.06.2024",
    pdf: "/Vorläufiges-Zertifikat.pdf",
  },
  {
    id: 1,
    title: "Achievements 2",
    description: "Introduction to Software Engineering",
    date: "02.07.2024",
    pdf: "/Coursera 6V7CLQ686LGP.pdf",
  },
  {
    id: 1,
    title: "Achievements 6",
    description: "Introduction to Artificial Intelligence (AI)",
    date: "03.07.2024",
    pdf: "/Coursera X49UAMWZXK2Q.pdf",
  },

  {
    id: 1,
    title: "Achievements 3",
    description: "Introduction to HTML, CSS, & JavaScript",
    date: "05.07.2024",
    pdf: "/Coursera KRYFFV2YQQJG.pdf",
  },
  {
    id: 1,
    title: "Achievements 4",
    description: "Generative AI: Pormpt Engineering Basics",
    date: "05.07.2024",
    pdf: "/Coursera TBMWQKYS2UJD.pdf",
  },
  {
    id: 1,
    title: "Achievements 5",
    description: "Generative AI: Introduction and Applications",
    date: "05.07.2024",
    pdf: "/Coursera U3W2BURF3WTF.pdf",
  },

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
  font-family: "Arial", sans-serif;
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

const PdfPreview = styled.div`
  margin-top: 10px;
  height: 200px;
  overflow: hidden;
  cursor: pointer;

  canvas {
    height: 100%;
  }
`;

const Modal = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  padding-top: 60px;
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 1200px;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

function Achievements() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openModal = (pdf) => {
    setSelectedPdf(pdf);
  };

  const closeModal = () => {
    setSelectedPdf(null);
  };

  return (
    <Container>
      <Title>My Achievements</Title>
      <Grid>
        {certificates.map((cert) => (
          <Card key={cert.id}>
            <CardTitle>{cert.title}</CardTitle>
            <CardDescription>{cert.description}</CardDescription>
            <CardDate>{cert.date}</CardDate>
            <PdfPreview onClick={() => openModal(cert.pdf)}>
              <Worker
                workerUrl={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}
              >
                <Viewer fileUrl={cert.pdf} />
              </Worker>
            </PdfPreview>
          </Card>
        ))}
      </Grid>
      {selectedPdf && (
        <Modal isOpen={!!selectedPdf}>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <Worker
              workerUrl={`//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}
            >
              <Viewer fileUrl={selectedPdf} />
            </Worker>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default Achievements;
