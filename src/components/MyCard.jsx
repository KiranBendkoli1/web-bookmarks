import React from 'react'
import { Card} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { db } from '../firebase';
import { useNavigate } from "react-router";
import {MdDeleteOutline, MdOutlineLaunch} from "react-icons/md";

import { getDocs, collection, doc, deleteDoc} from "firebase/firestore";

const MyCard = (props) => {

  const url = props.data.data().link;
  const collectionName = props.data.ref.path;
  const docName = props.data.id;
  const navigate = useNavigate();
  const Collection = collectionName.slice(0, (collectionName.length-docName.length))
  var element;
  console.log(url)
  const deleteData = (del)=>{
    deleteDoc(doc(db,Collection, docName)).then(()=>{
      alert("Link Deleted");
      navigate("/home")
    })
  }
  return (
    <>
    <Card className="shadow m-2" style={{borderRadius:"15px"}}>
      <Card.Body className='align-text-center' style={{display:"flex", justifyContent:"space-between"}}>
        <div> {url}</div>

        <div style={{marginRight:"20px"}}>
        {
          url.includes('http',0)?<a className='btn btn-sm btn-outline-primary' target="_blank" href={url} style={{borderRadius:"15px"}}><MdOutlineLaunch/></a>:<Link  className='btn btn-sm btn-outline-primary' target="_blank" to={`//${url}`} style={{borderRadius:"15px"}}><MdOutlineLaunch/></Link>
        }
        <a className='btn btn-sm btn-outline-danger' onClick={()=>deleteData(props.data)} style={{borderRadius:"15px"}}><MdDeleteOutline/>
        </a>
        </div>
      </Card.Body>
    </Card>
    
    </>
  )
}

export default MyCard;