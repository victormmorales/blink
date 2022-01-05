import React from 'react';
// Components:
import Navbar from './Navbar';
import JavaScript from './JavaScript';
import ReactJS from './ReactJS';
import BotonCss from './BotonCss';
import Footer from './Footer';


export default function Home() {
    return (
      <div className="prueba-container">
        <div className='prueba-titulo'>
          <h1>Prueba técnica</h1>
        </div>

        <div>
          <JavaScript />
          <ReactJS />
          <BotonCss />
        </div>
      </div>
    )
}
