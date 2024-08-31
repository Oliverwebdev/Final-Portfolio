import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #1a1a2e, #16213e, #1a1a2e);
  color: #e0e0e0;
  padding: 2rem 0;
  font-family: 'Roboto', sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const SocialLink = styled.a`
  color: #e0e0e0;
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #00ffcc;
    transform: translateY(-3px);
  }
`;

const HeartIcon = styled(FontAwesomeIcon)`
  color: #ff6b6b;
  margin: 0 0.25rem;
  animation: ${pulseAnimation} 1s infinite;
`;

const TechStack = styled.div`
  font-size: 0.9rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechItem = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  margin: 0.25rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <Copyright>
            &copy; {currentYear} Oliver Spörl. All rights reserved.
          </Copyright>
          <TechStack>
            <FontAwesomeIcon icon={faCode} style={{ marginRight: '0.5rem' }} />
            Built with:
            <TechItem>React</TechItem>
            <TechItem>Styled Components</TechItem>
            <TechItem>Vite</TechItem>
          </TechStack>
        </div>
        <div>
          <p>
            Crafted with <HeartIcon icon={faHeart} /> in Germany
          </p>
          <SocialLinks>
            <SocialLink href="https://github.com/Oliverwebdev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/oliver-spörl-2586a52b3/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
            <SocialLink href="https://www.tiktok.com/@der_gamer_olli" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} />
            </SocialLink>
          </SocialLinks>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;