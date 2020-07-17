import React, { Fragment } from 'react';
import NavBar from '../NavBar.js';
import ProduceContainer from "./ProduceContainer.js";
import ContactContainer from "./ContactContainer.js";
import BasketContainer from "./BasketContainer.js"; 
import HomeContainer from "./HomeContainer.js"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const RoutesContainer = () =>{
    return(
        <Router>
            <Fragment>
            <NavBar/>
            <Switch>
            <Route path ="/Home" component={HomeContainer}/>
            <Route path="/produce" component={ProduceContainer}/>
            <Route path="/contact" component={ContactContainer}/>
            <Route path="/basket" component={BasketContainer}/>
            </Switch>
            </Fragment>
        </Router>
        
    )
}

export default RoutesContainer;