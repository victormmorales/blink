import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function NavBar() {
    return (
        <div className='navbar-container'>
            {/* logo */}
            <div className='navbar-logo'>
                <a href='https://www.blinklearning.com/home' target='_blank'  rel="noreferrer">
                    <img src={logo} alt="logo" />
                </a>
            </div>

            {/* links */}
            <div className='links-container'>
                <ul>
                    <li><a href='#'>JavaScript</a></li>
                </ul>
                <ul>
                    <li><a href='#'>React</a></li>
                </ul>
                <ul>
                    <li><a href='#'>CSS</a></li>
                </ul>
            </div>
        </div>
    )
}
