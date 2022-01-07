import React from 'react'

export default function Backend() {
    return (
        <div className='suma-principal'>
            <h2>4. <span>Backend</span></h2>

            <div className='react-pregunta'>
                <p>Mi experiencia en Backend es con <b>JavaScript, NodeJS y ExpressJS</b>. Sería un
                un placer y una oportundiad poder aprender otros lenguajes y frameworks para seguir
                formandome y creciendo en mi perfil profesional.</p>
                <br/>
            </div>

            {/* Pregunta 2.1 */}
            <div className='react-pregunta'>
                <h4>4.1. ¿Cuál es la salida de este código en PHP: <i>$i=0;while ($i=1) echo ++$i;?</i></h4>

                <p>Según mi experiencia en las tecnologías anteriormente comentadas, ese código
                es un bucle while.</p>
                
                <p>Se realizará una sola vez ya que la variable i es igual a 0, mientras se cumpla una condición,
                en este caso hasta que la variable i sea igual a 1. Cuando esa condiciónsea cierta se realizará
                todo el proceso hasta que la condición sea falsa.
                </p>
                <br/>
            </div>

            {/* Pregunta 2.2 */}
            <div className='react-pregunta'>
                <h4>4.2. ¿Qué función en PHP utilizarías para quitar todos los espacios de un string?</h4>

                <p>Código: <i>'trim(string $str, string $character_mask = " \t\n\r\0\x0B"): string'</i></p>
                <p>Esta función devuelve una cadena con los espacios en blanco
                eliminados del inicio y final del string sin el segundo parámetro</p>
            </div>
        </div>
    )
}
