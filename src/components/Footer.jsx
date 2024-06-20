import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px; // Optional, für etwas Innenabstand bei kleineren Bildschirmen
  box-sizing: border-box; // Um Padding in die Gesamtbreite einzubeziehen
`;

function Footer() {
  return (
    <Container>
      Copyright (c) 2024 Oliver Spörl
    </Container>
  );
}

export default Footer;
