// Hooks
import { useState } from 'react'

// CSS
import './Jogar.css'

const Jogar = ({handleInGame}) => {
    const [Nome, setNome] = useState()
    const [Contador, setContador] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Nome && Contador === 0){
            const div = document.getElementById('setar')
            const h1 = document.createElement('h1')
            const botao = document.createElement('button')
            const texto = document.createTextNode('BEM VINDO AO PROJETO SILVIO SANTOS - '+ Nome.toUpperCase() +' !!')
            const textoBotao = document.createTextNode('JOGAR')
            botao.setAttribute('id', 'meubotao')
            h1.setAttribute('id', 'nometitulo')
            h1.appendChild(texto)
            botao.appendChild(textoBotao)
            botao.addEventListener('click', handleInGame)
            div.appendChild(h1)
            div.appendChild(botao)
            setContador(1)
        }      
    } 
  return (
    <div>
        <div className='h-60'>
        <div className='flex justify-center mt-8'>
            <form onSubmit={handleSubmit}>
            <label>
                <span className='px-1 py-2 font-semibold text-xl text-sky-200 border-b-2 border-white'>Nome:</span>
                <input type="text" className='px-1 py-1.5 ml-4 rounded-sm bg-white focus:bg-gray-100 uppercase ring focus:from-neutral-800 focus:text-lg'
                onChange={(e) => setNome(e.target.value)} />
            </label>
            <input type="submit" value={"OK"} className='px-4 py-2 border-2 ml-4 text-sky-200 font-bold text-xl cursor-pointer rounded bg-indigo-900
            hover:bg-blue-400 hover:text-black hover:transition ring'/>
            </form>
        </div>
        <div id='setar'>

        </div>
        </div>
        
            

            
        </div>
  )
}

export default Jogar