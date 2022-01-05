import React from 'react'

function ReactJS() {
    const arrayColors = ['Amarillo', 'Azul', 'Rojo', 'Verde'];

    return (
        <div className='suma-principal'>
            <h2>2. <span>React</span></h2>
            <div className='react-pregunta'>
                <h4>2.1. ¿Qué pasa cuando sea llama a setState?</h4>
                <p>respuesta</p>
            </div>
            <div className='react-ejercicio'>
                <h4>2.2. Lista Desordenada</h4>
                <p>Colores:
                    <span className='amarillo'>Amarillo</span>
                    <span className='azul'>Azul</span>
                    <span className='rojo'>Rojo</span>
                    <span className='verde'>Verde</span>
                </p>
                <p>Lista:</p>
                {arrayColors.map((element, i) => (
                    <ul key={i}>
                        <li>
                            <span className={element.toLowerCase()}>{element}</span>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default ReactJS
