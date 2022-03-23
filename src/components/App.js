import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Upload from "./Upload";
import About from "./About"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadFiles from "./UploadFiles";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/upload" element={<UploadFiles />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
