import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { getDownloadURL, deleteObject } from "firebase/storage";
import { useNavigate } from "react-router";
import { MdDeleteOutline } from "react-icons/md";
import {BsDownload} from "react-icons/bs";
const ImageCard = (props) => {
  const [url, setUrl] = useState("");
  var data = props.data;
  const navigate = useNavigate();
  const downloadFile = () => {
    getDownloadURL(data).then((url) => {
      setUrl(url);
    });
  };
  const deleteFile = (mynode) => {
    deleteObject(mynode)
      .then(() => {
        alert("Image is deleted");
        navigate("/home");
      })
      .catch((error) => {
        alert("Error deleting Image");
      });
  };

  useEffect(() => {
    downloadFile();
  }, []);

  return (
    <>
      <Card
        className="col-lg-2 m-2"
        style={{ height: "18rem", width: "200px",borderRadius:"0.8rem", backgroundImage: "linear-gradient(to right, rgba(255,0,0,0),#dcdcdc)" }}
      >
        <Card.Img variant="top" src={url} />
        <Card.Body
          className="align-text-center"
          style={{ display: "block", justifyContent: "space-between" }}
        >
          <p className="mt-2">{data.name}</p>
          <div style={{display:"block",justifyContent: "space-around" }}>
            <a
              href={url}
              className="btn btn-sm btn-outline-primary"
              style={{ borderRadius: "15px" }}
              target="_blank"
              download
            >
              <BsDownload />
            </a>
            <a
              onClick={() => deleteFile(data)}
              className="btn btn-sm btn-outline-danger"
              style={{ borderRadius: "15px" }}
            >
              <MdDeleteOutline />
            </a>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImageCard;
