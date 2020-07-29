import React, { Fragment, useState } from 'react';
import NavBar from '../NavBar.js';
import ProduceContainer from "./ProduceContainer.js";
import ContactContainer from "./ContactContainer.js";
import BasketContainer from "./BasketContainer.js"; 
import HomeContainer from "./HomeContainer.js"
import Footer from '../Footer.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProduceComponent from '../components/ProduceComponent.js';
import BasketComponent from '../components/BasketComponent.js';




const RoutesContainer = (props) => {
  const [basket, setBasket] = useState([])

//setting contents of basket 
const handleBasket =(basket) => {
  setBasket(basket)
}



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

            <Route
              path="/produce" 
              render={(props) => {
                return<ProduceContainer basket={basket}  handleB={handleBasket}
                />;
              }}
            />

            <Route path="/contact" component={ContactContainer} />
            
            <Route exact path="/basket" render= {(props) => {
              return (
                <BasketComponent basket={basket} handleB={handleBasket} />
              );
            }} />

            <Route
              exact path="/bluecheesecomp"render={(props) => {
                return (
                  <ProduceComponent basket={basket} handleB={handleBasket}
                    product={blue}
                  />
                );
              }}
            />

            <Route
              exact path="/hardcheesecomp" render={(props) => {
                return (
                  <ProduceComponent basket={basket} handleB={handleBasket}
                    product={hard}
                  />
                );
              }}
            />

            <Route
              exact path="/softcheesecomp" render={(props) => {
                return (
                  <ProduceComponent basket={basket} handleB={handleBasket}
                    product={soft}
                  />
                );
              }}
            />

            <Route
              exact path="/pantrycomp" render={(props) => { 
                return (
                  <ProduceComponent basket={basket} handleB={handleBasket}
                    product={pantry}
                  />
                );
            }}
            />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    );
}

export default RoutesContainer;

