import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'



function NavTabs({ handlePageChange}) {
  return (
    <Navbar style={{background: '#6b9080'}}>
    <Container>
    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#about" onClick={() => handlePageChange('About')}>About</Nav.Link>
      <Nav.Link href="#work" onClick={() => handlePageChange('Work')}>Work</Nav.Link>
      <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
      <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default NavTabs;