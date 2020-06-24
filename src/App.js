import React from 'react';
import Navbar from "./components/Navbar";
import PageFooter from "./components/Footer";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
 <div className="App">
      <Navbar />
  <Switch>
  <Route exact path="/" component={Home} />

<Route exact path="/resume" component={Resume} />

<Route exact path="/contact" component={Contact} />
<Route exact path="/portfolio" component={Portfolio} />
  </Switch>
  
    </div>
    <PageFooter />
    </Router>
   
   
  );
}

export default App;
