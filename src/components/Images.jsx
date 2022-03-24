import React, {useEffect, useState} from 'react'
import {storage, auth} from "../firebase"
import { useNavigate } from 'react-router';
import ImageCard from "./ImageCard"
import {ref, listAll } from "firebase/storage";
import {IoMdAdd} from "react-icons/io"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Button, lightColors, darkColors } from "react-floating-action-button";
import ReactNav from './ReactNav';

const Images = () => {
  var uid;
  const [user, loading] =  useAuthState(auth);
  const [files,setFiles] = useState([]);
  const navigate = useNavigate();

  const displayAll = () =>{
    const arr =[];
    const listRef =  ref(storage,`${uid}/images`);
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
    <>
      <ReactNav />
      
      <div className="container mt-5">
        <div className="row">
        {
          files.map((data)=>{
            return <ImageCard data={data}/>
          })
        }  
        </div>
      </div>
      <Container>
      <Button
        tooltip="Press this button to add links"
        rotate={true}
        styles={{backgroundColor: darkColors.lighterBlue, color: lightColors.black}}
        onClick={() => navigate("/uimages")}
      >
        <IoMdAdd />
      </Button>
    </Container>
    </>
  )
}

export default Images