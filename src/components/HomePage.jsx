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
        <Card  className="col-md-4" style={{ width: "18rem", margin:"10px",  }}>
          <AiOutlineLink  style={{width:"50px", height:"50px",color:"blue"}}/>
          <Card.Body>
            <Card.Title>Links</Card.Title>
            <Card.Text>
              review your uploaded links and upload your links 
            </Card.Text>
            <Button ><Link exact to="/links" style={{color:"white", textDecoration:"none"}}>Go To Links</Link></Button>
          </Card.Body>
        </Card>
        <Card className="col-md-4"  style={{ width: "18rem", margin:"10px" }}>
        <AiFillFilePdf style={{width:"50px", height:"50px",color:"red"}}/>
          <Card.Body>
            <Card.Title>Documents</Card.Title>
            <Card.Text>
              review your uploaded documents, upload new documents ,delete documents and download 
            </Card.Text>
            <Button variant="primary"><Link exact to="/docs" style={{color:"white", textDecoration:"none"}}>Go To Docs</Link></Button>
          </Card.Body>
        </Card>
        <Card className="col-md-4"  style={{ width: "18rem", margin:"10px" }}>
        <BsImageFill style={{width:"50px", height:"50px",color:"violet"}}/>
          <Card.Body>
            <Card.Title>Images</Card.Title>
            <Card.Text>
              view uploaded images upload download and delete
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
