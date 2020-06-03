import React, { useState } from 'react';
import {Switch, Route} from "react-router";
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
import './products.css';
import prodata from './products.json';




export default class Products extends React.Component{
    render(){
      return(

    
       
        <div id='back-g'> 
          <link href="https://fonts.googleapis.com/css2?family=Oxanium&display=swap" rel="stylesheet"></link>
          
          

      <ul id="navlist">

       
          
          <li> <NavLink to="/" exact> Home </NavLink></li>
          <li> <NavLink to="/Stingray" exact>  2020 Stingray</NavLink></li>
          <li> <NavLink to="/Contact" exact> Contact </NavLink> </li>
          <li> <NavLink to="/Roadster" exact>  2020 Roadster</NavLink></li>
  
      </ul> 
      <h1 id="top-text">Our Inventory</h1>
      

      <div class="btn-group" >
  <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort by Price
  </button>
  <div class="dropdown-menu">
  <a class="dropdown-item" href="#">Ascending</a>
    <a class="dropdown-item" href="#">Descending</a>
    
  </div>
</div>
<div class="btn-group">
  <button class="btn btn-secondary btn-lg" type="button">
    Sort by Model
  </button>
  <button type="button" class="btn btn-lg btn-secondary dropdown-toggle" type='button' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
  <a class="dropdown-item" href="#">Roadster</a>
    <a class="dropdown-item" href="#">Cruiser</a>
    <a class="dropdown-item" href="#">Stingray</a>
  </div>
</div>
   
  

      <div class="parent">
      <div id ='div1t' class="div1 roadster"><h1 class='product-title'> {prodata.products[0].name} {prodata.products[0].price} </h1><br />
          <img class='product-img' alt='Roadster' src={prodata.products[0].img} />
          <div class ='btnn'><h3>Order Here</h3></div>
          
      <p class='simple-description'>{prodata.products[0].description}</p>
    
          </div>
      <div id ='div2t' class="div2 roadster"><h1 class='product-title'> {prodata.products[1].name}  {prodata.products[1].price}</h1><br />
              <img class='product-img' alt='Roadster Range' src={prodata.products[1].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'> {prodata.products[1].description}</p> </div>
          <div id ='div3t' class="div3 roadster"> 
      <h1 class='product-title'> {prodata.products[2].name} {prodata.products[2].price}</h1><br />
              <img class='product-img' alt='Roadster GT' src={prodata.products[2].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'> {prodata.products[2].description} </p> </div>
  
         
          <div id ='div4t'class="div4 roadster"> 
  
      <h1 class='product-title'> {prodata.products[3].name} {prodata.products[3].price} </h1><br />
              <img class='product-img' alt='Roadster Track'  src={prodata.products[3].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'>{prodata.products[3].description}</p>
           </div>
  
          
          <div id ='div5t'class="div5 stingray"> 
      <h1 class='product-title'> {prodata.products[4].name} {prodata.products[4].price} </h1><br />
              <img class='product-img' alt='Stingray' src={prodata.products[4].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'>{prodata.products[4].description}</p>
          </div>
          <div id ='div6t'class="div6 stingray"> 
      <h1 class='product-title'> {prodata.products[5].name} {prodata.products[5].price}</h1><br />
              <img class='product-img' alt='Stingray Range' src={prodata.products[5].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'>{prodata.products[5].description}</p>
          </div>
          <div id ='div7t' class="div7 stingray"> 
  
      <h1 class='product-title'> {prodata.products[6].name}  {prodata.products[6].price}</h1><br />
              <img class='product-img' alt='Stingray Hellcat' src={prodata.products[6].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'>{prodata.products[6].description}</p>
          </div>
          <div id ='div8t' class="div8 stingray"> 
      <h1 class='product-title'> {prodata.products[7].name} {prodata.products[7].price}</h1><br />
              <img class='product-img' alt='Stingray Demon' src={prodata.products[7].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'>{prodata.products[7].description}</p>
          </div>
          <div id ='div9t' class="div9 cruiser"> 
      <h1 class='product-title'> {prodata.products[8].name} {prodata.products[8].price}</h1><br />
              <img class='product-img'  alt='Cruiser' src={prodata.products[8].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'>{prodata.products[8].description}</p>
  
          </div>
          <div id ='div10t' class="div10 cruiser"> 
      <h1 class='product-title'> {prodata.products[9].name} {prodata.products[9].price}</h1><br />
              <img class='product-img' alt='Cruiser Range' src={prodata.products[9].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'>{prodata.products[9].description}</p>
          </div>
          <div id ='div11t' class="div11 cruiser"> 
      <h1 class='product-title'> {prodata.products[10].name} {prodata.products[10].price}</h1><br />
              <img class='product-img' alt='Cruiser S' src={prodata.products[10].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
      <p class='simple-description'>{prodata.products[10].description}</p>
          </div>
          <div id ='div12t' class="div12 cruiser"> 
      <h1 class='product-title'> {prodata.products[11].name} {prodata.products[11].price}</h1><br />
              <img class='product-img' alt='Cruiser GT' src={prodata.products[11].img} />
              <div class ='btnn'><h3>Order Here</h3></div>
              
      <p class='simple-description'>{prodata.products[11].description}</p>
          </div>
          </div>
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







