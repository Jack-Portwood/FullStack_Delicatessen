import React, { Fragment } from "react";
import {NavLink} from "react-router-dom"

const Footer = (props) => {
    return (
      <footer className="footer"> 
        <p className="address">
        432<br/> Ockham Road<br/> East Thirston<br/> NE65 3NB <br/> 078 8209 8789
        </p>

        
        <NavLink to="/contact"className="footlink1"> Contact Us </NavLink>
        
        <NavLink to="/basket" className="footlink"> Basket  </NavLink>
        
      </footer>
    );
}

export default Footer;
