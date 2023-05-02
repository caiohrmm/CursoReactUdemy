import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className='flex font-semibold absolute right-0 items-center'>
            <Link className='px-4 ' to={'/'}>Home</Link>
            <Link to={'/about'}>Sobre</Link>
        </nav>
    )
}

export default NavBar