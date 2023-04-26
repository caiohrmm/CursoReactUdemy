// CSS
import { useState, useRef } from 'react'
import './InGame.css'

const InGame = ({verificarLetra, EscolherPalavra, EscolherLetra, EscolherCategoria, LetrasCorretas, LetrasErradas, Pontuacao, Tentativas}) => {
  // Criar uma referencia para o input
  const RefInput = useRef(null)
  const [Letra, setLetra] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    verificarLetra(Letra)
    setLetra("")
    RefInput.current.focus()
    
  }
  return (
    <div className='h-screen flex justify-center items-center text-center text-white flex-col'>
      <div>
        <div className='border-4 rounded p-4 bg-blue-700 bg-opacity-95  shadow-lg shadow-cyan-500/80'>
          <p className='from-neutral-900 text-2xl border-b-2 py-1 bg-blue-600 bg-opacity-80 rounded pt-4'>Pontuação: {Pontuacao}</p>
          <h1 className='text-7xl mt-5'>Adivinhe a palavra</h1>
          <h3 className='text-2xl mt-5'>Dica sobre a palavra: <span className='text-yellow-300 font-bold p-2'>{EscolherCategoria.toUpperCase()}</span></h3>
          <p className='text-2xl border-b border-gray-400 py-1'>Você ainda tem {Tentativas} tentativa (s)</p>
        </div>
      <div className='p-10 mt-6 rounded-md flex space-x-1.5 shadow-lg shadow-cyan-500/80' id='borda'>
          {/* Se a letra for certa, ela fica no fundo branco, caso contrário ele só mostra o fundo branco com a palavra escolhida. */}
          {EscolherLetra.map((letra, i) => (
            LetrasCorretas.includes(letra) ? (<span key={i} className='text-7xl uppercase text-black bg-white bg-opacity-95 border-4 border-black w-24 h-24 shadow-xl shadow-gray-600/40 flex items-center justify-center'>{letra}</span>) : 
            (<span key={i} className='text-8xl flex items-center justify-center uppercase text-black bg-white bg-opacity-95 border-4 border-black w-24 h-24 shadow-xl shadow-gray-600/40'></span>)
          ))}
      </div>
      <div className='border-4 mt-6 rounded-lg shadow-lg shadow-cyan-500/80 p-4 bg-blue-900 bg-opacity-80 flex items-center flex-col justify-center'>
        <p className='text-2xl'>Tente adivinhar uma letra da palavra : </p>
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setLetra(e.target.value)} value={Letra} type="text" name="letter" maxLength="1" required  ref={RefInput} className='w-20 h-20 border-4 border-black shadow-xl shadow-gray-600/40 m-2 text-6xl text-black font-bold text-center uppercase'/>
          <button className='block px-10 py-2 rounded text-black font-black bg-green-400 text-center mt-2 text-2xl hover:bg-green-600 hover:text-white transition ease-in duration-500'>PLAY</button>
        </form>
      </div>
      <div className='border p-4 mt-6 bg-blue-800 tracking-wide shadow-lg shadow-cyan-500/80'>
        <p className='text-2xl border-b pb-2 border-red-700'>Letras <span className='text-red-700 font-bold'>ERRADAS :</span> </p>
        {LetrasErradas.map((letras, i) => (
          <span className="text-xl" key={i}>{letras}, </span>
        ))}
      </div>
    </div>
    </div>
  )
}

export default InGame