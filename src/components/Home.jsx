import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import MyCard from "./MyCard";
import ReactNav from "./ReactNav";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDocs, collection } from "firebase/firestore";
const Home = () => {
  var uid;
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (auth.currentUser) {
      uid = auth.currentUser.uid;
    } else {
    }
  }, [auth]);

  const Fetchdata = async () => {
    const linksarr = [];
    const querySnapshot = await getDocs(collection(db, "data" + uid));
    querySnapshot.forEach((doc) => {
      linksarr.push(doc.data());
    });
    setLinks(linksarr)
    
  };
  useEffect(() => {
    Fetchdata();
    
  }, []);

  return (
    <>
      <ReactNav />
      
      <div className="container mt-5">
        {
          links.map(data=>{
            return <MyCard data={data}/>
          })
        }  
      </div>
    </>
  );
};

export default Home;
