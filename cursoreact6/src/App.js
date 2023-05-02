import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importando as pages.
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <div className='h-screen w-screen relative bg-gray-300'>
        <header className='flex items-center h-24 fixed w-full border-b-2 border-cyan-800 justify-start px-2 text-6xl bg-slate-500 bg-opacity-60'>
          <h1>React Router</h1>
        </header>
        <footer className='border-t-2 border-cyan-800 h-20 flex absolute w-full bottom-0 justify-center items-center text-xl bg-slate-500 bg-opacity-60'>
          <h1 className='border-b p-2 border-indigo-800'>Aprendendo React Router - Curso Udemy</h1>
        </footer>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </BrowserRouter>

      </div>

    </div>
  );
}

export default App;
