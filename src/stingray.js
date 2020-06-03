import React, { useState } from 'react';
import {Switch, Route} from "react-router";
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import './stingray.css';

export default class Stingray extends React.Component {
    render(){
        return(
            <div>
                 <section id="prt1-stingray">
    <div id ="innerpt1">

        
        <h2 id="bigtxt">Stingray</h2>
     
        <ul id="navlist">
                    <li> <NavLink to="/" exact>  Home</NavLink></li>
                    <li> <NavLink to="/Products" exact>  Order</NavLink></li>
                    <li> <NavLink to="/Contact" exact> Contact </NavLink> </li>
                    <li> <NavLink to="/Roadster" exact>  Roadster</NavLink></li>
            
                    
                </ul> 
    </div>

    
        <a id="down-button" href= "#prt2"><p> Scroll Down</p></a>
    
    
</section>

<section id="prt2">
   
        

        <div id= "inner-container">
            <div id='vid-warp'>
            <video autoPlay muted loop id="myVideo" >
        
                <source src='./icons/range.mp4' type="video/mp4" />
                    
              </video>
              </div>
              <div id="side-info"> 
                  <div id= "side-container">
                    
                <p id="head">Range</p>
                <h1 id="under">Go Anywhere</h1>

                <p id ="sub-content"> 
                    Stingray can get you anywhere you want to go—with industry-leading range of 350 miles and convenient charging options, all over the world.
                </p>
                <img id="tesla-super" alt='supercharger station' src='https://mk0buyautoinsurcsdgp.kinstacdn.com/wp-content/featured-content/tesla-motors/images/tesla-supercharger-for-modal-s-image.png' />
                <li id='order-text'> <p id="order-btn" > <NavLink to="/Products" exact id='nav-bt'>   Order Now </NavLink></p> </li>
                  </div>
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