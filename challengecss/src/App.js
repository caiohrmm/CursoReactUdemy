import { useState } from 'react';
import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const [carros] = useState([{nome: "Saveiro", ano: 2011},{nome: "Santana", ano: 1998},{nome: "Voyage", ano: 2013}])
  return (
    <div>
      <div>
        <h1 style={{backgroundColor: "lightblue", }}>Challenge</h1>
        {carros.map((carro, i) => (
          <CarDetails key={i} nome= {carro.nome} ano={carro.ano}/>
        ))}
      </div>
    </div>
  );
}

export default App;
