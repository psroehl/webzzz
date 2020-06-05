import React, { useState } from 'react';
import '../Css/Menu.css';
import '../Css/Right.css';
import res from '../img/resume.png'
import { Link } from '@reach/router';

const RightA = (props) => {

  const [state, setState] = useState({
    className: true,
    clickCount: 0,
    classNameLeft: true,
    classNameRight: false,
    classNameTop: false,
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
        <div className="Right">
            <img alt="rpic" src={res} className="rpic"/>
           { state.className ? <Link className="rtext" onClick={toggleclassName} to="/resume">Resume</Link> : <Link className="rtext" onClick={toggleclassName} to="/">Close</Link> }
      </div>
        
        </>
         
      );
      }
  
 
       
    
  
  
  export default RightA;
  