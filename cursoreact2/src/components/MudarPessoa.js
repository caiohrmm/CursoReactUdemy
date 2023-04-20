import React from 'react'

const MudarPessoa = ({funcao}) => {
    const nomes = ["Caio", "Henrique", "Rodrigues", "Martins"]
  return (
    <div>
        <button onClick= {() => funcao(nomes[0])}>1</button>
        <button onClick= {() => funcao(nomes[1])}>2</button>
        <button onClick= {() => funcao(nomes[2])}>3</button>
        <button onClick= {() => funcao(nomes[3])}>4</button>
    </div>
  )
}

export default MudarPessoa