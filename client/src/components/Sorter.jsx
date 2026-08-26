import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";


const Sorter = ({onSortChange, disabled = false }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [choice, setChoice] = useState('')

    const selections = ['Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price: Low to High', 'Price: High to Low']

    const handleSelect = (select) => {
        if (disabled) return;
        setChoice(select)
        setIsOpen(false)
        onSortChange(select)
    }

    return (
        <div className="relative flex flex-col max-w-60 w-full">
            <div 
                onClick={() => !disabled && setIsOpen(!isOpen)} 
                className={`flex flex-row items-center cursor-pointer border border-gray-300 p-1 bg-[#fff] ${disabled ? 'cursor-not-allowed border-gray-200' : 'cursor-pointer border-gray-300'}`}>
                <p className={`text-xl text-gray-500 flex-1 capitalize ${disabled ? 'text-gray-300' : 'text-gray-500'}`}>
                    {choice === '' ? 'Default' : choice}
                    </p>
                <IoIosArrowDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300`} size={20} color={disabled ? '#d1d5db' : 'gray'} />
            </div>
            {isOpen && !disabled &&(
                <ul onMouseLeave={() => setIsOpen(false)} className="absolute shadow border border-gray-200 top-9 bg-[#fff] w-full text-gray-800 text-md max-h-60 overflow-y-auto overflow-x-hidden">
                    <li
                        onClick={() => {handleSelect('')}}
                        className="cursor-pointer hover:bg-gray-200 hover:text-gray-800">
                        <div className="py-1 pl-2 transition-transform duration-200 hover:translate-x-1">
                            Default
                        </div>
                    </li>
                    {selections.map((select, index) => (
                        <li
                            key={index}
                            onClick={() => {handleSelect(select)}}
                            className="cursor-pointer hover:bg-gray-200 hover:text-gray-800">
                            <div className="py-1 pl-2 transition-transform duration-200 hover:translate-x-1">
                                {select}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default Sorter;