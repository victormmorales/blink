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

    //validar si es un array
    if (Array.isArray(array)) {
      for (let i = 0; i < array.length; i++) {
        const elemento = array[i];
        //validacion si es un numero
        if (isNum(elemento)) {
          total += elemento;
        }
      }
    } else {
      console.error("No es un array");
    }
    return setResultado(total);
  };

  // const reducer = (a, b) => a + b;
  // console.log(lista2.reduce(reducer));
  console.log("REDUCER", lista2.reduce((a, b) => a + b));

  return (
    <div className="suma-principal">
      <h2>
        1. <span>JavaScript</span>
      </h2>
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
