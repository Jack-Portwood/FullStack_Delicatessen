import React, { Fragment } from "react";
import { NavLink,  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheese } from '@fortawesome/free-solid-svg-icons'
// import image4 from "../images/image4.jpg";
// import image5 from "../images/image5.jpg";
// import image6 from "../images/image6.jpg";
// import image7 from "../images/image7.jpg";

function ProduceContainer() {
  return (
    <Fragment>
      <FontAwesomeIcon className="cheese-icon" icon={faCheese} size="6x"  />

      <div className="produce-boxes">
        <NavLink to="/bluecheesecomp" className="produce-link">
          Blue Cheese
          {/* <img src={image4} height="300" width="300" alt="cheesePic"></img> */}
        </NavLink>

        <NavLink to="/hardcheesecomp" className="produce-link">
          Hard Cheese
          {/* <img src={image5} height="300" width="300" alt="cheesePic"></img> */}
        </NavLink>

        <NavLink to="/softcheesecomp" className="produce-link">
          Soft Cheese
          {/* <img src={image6} height="300" width="300" alt="cheesePic"></img> */}
        </NavLink>

        <NavLink to="/pantrycomp" className="produce-link">
          Pantry Items
          {/* Pantry<img src={image7} height="300" width="300" alt="cheesePic"></img> */}
        </NavLink>
      </div>
    </Fragment>
  );
};
export default ProduceContainer;
