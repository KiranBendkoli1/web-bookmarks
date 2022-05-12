import React, { useEffect, useState } from "react";
import { Card, Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { auth,storage } from "../firebase";
import ReactNav from "./ReactNav";
import { useAuthState } from "react-firebase-hooks/auth";
import {ref, uploadBytesResumable} from "firebase/storage";


const UploadFiles = () => {
  const myStyle ={"background":"-webkit-linear-gradient(#eee, rgb(2, 171, 244))","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const uploadF = (user, file) => {
    if (file == null) return;
    let fileRef = ref(storage, `${user.uid}/docs/${file.name}`)

    const uploadTask = uploadBytesResumable(fileRef,file);

    uploadTask.on("state_changed", (snapshot)=>{
      const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
      // console.log('Upload is '+ progress+"%")
    });
    navigate("/home")
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) return navigate("/");
  }, [user, loading]);
  return (
    <div style={{"height":"100vh"}}>
      <ReactNav />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <Card className="shadow" style={{ width: "500px", borderRadius: "1.5rem",borderRadius:"0.8rem", backgroundImage: "linear-gradient(to right, rgba(255,0,0,0),#dcdcdc)" }}>
          <Card.Body>
            <h2 className="text-center  mb-4" style={myStyle}>Upload File</h2>
            <Form>
              <Form.Group>
                <Form.Label>Select File</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{borderRadius:"0.8rem"}} 
                  required
                ></Form.Control>
              </Form.Group>
              <Button
              variant="info" style={{color:"white", borderRadius:"0.8rem"}} 
                className="w-100 mt-3"
                onClick={(e) => {
                  e.preventDefault();
                  uploadF(user,file);
                  
                }}
                type="submit"
              >
                Upload
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default UploadFiles;
