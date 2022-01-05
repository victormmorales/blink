import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear();

    const autor = 'Víctor Manuel Morales Ruiz'

    return (
        <div className='footer'>
            <p>{autor}<span> © {year}</span></p>
        </div>
    )
}
