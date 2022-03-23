import React, { useEffect, useState } from "react";
import { Nav, Navbar,Container } from "react-bootstrap";
import { logout, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,Link } from "react-router-dom";

const ReactNav = () => {
    const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  return (
    <Navbar  className="container shadow" bg="light" expand="lg" style={{borderRadius:"20px", marginTop:"10px", backgroundImage: "linear-gradient(to right, aqua,rgba(255,0,0,0))"}}>
      <Container>
        <Navbar.Brand >Bookmarks Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='nav-link' exact to="/home">Home</Link></Nav.Link>
            <Nav.Link ><Link className='nav-link' exact to="/upload">Upload URL</Link></Nav.Link>
            <Nav.Link ><Link className='nav-link' exact to="/about">About</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <button
              className="btn btn-outline-danger"
              onClick={logout}
              type="submit"
              style={{ borderRadius: "25px" }}
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
