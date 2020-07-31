import React, { Fragment } from "react";
import {NavLink} from "react-router-dom"

const Footer = (props) => {
    return (
      <footer className="footer"> 
        <div className="address">
        432<br/> Ockham Road<br/> East Thirston<br/> NE65 3NB <br/> 078 8209 8789
        </div>

        <NavLink to="/contact"className="footlink1"> Contact </NavLink>
        
        <NavLink to="/basket" className="footlink2"> Basket  </NavLink>
      
      </footer>
    );
}

export default Footer;
