// Pages
import Home from './pages/Home'
import About from './pages/About';
import Products from './pages/Products';


// React Router
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='body bg-slate-400 bg-opacity-40'>
      <header className='h-28 border-b flex items-center border-indigo-200 bg-slate-400 bg-opacity-90 px-16'>
        <h1 className='text-5xl w-1/6 border-b border-indigo-200 py-1'>Context API</h1>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
