import React from 'react'
import './Navbar.css';
function Navbar(props) {
  return (
    <div id="nav">
      <p>{props.college}</p>
    </div>
  )
}

export default Navbar