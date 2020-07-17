import React, { Fragment } from "react";
import BlueCheeseComponent from "../components/BluceCheeseComponent.js";
import HardCheeseComponent from "../components/HardCheeseComponent.js";
import SoftCheeseComponent from "../components/SoftCheeseComponent.js";
import PantryComponent from "../components/PantryComponent.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function ProduceContainer() {
   return(
        <Router>
            <Fragment>
            <Switch>
            <Route path ="/bluecheese" component={BlueCheeseComponent}/>
            <Route path="/hardcheese" component={HardCheeseComponent}/>
            <Route path="/softcheese" component={SoftCheeseComponent}/>
            <Route path="/pantry" component={PantryComponent}/>
            </Switch>
            </Fragment>
        </Router>
    
    )
   
}

export default ProduceContainer;