import React, { useState } from 'react';
import '../Css/Menu.css';
import '../Css/Bottom.css';
import '../Css/Top.css';
import Portof from '../img/portfolio.png';
import { Link } from '@reach/router';

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
           
            <img alt="picon" src={Portof} className="picon"></img>
              <div className="pth">
              {state.className ? <Link className="porttext" onClick={toggleclassName} to="/portfolio">Portfolio</Link> : <Link className="porttext" onClick={toggleclassName} to="/">Close</Link> }
              </div>
              </div>
          
        </>
        );
        }

 

export default BottomA;