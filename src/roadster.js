import React, { useState } from 'react';
import {Switch, Route} from "react-router";
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import './roadster.css'

export default class Roadster extends React.Component{
render(){
    return(
        <div>
            <section id="prt1">
        <div id ="innerpt1">

            <h1 class="logo"> Luminosity</h1>
            <h2 id="bigtxt">Roadster</h2>
            <ul id="navlist">
                    <li> <NavLink to="/" exact>  Home</NavLink></li>
                    <li> <NavLink to="/Products" exact>  Order</NavLink></li>
                    <li> <NavLink to="/Contact" exact> Contact </NavLink> </li>
                    <li> <NavLink to="/Stingray" exact>  Stingray</NavLink></li>
            
                    
                </ul> 
        </div>

        
            <a class ="down-button" href= "#prt2"><p> Scroll Down</p></a>
       
        
    </section>

    <section id="prt2">
        <div id="perfhead"> 
            <h1 class="logo"> Luminosity</h1>
            <h1 id="perf">We Bring <span class="effect"> Performance</span></h1>
        </div>
        <div class="container">
           
            <div id="HP">
                <img id="horsvg" alt='horse' src="https://i.ya-webdesign.com/images/ferrari-horse-png.png" width="163" height="163" />
                <p>An Effective <span class="effect"> 1200 </span> Horsepower |</p>
            </div>
            <div id="Range">
                <img id="batt" alt='battery' src="https://images.vexels.com/media/users/3/153144/isolated/preview/3252e1b63c0ac6976f4fc3a9905bad3e-full-battery-stroke-icon-by-vexels.png" width="163" height="163" />
                <p>Full range of <span class="effect"> 800 </span>Miles |</p>
            </div>

            <div id="060"> 
                <img id="sped" alt='spedometer' src="https://www.searchpng.com/wp-content/uploads/2019/03/Speed-meter-PNG-715x715.png" width="163" height="163" />
                <p><span class="effect-num"> 0 </span> to <span class="effect-num"> 60 </span>in <span class="effect"> 1.9  </span>Seconds</p>
            </div>
        </div>

       
            <a class="down-button" href= "#prt3"><p> Scroll Down</p></a>
        
    </section>

    <section id="prt3"> 
        <div class="container">
            
            <div id ="inner-container">
                
        <video   autoPlay muted loop id="myVideo">
            
            <source src="./icons/benz.mp4" type="video/mp4" />
                
          </video>

          <div id="overlay"> 
              
          <img id="spedo-logo"  src="https://www.searchpng.com/wp-content/uploads/2019/03/Speed-meter-PNG-715x715.png" alt="speedomter logo" /> 
 <p id="overlay--text_1">Quickest acceleration—from zero to 60 mph in as little as 1.9 seconds.</p>
            <div class="vl"></div>
            <h1 class="tag-2"><span class="num">250</span>mph</h1>
            <p id="overlay--text_2">Improved handling and aerodynamics allow for a top speed of 250+ mph</p>
            <div class="vl"></div>
            <h1 class="tag-2"><span class="num">AWD </span></h1>
            <p id="overlay--text_3">Dual Motor All-Wheel Drive instantly controls traction and torque</p>
            


          </div>
        </div>

    </div>

        <div id="desc">
            <div id="flash-container">
            <h1>Track Focused</h1>
            <h2>Quickest Acceleration</h2>
            <a href= "order.html"><p id="button--ordernow"> Order Now     </p> </a>
            </div>
            <div id="roadster-desc__container">
            <p id="roadster-desc">
                Lumi Roadster comes with the option of dual motor all-wheel drive, 20” Performance Wheels and Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Roadster to accelerate from 0-60 mph in as little as 1.9 seconds.
            </p>
            </div>
        </div>

    </section>


    <footer>
              <h1 id='ftr'> Follow Our Social's</h1>
  
              <div id='icons'>
                  <img id='fb'  alt='facebook' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png' height='100' width='100' />
                  <img id='twt' alt='twitter' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png'  height='100' width='100' />
                  <img id='ig' alt= 'instagram' src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png'  height='100' width='100' />
              </div>
  
  
          </footer>
        </div>
    )
}
}