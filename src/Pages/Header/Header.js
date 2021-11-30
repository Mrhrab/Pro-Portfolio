import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  ><Link className="header-text" to="/home">Home</Link></Navbar.Brand>
    <Nav className="me-auto">

      <Nav.Link > <a href="https://form.jotform.com/213333813992357" alt="">Contact Me</a> </Nav.Link>
      
      <Nav.Link ><Link  to="/projects" className="header-text">Projects</Link></Nav.Link>
      <Nav.Link ><Link  to="/" className="header-text">Projects</Link></Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;