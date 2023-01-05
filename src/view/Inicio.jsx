import React from 'react'
import gatito from '../assets/imagenes/gatito-cesped_0.jpg'
import './Inicio.css'

export const Inicio = () => {
  return (
    <div className='contendTitleContend'> 
        <h1 className='titleMiPrimerProyecto'>Mi primer <br /> proyecto del portafolio</h1>
        <div className='contendTitleImg'>
            <h1 className='titleGatitosPros'>Gatos pros</h1>
            <img className='imagenGatito' src={gatito} alt="Acá va un gato" />
        </div>
    </div>
  )
}
