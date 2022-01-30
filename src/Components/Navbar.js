import React from 'react';
import logo from '../images/logo.png';

function Navbar() {
    return (
        <nav className='{}'>
        <a href='#' className='logo'>
            <img src= {logo} alt='' />    
        </a>
        <ul className='menu'>
        <li><a href='#'>Join The Waiting List</a></li>
        </ul>
        </nav>
    )
}

export default Navbar;