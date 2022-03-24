import React, { useEffect, useState } from "react";
import {Card} from "react-bootstrap"
import {getDownloadURL } from "firebase/storage";
import {Link} from "react-router-dom"

const ImageCard = (props) => {
  const [url, setUrl] = useState("");
  var data = props.data;
  const downloadFile =()=>{
    getDownloadURL(data).then((url)=>{
      setUrl(url)
    })
  }

  useEffect(()=>{
    downloadFile()
  },[]);

  return (
    <>
      <Card className="col-lg-2 m-2" style={{ height:"200px", width:"200px"}}>
      <Card.Img variant="top" src={url} />
      <Card.Body className='align-text-center' style={{display:"flex", justifyContent:"space-between"}}>
            <p className="mt-2">{data.name}</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImageCard;
