import React from 'react'
import { Card} from "react-bootstrap";
import {Link} from 'react-router-dom'

const MyCard = (props) => {

  const url = props.data.link;
  var element;
  console.log(url)

  return (
    <>
    <Card className="shadow m-2" style={{borderRadius:"15px"}}>
      <Card.Body className='align-text-center' style={{display:"flex", justifyContent:"space-between"}}>
        <div> {url}</div>

        {
          url.includes('http',0)?<a className='btn btn-sm btn-outline-primary' target="_blank" href={url} style={{borderRadius:"15px"}}>Launch</a>:<Link  className='btn btn-sm btn-outline-primary' target="_blank" to={`//${url}`} style={{borderRadius:"15px"}}>Launch</Link>
        }
        
      </Card.Body>
    </Card>
    
    </>
  )
}

export default MyCard