// CSS
import { useState } from 'react';
import './App.css';

// Imagens
//import Logo from "./assets/img/img2.jpg"

// Components
//import Hooks from './components/Hooks';
import RenderConditionals from './components/RenderConditionals';
import RenderLists from './components/RenderLists';
import Props from './components/Props';
import DestructingProps from './components/DestructingProps';
import ChildrenProps from './components/ChildrenProps';
import FunctionsProps from './components/FunctionsProps';

function App() {
  const nome = "Caio Henrique"
  const [pessoa] = useState({nome: "Henrique", idade: 18})
  const [salgado] = useState([{nome: "Coxinha", preco: 5, ingredientes: "Frango, Catupiry, Farinha"},
                              {nome: "Hamburguer", preco: 7, ingredientes: "Hamburguer, Presunto, Pao, Queijo"},
                              {nome: "Bauru", preco: 6, ingredientes: "Presunto, Mussarela, Farinha"}])
  const minhaFuncao = () => {
    console.log("Bora tomar uma")
  }
  /* function funcaoNova(){
    return console.log("Bora tomar uma")
  }*/

  const [pessoas, setPessoa] = useState("Caio")

  return (
    <div className="App">
      <header >
        <div>
            <h1>
              Section 3 - React Avançado
            </h1>
            <RenderLists/>
            <RenderConditionals/>
            <Props name= {nome} idade= {pessoa.nome} nomepessoa = {pessoa.nome}/>
            {/* Loop de components abaixo */}
            {salgado.map((item, i) => (
              <DestructingProps key={i} nome={item.nome} preco={item.preco} ingredientes={item.ingredientes}/>
            ))}
            <ChildrenProps>
              <p>Essa á minha children props.</p>
              <p>Estou colocando HTML dentro do meu JSX pai</p>
            </ChildrenProps>
        </div>

        <div>
              {/* Funções como props */}
              <FunctionsProps funcao={minhaFuncao}/>
        </div>
      </header>
    </div>
  );
}

export default App;
