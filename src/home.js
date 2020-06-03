import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import {Switch, Route} from "react-router";
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

import Products from './products.js';


// array of slides to toggle through
const slideImages = [
  'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1554744512-783e8dc69b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
];
 

// properties of slider
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}



export default class Home extends React.Component{

  
    render(){
        return(
            <div>


<h1 id='big-lum'>Luminosity</h1>
   
      {/* slide show utiziling react slide component */}
     
      
        <Slide {...properties}>
          <div className="each-slide">
            <div classname='act-img' style={{'backgroundImage': `url(${slideImages[0]})`}}>
              
            </div>
          </div>
          <div className="each-slide">
            <div classname='act-img' style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div classname='act-img' style={{'backgroundImage': `url(${slideImages[2]})`}}>
              
            </div>
          </div>
        </Slide>
     
     
     
                  
           
                  <ul id="navilist">
                    <li> <NavLink to="/Products" exact>  Order</NavLink></li>
                    <li> <NavLink to="/Stingray" exact>  2020 Stingray</NavLink></li>
                    <li> <NavLink to="/Contact" exact> Contact </NavLink> </li>
                    <li> <NavLink to="/Roadster" exact>  Roadster</NavLink></li>
            
                    
                </ul> 

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
    };
  }

    

