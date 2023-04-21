import React from 'react'
import './CarDetails.css'

const CarDetails = ({nome, ano}) => {
    
  return (
    <div>
        <div>
            <div>
                <h1 className='nomeCarro'>Nome: {nome}</h1>
                <h2 className='anoCarro'>Ano do carro: {ano}</h2>
            </div>
        </div>
    </div>
  )
}

export default CarDetails