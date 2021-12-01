import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand  ><Link className="header-text text-white fw-bold" to="/home">Portfolio</Link></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link ><Link  to="/home" className="header-text">Home</Link></Nav.Link>
        <Nav.Link ><Link  to="/blogs" className="header-text">Blogs</Link></Nav.Link>

        <Nav.Link><Link  to="/aboutMe" className="header-text">About Me</Link></Nav.Link>
        
        <Nav.Link ><Link  to="/contactMe" className="header-text">Contact Me</Link></Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;