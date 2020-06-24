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
    <i className="fa fa-github-square" aria-hidden="true"></i>
        </Footer>
      </div>
    );
  }
}

export default PageFooter;
