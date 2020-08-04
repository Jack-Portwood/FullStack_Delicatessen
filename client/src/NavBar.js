import React from 'react';
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
      <header className="navbar">
        <p className="navbar-title"> V. G. Childe Delicatessen</p>
        

        <div>
         <NavLink to="/home" className="navlink"> Home </NavLink>
        
        
          <NavLink to="/produce"className="navlink"> Produce </NavLink>
        
        
          <NavLink to="/contact"className="navlink"> Contact </NavLink>
       
        
          <NavLink to="/basket" className="navlink"> Basket  </NavLink>
        </div>
          
        
      </header>
    );
}

export default NavBar;