import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function NavBar() {
    // Meter location
    return (
        <div className='navbar-container'>
            {/* logo */}
            <div className='navbar-logo'>
                <a href='/'>
                    <img src={logo} alt="logo" />
                </a>
            </div>

            {/* links */}
            <div className='links-container'>
                <ul>
                    <li><a href='/javascript'>JavaScript</a></li>
                </ul>
                <ul>
                    <li><a href='/react'>React</a></li>
                </ul>
                <ul>
                    <li><a href='/boton-css'>CSS</a></li>
                </ul>
            </div>
        </div>
    )
}
