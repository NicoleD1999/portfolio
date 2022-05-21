import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// deconstructing from NavTabs component 
function NavTabs() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#work">Work</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default NavTabs;