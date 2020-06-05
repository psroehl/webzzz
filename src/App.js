import React from 'react';
import './App.css';
import logor from './img/logosticker.png';
import Portof from './img/portfolio.png';
import res from './img/resume.png';
import tab from './img/about.png';
import Home from './JS/Home.js';
import LeftA from './JS/Left';
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
