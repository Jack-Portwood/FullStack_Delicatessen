import React from 'react';

const NavBar = (props) => {
    return (
      <header>
        <h1 className ="title-header"> Ollie Burdekin's Delicatessen</h1>
        <ul className = "ul-links-bar">
        <li className="navlink">
        <a href="/products"> Buy </a>
        </li>
        <li className="navlink">
        <a href="/products"> Contact </a>
        </li>
        </ul>
      </header>
    );
}

export default NavBar;