import React from 'react'
import './Team.css'
// Import all of Bootstrap's CSS
import * as bootstrap from 'bootstrap'

const Team = () => {
  return (
 
    <div>
      <div className="container">
      <div className="row">
          <div className="image-section">
            <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
       </div>
      </div>
      <br/>

      <div className="container">
      <div className="row">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
          <div className="image-section">
            <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
       </div>
      </div>
      <br/>

      <div className="container">
      <div className="row">
          <div className="image-section">
            <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
       </div>
      </div>
      <br/>

      <div className="container">
      <div className="row">
      <div className="text-section">
          <h2>Column 2</h2>
        <p>Some text..</p>
        </div>
          <div className="image-section">
            <img className="card-img-top" src="./businesswoman.jpeg" alt="" />
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
       </div>
      </div>
      <br/>


    </div> 
  )
}

export default Team