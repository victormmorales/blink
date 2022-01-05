import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import NavBar from './Navbar';
import Footer from './Footer';

function BotonCss() {
    return (
        <>
        <div className='suma-principal'>
            <h2>3. <span>CSS</span></h2>
            <div className='suma-container'>
                <button className='button-star'>
                    <div className='button-border'>
                        <FontAwesomeIcon icon={faStar} /> Checkout <FontAwesomeIcon icon={faStar} />
                    </div>
                </button>
            </div>
        </div>
        </>
    )
}

export default BotonCss
