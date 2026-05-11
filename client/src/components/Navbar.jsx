import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import SearchBar from './SearchBar';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import {Link, NavLink} from 'react-router'

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Navbar() {

    const navItems = [
        { id: 1, text: 'Home', route: '/' },
        { id: 2, text: 'Shop', route: '/shop' },
        { id: 3, text: 'Karaoke', route: '/karaoke' },
        { id: 4, text: 'Events', route: '/events' },
        { id: 5, text: 'About Us', route: '/about' },
        { id: 6, text: 'FAQ', route: '/faq' },
    ]

    const shopItems = [
        { id: 1, text: 'K-Pop', route: '/shop/kpop' },
        { id: 2, text: 'Bake Shop', route: '/shop/bakery' },
        { id: 3, text: 'Book Shop', route: '/shop/bookshop' }
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [dropOpen, setDropOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='relative mx-auto w-full px-2 py-4'>
            <nav className="max-w-[1920px] mx-auto flex items-center justify-between bg-white border border-[#fff] rounded-xl py-6 px-4 md:px-6 lg:px-8">
                {/* mobile nav icon */}
                <div className="lg:hidden cols-1 cursor-pointer" onClick={ handleMenu }>
                    <Menu size={27} />
                </div>

                <div id="logo" className='absolute left-1/2 -translate-x-1/2 flex-shrink-0 h-13  lg:static lg:translate-x-0'>
                    <Link to="/">
                        <img src={logo} alt="kingdom-logo" className='h-full object-contain' />
                    </Link>
                </div>

                {/* desktop nav links */}
                <ul id="nav-id" className='hidden lg:flex flex-1 justify-center gap-8 whitespace-nowrap rounded-xl text-[var(--text-h)] text-xl p-1 m-2'>

                    <li className='p-1 cursor-pointer'> <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink></li>

                    <div className='flex flex-col relative' onMouseEnter={() => setDropOpen(true) } onMouseLeave={() => setDropOpen(false)}>
                        <div className="group flex flex-row items-center cursor-pointer">
                            <li className='p-1 cursor-pointer'>Shop</li>
                            <IoIosArrowDown className={`${ dropOpen ? 'rotate-180' : 'rotate-0'} transition duration-300`}/>
                        </div>
                        <div className=''>
                            {/* shop dropdown menu */}
                        {
                            dropOpen && (
                                <ul className={`absolute top-9 border border-[#E193CD] rounded-lg bg-[#fff] transition-transform duration-300 ease-in-out `}>
                                    {shopItems.map(item => (
                                        <li key={item.id} className='cursor-pointer hover:bg-[var(--text-h)] hover:text-[#fff] rounded-sm'>
                                            <Link 
                                                to={item.route}    
                                                onClick={() => setDropOpen(false)}
                                            >
                                                <div className='p-4 transition-transform duration-200 hover:translate-x-1 ' >
                                                    <p>{item.text}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                        </div>
                    </div>
                    <li className='p-1 cursor-pointer'><NavLink to='/karaoke' className={({ isActive }) => isActive ? 'underline' : ''}>Karaoke</NavLink></li>
                    <li className='p-1 cursor-pointer'><NavLink to='/events' className={({ isActive }) => isActive ? 'underline' : ''}>Events</NavLink></li>
                    <li className='p-1 cursor-pointer'><NavLink to='/about' className={({ isActive }) => isActive ? 'underline' : ''}>About Us</NavLink></li>
                    <li className='p-1 cursor-pointer'><NavLink to='/faq' className={({ isActive }) => isActive ? 'underline' : ''}>FAQ</NavLink></li>
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
                                className='rounded-xl cursor-pointer hover:bg-[var(--text-h)] hover:text-white'>
                                <NavLink 
                                to={item.route}
                                className='block w-full p-2'
                                onClick={() => setIsOpen(false)} //close menu on navigate
                                >
                                {item.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )
            }
            
        </div>
    )
}

export default Navbar;