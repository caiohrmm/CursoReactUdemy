import {useState} from 'react'

// Passo o valor 30 para o numeroHook através desse comando.

const Hooks = () => {
    let numero = 20
    const [numeroHook, setNumeroHook] = useState(30)
  return (
    <div>
        <div>
            <h1>Variável</h1>
            <p>Valor: {numero}</p>
        </div>
        <div>
            <h1>Hook</h1>
            <p>Valor: {numeroHook}</p>
        </div>
        <div>
            <button onClick={() => {numero = 30;}}>Mudar valor VARIAVEL</button>
        </div>
        <div id="hook">
            <button onClick={() => {setNumeroHook(500);}}>Mudar valor HOOK</button>
        </div>
    </div>
    
  )
}

export default Hooks