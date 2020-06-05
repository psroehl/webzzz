import React from 'react';
import '../Css/Portfolio.css';
import logor from '../img/logosticker.png';
import Picv from '../img/images/_VBackground.png';
import Pic222 from '../img/images/docpicone.png';
import Cam1 from '../img/images/cam1.jpg';
import Webz from '../img/images/webzite.png';
import Ghat from '../img/images/ghat.jpg';
import Rpi from '../img/images/rpi.jpg';
import Puter from '../img/images/puter.jpg';
import Kboard from '../img/images/kboard.jpg';



const Portfolio = (props) => {
  

  
 
    
      return (
          
        <div className="lllefty">

           <div>
            {/* <h1 className="Phead1">Portfolio</h1>
            <h1 id="header" className="Phead">Portfolio</h1>

            <h1 className="Phead2">Portfolio</h1> */}
            <div className="Portpar">
                <div className="TextyPort">
                {/* <Link  to="/"><button className="porttextr" onClick={toggleclassName}>x</button></Link> */}

                 
<ul class="slides">

<input type="radio" name="radio-btn" id="img-0" defaultChecked />
    <li class="slide-container">
		<div class="slide">
        <div className="biznaz1">
            <h1 className="headcol1">Portfolio</h1>
        
            <div className="port1colleft">
                <img className="picvv" src={logor}></img>
            </div>
            <div className="port1colright">
                <p className="pg1">This is my limited Portfolio. A few of these projects were done in my spare time, for fun. Others are ongoing or just need a bit more work done to them. Source code can be found on my GitHub.</p>
            </div>
        </div>
        </div>
		<div class="nav">
			<label for="img-8" className="prev">&#x2039;</label>
			<label for="img-1" className="next">&#x203a;</label>
		</div>
    </li>
      
    <input type="radio" name="radio-btn" id="img-1"/>
    <li class="slide-container">
		<div class="slide">
        <div className="biznaz1">
            <h1 className="headcol1">Facial Recognition Software</h1>
         
            <div className="port1colleft">
                <img className="picvv" src={Cam1}></img>
            </div>
            <div className="port1colright">
                <p className="pg1">The facial recognition software is a project I have been wanting to work on for a while. At present I am continuing to program and optimize the code. It is able to recognize faces about 50% of the time and I would also like to implement webcam usage.</p>
            </div>
        </div>
        </div>
		<div class="nav">
			<label for="img-0" className="prev">&#x2039;</label>
			<label for="img-2" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-2" />
    <li class="slide-container">
        <div class="slide">
        <div className="biznaz1">
            <h1 className="headcol1">Website</h1>
   
            <div className="port1colleft">
                <img className="picvv" src={Webz}></img>
            </div>
            <div className="port1colright">
                <p className="pg1">My Website is constantly changing and updating... for better or for worse. I keep finding new additions and can't seem to settle on one layout! It is a passion project, one I really enjoy doing which is why I put so much time into it.</p>
            </div>
        </div> 
        </div>
		<div class="nav">
			<label for="img-1" className="prev">&#x2039;</label>
			<label for="img-3" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-3" />
    <li class="slide-container">
        <div class="slide">
        <div className="biznaz1">
            <h1 className="headcol1">_V</h1>

            <div className="port1colleft">
                <img className="picvv" src={Picv}></img>
            </div>
            <div className="port1colright">
                <p className="pg1">_V is a game created by me and my friend Da, at the Coding Dojo for a project week. The goal was to create a project in a week using the a language of our choosing. We picked C# and with the help of Unity we created the game from scratch. We obviously wrote all of the code ourselves as well the enemy 3D models and taught ourselves how to animate them as well. Conceptually, it is an FPS-tower defense game. Browser based playability coming soon!</p>
            </div>
        </div>        
        </div>
		<div class="nav">
			<label for="img-2" className="prev">&#x2039;</label>
			<label for="img-4" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-4" />
    <li class="slide-container">
        <div class="slide">
     
        <div className="biznaz1">
            <h1 className="headcol1">Untitled Terminal Game</h1>

            <div className="port1colleft">
                <img className="picvv" src={Pic222}></img>
            </div>
            <div className="port1colright">
                <p className="pg1">This was a game created in a couple of hours just for the fun of it. This is the first solo project I worked on, and isn't bad for a first attempt. </p>
            </div>
        </div>
        </div>
		<div class="nav">
			<label for="img-3" className="prev">&#x2039;</label>
			<label for="img-5" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-5" />
    <li class="slide-container">
        <div class="slide">
        <div className="biznaz1">
            <h1 className="headcol1">Universal Arcade Machine</h1>

            <div className="port1colleft">
                <img className="picvv" src={Rpi}></img>
            </div>
            <div className="port1colright">
                <p className="pg1">I was looking for a way to play retro video games and found that a RaspberryPi would be a good way to go about that. This was my first time using Python and I really enjoyed it. I can now play any retro console on any modern TV or computer monitor.</p>
            </div>
        </div>
        </div>
		<div class="nav">
			<label for="img-4" className="prev">&#x2039;</label>
			<label for="img-6" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-6" />
    <li class="slide-container">
        <div class="slide">
        <div className="biznaz1">
            <h1 className="headcol1">Custom Keyboard Firmware</h1>

            <div className="port1colleft">
                <img className="picvv" src={Kboard}></img>
            </div>
            <div className="port1colright">
                <p className="pg1">I needed a keyboard to use in place of the stock board on my laptop. I bought each component piecemeal and assembled it. The only issue I had was that the Firmware was not customizable. I had to teach myself some C+ and then modify the existing Firmware. The result was a fully customizable keyboard.</p>
            </div>
        </div>
        </div>
		<div class="nav">
			<label for="img-5" className="prev">&#x2039;</label>
			<label for="img-7" className="next">&#x203a;</label>
		</div>
    </li>
    <input type="radio" name="radio-btn" id="img-7" />
    <li class="slide-container">
        <div class="slide">
        <div className="biznaz1">
        <h1 className="headcol1">Custom PC</h1>
            <div className="port1colleft">
                <img className="picvv" src={Puter}></img>
            </div>
            <div className="port1colright">
                <p className="pg1">I got my first desktop (a Gateway) when I was 16 and always wanted to turn it into a proper gaming PC but could never afford to customize it. 16 years later I set out on a mission to build a compact but fully optimized desktop that could run any game at its highest graphical setting. Well, this does that and more.</p>
            </div>
        </div>
        </div>
		<div class="nav">
			<label for="img-6" className="prev">&#x2039;</label>
			<label for="img-8" className="next">&#x203a;</label>
		</div>
    </li>
    <input type="radio" name="radio-btn" id="img-8" />
    <li class="slide-container">
        <div class="slide">
        <div className="biznaz1">
        <h1 className="headcol1">Gamehat</h1>

        <div className="port1colleft">
            <img className="picvv" src={Ghat}></img>
        </div>
        <div className="port1colright">
            <p className="pg1">After I had built my portable Arcade, I was exstatic and had a great time playing with friends. The only issue I had was it was not a handheld. I picked up a Gamehat and programmed a new RaspberryPi for portability. Its worth the price alone for Earthbound.</p>
        </div>
        </div>
        </div>
		<div class="nav">
			<label for="img-7" className="prev">&#x2039;</label>
			<label for="img-0" className="next">&#x203a;</label>
		</div>
    </li>

    <li class="nav-dots">
      <label for="img-0" class="nav-dot" id="img-dot-0"></label>
      <label for="img-1" class="nav-dot" id="img-dot-1"></label>
      <label for="img-2" class="nav-dot" id="img-dot-2"></label>
      <label for="img-3" class="nav-dot" id="img-dot-3"></label>
      <label for="img-4" class="nav-dot" id="img-dot-4"></label>
      <label for="img-5" class="nav-dot" id="img-dot-5"></label>
      <label for="img-6" class="nav-dot" id="img-dot-6"></label>
      <label for="img-7" class="nav-dot" id="img-dot-7"></label>
      <label for="img-8" class="nav-dot" id="img-dot-8"></label>
    </li>
</ul>
                   

                </div>
        </div>
        </div>
  
        </div>
       
      );
    } 


     
  


export default Portfolio;
