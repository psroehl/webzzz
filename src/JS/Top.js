import React, { useState } from 'react';
import '../Css/Menu.css';
import '../Css/Top.css';
import logor from '../img/logosticker.png';
import tab from '../img/about.png';
import '../JS/About.js';
import { Link } from '@reach/router';

const TopA = (props) => {

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
    
    
          
            
        
        <div className="Top">
        <div className="eewas">
        {state.className ?  <Link className="tttext" onClick={toggleclassName} to ="/about">About</Link> : <Link className="tttext" onClick={toggleclassName} to = "/">Close</Link> }
</div>
          <div className="picholder">
            <img src={tab} className="ticn"/>
            <img src={logor} className="logoe"/>
          </div>
        </div>
            
          {/* <div>
            
            <Link to = "/"><button className="tttext" onClick={toggleclassName}>Close</button></Link>
            <div className="picholder">
              <img src={tab} className="ticn"/>
              <img src={logor} className="logoe"/>
            </div>
          
          </div>
           */}
       </>
        );
        }

    
        

    

export default TopA;