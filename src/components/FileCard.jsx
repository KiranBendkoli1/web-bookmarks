import React, { useEffect, useState } from "react";
import {Card} from "react-bootstrap"
import {getDownloadURL,deleteObject } from "firebase/storage";
import { useNavigate } from "react-router";
import {MdDeleteOutline} from "react-icons/md";
import {BsDownload} from "react-icons/bs";

const FileCard = (props) => {
  const [url, setUrl] = useState("");
  var data = props.data;
  const navigate = useNavigate()
  const downloadFile =()=>{
    getDownloadURL(data).then((url)=>{
      setUrl(url)
    })
  }
  const deleteFile = (mynode)=>{
    deleteObject(mynode).then(()=>{
      alert("File is deleted");
      navigate("/home")
    }).catch((error)=>{
      alert("Error deleting File")
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
            <div>
            <a href={url} className="btn btn-sm btn-outline-primary" style={{borderRadius:"15px"}} target="_blank" download><BsDownload /></a>
            <a onClick={()=>deleteFile(data)} className="btn btn-sm btn-outline-danger" style={{borderRadius:"15px"}}><MdDeleteOutline/></a>
            </div>

        </Card.Body>
      </Card>
    </>
  );
};

export default FileCard;
