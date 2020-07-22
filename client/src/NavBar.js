import React from 'react';
import { NavLink } from "react-router-dom";
const NavBar = (props) => {
    return (
      <header className="navbar">
        <div className="navbar-title"> Ollie Burdekin's Delicatessen</div>

        
          <NavLink to="/home" className="navlink">  Home </NavLink>
        
        
          <NavLink to="/produce"className="navlink"> Produce </NavLink>
        
        
          <NavLink to="/contact"className="navlink"> Contact </NavLink>
       
        
          <NavLink to="/basket" className="navlink"> Basket </NavLink>
        
      </header>
    );
}

export default NavBar;