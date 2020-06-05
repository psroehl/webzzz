import React from 'react';
import './App.css';
import Home from './JS/Home.js';
import { Router } from '@reach/router';
import Menu from './JS/Menu.js';
import About from './JS/About';
import Resume from './JS/Resume';
import Portfolio from './JS/Portfolio';

function App() {
  return (
    <div>
      
        <Router>
          
            <Menu path="/menu"/>
            <About path="/about"/>
            <Resume path="/resume"/>
            <Portfolio path="/portfolio"/>
      </Router>
      <Home/>
    </div>
  );
}

export default App;
