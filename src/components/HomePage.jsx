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
        <Card  className="col-md-4" style={{ width: "18rem", margin:"10px" }}>
          <AiOutlineLink  style={{width:"50px", height:"50px"}}/>
          <Card.Body>
            <Card.Title>Links</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button ><Link exact to="/links" style={{color:"white", textDecoration:"none"}}>Go To Links</Link></Button>
          </Card.Body>
        </Card>
        <Card className="col-md-4"  style={{ width: "18rem", margin:"10px" }}>
        <AiFillFilePdf style={{width:"50px", height:"50px"}}/>
          <Card.Body>
            <Card.Title>Documents</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"><Link exact to="/docs" style={{color:"white", textDecoration:"none"}}>Go To Documents</Link></Button>
          </Card.Body>
        </Card>
        <Card className="col-md-4"  style={{ width: "18rem", margin:"10px" }}>
        <BsImageFill style={{width:"50px", height:"50px"}}/>
          <Card.Body>
            <Card.Title>Images</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary"><Link exact to="/images" style={{color:"white", textDecoration:"none"}}>Go To Images</Link></Button>
          </Card.Body>
        </Card>
      </div>
      </Container>
    </>
  );
};

export default HomePage;
