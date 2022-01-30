import React from 'react';
import logo from '../images/logo.png';

function FooterCard() {
  return (
        <div className='footer-card'>
            <ul id='footer-togger-card'>
                <li id='footer-togger-list'>
                    <a href='#' className='togger-card'>Privacy</a>
                    <a href='#' className='togger-card'>Policy</a>
                    <a href='#' className='togger-card'>FAQs</a>
                    <a href='#' className='togger-card'>Terms and Conditions </a>
                </li>    
                <img className='logo-card' src = {logo} alt='' />
            </ul>
        </div>
  ) 
};

export default FooterCard;
