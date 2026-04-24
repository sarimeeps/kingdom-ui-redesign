import '../styles/SearchBar.css'
import { Search } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';

const SearchBar = () => {

    return(
        <>
            <form className='max-w-md mx-auto'>
                <label htmlFor="search"className='block mb-2.5 text-sm font-medium text-heading sr-only'>Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-2.5 flex items-center sm:w-5">
                        { <Search color='#8b8b8b'/> }
                    </div>
                    <input type="text" id='search'className='block w-full p-1.5 ps-8 border border-gray-400 rounded-3xl text-sm focus:border-[#8F3A6D] focus:outline-none focus:ring-1 focus:ring-[#8F3A6D] shadow-xs placeholder:text-body' placeholder='Search...' />
                </div>
            </form>
        </>    
    )
    
}

export default SearchBar;
