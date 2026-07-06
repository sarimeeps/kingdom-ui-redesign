import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";


const Sorter = ({items = [] }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [choice, setChoice] = useState('')

    const selections = ['Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price: Low to High', 'Price: High to Low']

    const sortPrices = (choice) => {
        //sort low - high
        if (choice === 'Price: Low to High') {
            return items.sort((a, b) => a - b)
        }
        //sort high - low

    }

    const sortTitles = (choice) => {
        //sort A-Z

        //sort Z-A

    }

    const handleClick = (choice) => {
        if (choice === 'Price: Low to High' || choice === 'Price: High to Low') {
            sortPrices(choice);
        }
    }

    return (
        <div className="relative flex flex-col max-w-60 w-full">
            <div onClick={() => setIsOpen(!isOpen)} className="flex flex-row items-center cursor-pointer border border-gray-300 p-1 bg-[#fff]">
                <p className="text-xl text-gray-500 flex-1 capitalize">Sort</p>
                <IoIosArrowDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300`} size={20} color='gray' />
            </div>
            {isOpen && (
                <ul className="absolute shadow border border-gray-200 top-9 bg-[#fff] w-full text-gray-800 text-md max-h-60 overflow-y-auto overflow-x-hidden">
                    <li
                        onClick={() => {
                            setChoice('');
                            setIsOpen(false);
                        }}
                        className="cursor-pointer hover:bg-gray-200 hover:text-gray-800">
                        <div className="py-1 pl-2 transition-transform duration-200 hover:translate-x-1">
                            Default
                        </div>
                    </li>
                    {selections.map((select, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setChoice(select)
                                setIsOpen(false)
                                handleClick(choice)
                            }}
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