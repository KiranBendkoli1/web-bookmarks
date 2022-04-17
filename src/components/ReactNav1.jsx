import React, { useEffect, useState } from "react";
import { Nav, Navbar,Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";


const ReactNav1 = () => {
  const myStyle ={"background":"-webkit-linear-gradient(#eee, rgb(2, 171, 244))","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}
  
  return (
    <Navbar className="container shadow" bg="light" expand="lg" style={{borderRadius:"20px", marginTop:"10px", backgroundImage: "linear-gradient(to right, rgba(255,0,0,0),#dcdcdc)"}}>
      <Container>
      <Navbar.Brand style={myStyle} ><h3> Web Bookmarks</h3> </Navbar.Brand>        
      </Container>
    </Navbar>
  );
};

export default ReactNav1;
