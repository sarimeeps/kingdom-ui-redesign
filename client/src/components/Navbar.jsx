import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import SearchBar from './SearchBar';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Navbar() {

    const navItems = [
        { id: 1, text: 'Home', route: '/' },
        { id: 2, text: 'Shop', route: '/' },
        { id: 3, text: 'Karaoke', route: '/' },
        { id: 4, text: 'Events', route: '/' },
        { id: 5, text: 'About Us', route: '/' },
        { id: 6, text: 'FAQ', route: '/' },
    ]

    const shopItems = [
        { id: 1, text: 'K-Pop', route: '/' },
        { id: 2, text: 'Bake Shop', route: '/' },
        { id: 3, text: 'Book Shop', route: '/' }
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [dropOpen, setDropOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='relative mx-auto w-full px-2 py-4'>
            <nav className="max-w-[1920px] mx-auto flex items-center justify-between bg-white border border-[#fff] rounded-xl py-6 px-4 md:px-6 lg:px-8">
                {/* mobile nav icon */}
                <div className="lg:hidden cols-1 cursor-pointer" onClick={ handleMenu }>
                    <Menu size={27} />
                </div>

                <div id="logo" className='absolute left-1/2 -translate-x-1/2 flex-shrink-0 h-13  lg:static lg:translate-x-0'>
                    <a href="/">
                        <img src={logo} alt="kingdom-logo" className='h-full object-contain' />
                    </a>
                </div>

                {/* desktop nav links */}
                <ul id="nav-id" className='hidden lg:flex flex-1 justify-center gap-8 whitespace-nowrap rounded-xl text-[var(--text-h)] text-xl p-1 m-2'>
                    <li className='p-1 cursor-pointer'>Home</li>

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
                                        <li
                                            key={item.id}
                                            className='cursor-pointer hover:bg-[var(--text-h)] hover:text-[#fff] rounded-sm'
                                        >
                                            <div className='p-4 hover:translate-x-1 transition-transform duration-200'><p>{item.text}</p></div>
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                        </div>
                    </div>
                    <li className='p-1 cursor-pointer'>Karaoke</li>
                    <li className='p-1 cursor-pointer'>Events</li>
                    <li className='p-1 cursor-pointer'>About Us</li>
                    <li className='p-1 cursor-pointer'>FAQ</li>
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