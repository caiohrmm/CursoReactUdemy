import logo from './logo.svg';
import './App.css';

function App() {
  const nome = "Caio"
  return (
    <div>
      <h1>
        React com CSS
      </h1>
      <p style={{paddingBottom: "20px", color: "blue", marginTop: "5px" }}>
        Testando o CSS inline
      </p>
      <p style= {nome == "Caio" ? ({color: "red"}) : ({color: "blue"})}>
          O nome é Caio
      </p>
      <p className={nome == "Caio" ? ("classe1") : ("classe2")}>
        Isso são classes dinâmicas
      </p>
    </div>
  );
}

export default App;
