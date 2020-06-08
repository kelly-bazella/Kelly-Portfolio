import React, { Component } from "react";
import { Footer } from "react-materialize";
import { Link } from "react-router-dom";

class pageFooter extends Component {
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
                <Link style={{textDecoration: "none", color:"black"}} to="/about">About</Link>
              </li>
              <li>
                <Link style={{textDecoration: "none", color:"black"}} to="/contact">Contact</Link>
              </li>
            </ul>
          }
        >
    
        </Footer>
      </div>
    );
  }
}

export default pageFooter;
