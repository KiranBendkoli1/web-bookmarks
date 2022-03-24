import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import MyCard from "./MyCard";
import ReactNav from "./ReactNav";
import { useNavigate } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";
import {IoMdAdd} from "react-icons/io"
import { getDocs, collection } from "firebase/firestore";
import { Container, Button, lightColors, darkColors } from "react-floating-action-button";
const LinksPage = () => {
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
    setLinks(linksarr);
  };
  useEffect(() => {
    Fetchdata();
  }, []);

  return (
    <>
      <ReactNav />

      <div className="container mt-5">
        {links.map((data) => {
          return <MyCard data={data} />;
        })}
      </div>
      <Container>
      <Button
        tooltip="Press this button to add links"
        rotate={true}
        styles={{backgroundColor: darkColors.lighterBlue, color: lightColors.black}}
        onClick={() => navigate("/ulinks")}
      >
        <IoMdAdd />
      </Button>
    </Container>
    </>
  );
};

export default LinksPage;
