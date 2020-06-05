import React, { useState } from 'react';
import '../Css/Menu.css';
import '../Css/Bottom.css';
import '../Css/Top.css';
import Menu from './Menu';
import logor from '../img/logosticker.png';
import tab from '../img/about.png';
import LeftA from '../JS/Left.js';
import Portof from '../img/portfolio.png';
import { Link } from '@reach/router';
import Portfolio from '../JS/Portfolio.js';

const BottomA = (props) => {

  const [state, setState] = useState({
    className: true,
    clickCount: 0,
    classNameLeft: false,
    classNameRight: false,
    classNameTop: true,
    classNameBottom: false,
    classNamePlan: false,
  });

  const toggleclassName = () => {
   
    if (state.className){
      props.test();
      setState ({ 
        className: false });
    } else {
      props.test();
      setState ({ 
          className: true})
      }
  };


  return (
    <>
    
    
         
        
            <div className="Bottom">
           
            <img src={Portof} className="picon"></img>
              <div className="pth">
              {state.className ? <Link className="porttext" onClick={toggleclassName} to="/portfolio">Portfolio</Link> : <Link className="porttext" onClick={toggleclassName} to="/">Close</Link> }
              </div>
              </div>
          
        </>
        );
        }

 

export default BottomA;