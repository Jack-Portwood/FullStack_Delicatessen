import React, { Fragment } from "react";
import { NavLink,  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheese } from '@fortawesome/free-solid-svg-icons'


function ProduceContainer() {
  return (
    <Fragment>
      <FontAwesomeIcon className="cheese-icon" icon={faCheese} size="6x"  />

      <div className="produce-boxes">
        <NavLink to="/bluecheesecomp" className="produce-link">
          Blue Cheese
        </NavLink>

        <NavLink to="/hardcheesecomp" className="produce-link">
          Hard Cheese
        </NavLink>

        <NavLink to="/softcheesecomp" className="produce-link">
          Soft Cheese
        </NavLink>

        <NavLink to="/pantrycomp" className="produce-link">
          Pantry Items
        </NavLink>
      </div>
    </Fragment>
  );
};
export default ProduceContainer;
