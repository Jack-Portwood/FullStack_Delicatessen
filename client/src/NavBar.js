import React from 'react';

const NavBar = (props) => {
    return (
      <header className='navbar'>
        <div className ="title-header"> Ollie Burdekin's Delicatessen</div>
        <div className="navlink">
        <a href="/products"> Buy </a>
        </div>
        <div className="navlink">
        <a href="/products"> Contact </a>
        </div>
      </header>
    );
}

export default NavBar;