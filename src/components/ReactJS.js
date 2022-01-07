import React from 'react'

function ReactJS() {

    const arrayColors = ['Amarillo', 'Azul', 'Rojo', 'Verde'];

    return (
        <div className='suma-principal'>
            <h2>2. <span>React</span></h2>

            {/* Pregunta 2.1 */}
            <div className='react-pregunta'>
                <h4>2.1. ¿Qué pasa cuando sea llama a setState?</h4>
                <p>Pone en cola los cambios en el estado del componente
                    y le dice a React que este componente y sus elementos
                    secundarios necesitan ser procesados con el estado actualizado.</p>

                <p>Se ejecutan una serie de funciones:</p>

                <ol>
                    <li>shouldComponentUpdate</li>
                    <li>componentWillUpdate</li>
                    <li>render()</li>
                    <li>componentDidUpdate</li>
                </ol>
            </div>

            {/* Pregunta 2.2 */}
            <div className='react-ejercicio'>
                <h4>2.2. Lista Desordenada</h4>
                <p className='colores'>Colores:
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
