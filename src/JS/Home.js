import React, { useState } from 'react';
import '../Css/Home.css';
import LeftA from './Left.js';
import TopA from './Top.js';
import RightA from './Right';
import BottomA from './Bottom';
import Planets from './Planets';
import Magic from './Magic';



const Home = (props) => {
  
  const [state, setState] = useState({
    classNameRight: true,
    classNameLeft: true,
    classNameTop: true,
    classNameBottom: true,
    classNamePlan: true,
    toptop :false,
  })

  const [snow, setShow] = useState({ pleaseWork: true });

  const bottomButton = () => {
   
    if (state.classNameLeft){
      worker();
      setState ({ 
        ...state,
        classNameLeft: false,
        classNameRight: false,
        classNameTop: false,
        classNameBottom: true,
        classNamePlan: false,
        toptop: false,
        botbot: false,
        leftleft: false,
        rightright: false,
       });
    } else {
      worker();
        setState ({ 
          ...state,
          classNameLeft: true,
          classNameRight: true,
          classNameTop: true,
          classNameBottom: true,
          classNamePlan: true,
          toptop: false,
          botbot: true,
          leftleft: false,
          rightright: false,
        })
      }

  }

  const topButton = () => {

    if (state.classNameLeft){
      worker();
      setState ({ 
        ...state,
        classNameLeft: false,
        classNameRight: false,
        classNameTop: true,
        classNameBottom: false,
        classNamePlan: false,
        toptop: false,
        botbot: false,
        leftleft: false,
        rightright: false,
       });
    } else {
      worker();
        setState ({ 
          ...state,
          classNameLeft: true,
          classNameRight: true,
          classNameTop: true,
          classNameBottom: true,
          classNamePlan: true,
          toptop: true,
          botbot: false,
          leftleft: false,
          rightright: false,
        })
      }

  }


  const Cmon = (props) => {
    return (
    <div className="renderh"></div>
    )
  }

  
  const Bmon = (props) => {
    return (
    <div className="renderb"></div>
    )
  }

  
  const Lmon = (props) => {
    return (
    <div className="renderl"></div>
    )
  }

  
  const Rmon = (props) => {
    return (
    <div className="renderr"></div>
    )
  }
  

  const rightButton = () => {
   
    if (state.classNameLeft){
      worker();
      setState ({ 
        ...state,
        classNameLeft: false,
        classNameRight: true,
        classNameTop: false,
        classNameBottom: false,
        classNamePlan: false,
        toptop: false,
        botbot: false,
        leftleft: false,
        rightright: false,
       });
    } else {
        worker();
        setState ({ 
          ...state,
          classNameLeft: true,
          classNameRight: true,
          classNameTop: true,
          classNameBottom: true,
          classNamePlan: true,
          toptop: false,
          botbot: false,
          leftleft: false,
          rightright: true,
        })
      }

  }
  
  const worker = () => {
    setShow(show => !show)
  }

  const leftButton = () => {
    console.log("Hello world.");
    if (state.classNameBottom){
      worker();
      setState ({ 
        ...state,
        classNameLeft: true,
        classNameRight: false,
        classNameTop: false,
        classNameBottom: false,
        classNamePlan: true,
        toptop: false,
        botbot: false,
        leftleft: false,
        rightright: false,
       });
    } else {
        worker();
        setState ({ 
          ...state,
          classNameLeft: true,
          classNameRight: true,
          classNameTop: true,
          classNameBottom: true,
          classNamePlan: true,
          toptop: false,
          botbot: false,
          leftleft: true,
          rightright: false,
        })
      }

  }

  
  

    
  return (
    <div className="App">
      <header className="App-header">
      <div></div>
      
      { state.classNameTop ? <TopA test={topButton}/> : <div className="yeet"></div> }
      { state.toptop ? <Cmon/> : <></>}
      { state.botbot ? <Bmon/> : <></>}
      { state.leftleft ? <Lmon/> : <></>}
      { state.rightright ? <Rmon/> : <></>}
      { state.classNameLeft ? <LeftA test={leftButton}/> : <div className="leet"></div> }
      { state.classNameRight ? <RightA test={rightButton}/> : <div className="reet"></div> }
      { state.classNameBottom ? <BottomA test={bottomButton}/> : <div className="peet"></div> }
      <Magic show={snow}>{ state.classNamePlan ? <Planets/> : <div></div> } </Magic>
      
      
      </header>
    </div>
  );
}

export default Home;
