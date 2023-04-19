import React from 'react'
import {useState} from 'react'
import '../App.css'
const RenderLists = () => {
    const [list] = useState(["Caio", "Henrique", "Rodrigues", "Martins"])
    const [dados, setDados] = useState([
        {id: 1, nome: "Caio", idade: 18, sexo: "M"},
        {id: 2, nome: "Henrique", idade: 23, sexo: "M"},
        {id: 3, nome: "Fernanda", idade: 34, sexo: "F"},
        {id: 4, nome: "Maria Rosa", idade: 64, sexo: "F"}])
    const handleExcluirElementos = () => {
        /* Gerando um número aleatorio de 1 a 4 */
        const numeroRandom = Math.floor(Math.random() * 5) /* Gerará ou 1 ou 2 ou 3 ou 4 */
        setDados((prevDados) => {
            return prevDados.filter((data) => numeroRandom !== data.id)
        })
    }
  return (
    <div id='pai'>
        <div className='lista'>
            <ul>
                {list.map((itens, i) => (
                    <li key={i}>{itens}</li>
                ))}
            </ul>
        </div>
        <br/><br/>
        <div className='lista'>
            <ul>
                {dados.map((item) => (
                    <li key={item.id}> {item.nome} - {item.idade} - {item.sexo}</li>
                ))}
            </ul>
        </div>
        <div>
            <button onClick={handleExcluirElementos}>Excluir</button>
        </div>
    </div>
  )
}

export default RenderLists