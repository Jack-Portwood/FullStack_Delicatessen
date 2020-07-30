import React, { Fragment, useState, useEffect } from 'react';
import NavBar from '../NavBar.js';
import ProduceContainer from "./ProduceContainer.js";
import ContactContainer from "./ContactContainer.js";
import HomeContainer from "./HomeContainer.js"
import Footer from '../Footer.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProduceComponent from '../components/ProduceComponent.js';
import BasketListComponent from '../components/BasketListComponent.js';




const RoutesContainer = (props) => {
  const [basket, setBasket] = useState([  
  ]);

  useEffect(() => {
  }, [basket]);

//setting contents of basket 
function handleBasket (newBasket) {
    console.log("I am Router");

  setBasket(newBasket)
  console.log(basket)
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
                return<ProduceComponent basket={basket}  handleB={handleBasket}
                />;
              }}
            />

            <Route path="/contact" component={ContactContainer} />
            
            <Route exact path="/basket" render= {(props) => {
              return (
                <BasketListComponent basket={basket} handleB={handleBasket} />
              );
            }} 
          />

            <Route
              exact path="/bluecheesecomp"render={(props) => {
                return (
                  <ProduceContainer basket={basket} handleB={handleBasket}
                    product={blue}
                  />
                );
              }}
            />

            <Route
              exact path="/hardcheesecomp" render={(props) => {
                return (
                  <ProduceContainer basket={basket} handleB={handleBasket}
                    product={hard}
                  />
                );
              }}
            />

            <Route
              exact path="/softcheesecomp" render={(props) => {
                return (
                  <ProduceContainer basket={basket} handleB={handleBasket}
                    product={soft}
                  />
                );
              }}
            />

            <Route
              exact path="/pantrycomp" render={(props) => { 
                return (
                  <ProduceContainer basket={basket} handleB={handleBasket} 
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

