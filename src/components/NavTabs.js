import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../assets/logo_transparent_background.png'



function NavTabs({ handlePageChange}) {
  return (
    <Navbar style={{background: '#6b9080'}}>
    <Container>
    <Navbar.Brand href="#home"><img src={Logo} style={{width:180, heigth:80}} alt="Logo"/></Navbar.Brand>
    <Nav className="me-auto" style={{fontWeight: 'bold'}}>
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