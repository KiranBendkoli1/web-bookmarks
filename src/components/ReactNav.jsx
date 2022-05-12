import React, { useEffect, useState } from "react";
import { Nav, Navbar,Container } from "react-bootstrap";
import { logout, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,Link } from "react-router-dom";

const ReactNav = () => {

  const myStyle ={"background":"-webkit-linear-gradient(#eee, rgb(2, 171, 244))","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}
    
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  return (
    <Navbar  className="container shadow" bg="light" expand="lg" style={{borderRadius:"0.8rem", backgroundImage: "linear-gradient(to right, rgba(255,0,0,0),#dcdcdc)"}}>
      <Container>
        <Navbar.Brand style={myStyle} ><h3>Web Bookmarks</h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link activeClassName="menu_active" className='nav-link' exact to="/home">Home</Link></Nav.Link>
            <Nav.Link ><Link activeClassName="menu_active" className='nav-link' exact to="/links">Links</Link></Nav.Link>
            <Nav.Link ><Link activeClassName="menu_active" className='nav-link' exact to="/docs">Documents</Link></Nav.Link>
            <Nav.Link ><Link activeClassName="menu_active" className='nav-link' exact to="/images">Images</Link></Nav.Link>
            <Nav.Link ><Link activeClassName="menu_active" className='nav-link' exact to="/about">About</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <button
              className="btn btn-info"
              
              onClick={logout}
              type="submit"
              style={{ borderRadius: "1.2rem", color:"white" }}
            >
              Logout
            </button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ReactNav;
