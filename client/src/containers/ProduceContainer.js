import React from "react";
import {NavLink} from 'react-router-dom';
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";


const ProduceContainer = () => {
     
    return (
      <div className="produce-boxes">
        
        <NavLink to = "/bluecheesecomp" className="produce-link">
          Blue Cheese<img src={image4} height="300" width="300" alt="cheesePic"></img>
        </NavLink>
       
        <NavLink to="/hardcheesecomp" className="produce-link">
          Hard Cheese<img src={image5} height="300" width="300" alt="cheesePic"></img>
        </NavLink>

        <NavLink to="/softcheesecomp" className="produce-link">
          Soft Cheese<img src={image6} height="300" width="300"alt="cheesePic"></img>
        </NavLink>

        <NavLink to="/pantrycomp" className="produce-link">
          Pantry<img src={image7} height="300" width="300" alt="cheesePic"></img></NavLink>
      </div>
    );
    

}
export default ProduceContainer;