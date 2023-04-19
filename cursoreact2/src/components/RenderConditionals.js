import React, { useState } from 'react'

const RenderConditionals = () => {
    const [for_verdade] = useState(true)
    const [for_falso] = useState(false) 
    const [Pessoa] = useState({nome: "Caio", idade: 18})
  return (
    <div>
        
        <div>
            <h1>Testando verdadeiro ou falso</h1>
            {for_verdade && <p>Isso é verdadeiro</p>}
            {!for_falso && <p>Isso é falso!</p>}
        </div>
        <div>
            <h1>Testando verdadeiro ou falso com ternários</h1>
            {Pessoa.idade >= 18 ? (<p>{Pessoa.nome} - {Pessoa.idade} - Essa pessoa é maior de idade.</p>) 
            : (<p>Essa pessoa é menor de idade</p>)}
        </div>
        
    </div>
    
  )
}

export default RenderConditionals