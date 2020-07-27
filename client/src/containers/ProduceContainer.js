import React, {useState} from "react";
import {NavLink, Link} from 'react-router-dom';
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";


const ProduceContainer = (props) => {
    
    return (
      <div className="produce-boxes">
        {/* cannot pass props through link */}
        <NavLink to = "/bluecheese" className="produce-link">
          Blue Cheese<img src={image4} height="300" width="300" alt="cheesePic"></img>
        </NavLink>

        <NavLink to="/hardcheese" className="produce-link">
          Hard Cheese<img src={image5} height="300" width="300" alt="cheesePic"></img>
        </NavLink>

        <NavLink to="/softcheese" className="produce-link">
          Soft Cheese<img src={image6} height="300" width="300"alt="cheesePic"></img>
        </NavLink>

        <NavLink to="/pantry" className="produce-link">
          Pantry<img src={image7} height="300" width="300" alt="cheesePic"></img></NavLink>
      </div>
    );
    

}
export default ProduceContainer;