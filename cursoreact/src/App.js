// Components
import Apresentacao from './components/Apresentacao';
import Challenge from './components/Challenge';

// Imagens
import logo from './logo.svg';

// CSS
import './App.css';

function App() {
  return (
      <header className="corpo">
        <h1 className="titulo">
          Aprendendo react
        </h1>
        <p>
          Bora aprende REACT sem Frescura!
        </p>
        <Apresentacao/>
        </header>
  );
}

export default App;
