import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import Image from '../assets/HeroImage.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rotateIn = keyframes`
  from {
    opacity: 0;
    transform: rotateY(-90deg);
  }
  to {
    opacity: 1;
    transform: rotateY(0deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Nav = styled.nav`
  background: linear-gradient(135deg, #1e1e1e, #2c2c2c);
  padding: 1rem;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #2c2c2c, #1e1e1e);
    padding: 1rem 0;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Li = styled.li`
  margin: 0 1rem;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotateIn} 0.5s ease-in-out;
  animation-fill-mode: backwards;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(90deg, transparent, #007bff, transparent);
    transform: scaleX(0);
    transition: transform 0.4s;
    transform-origin: center;
    opacity: 0.7;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    opacity: 0;
    animation: ${fadeIn} 0.5s ease-in-out forwards;
    
    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
    &:nth-child(5) { animation-delay: 0.5s; }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  position: relative;
  transition: color 0.3s;
  
  &:hover {
    color: #007bff;
  }
`;

const Burger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    z-index: 1001;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.4s;
  border-radius: 3px;

  ${(props) =>
    props.$isOpen &&
    css`
      &:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
      }
    `}
`;

const ProfileLink = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
  animation: ${pulse} 2s ease-in-out infinite;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <Burger onClick={toggleMenu}>
        <Line $isOpen={isOpen} />
        <Line $isOpen={isOpen} />
        <Line $isOpen={isOpen} />
      </Burger>
      <Ul $isOpen={isOpen}>
        <Li>
          <StyledLink to="/skilltree" onClick={closeMenu}>
            Skill Tree
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/my-way" onClick={closeMenu}>
            My Journey
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/projects" onClick={closeMenu}>
            Projects
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/achievements" onClick={closeMenu}>
            Achievements
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/contact" onClick={closeMenu}>
            Contact
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/about-me" onClick={closeMenu}>
            <ProfileLink>
              <ProfileImage src={Image} alt="About Me" />
            </ProfileLink>
          </StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
}

export default NavBar;