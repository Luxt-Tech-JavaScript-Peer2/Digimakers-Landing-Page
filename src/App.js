import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import About from './Components/About';
import './Components/index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends Component {

  
  render() {
    return (
      <Router>
        <div className='App'>
        
        <Navbar />
        <Route path="/about" component={About}/>
        <Route path="/services" component={Services}/>
        
      </div>
      </Router>
      
      
    );
  }
}

export default App;
