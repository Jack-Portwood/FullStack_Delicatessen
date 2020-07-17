import React from 'react';

const NavBar = (props) => {
    return (
      <header className="navbar">
        <div className="navbar-title"> Ollie Burdekin's Delicatessen</div>
        <div className="navlink">
          <a href="/produce"> Produce </a>
        </div>
        <div className="navlink">
          <a href="/contact"> Contact </a>
        </div>
        <div className="navlink">
          <a href="/basket"> Basket </a>
        </div>
      </header>
    );
}

export default NavBar;