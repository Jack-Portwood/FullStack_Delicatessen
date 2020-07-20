import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlueCheeseComponent from "../components/BlueCheeseComponent.js";
import HardCheeseComponent from "../components/HardCheeseComponent.js";
import SoftCheeseComponent from "../components/SoftCheeseComponent.js";
import PantryComponent from "../components/PantryComponent.js";
import { render } from "@testing-library/react";



function ProduceContainer(){

    render()
        return (
          <Router>
            <Fragment>
              <Switch>
                <Route
                  exact
                  path="/produce/bluecheese"
                  render={() => {
                    return <BlueCheeseComponent onCreate={this.handlePost} />;
                  }}
                />

                <Route
                  exact
                  path="/produce/hardcheese"
                  render={() => {
                    return <HardCheeseComponent onCreate={this.handlePost} />;
                  }}
                />

                <Route
                  exact
                  path="/produce/softcheese"
                  render={() => {
                    return <SoftCheeseComponent onCreate={this.handlePost} />;
                  }}
                />

                <Route
                  exact
                  path="/produce/pantry"
                  render={() => {
                    return <PantryComponent onCreate={this.handlePost} />;
                  }}
                />
              </Switch>
            </Fragment>
          </Router>
        );

    }

    


export default ProduceContainer;