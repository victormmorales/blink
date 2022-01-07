import React, { useState } from "react";

export default function JavaScript() {
  const [resultado, setResultado] = useState(0);

  // Comprobacion si es un numero
  function isNum(numero) {
    return !isNaN(numero);
  }

  let lista1 = [1, 4, 3, 0];
  let lista2 = [1, 2, [5, 8], 4];
  let lista3 = [0, [6, 2], null, 7, 1];

  const sumArray = (array) => {
    let total = 0;

    let totalArray = 0;
    let totalSubArray = 0;

    if(Array.isArray(array)){
        for(let i = 0; i < array.length; i++) {
            if(Array.isArray(array[i])){
                const elemento = array[i];
                for(let j = 0; j < elemento.length; j++) {
                    const elementoArray = elemento[j];

                    //validacion si es un numero
                    if(isNum(elementoArray)){
                        totalSubArray += elementoArray;
                    }
                }
            }

            const elemento = array[i];
            //validacion si es un numero
            if (isNum(elemento)) {
                totalArray += elemento;
            }
        }
        total = totalArray + totalSubArray;
    } else {
        return '¡No es un Array!';
    }

    return setResultado(total);
  }

  return (
    <div className="suma-principal">
      <h2>1. <span>JavaScript</span></h2>
      
      <div className="suma-container">
        <div className="operaciones">
          <p>Lista1: 1, 4, 3, 0</p>
          <button onClick={() => sumArray(lista1)}>Sumar</button>
        </div>

        <div className="operaciones">
          <p>Lista2: 1, 2, [5, 8], 4</p>
          <button onClick={() => sumArray(lista2)}>Sumar</button>
        </div>

        <div className="operaciones">
          <p>Lista3: 0, [6, 2], null, 7, 1</p>
          <button onClick={() => sumArray(lista3)}>Sumar</button>
        </div>
      </div>
      <div className="suma-resultado">
        <p>Resultado = {resultado}</p>
        <button onClick={() => setResultado(0)}>Reiniciar</button>
      </div>
    </div>
  );
}
