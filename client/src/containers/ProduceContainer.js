import React from "react";
import {Link} from 'react-router-dom';
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
const ProduceContainer = () => {
    

    return (
      <div className="produce-boxes">
        <Link to="/bluecheese">
          Blue Cheese<img src={image4} height="300" width="300"></img>
        </Link>

        <Link to="/hardcheese">
          Hard Cheese<img src={image5} height="300" width="300"></img>
        </Link>

        <Link to="/softcheese">
          Soft Cheese<img src={image6} height="300" width="300"></img>
        </Link>

        <Link to="/pantry">
          Pantry <img src={image7} height="300" width="300"></img>
        </Link>
      </div>
    );
    

}
export default ProduceContainer;