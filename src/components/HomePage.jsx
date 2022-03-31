import React from "react";
import ReactNav from "./ReactNav";
import {Card, Button, Container} from "react-bootstrap"
import {BsImageFill} from "react-icons/bs"
import { Link } from "react-router-dom";
import {AiOutlineLink,AiFillFilePdf} from "react-icons/ai"
const HomePage = () => {
  return (
    <>
      <ReactNav />
      <Container>
      <div className="row d-flex justify-content-center">
        <Card  className="col-md-4 shadow" style={{ width: "18rem", margin:"10px",borderRadius:"20px"  }}>
          <AiOutlineLink  style={{width:"50px", height:"50px",color:"blue"}}/>
          <Card.Body>
            <Card.Title>Links</Card.Title>
            <Card.Text>
              review your uploaded links,  launch directly from website, upload your links and delete if its not useful 
            </Card.Text>
            <Button ><Link exact to="/links" style={{color:"white", textDecoration:"none"}}>Go To Links</Link></Button>
          </Card.Body>
        </Card>
        <Card className="col-md-4 shadow"  style={{ width: "18rem", margin:"10px",borderRadius:"20px" }}>
        <AiFillFilePdf style={{width:"50px", height:"50px",color:"red"}}/>
          <Card.Body>
            <Card.Title>Documents</Card.Title>
            <Card.Text>
              review your uploaded documents, upload new documents ,delete documents and download 
            </Card.Text>
            <Button variant="primary"><Link exact to="/docs" style={{color:"white", textDecoration:"none"}}>Go To Docs</Link></Button>
          </Card.Body>
        </Card>
        <Card className="col-md-4 shadow"  style={{ width: "18rem", margin:"10px",borderRadius:"20px" }}>
        <BsImageFill style={{width:"50px", height:"50px",color:"violet"}}/>
          <Card.Body>
            <Card.Title>Images</Card.Title>
            <Card.Text>
              view your uploaded images, upload new images ,delete image and you can download also
            </Card.Text>
            <Button ><Link exact to="/images" style={{color:"white", textDecoration:"none"}}>Go To Images</Link></Button>
          </Card.Body>
        </Card>
      </div>
      </Container>
    </>
  );
};

export default HomePage;
