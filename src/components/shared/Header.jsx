import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import JayInt from '../../assets/JayInternational.png';
import '../../styles/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  // Run once immediately on mount + route change
  handleScroll();

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Companies', path: '/companies' },
    { name: 'Customers', path: '/customers' },
  ];

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-wrapper">
          <img 
  src={JayInt} 
  alt="Jay International" 
  className={`brand-logo ${!scrolled ? 'logo-white' : ''}`} 
/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item) => (
              <Nav.Link
                key={item.name}
                as={Link}
                to={item.path}
                className={`nav-custom-link ${location.pathname === item.path ? 'active-link' : ''}`}
              >
                {item.name}
              </Nav.Link>
            ))}
            <Nav.Link as={Link} to="/contact" className="nav-cta-button">
              Get in Touch
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;