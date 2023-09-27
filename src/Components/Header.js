import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div className="nav">
      <Navbar collapseOnSelect fixed="top" expand="lg" variant="light">
        <Container>
          <LinkContainer to="/home">
            <Navbar.Brand className="logo" href="/Home"><h2 className="title text-white">LOGO</h2></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="responsive" />
          <Navbar.Collapse>
            <Nav className="nav1">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/skills">Skills</NavLink>
              <NavLink to="/projects">Projects</NavLink>
            </Nav>
            <a href="https://github.com/OmaimaSayedmohamed2022">
              <FaGithub className="icons" />
            </a>
            <a href="https://www.facebook.com/omaima.sayed.75">
              <FaFacebook className="icons" />
            </a>
            <a href="https://www.linkedin.com/in/omaima-sayed-45b829256/">
              <FaLinkedin className="icons" />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;


