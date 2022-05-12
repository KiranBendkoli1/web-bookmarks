import React from 'react'
import { Container } from 'react-bootstrap'
import ReactNav from './ReactNav'

const About = () => {
  const myStyle ={"background":"-webkit-linear-gradient(#eee, rgb(2, 171, 244))","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}
  
  return (
    <div style={{"height":"100vh"}}>
    <ReactNav />
    <Container className="mt-3 col-8">
      <h2 className='d-flex justify-content-center' style={myStyle}>About Web BookMarks</h2>
      <p style={{"color": "white"}}>It is an online social bookmarking site which allows user to upload links, documents and images to store it on web and to access them from anywhere in the world with active internet connection and the url of this app. It's user interface is not much complex so you can adapt it with easily </p>
    
    </Container>
    </div>
  )
}

export default About