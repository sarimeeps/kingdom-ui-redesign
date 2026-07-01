import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const Filter = ({ category, choice, setChoice, selections = [] }) => {

    const [isOpen, setIsOpen] = useState(false);

    if (choice === '') {
        choice = category
    }

    return (
        <div className="relative flex flex-col max-w-60 w-full">
            <div onClick={() => setIsOpen(!isOpen)} className="flex flex-row items-center cursor-pointer border border-gray-300 p-1 bg-[#fff]">
                <p
                    className="text-xl text-gray-500 flex-1 capitalize">
                    {choice}</p>
                <IoIosArrowDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300`} size={20} color='gray' />
            </div>
            {isOpen && (
                <ul onMouseLeave={() => setIsOpen(false)} className="absolute shadow border border-gray-200 top-9 bg-[#fff] w-full text-gray-800 text-md max-h-60 overflow-y-auto overflow-x-hidden">
                    <li
                        onClick={() => {
                            setChoice('');
                            setIsOpen(false);
                        }}
                        className="cursor-pointer hover:bg-gray-200 hover:text-gray-800">
                        <div className="py-1 pl-2 transition-transform duration-200 hover:translate-x-1">
                            All {category}s
                        </div>
                    </li>
                    {selections.map(select => (
                        <li
                            key={select}
                            onClick={() => {
                                setChoice(select)
                                setIsOpen(false)
                            }}
                            className="cursor-pointer hover:bg-gray-200 hover:text-gray-800">
                            <div className="py-1 pl-2 transition-transform duration-200 hover:translate-x-1 capitalize">
                                {select}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Filter;