import React, { Fragment } from 'react';
import NavBar from '../NavBar.js';
import ProduceContainer from "./ProduceContainer.js";
import ContactContainer from "./ContactContainer.js";
import BasketContainer from "./BasketContainer.js"; 
import HomeContainer from "./HomeContainer.js"
import Footer from '../Footer.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlueCheeseComponent from '../components/BlueCheese/BlueCheeseComponent.js';
import HardCheeseComponent from '../components/HardCheese/HardCheeseComponent.js';
import SoftCheeseComponent from '../components/SoftCheese/SoftCheeseComponent.js';
import PantryComponent from '../components/Pantry/PantryComponent.js';


const RoutesContainer = () =>{
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route path="/home" component={HomeContainer} />
            <Route path="/produce" component={ProduceContainer} />
            <Route path="/contact" component={ContactContainer} />
            <Route path="/basket" component={BasketContainer} />
            <Route path="/bluecheese"component={BlueCheeseComponent}/>
            <Route path="/hardcheese" component={HardCheeseComponent}/>
            <Route path="/softcheese" component={SoftCheeseComponent}/>
            <Route path="/pantry" component={PantryComponent}/>
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
}

export default RoutesContainer;

/* <Route
  path="/personalloan"
  exact
  render={(props) => {
    return <Loan handledataLoan={handledataLoan} loandata={loandata} />;
  }}
/>; */ //code from Peter check out Pirates for routes