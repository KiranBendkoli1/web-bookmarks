import React, { useEffect, useState } from "react";
import { Nav, Navbar,Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";


const ReactNav1 = () => {
  
  return (
    <Navbar className="container shadow" bg="light" expand="lg" style={{borderRadius:"20px", marginTop:"10px", backgroundImage: "linear-gradient(to right, rgba(255,0,0,0),grey)"}}>
      <Container>
        <Navbar.Brand><Link className="navbar-brand" exact to="/">Bookmarks Web</Link></Navbar.Brand>
        
        
        
      </Container>
    </Navbar>
  );
};

export default ReactNav1;
