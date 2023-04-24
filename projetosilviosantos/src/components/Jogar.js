// Hooks
import React, { useState } from 'react'

// CSS
import './Jogar.css'

const Jogar = () => {
    const [Nome, setNome] = useState()
    const [Contador, setContador] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        const texto = document.createTextNode("Bem-Vindo - "+Nome)
        const bemvindo = document.createElement("h1")  
        bemvindo.appendChild(texto)
        const body = document.body
        if (Nome && Contador === 0){
            bemvindo.setAttribute('id', 'bemvindo')
            body.appendChild(bemvindo)
            setContador (Contador+1)
        }
     }  
  return (
    <div>
        <div className='flex justify-center mt-12'>
            <form onSubmit={handleSubmit}>
            <label>
                <span className='px-1 py-2 font-semibold text-xl text-sky-200 border-b-2 border-white'>Nome:</span>
                <input type="text" placeholder='Digite seu nome: ' className='px-1 py-1.5 ml-4 rounded-sm bg-white focus:bg-gray-100 ring'
                onChange={(e) => setNome(e.target.value)} />
            </label>
            <input type="submit" value={"Jogar"} className='px-4 py-2 border-2 ml-4 text-sky-200 font-bold text-xl cursor-pointer rounded bg-indigo-900
            hover:bg-blue-400 hover:text-black hover:transition ring'/>
            </form>
        </div>
    </div>
  )
}
export default Jogar