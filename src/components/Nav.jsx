import React from 'react'
import "./nav.css"
const Nav = () => {
  return (
    <section>

<nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">Web Bookmarks</label>
      <ul>
        <li><a  href="#">Home</a></li>
        <li><a href="#">Links</a></li>
        <li><a href="#">Documents</a></li>
        <li><a href="#">Images</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    </section>
    
  )
}

export default Nav