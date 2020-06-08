import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">K E L L Y  B A Z E L L A</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/portfolio" >Portfolio</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Navbar;