import React from 'react'
import { Container } from 'react-bootstrap'
import ReactNav from './ReactNav'

const About = () => {
  return (
    <>
    <ReactNav />
    <Container className="mt-3 col-8">
      <h2 className='d-flex justify-content-center'>About Web BookMarks</h2>
      <p>It is an online social bookmarking site which allows user to upload links, documents and images to store it on web and to access them from anywhere in the world with active internet connection and the url of this app. It's user interface is not much complex so you can adapt it with easily </p>
      <p className='mt-5'><h5>Created By KBTIANs</h5>
        <ul>
          <li>Kiran Bendkoli</li>
          <li>Akshay Andhare</li>
          <li>Piyush Atre</li>
          <li>Atul Deore</li>
        </ul>
      </p>
    </Container>
    </>
  )
}

export default About