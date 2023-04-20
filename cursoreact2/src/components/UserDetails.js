import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        {/* Exibir meus dados -> */}
        <div className='lista'>
            <ul>
                <li>Nome: <strong>{nome}</strong></li>
                <li>Idade: {idade}</li>
                <li>Profissão: {profissao}</li>
                {idade < 18 && <p><strong>{nome}</strong> não pode tirar carta de habilitação</p>}
                {idade >= 18 && <p><strong>{nome}</strong> pode tirar carta de habilitação</p>}
            </ul>
        </div>
    </div>
  )
}

export default UserDetails