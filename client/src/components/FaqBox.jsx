import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const FaqBox = ({ category, queries = [] }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="flex flex-col">
            <div onClick={handleIsOpen} className="border border-[#C89CAD] border-2 rounded-md bg-[#fff] drop-shadow-md p-4 w-full cursor-pointer">
                <div className="flex flex-row">
                    <p className="text-2xl flex-1 font-semibold">{category}</p>
                    <div className="flex-1 justify-items-end ">
                        <IoIosArrowDown size={30} className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
                    </div>
                </div>
            </div>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <div className="border border-[#C89CAD] rounded-lg bg-[#fff] -mt-2">
                        {queries.map((query, index) => (
                            <div key={index} className="flex flex-col m-6 w-fit">
                                <h3 className="">{query.question}</h3>
                                <p className="text-xl">{query.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqBox;