import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import UploadImages from "./UploadImages";
import UploadLinks from "./UploadLinks";
import About from "./About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadFiles from "./UploadFiles";
import Files from "./Files";
import Images from "./Images";
import HomePage from "./HomePage";
import LinksPage from "./LinksPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/links" element={<LinksPage />} />
          <Route exact path="/docs" element={<Files />} />
          <Route exact path="/images" element={<Images />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/ulinks" element={<UploadLinks />} />
          <Route exact path="/ufiles" element={<UploadFiles />} />
          <Route exact path="/uimages" element={<UploadImages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
