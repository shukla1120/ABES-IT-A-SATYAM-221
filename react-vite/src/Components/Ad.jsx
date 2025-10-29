import React from 'react'
import './card.css';
function Ad(props) {
  return (
        <div id="sa">
            <center>
            <img src="https://www.shutterstock.com/image-vector/vector-cute-baby-panda-cartoon-600nw-2427356853.jpg" alt="" />
            </center>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
           
        </div>
    )
}

export default Ad