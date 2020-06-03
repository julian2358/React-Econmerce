import React, { useState } from 'react';
import './contact.css'
import {Switch, Route} from "react-router";
import { BrowserRouter as Router, NavLink} from 'react-router-dom';

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }


const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validNumRegex= 
RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

export default class Contact extends React.Component{
//call state to log errors on form
    constructor(props) {
        super(props);
        this.state = {
          fullName: null,
          email: null,
          password: null,
          errors: {
            fullName: '',
            email: '',
            password: '',
          }
        };
      }

      //on event change prevent default and check for erros
      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      
        switch (name) {
          case 'fullName': 
            errors.fullName = 
              value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
          errors.password = 
          validNumRegex.test(value)
          ? ''
          : 'Number is not valid!';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value}, ()=> {
      console.log(errors)
  })
      }
        //check to see if on submit form was vild or invalid
      handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }

      render(){
        const {errors} = this.state;
          return(
            <div id='bg-back'>



    <h1 id="top-text">Get in Touch!</h1>

   
    <ul id="navlist">
                    <li> <NavLink to="/" exact>  Home</NavLink></li>
                      <li> <NavLink to="/Stingray" exact>  2020 Stingray</NavLink></li>
                    <li> <NavLink to="/Products" exact> Order </NavLink> </li>
                    <li> <NavLink to="/Roadster" exact>  2020 Roadster</NavLink></li>
            
                    
                </ul> 

    <form id="contact-form" name="myForm">
    
        



        {/* form and form validation */}
            <fieldset>
                <div id='form-container'>
                <label for="user"> <input id="user" type="text" placeholder="Your Full Name" name='fullName' onChange={this.handleChange} noValidate  /> </label>
                <br />
                {errors.fullName.length > 0 && 
  <span className='error'>{errors.fullName}</span>}
                <label for="email"> <input id="email" type="email" placeholder="Email Address Here" name='email' onChange={this.handleChange} noValidate /> </label>
                {errors.email.length > 0 && 
  <span className='error'>{errors.email}</span>}
                <label for="phone"> <input id="phone" type="tel" placeholder="Phone Number (xxx-xxx-xxxx)" name='password' onChange={this.handleChange} noValidate/> </label>
                {errors.password.length > 0 && 
  <span className='error'>{errors.password}</span>}
                </div>
                <textarea placeholder="Type Your Message Here" rows="10" cols="140"> </textarea> <br/>
                <div id='container'>
                <label for="sub"><input id="sub" type="submit" /></label>
                <label for="reset"><input id="reset" type="reset" /></label>
                </div>
            </fieldset>    
    
    
    </form>



    
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