import React, {useEffect, useState} from 'react'
import {storage, auth} from "../firebase"
import { useNavigate } from 'react-router';
import FileCard from './FileCard';
import {ref, listAll } from "firebase/storage";
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactNav from './ReactNav';

const Images = () => {
  var uid;
  const [user, loading] =  useAuthState(auth);
  const [files,setFiles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.currentUser) {
      uid = auth.currentUser.uid;
    } else {
    }
  }, [auth]);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) return navigate("/");
  }, [user, loading]);

  const displayAll= ()=>{
    const arr =[];
    const listRef =  ref(storage,`${uid}`);
    listAll(listRef).then((res)=>{
      res.prefixes.forEach((folderRef)=>{
  
      });
      res.items.forEach((itemRef)=>{
        arr.push(itemRef)
      });
      setFiles(arr);

    }).catch((error)=>{
  
    })
  };
  useEffect(() => {
    displayAll();
    
  }, []);

  return (
    <>
      <ReactNav />
      
      <div className="container mt-5">
        {
          files.map((data)=>{
            return <FileCard data={data}/>
          })
        }  
      </div>
      
    </>
  )
}

export default Images