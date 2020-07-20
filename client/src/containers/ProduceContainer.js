import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlueCheeseComponent from "../components/BlueCheeseComponent";
import { render } from "@testing-library/react";



function ProduceContainer(){

    render()
        return(
            <Router>
                <Fragment>
                <Switch>
                    <Route render = {(props) => {
                        return <BlueCheeseComponent BlueCheeseComponent={this.state.BlueCheeseComponent}/>
                    }}/>
                </Switch>
                </Fragment>
            </Router>

        )

    }

    


export default ProduceContainer;