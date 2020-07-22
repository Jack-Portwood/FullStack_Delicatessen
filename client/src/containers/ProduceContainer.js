import React from "react";
import {Link} from 'react-router-dom';
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
const ProduceContainer = () => {
    

    return (
      <div className = "produce-boxes">
        
          <div className = "blue-cheese-box">
            <Link to="/bluecheese">Blue Cheese
              <img src = {image4}></img>
            </Link>
          </div>

          <div className = "hard-cheese-box">
            <Link to="/hardcheese">Hard Cheese
              <img src = {image5}></img>
             </Link>
          </div>

          <div className = "soft-cheese-box">
             <Link to="/softcheese">Soft Cheese
              <img src = {image6}></img>
             </Link> 
          </div>

          <div className = "pantry-box">
            <Link to="/pantry">Pantry
              <img src = {image7}></img>
            </Link> 
          </div>

      </div>
    );
    

}
export default ProduceContainer;