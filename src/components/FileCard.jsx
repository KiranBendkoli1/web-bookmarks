import React, { useEffect, useState } from "react";
import {Card} from "react-bootstrap"
import {getDownloadURL } from "firebase/storage";
import {Link} from "react-router-dom"

const FileCard = (props) => {
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
      <Card className="shadow m-2" style={{borderRadius:"15px"}}>
      <Card.Body className='align-text-center' style={{display:"flex", justifyContent:"space-between"}}>
            <p>{data.name}</p>
            <a href={url} className="btn btn-sm btn-outline-primary" target="_blank" download>Download</a>
        </Card.Body>
      </Card>
    </>
  );
};

export default FileCard;
