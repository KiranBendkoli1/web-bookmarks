import React, {useEffect, useState} from 'react'
import {storage, auth} from "../firebase"
import { useNavigate } from 'react-router';
import FileCard from './FileCard';
import {ref, listAll } from "firebase/storage";
import {IoMdAdd} from "react-icons/io"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Button, lightColors, darkColors } from "react-floating-action-button";
import ReactNav from './ReactNav';

const Files = () => {
  const myStyle ={"background":"-webkit-linear-gradient(#eee, rgb(2, 171, 244))","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}
  
  var uid;
  const [user, loading] =  useAuthState(auth);
  const [files,setFiles] = useState([]);
  const navigate = useNavigate();

  const displayAll = () =>{
    const arr =[];
    const listRef =  ref(storage,`${uid}/docs`);
    listAll(listRef).then((res)=>{
      res.items.forEach((itemRef)=>{
        arr.push(itemRef)
      });
      setFiles(arr);

    }).catch((error)=>{
  
    })
  };

  useEffect(() => {
    if (auth.currentUser) {
      uid = auth.currentUser.uid;
      
    } else {
      
      navigate("/")
    }

    let unmounted = false;

    if(!unmounted){
      displayAll();
    }
    return ()=>{
      unmounted = true;
    }
  }, [auth]);

  return (
    <div style={{"height":"100vh"}}>
      <ReactNav />
      
      <div className="container mt-3">
      <h2 className='d-flex justify-content-center mb-3' style={myStyle}>Documents Page</h2>
        {
          files.map((data)=>{
            return <FileCard data={data}/>
          })
        }  
      </div>
      <Container>
      <Button
        tooltip="Press this button to upload documents"
        rotate={true}
        styles={{backgroundColor: darkColors.lighterBlue, color: lightColors.black}}
        onClick={() => navigate("/ufiles")}
      >
        <IoMdAdd />
      </Button>
    </Container>
    </div>
  )
}

export default Files