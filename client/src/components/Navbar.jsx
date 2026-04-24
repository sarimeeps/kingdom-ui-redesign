import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import SearchBar from './SearchBar';
import { Menu } from 'lucide-react';
import { useState } from 'react';

function Navbar(){

    const navItems = [
        {id: 1, text: 'Home', route: '/'},
        {id: 2, text: 'Shop', route: '/'},
        {id: 3, text: 'Karaoke', route: '/'},
        {id: 4, text: 'Events', route: '/'},
        {id: 5, text: 'About Us', route: '/'},
        {id: 6, text: 'FAQ', route: '/'},
    ]

    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    return(
        <header className='relative mx-auto w-full p-2'>
            <nav className="max-w-[1500px] mx-auto flex items-center justify-between bg-white border border-[#fff] rounded-xl py-6 px-4 md:px-6 lg:px-8">
                {/* mobile nav icon */}
                <div className="lg:hidden cursor-pointer" onClick={ handleMenu }>
                    <Menu size={27}/>
                </div>
                
                <div id="logo" className='absolute left-1/2 -translate-x-1/2 flex-shrink-0 h-12  lg:static lg:translate-x-0'>
                    <a href="/">
                        <img src={ logo } alt="kingdom-logo" className='h-full object-contain'/>
                    </a>
                </div>

                {/* desktop nav links */}
                <ul className='hidden lg:flex flex-1 justify-center gap-1 text-sm md:text-base whitespace-nowrap rounded-xl'>
                    {navItems.map(item => (
                        <li
                        key={item.id}
                        className='p-1 text-[var(--text-h)] text-lg rounded-xl m-2 cursor-pointer whitespace-nowrap'>
                            {item.text}
                        </li>
                    ))}
                </ul>
                <div id='search-container' className='hidden md:block w-auto max-w-[140px] flex justify-end lg:max-w-50'>
                    <SearchBar />
                </div>
            </nav>
                {/* mobile nav menu */}
            {
                isOpen && (
                    <ul className="lg:hidden md:grid-cols-3 md:grid-rows-2 absolute top-10/12 left-2 right-2 border-[#fff] rounded bg-white grid grid-cols-1 items-start gap-6 ">
                        {navItems.map(item => (
                            <li
                            key={item.id}
                            className='p-2 hover:bg-[var(--text-h)] hover:text-white rounded-xl cursor-pointer'>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                )
            }
        </header>
    )
}

export default Navbar;