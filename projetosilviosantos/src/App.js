// CSS
import './App.css';

// Components
import StartProject from './components/StartProject';
import Jogar from './components/Jogar';
import InGame from './components/InGame';
import EndProject from './components/EndProject';
// Data
import { wordsList } from './data/words';

// Hooks
import { useCallback, useState, useEffect } from 'react';


const stages = [{id: 1, nome: "start"}, {id: 2, nome: "ingame"}, {id: 3, nome: "end"}]

function App() {
  const pontuacao = 10
  const tentativas = 3
  const [EscolherCategoria, setEscolherCategoria] = useState("")
  const [EscolherPalavra, setEscolherPalavra] = useState("")
  const [EscolherLetra, setEscolherLetra] = useState([])
  const [LetrasCorretas, setLetrasCorretas] = useState([])
  const [LetrasErradas, setLetrasErradas] = useState([])
  const [Tentativas, setTentativas] = useState(tentativas)
  const [Pontuacao, setPontuacao] = useState(pontuacao)
  // Setar o estado inicial como o start
  const [Stages, setStages] = useState(stages[0].nome)
  const [Words] = useState(wordsList)
  const escolherCategoria_Palavra = () => {
    /* No meus dados de palavras, as categorias se encontram nas chaves das palavras, então, invés de pegar somente as palavras
    preciso das chaves também, vou conseguir através do comando Object.keys(array) ele me dará o valor das categorias. */
    const categorias = Object.keys(Words)
    // categorias é um array com todas as categorias.
    // Agora preciso selecionar apenas uma categoria.
    const categoria = categorias[Math.floor(Math.random() * Object.keys(categorias).length)]
    
    // Agora preciso de uma lógica para escolher as palavras dentro da categoria escolhida
    const palavra = Words[categoria][Math.floor(Math.random() * Words[categoria].length)]

    return {categoria, palavra}
  }
  

  const handleInGame = () => {
    // Função que dá start ao game!
    // Toda vez que eu chamar minha função, ela me dará um valor para categoria e outro para palavra com base no seu return.
    const {categoria, palavra} = escolherCategoria_Palavra()

    // Coloca todas as letras de uma palavra em array -> Leite [l,e,i,t,e]
    let letras = palavra.split("")
    // Normaliza o array de letras para todas as letras serem minusculas.
    letras = letras.map((l) => l.toLowerCase())
    
    // Setar os estados
    setEscolherCategoria(categoria)
    setEscolherPalavra(palavra)
    setEscolherLetra(letras)
    console.log(palavra)
    setStages(stages[1].nome)
  }
  const verificarLetra = (Letra) => {
    const letrasNormalizadas = Letra.toLowerCase()
    if (LetrasCorretas.includes(letrasNormalizadas) || LetrasErradas.includes(letrasNormalizadas)){
      return
    }
    if (EscolherLetra.includes(letrasNormalizadas)){
      setLetrasCorretas((arrayAtual) => [
        ...arrayAtual,
        letrasNormalizadas,
      ] )
    }else{
      setLetrasErradas((arrayAtual) => [
        ...arrayAtual,
        letrasNormalizadas,
      ] )
      // Diminuir as tentativas com as letras erradas
      setTentativas((arrayAtual) => arrayAtual-1)

      
    }
  }

  const limparStates = () => {
    setLetrasCorretas([])
    setLetrasErradas([])
  }
   // Manipula um dado.
  useEffect(() => {
    if (Tentativas <= 0){
      limparStates()
      setStages(stages[2].nome)
    }
  },[Tentativas])

  const handleRetry = () => {
    setPontuacao(pontuacao)
    setTentativas(tentativas)
    setStages (stages[0].nome)
  }
  return (
    <div>
      {Stages === "start" && <StartProject/>}
      {Stages === "start" && <Jogar handleInGame={handleInGame} escolherCategoria_Palavra={escolherCategoria_Palavra}/>}
      {Stages === "ingame" && <InGame verificarLetra={verificarLetra} EscolherPalavra={EscolherPalavra} EscolherLetra={EscolherLetra}
      EscolherCategoria={EscolherCategoria} LetrasCorretas={LetrasCorretas} LetrasErradas={LetrasErradas} Pontuacao={Pontuacao}
      Tentativas={Tentativas}/>}
      {Stages === "end" && <EndProject handleRetry={handleRetry} Pontuacao = {Pontuacao}/>}
    </div>
  );
}

export default App;
