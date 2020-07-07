import React, { Component } from "react";
import { Footer } from "react-materialize";
import { Link } from "react-router-dom";

class PageFooter extends Component {
  render() {
    return (
      <div>
      
        <Footer
          className="example sticky-footer"
          links={
            <ul>
              <li className="grey-text text-lighten-3">
                <Link style={{textDecoration: "none", color:"black"}} to="/">Home</Link>
              </li>
              <li className="grey-text text-lighten-3">
                <Link style={{textDecoration: "none", color:"black"}} to="/resume">Resume</Link>
              </li>
              <li>
                <Link style={{textDecoration: "none", color:"black"}} to="/contact">Contact</Link>
              </li>
              <li>
                <Link style={{textDecoration: "none", color:"black"}} to="/portfolio">Portfolio</Link>
              </li>
            </ul>
            
          }
        >

    <h5>Let's Connect!</h5>
    <p>Email | kelly.bazella@gmail.com</p>
    <p>Phone Number | 952-649-8781</p>
  
  <a href="https://github.com/kelly-bazella" target="_blank" rel="noopener noreferrer"><i class="fa fa-github-square" style={{fontSize:"36px", padding:"5px", color:"white"}} ></i></a>
  <a href="https://www.linkedin.com/in/kellybazella/" target="_blank" rel="noopener noreferrer">
  <i class="fa fa-linkedin-square" style={{fontSize:"36px", color:"white"}} ></i>
  </a>
  
        </Footer>
      </div>
    );
  }
}

export default PageFooter;
