import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes für Animationen
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 123, 255, 1);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #1E1E1E;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin: 2rem auto;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 1080px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin: 1rem;
  }
`;

const Heading = styled.h2`
  color: #E0E0E0;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  color: #B0B0B0;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;

  &.p-1 {
    font-weight: bold;
    color: #00FF00;
  }

  animation: ${fadeIn} 2s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #CCC;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #2E2E2E;
  color: #E0E0E0;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #444;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #2E2E2E;
  color: #E0E0E0;
  resize: vertical;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: ${fadeIn} 2.5s ease-out;

  &:hover {
    background-color: #0056b3;
    animation: ${glow} 1.5s infinite alternate;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

function Contact() {
  return (
    <Container>
      <Heading>Looking for a skilled developer for your website?</Heading>
      <Paragraph className="p-1">Let's bring your dream site to life!</Paragraph>
      <Paragraph className="p-2">
        Reach out to me and together, we can make your vision a reality.
      </Paragraph>
      <Form id="contact-form" action="process_form.php" method="POST">
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea
            id="message"
            name="message"
            required
            minLength="10"
          ></TextArea>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Contact;
