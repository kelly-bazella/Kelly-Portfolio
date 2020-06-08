import React from 'react';
import Navbar from "./components/Navbar";
import pageFooter from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
 <div className="App">
      <Navbar />
  <Switch>
  <Route exact path="/" component={Home} />

<Route exact path="/about" component={About} />

<Route exact path="/contact" component={Contact} />
<Route exact path="/portfolio" component={Portfolio} />
  </Switch>
  
    </div>
    <pageFooter />
    </Router>
   
   
  );
}

export default App;
