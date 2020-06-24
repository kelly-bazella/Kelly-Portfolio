import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import M from "materialize-css";

class Navbar extends Component {
  componentDidMount=()=> {
    var el=document.querySelectorAll(".sidenav")
    M.Sidenav.init(el, {
      edge:"left",
      inDuration:250
    })
  }
    render() {
        return(
          <div>
      <nav>
            <div className="nav-wrapper">
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/resume" >Resume</Link></li>
                <li><Link to="/portfolio" >Portfolio</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
              </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/resume" >Resume</Link></li>
                <li><Link to="/portfolio" >Portfolio</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
          </ul>
          </div>
      
        )
    }
}

export default Navbar;