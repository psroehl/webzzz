import React, { useState } from 'react';
import '../Css/Menu.css';
import '../Css/Left.css';
import '../Css/Home.css';
import Menu from './Menu';
import Top from './Top';
import TopA from './Top';
import logor from '../img/logosticker.png';
import tab from '../img/about.png';
import { Link } from '@reach/router';

const LeftA = (props) => {

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
         <div>
            <div className="Left">
              {state.className ? <Link className="menutext" onClick={toggleclassName} to = "/menu">Contact</Link> :  <Link className="menutext" onClick={toggleclassName} to = "/">Close</Link>}
              <div className="fholder">
                <span className="ment"/>
                <span className="ment"/>
                <span className="ment"/>
              </div>
            </div>
        </div>
        
    
        {/* <div>
          <div className="menuleft">
           
            <div className="fholder">
              <span className="ment"/>
              <span className="ment"/>
              <span className="ment"/>
            </div>
            <div className="bl123"/>
          </div>
        </div>
       </> */}
       </>
        );
      }
  
  
       
    
  
  export default LeftA;
  