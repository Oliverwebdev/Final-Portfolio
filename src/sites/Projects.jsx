import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

// Keyframes for animations
const hoverAnimation = keyframes`
  0% {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 2rem;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 1s ease-in;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #00ffcc;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;
  text-shadow: 0 0 5px rgba(0, 255, 204, 0.5);
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-in;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RepoCard = styled.div`
  position: relative;
  background-color: #1e1e1e;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease, max-height 0.3s ease;
  overflow: hidden;
  max-height: ${(props) => (props.$isHovered ? '400px' : '200px')};
  ${(props) =>
    props.$isHovered &&
    css`
      animation: ${hoverAnimation} 0.3s forwards, ${pulse} 1s infinite;
    `}

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    max-height: none;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const RepoName = styled.h3`
  font-size: 1.5rem;
  color: #00ccff;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const RepoDescription = styled.p`
  font-size: 1rem;
  color: #b0b0b0;
  display: ${(props) => (props.$isHovered ? 'block' : 'none')};
  margin: 0;
  opacity: ${(props) => (props.$isHovered ? '1' : '0')};
  transition: opacity 0.3s ease-in;

  @media (max-width: 768px) {
    display: block;
    opacity: 1;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #444;
  margin: 1rem 0;

  @media (max-width: 480px) {
    margin: 0.5rem 0;
  }
`;

function Projects() {
  const [starredRepos, setStarredRepos] = useState([]);
  const [hoveredRepoId, setHoveredRepoId] = useState(null);

  useEffect(() => {
    async function getStarredRepos() {
      const username = 'Oliverwebdev'; // Dein GitHub-Benutzername
      const response = await fetch(`https://api.github.com/users/${username}/starred`);
      const data = await response.json();
      return data;
    }

    async function fetchStarredRepos() {
      const repos = await getStarredRepos();
      setStarredRepos(repos);
    }

    fetchStarredRepos();
  }, []);

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Container>
      <Title>Starred Projects</Title>
      <RepoGrid>
        {starredRepos.map((repo) => (
          <RepoCard
            key={repo.id}
            onMouseEnter={() => setHoveredRepoId(repo.id)}
            onMouseLeave={() => setHoveredRepoId(null)}
            $isHovered={hoveredRepoId === repo.id}
            onClick={() => handleCardClick(repo.html_url)}
          >
            <RepoName>{repo.name}</RepoName>
            <RepoDescription $isHovered={hoveredRepoId === repo.id}>
              {repo.description || 'No description available'}
            </RepoDescription>
            <Divider />
          </RepoCard>
        ))}
      </RepoGrid>
    </Container>
  );
}

export default Projects;
