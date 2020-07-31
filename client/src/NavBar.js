import React from 'react';
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
      <header className="navbar">
        <div className="navbar-title"> V.G. Childe Delicatessen</div>

        <a>
         <NavLink to="/home" className="navlink"> Home </NavLink>
        
        
          <NavLink to="/produce"className="navlink"> Produce </NavLink>
        
        
          <NavLink to="/contact"className="navlink"> Contact </NavLink>
       
        
          <NavLink to="/basket" className="navlink"> Basket  </NavLink>
        </a>
          
        
      </header>
    );
}

export default NavBar;