import React, {Fragment, Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlueCheeseComponent from "../components/BlueCheese/BlueCheeseComponent.js";
import HardCheeseComponent from "../components/HardCheese/HardCheeseComponent.js";
import SoftCheeseComponent from "../components/SoftCheese/SoftCheeseComponent.js";
import PantryComponent from "../components/Pantry/PantryComponent.js";
import Requests from "../helpers/requests";


class ProduceContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            produce: []
        }
    }

    componentDidMount(){
        const requests = new Requests();
        requests.get('/api/produce')
        .then((data) => {
            this.setState({produce: data})
        })
    }

    handlePost(produce){
        const requests = new Requests();
        requests.post('/api/produce', produce)
        .then ( () => {
            window.location = '/pirates'
        })
    }


  

    
        render(){

        if(!this.state.produce){
            return null
        }

        return (
          <Router>
            <Fragment>
              <Switch>
                <Route
                  exact path="/produce/bluecheese" render={() => {
                    return <BlueCheeseComponent onCreate={this.handlePost} />;
                  }}/>


                <Route
                  exact path="/produce/hardcheese" render={() => {
                    return (
                      <HardCheeseComponent onCreate={this.handlePost} />
                    );
                  }}/>

                <Route
                  exact path="/produce/softcheese" render={() => {
                    return (
                      <SoftCheeseComponent onCreate={this.handlePost} />
                    );
                  }}/>

                <Route
                  exact path="/produce/pantry" render={() => {
                    return <PantryComponent onCreate={this.handlePost} />;
                  }}/>
              </Switch>
            </Fragment>
          </Router>
        )
    }

}


export default ProduceContainer;