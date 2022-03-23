import React, { useEffect, useState } from "react";
import { Nav, Navbar,Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";


const ReactNav1 = () => {
  
  return (
    <Navbar className="container shadow" bg="light" expand="lg" style={{borderRadius:"20px", marginTop:"10px", backgroundImage: "linear-gradient(to right, aqua,rgba(255,0,0,0))"}}>
      <Container>
        <Navbar.Brand><Link className="navbar-brand" exact to="/">Bookmarks Web</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='nav-link' exact to="/">Sign In</Link></Nav.Link>
            <Nav.Link ><Link className='nav-link' exact to="/signup">Sign Up</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
};

export default ReactNav1;
