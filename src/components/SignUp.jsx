import React, { useEffect, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactNav1 from "./ReactNav1";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  
  const register = (event) =>{
    event.preventDefault()
    // if(!name) alert("Please enter name: ")
    
    registerWithEmailAndPassword(name, email, password)
  }
  useEffect(()=>{
    if(loading) return;
    if (user) navigate('/home')
  }, [user, loading])

  return (
    <>
    <ReactNav1 />
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card className="shadow" style={{borderRadius:"4%"}}>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(event) =>{
                    setEmail(event.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  required
                />
              </Form.Group>
              
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(event) => {
                      setCPassword(event.target.value);
                    }}
                    required
                  />
                </Form.Group>
              
              <Button className="w-100 mt-2" onClick={register} type="submit">
              Sign Up
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">Already have an account? <Link to="/">Login</Link></div>
          </Card.Body>
        </Card>
        
      </div>
    </Container>
    </>
  )
}

export default SignUp;