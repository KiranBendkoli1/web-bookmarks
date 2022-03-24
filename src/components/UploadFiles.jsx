import React, { useEffect, useState } from "react";
import { Card, Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { auth,storage } from "../firebase";
import ReactNav from "./ReactNav";
import { useAuthState } from "react-firebase-hooks/auth";
import {ref, uploadBytesResumable} from "firebase/storage";


const UploadFiles = () => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const uploadF = (user, file) => {
    if (file == null) return;
    
    // const fileRef = storageRef.child(file.name)
    // fileRef.put(file).then(()=>{
    //     alert("file uploaded successful")
    // })
    let fileRef = ref(storage, `${user.uid}/${file.name}`)

    const uploadTask = uploadBytesResumable(fileRef,file);

    uploadTask.on("state_changed", (snapshot)=>{
      const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
      console.log('Upload is '+ progress+"%")
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
    <>
      <ReactNav />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <Card className="shadow" style={{ width: "500px", borderRadius: "5%" }}>
          <Card.Body>
            <h2 className="text-center  mb-4">Upload File</h2>
            <Form>
              <Form.Group>
                <Form.Label>Select File</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                ></Form.Control>
              </Form.Group>
              <Button
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
    </>
  );
};

export default UploadFiles;
