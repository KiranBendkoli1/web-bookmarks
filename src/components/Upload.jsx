import React, { useEffect, useState } from "react";
import { Card,Container,Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import {auth,uploadLink} from "../firebase";
import ReactNav from "./ReactNav";
import {useAuthState} from 'react-firebase-hooks/auth';
const Upload = () => {
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
    <>
      <ReactNav />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <Card className="shadow" style={{width:"500px", borderRadius:"5%"}}>
          <Card.Body>
            <h2 className="text-center  mb-4">Upload Link</h2>
            <Form>
              <Form.Group>
                <Form.Label>Enter Link</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="paste your url here"
                  required
                ></Form.Control>
              </Form.Group>
              <Button className="w-100 mt-3" onClick={(e)=>{
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
    </>
  );
};

export default Upload;
