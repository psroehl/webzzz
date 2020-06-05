import React, { Component, useState } from 'react';
import '../Css/Menu.css';
import asst from '../img/discordicon.png';
import fb from '../img/fbicon.png';
import git from '../img/github.png';
import linkd from '../img/linkd.png';
import mail from '../img/mailicon.png';
import twi from '../img/twicon.png';
import cba from '../img/logosticker.png';

const Menu = (props) => {
  const worker = () => {
    setShow(show => !show)
  }
  
  const [snow, setShow] = useState({ pleaseWork: true });
    const mailIt = () => {
    window.location.href = 'mailto:roehl.peter@gmail.com?subject=Hi Peter';
    }
    
      return (
        // <Magic show={snow}>
      <div className="refholder">
        <div className="refty">
          
          <div className="hza">
            <a href="https://discord.gg/PpNxgEH" target="_blank"><img src={asst} className="ssss"></img></a>
            <div onClick={mailIt}><img src={mail} className="ssss"></img></div>
            <a href="https://github.com/psroehl" target="_blank"><img src={git} className="ssss"></img></a>
            <a href="https://www.linkedin.com/in/psroehl/" target="_blank"><img src={linkd} className="ssss"></img></a>
            <a href="https://www.facebook.com/profile.php?id=10029770" target="_black"><img src={fb} className="ssss"></img></a>
            <a href="https://twitter.com/roehl_peter" target="_blank"> <img src={twi} className="ssss"></img></a>  
          </div>
        
        </div>
        </div>
        // </Magic>
      );

}
     
  


export default Menu;
