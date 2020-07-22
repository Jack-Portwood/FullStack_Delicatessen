import React, { Fragment } from 'react';
import NavBar from '../NavBar.js';
import ProduceContainer from "./ProduceContainer.js";
import ContactContainer from "./ContactContainer.js";
import BasketContainer from "./BasketContainer.js"; 
import HomeContainer from "./HomeContainer.js"
import Footer from '../Footer.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProduceComponent from '../components/ProduceComponent.js';



const RoutesContainer = () =>{

  const blue = "bluecheese"
  const hard = "hardcheese"
  const soft = "softcheese"
  const pantry = "pantry"
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route path="/home" component={HomeContainer} />
            <Route path="/produce" component={ProduceContainer} />
            <Route path="/contact" component={ContactContainer} />
            <Route path="/basket" component={BasketContainer} />

            <Route exact path="/bluecheese" render ={(props) => {
            return <ProduceComponent product = {blue}/> 
            }}/>


            
            <Route exact path="/hardcheese" render ={(props) => {
            return <ProduceComponent product={hard} />; 
            }}/>
            
            
            <Route exact path="/softcheese" render ={(props) => {
            return <ProduceComponent product={soft} />; 
            }}/>



            <Route exact path="/pantry" render ={(props) => {
            return <ProduceComponent product={pantry} />; 
            }}/>
          </Switch>
          <Footer/>
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