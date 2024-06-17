import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import Image from '../assets/HeroImage.jpg'; // Importiere das Bild

// Keyframes für Animationen
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
    transform: rotate(-180deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
`;

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${(props) => (props.$isOpen ? "flex" : "none")};
    position: absolute;
    top: 3.5rem;
    left: 0;
    right: 0;
    background-color: #333;
    padding: 1rem 0;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Li = styled.li`
  margin: 0 1rem;
  position: relative;
  animation: ${rotateIn} 0.5s ease-in-out;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #007bff;
    transition: width 0.4s ease;

    ${(props) =>
      props.$isHovered &&
      css`
        width: 100%;
        left: 0;
        background: #00ff00;
      `}
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

const Burger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    z-index: 1001; /* Ensure it's above other elements */
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.4s;

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

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        
        <Li
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
          $isHovered={hoveredIndex === 0}
        >
          <StyledLink to="/skilltree" onClick={closeMenu}>
            Skill Tree
          </StyledLink>
        </Li>
        <Li
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
          $isHovered={hoveredIndex === 1}
        >
          <StyledLink to="/my-way" onClick={closeMenu}>
            My Journey
          </StyledLink>
        </Li>
        <Li
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
          $isHovered={hoveredIndex === 2}
        >
          <StyledLink to="/projects" onClick={closeMenu}>
            Projects
          </StyledLink>
        </Li>
        <Li
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
          $isHovered={hoveredIndex === 3}
        >
          <StyledLink to="/achievements" onClick={closeMenu}>
            Achievements
          </StyledLink>
        </Li>
        <Li
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
          $isHovered={hoveredIndex === 4}
        >
          <StyledLink to="/contact" onClick={closeMenu}>
            Contact
          </StyledLink>
        </Li>
        <Li
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
          $isHovered={hoveredIndex === 5}
        >
          <StyledLink to="/about-me" onClick={closeMenu}>
            <img src={Image} alt="About Me" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          </StyledLink>
        </Li>
      </Ul>
    </Nav>
  );
}

export default NavBar;
