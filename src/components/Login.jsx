import React, { useEffect, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword } from "../firebase";
import ReactNav1 from "./ReactNav1";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  
  useEffect(()=> {
    if(loading){
      
      return;
    }
    if (user) navigate("/home")
  },[user, loading]);
    
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
            <h2 className="text-center mb-4">Sign In</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </Form.Group>           
              <Button className="w-100 mt-2" onClick={(event)=>{
                event.preventDefault()
                logInWithEmailAndPassword(email, password)
              }} type="submit">
              Sign In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">Don't have an account? <Link exact to='/signup'>Sign Up</Link> </div>
          </Card.Body>
        </Card>
        
      </div>
    </Container>
    </>

  )
}

export default Login;