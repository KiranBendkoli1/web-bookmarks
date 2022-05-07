import React, { useEffect, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword } from "../firebase";
import ReactNav1 from "../auth/ReactNav1";
import {AiOutlineMail,AiOutlineKey,AiOutlineLogin} from "react-icons/ai";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  
  const myStyle ={"background":"-webkit-linear-gradient(#eee, rgb(2, 171, 244))","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}
  const btnStyle = {"background-image": "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%) !important;"}

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
            <h2 className="text-center mb-4" style={myStyle}>Sign In</h2>
            <Form>
              <Form.Group id="email">
                <Form.Label><AiOutlineMail></AiOutlineMail> Email Address</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  style={{borderRadius:"0.8rem"}} 
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label><AiOutlineKey></AiOutlineKey> Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  style={{borderRadius:"0.8rem"}}
                  required
                />
              </Form.Group>           
              <Button variant="info" style={{color:"white", borderRadius:"0.8rem"}} className="w-100 mt-2"  onClick={(event)=>{
                event.preventDefault()
                if(email.length==0){
                  alert("Please Email Address");
                  return;
                }
                if(password.length<8){
                  alert("Please Enter the Correct Password");
                  return;
                }
                logInWithEmailAndPassword(email, password)
              }} type="submit"> 
              Sign In  <AiOutlineLogin></AiOutlineLogin>
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