import React, { useEffect, useState } from "react";
import { Card,Container,Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import {auth,uploadLink} from "../firebase";
import ReactNav from "./ReactNav";
import {useAuthState} from 'react-firebase-hooks/auth';
const UploadLinks = () => {
  const myStyle ={"background":"-webkit-linear-gradient(#eee, rgb(2, 171, 244))","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}
  const [link, setLink] = useState("");
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(()=>{
    if(loading){
      return;
    }
    if(!user) return navigate("/")
  },[user, loading])

  return (
    <div style={{"height":"100vh"}}>
      <ReactNav />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <Card className="shadow" style={{width:"500px", borderRadius:"0.8rem", backgroundImage: "linear-gradient(to right, rgba(255,0,0,0),#dcdcdc)"}}>
          <Card.Body>
            <h2 className="text-center  mb-4" style={myStyle}>Upload Link</h2>
            <Form>
              <Form.Group>
                <Form.Label>Enter Link</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="paste your url here"
                  style={{borderRadius:"0.8rem"}} 
                  required
                ></Form.Control>
              </Form.Group>
              <Button variant="info" style={{color:"white", borderRadius:"0.8rem"}} className="w-100 mt-3" onClick={(e)=>{
                e.preventDefault()
                uploadLink(user, link)
                navigate('/home')
              }} type="submit">
              Upload
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default UploadLinks;
