import React from 'react';
import '../Css/Menu.css';
import asst from '../img/discordicon.png';
import fb from '../img/fbicon.png';
import git from '../img/github.png';
import linkd from '../img/linkd.png';
import mail from '../img/mailicon.png';
import twi from '../img/twicon.png';


const Menu = (props) => {

  
 
    const mailIt = () => {
    window.location.href = 'mailto:roehl.peter@gmail.com?subject=Hi Peter';
    }
    
      return (
        // <Magic show={snow}>
      <div className="refholder">
        <div className="refty">
          
          <div className="hza">
            <a href="https://discord.gg/PpNxgEH" rel="noopener noreferrer" target="_blank"><img src={asst} alt="discord" className="ssss"></img></a>
            <div onClick={mailIt}><img src={mail} alt="mail" className="ssss"></img></div>
            <a href="https://github.com/psroehl" rel="noopener noreferrer" target="_blank"><img src={git} alt="github" className="ssss"></img></a>
            <a href="https://www.linkedin.com/in/psroehl/" rel="noopener noreferrer" target="_blank"><img src={linkd} alt="linked" className="ssss"></img></a>
            <a href="https://www.facebook.com/profile.php?id=10029770" rel="noopener noreferrer" target="_black"><img src={fb} alt="face" className="ssss"></img></a>
            <a href="https://twitter.com/roehl_peter" rel="noopener noreferrer" target="_blank"> <img alt="twit" src={twi} className="ssss"></img></a>  
          </div>
        
        </div>
        </div>
        // </Magic>
      );

}
     
  


export default Menu;
