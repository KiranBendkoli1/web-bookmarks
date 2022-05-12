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
  
  const myStyle ={"background":"-webkit-linear-gradient(#eee, rgb(2, 171, 244))","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}
  
  const register = (event) =>{
    event.preventDefault()
    var re = /^(?=.*[0-9])(?=.[!@$%^&*~?])[a-zA-Z0-9!@#$%^&*~?]{8,15}/;
    if(email=="") {
      alert("Email Address field is empty: ");
      return;
    }else if(!password.match(re)){
      alert("Password is in wrong format");
    }
    
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
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card className="shadow" style={{borderRadius:"0.8rem", backgroundImage: "linear-gradient(to right, rgba(255,0,0,0),#dcdcdc)"}}>
          <Card.Body>
            <h2 className="text-center mb-4" style={myStyle}>Sign Up</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label>  Email Address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(event) =>{
                    setEmail(event.target.value);
                  }}
                  style={{borderRadius:"0.8rem"}}
                  required
                />
              </Form.Group>
              <Form.Group id="password" className="mt-2">
                <Form.Label> Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  style={{borderRadius:"0.8rem"}}
                  required
                />
                <span style={{fontSize:".8rem"}} className="mb-2">Enter Password of Minimum 8 digits with atleast one special symbel and number 
              </span>
              </Form.Group>
              <Button variant="info" style={{color:"white", borderRadius:"0.8rem"}} className="w-100 mt-2" onClick={register} type="submit">
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