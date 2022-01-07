import React from 'react';
// Components:
import JavaScript from './JavaScript';
import ReactJS from './ReactJS';
import BotonCss from './BotonCss';
import Backend from './Backend';

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
          <Backend />
        </div>
      </div>
    )
}
