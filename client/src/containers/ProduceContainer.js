import React, {Fragment, Component} from "react";
import {BrowserRouter as Router, Route, Switch, NavLink,Link} from 'react-router-dom';
import BlueCheeseComponent from "../components/BlueCheese/BlueCheeseComponent.js";
import HardCheeseComponent from "../components/HardCheese/HardCheeseComponent.js";
import SoftCheeseComponent from "../components/SoftCheese/SoftCheeseComponent.js";
import PantryComponent from "../components/Pantry/PantryComponent.js";
import Requests from "../helpers/requests";


const ProduceContainer = () => {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         produce: []
    //     }
    // }

    // componentDidMount(){
    //     const requests = new Requests();
    //     requests.get('/api/produce')
    //     .then((data) => {
    //         this.setState({produce: data})
    //     })
    // }

    // handlePost(produce){
    //     const requests = new Requests();
    //     requests.post('/api/produce', produce)
    //     .then ( () => {
    //         window.location = '/pirates'
    //     })
    // }


  

    
    //     render(){

    //     if(!this.state.produce){
    //         return null
    //     }
    return (
      <div>
        <ul>
          <li>
            <Link to="/bluecheese">Blue Cheese</Link>
          </li>
          <li>
            <Link to="/hardcheese">Hard Cheese</Link>
          </li>
          <li>
            <Link to="/softcheese">Soft Cheese</Link>
          </li>
          <li>
            <Link to="/pantry">Pantry</Link>
          </li>
        </ul>
      </div>
    );
    

}
export default ProduceContainer;