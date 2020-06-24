import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
          
            <div className="container">
                 <div className="row">
    <div className="col s12 m7">
      <div className="card medium">
        <div className="card-image">
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg" alt="project" />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="/">This is a link</a>
          <a href="/">This is a link</a>
        </div>
      </div>
    </div>
  </div>
            </div>
        )
    }
}
export default Card;