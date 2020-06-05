import React from 'react';
import '../Css/Resume.css';
import rea from '../img/images/reactpng.png';
import jsss from '../img/images/vector-javascript-14.png';
import angular from '../img/images/angular.png';
import o365 from '../img/images/iconfinder_microsoft-office_3069728.png';
import csharp from '../img/images/csharp.png';
import htmlp from '../img/images/htmlpng.png';
import csspng from '../img/images/csspng.png';
import mndb from '../img/images/Mongodb.png';
import nodep from '../img/images/node.png';
import asu from '../img/images/asu1.png';
import ore from '../img/images/od.png';
import ins from '../img/images/ins.png';
import ry from '../img/images/ry.png';
import maya from '../img/images/maya.png';
import whotel from '../img/images/whot.png';
import dojo from '../img/images/Dojo.png';





const Resume = (props) => {

  

      return (
        <div className="aefty">
          <div>             
                {/* <h1 className="Rhead1">Resume</h1> */}
          
            <div className="Rumper">
              <div className="TextyM">
                 
                  <div className="bgedu">
                  <div className="zaqq">
                    <h1 className="hovtext">Hover Over Items Below</h1>
                    </div>
                    <div className="edubox">
                      
                    </div>
                    <h3 className="eduw">Education + Work</h3>
                  </div>
                  <div className="oski">
                    <div className="skillbox">
                      <h3 className="skillt">Skills</h3>
                    </div>
                    <div>
                      <div className="ioo">
                        <img alt="reacti" className="reactimg" src={rea}></img>
                          <h1 className="io1">React</h1>
                      </div>
                      <div className="ioo">
                        <img alt="reactia" className="reactimg" src={jsss}></img>
                          <h1 className="io1">JavaScript</h1>
                      </div>
                      <div className="ioo">
                        <img alt="reactiaa" className="reactimg" src={angular}></img>
                          <h1 className="io1">Angular</h1>
                      </div>
                      <div className="ioo">
                        <img alt="reactiaazz" className="reactimg" src={o365}></img>
                          <h1 className="io1">O365</h1>
                      </div>
                      <div className="ioo">
                        <img alt="reactiswee" className="reactimg" src={csharp}></img>
                          <h1 className="io1">C#</h1>
                      </div>
                      <div className="ioo">
                        <img alt="reacti221" className="reactimg" src={csspng}></img>
                          <h1 className="io1">CSS</h1>
                      </div>

                      {/* <div className="ioo">
                        <img className="reactimg" src={acc}></img>
                          <h1 className="io1">Adobe CC</h1>
                      </div> */}
                      <div className="ioo">
                        <img alt="reacti661" className="reactimg" src={htmlp}></img>
                          <h1 className="io1">HTML</h1>
                      </div>
                      <div className="ioo">
                        <img alt="reacti21w" className="reactimg" src={mndb}></img>
                          <h1 className="io1">Mongo DB</h1>
                      </div>
                      <div className="ioo1">
                        <img alt="reactixxsa" className="reactimg" src={nodep}></img>
                          <h1 className="io1">Node</h1>
                      </div>

                    </div>
                  </div>
                    <div className="wtl">
                      {/* <div className="tldate">
                        <div className="date1">2010</div>
                          <div className="dmark1"></div>
                        <div className="date3">2015</div>
                          <div className="dmark3"></div>
                        <div className="date4">2020</div>
                          <div className="dmark4"></div>
                      </div> */}
                        <div className="tl1">
                          {/* <h1 className="supertl1"></h1> */}
                              <div className="subtl1"><h2 className="altl1"> <img alt="reactiwwew" src={asu} id="toppic"></img> </h2>
                            
                            <div className="lester">
                              <ul>Years: 2011-2012</ul>
                              <ul>Location: Tempe, Arizona</ul>
                              <ul>Major: General Buisness with focus on Global Markets</ul> 
                              <ul>Skills Learned: Accounting, video editing, Tau Kappa Epsilon philanthropy chair.</ul>
                            </div>
                              </div>
                        </div>
                        <div className="tl2"> 
                          {/* <h1 className="supertl2"></h1> */}
                              <div className="subtl2"><h2 className="altl2"><img alt="reacti00192" className="meha" src={whotel} id="toppic"></img><img className="mayapic" src={maya} alt="reacti12324hg"></img></h2>
                             
                            <div className="lester">
                              <ul>Years: 2012-2014</ul>
                              <ul>Location: Scottsdale, Arizona</ul>
                              <ul>Company Type: Day + Night Club</ul> 
                              <ul>Job: Bartender</ul>
                              <ul>Skills Utilized: Tend the bar, create relationships with customers to develop a regular customer base</ul>
                            </div>
                              </div>
                              
                      </div> 
                      <div className="tl3">
                          {/* <h1 className="supertl3"></h1> */}
                              <div className="subtl3"><h1 className="altl3"><img alt="reacti3233s" src={ry} id="toppic"></img></h1> 
                             
                            <div className="lester">
                              <ul>Years: 2010-2011</ul>
                              <ul>Location: Eugene, Oregon</ul>
                              <ul>Company Type: Wealth Managment firm</ul> 
                              <ul>Job: Client resource specialist</ul>
                              <ul>Skills Utilized: Corespond with clients, schedualed meetings, assembled presentations, analyze cost basis.</ul>
                            </div>

                          </div>
                      </div> 
                      <div className="tl4">
                          {/* <h1 className="supertl4"></h1> */}
                              <div className="subtl4"><h1 className="altl4"><img alt="reactiasdf" src={ore} id="toppic"></img></h1>
                         
                            <div className="lester">
                            <ul>Years: 2014-2016</ul>
                              <ul>Location: Eugene, Oregon</ul>
                              <ul>Major: Political Science</ul> 
                              <ul>Skills Learned: Various hard and soft skills, global political systems, earned bachelors of science degree in Political Science.</ul>
                            </div>
                              </div>
                      </div> 
                      <div className="tl5">
                          {/* <h1 className="supertl5"></h1> */}
                              <div className="subtl5"><h1 className="altl5"><img alt="reactiassd21" src={ins}id="toppic"></img> </h1>
                            
                            <div className="lester">
                              <ul>Location: Tempe, Arizona</ul>
                              <ul>Company Type: IT Sales</ul> 
                              <ul>Job: Account Executive</ul>
                              <ul>Skills Utilized: Develop book of buisness, reach out to prospective clients, deliver presentaions, achieve quarterly sales goals.</ul>
                            </div>
                              </div>
                      </div> 
                      <div className="tl6">
                          {/* <h1 className="supertl6"></h1> */}
                            <div className="subtl6"><h1 className="altl6">Allied Energy</h1>
                            <div className="lester">
                              <ul>Location: Scottsdale, Arizona</ul>
                              <ul>Company Type: Fuel Sales</ul> 
                              <ul>Job: Account Executive</ul>
                              <ul>Skills Utilized: Expand book of buisness, increase sales, night and weekend dispatch, visit clients.</ul>
                            </div>
                              </div>
                      </div> 
                      <div className="tl7">
                          {/* <h1 className="supertl7"></h1> */}
                              <div className="subtl7"><h1 className="altl7">Coding Dojo<img alt="reactivvsa210" src={dojo} id="toppic"></img></h1>
                           
                            <div className="lester">
                              <ul>Location: Bellevue, Washington</ul>
                              <ul>Full Stack web development program covering the following languages:

                                    Python
                                    MySQL
                                    Flask
                                    Ajax
                                    API’s
                                    Django

                                    Mean
                                    MongoDB
                                    Express
                                    Angular
                                    Node.js
                                    JavaScript

                                    C#
                                    .NET CORE
                                    ASP.NET
                                    MySQL</ul>
                                  </div>
                           </div>
                      </div> 

                    </div>
              </div>
            </div>
            </div>
            </div>
       
       
      );
    } 


     
  

export default Resume;
