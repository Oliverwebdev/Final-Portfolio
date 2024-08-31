import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 123, 255, 0.8); }
  100% { box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  box-sizing: border-box;
  perspective: 1000px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #00ffcc;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
  animation: ${fadeIn} 1s ease-out, ${float} 3s ease-in-out infinite;
`;

const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const RepoCard = styled.div`
  background: rgba(30, 30, 30, 0.8);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  animation: ${fadeIn} 0.5s ease-out;
  animation-fill-mode: backwards;

  &:nth-child(odd) {
    animation-delay: 0.2s;
  }

  &:nth-child(even) {
    animation-delay: 0.4s;
  }

  &:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const RepoName = styled.h3`
  font-size: 1.8rem;
  color: #00ccff;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #00ccff, transparent);
    transition: width 0.3s ease;
  }

  ${RepoCard}:hover &::after {
    width: 100%;
  }
`;

const RepoDescription = styled.p`
  font-size: 1rem;
  color: #b0b0b0;
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const ViewButton = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(45deg, #007bff, #00ffcc);
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  align-self: flex-start;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
    animation: ${glow} 1.5s infinite alternate;
  }

  &:hover::before {
    left: 100%;
  }
`;

function Projects() {
  const [starredRepos, setStarredRepos] = useState([]);

  useEffect(() => {
    async function getStarredRepos() {
      const username = 'Oliverwebdev';
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

  return (
    <Container>
      <Title>Stellar Projects</Title>
      <RepoGrid>
        {starredRepos.map((repo, index) => (
          <RepoCard key={repo.id} style={{ animationDelay: `${index * 0.1}s` }}>
            <RepoName>{repo.name}</RepoName>
            <RepoDescription>
              {repo.description || 'No description available'}
            </RepoDescription>
            <ViewButton href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Explore
            </ViewButton>
          </RepoCard>
        ))}
      </RepoGrid>
    </Container>
  );
}

export default Projects;