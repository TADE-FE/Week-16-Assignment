import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        <Row>
          <Col>
            &copy; {new Date().getFullYear()} Tyler Ade React App
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
