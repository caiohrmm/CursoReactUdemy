// Importando navlink
import { NavLink } from 'react-router-dom'

import './navbar.css'
const Navbar = () => {
    return (
        <nav className='w-full h-full flex items-center justify-end'>
            <ul className='flex flex-row py-2 text-xl'>
                <li>
                    <NavLink to={'/'} className='px-1 border-b border-black mx-6 pb-1'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'} className='px-1 border-b border-black pb-1 mx-6'>Sobre</NavLink>
                </li>
                <li>
                    <NavLink to={'/products'} className='px-1 border-b border-black mx-6 pb-1'>Produtos</NavLink>
                </li>
            </ul>
        </nav>
        
    )   
}

export default Navbar