import React from "react";
import {NavLink} from "react-router-dom"

const Footer = (props) => {
    return (
      <footer className="footer"> 
      <div>
        <div className="address">
        <p>432 Ockham Road East Thirston NE65 3NB  078 8209 8789</p>
        </div>
        
        <NavLink to="/contact"className="navlink"> Contact </NavLink>
        
        <NavLink to="/basket" className="navlink"> Basket  </NavLink>
      </div>
      </footer>
    );
}

export default Footer;
