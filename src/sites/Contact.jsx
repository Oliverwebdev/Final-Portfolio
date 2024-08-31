import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
  100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled Components
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
  position: relative;
  overflow: hidden;

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

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.5);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 3rem;
  border: 2px solid rgba(0, 255, 255, 0.5);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00FFFF;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`;

const InputIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: rgba(0, 255, 255, 0.7);
`;

const TextAreaIcon = styled(InputIcon)`
  top: 1.5rem;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background: linear-gradient(45deg, #00FFFF, #00BFFF);
  border: none;
  border-radius: 10px;
  color: #000;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.4);
    animation: ${glow} 1.5s infinite alternate;
  }

  &:active {
    transform: translateY(-1px);
  }

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

  &:hover::before {
    left: 100%;
  }
`;

const LoadingSpinner = styled(FontAwesomeIcon)`
  animation: ${spin} 1s linear infinite;
  margin-right: 0.5rem;
`;

const InteractiveElement = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  text-align: center;
  margin-top: 1rem;

  &:hover {
    background-color: rgba(0, 255, 255, 0.2);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.4);
  }
`;

const FloatingIcons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingIcon = styled(FontAwesomeIcon)`
  position: absolute;
  color: rgba(0, 255, 255, 0.2);
  animation: ${float} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  font-size: ${props => props.size || '1rem'};
  left: ${props => props.left};
  top: ${props => props.top};
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_0k2kjag', 'template_n8i038q', formRef.current, 'GufY9EpHnUDgkqjIy')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('FAILED...', error.text);
        toast.error('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const generatePlaceholderMessage = () => {
    const messages = [
      "I'm looking for a talented developer for my next project...",
      "Your portfolio is impressive! I'd like to discuss a potential collaboration...",
      "We have an exciting opportunity that might interest you...",
      "I came across your work and I'm intrigued. Can we chat about..."
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <Container>
      <FloatingIcons>
        <FloatingIcon icon={faEnvelope} size="2rem" left="10%" top="20%" duration="7s" />
        <FloatingIcon icon={faComment} size="2.5rem" left="80%" top="15%" duration="8s" delay="1s" />
        <FloatingIcon icon={faPaperPlane} size="1.8rem" left="15%" top="70%" duration="6s" delay="0.5s" />
        <FloatingIcon icon={faUser} size="2.2rem" left="75%" top="65%" duration="9s" delay="1.5s" />
      </FloatingIcons>
      <Title>Let's Connect!</Title>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputGroup>
            <InputIcon icon={faUser} />
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputIcon icon={faEnvelope} />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <TextAreaIcon icon={faComment} />
            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <LoadingSpinner icon={faSpinner} /> Sending...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </>
            )}
          </SubmitButton>
        </Form>
        <InteractiveElement onClick={() => setFormData(prev => ({ ...prev, message: generatePlaceholderMessage() }))}>
          Need inspiration? Click for a message idea!
        </InteractiveElement>
      </FormContainer>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </Container>
  );
}

export default Contact;