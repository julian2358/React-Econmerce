import React from 'react';
import Home from './home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Products from './products.js';
import Contact from './contact.js';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './container.js';
// app must be wrapped in router and will render the routers starting with the default path leading to the home page
const App = () => (
  <Router>
      <div>
      <link href="https://fonts.googleapis.com/css2?family=Oxanium&display=swap" rel="stylesheet"></link>
      <Container />
    </div>
  </Router>
 );

export default App;
