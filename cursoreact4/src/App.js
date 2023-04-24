import './App.css';
import MeuFormulario from './components/MeuFormulario';

function App() {
  return (
    <div>
      <MeuFormulario usuario = {{name: "Caio", idade: 18, senha: "jojnada123" }}/>
    </div>
  );
}

export default App;
