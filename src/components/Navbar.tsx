"use client";
import Link from "next/link";
import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import "@/assets/css/navbar.css"; // Import Navbar styles

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbar-custom px-3 shadow-sm py-3">
    <Container className="d-flex align-items-center justify-content-between">
      
      {/* ✅ Logo (First in All Views) */}
      <Navbar.Brand as={Link} href="/">
        <Image src="/logo.jpg" alt="Logo" width={110} height={25} />
      </Navbar.Brand>
  
      {/* ✅ Social Icons (Stable in Mobile, Before Hamburger) */}
      <div className="d-flex gap-3 social-icons d-lg-none">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaFacebook size={24} />
        </a>
      </div>
  
      {/* ✅ Hamburger Toggle (Rightmost in Mobile) */}
      <Navbar.Toggle
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav"
        className="hamburger-menu"
      />
  
      {/* ✅ Navigation Links (Only Expands Here) */}
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="fw-semibold text-center">
          <Nav.Link as={Link} href="/home" className="nav-link-custom">Home</Nav.Link>
          <Nav.Link as={Link} href="/about" className="nav-link-custom">About</Nav.Link>
  
          {/* Explore Dropdown */}
          <NavDropdown title="Explore" id="explore-dropdown">
            <NavDropdown.Item as={Link} href="/blog" className="nav-link-custom">Blog</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/projects" className="nav-link-custom">Projects</NavDropdown.Item>
          </NavDropdown>
  
          <Nav.Link as={Link} href="/contact" className="nav-link-custom">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  
      {/* ✅ Social Icons (Right in Desktop) */}
      <div className="d-none d-lg-flex gap-3 social-icons">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaLinkedin size={24} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
          <FaFacebook size={24} />
        </a>
      </div>
  
    </Container>
  </Navbar>
  );
};

export default MyNavbar;
