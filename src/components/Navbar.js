import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/img/logo.png';

export default function NavBar() {
    
    const location = useLocation();

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
                    <li>
                        <Link
                            to='/javascript'
                            className={location.pathname.includes('javascript') ? 'active' : null}
                        >JavaScript</Link>
                    </li>
                    <li>
                        <Link
                            to='/react'
                            className={location.pathname.includes('react') ? 'active' : null}
                        >React</Link>
                    </li>
                    <li>
                        <Link
                            to='/boton-css'
                            className={location.pathname.includes('boton-css') ? 'active' : null}
                        >CSS</Link>
                    </li>
                    <li>
                        <Link
                            to='/backend'
                            className={location.pathname.includes('backend') ? 'active' : null}
                        >Bakend</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
