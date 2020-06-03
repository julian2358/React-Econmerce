import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./home";
import Products from "./products.js";
import Contact from "./contact";
import Stingray from './stingray.js';
import Roadster from './roadster.js';

function Container(location) {
         {/* default path is set to home */}
          {/* switch is used to render one component at a time */}
    return (
 

        <Switch>
   
          <Route exact path="/" component={Home} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Stingray" component={Stingray} />
          <Route exact path="/Roadster" component={Roadster} />
        </Switch>
       

  );
};

export default Container;