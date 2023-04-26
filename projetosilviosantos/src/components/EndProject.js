// CSS
import './EndProject.css'

const EndProject = ({handleRetry, Pontuacao}) => {
  return (
    <div>
        <div className="h-screen flex space-y-8 items-center justify-center flex-col">
            <h1 className="text-8xl font-bold text-red-500 border-b-4 rounded p-2 bg-blue-700 bg-opacity-70 shadow-lg shadow-cyan-700">FIM DA LINHA !! <span className='flex text-3xl text-cyan-400 justify-center items-center'>SUA PONTUAÇÃO FOI DE {Pontuacao} PONTOS</span> </h1>
            <p className="text-2xl border-2 p-2 rounded text-white tracking-wide bg-blue-700 bg-opacity-70 shadow-lg shadow-cyan-700">VOCÊ PERDEU SUAS 3 TENTATIVAS.<br/> <span className="text-center justify-center flex text-yellow-500 font-bold">TENTE NOVAMENTE !!</span></p>
            <button onClick={handleRetry} className='border-2 px-4 py-2.5 rounded font-black bg-blue-700 bg-opacity-70 hover:bg-blue-950 duration-500 hover:text-white'>VOLTAR AO INÍCIO</button>
        </div>
    </div>
  )
}

export default EndProject