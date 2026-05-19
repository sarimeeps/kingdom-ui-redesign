import cookies from '../assets/bake_shop/cookies.jpg'
import { GoDot, GoDotFill } from "react-icons/go";

const Flavors = ({ items }) => (
        <ul className="flex flex-wrap w-full">
            {items.map((item, index) => (
                <li
                    key={index}
                    className='flex flex-row items-center gap-1 mr-1'
                >
                    {item}<GoDotFill size={12} className={`${index === items.length - 1 ? 'hidden' : 'block'}`} />
                </li>
            ))}
        </ul>
)

const BakeCard = ({ title, desc, image, sections = [] }) => {

    return (
        <div className="relative min-w-290 w-290 h-100 flex flex-row p-3 mb-3 drop-shadow-lg">
            <div className='relative flex flex-col z-10 border border-[var(--text-h)] border-3 rounded-xl bg-[#fff] p-7 w-155'>
                <div id="b-card-title" className="flex-1">
                    <h2>{title}</h2>
                    <hr className="hidden lg:block w-10 mb-4 bg-[var(--text-h)] "></hr>
                    {desc && <p>{desc}</p>}
                </div>
                {sections.map((section, index) => (
                    <div key={index} className='flex-2 mt-2'>
                        <h3>{section.subtitle}</h3>
                        {section.flavors ? (<Flavors items={section.flavors} />) : section.price ? (<p className=''>{section.price}</p>) : null}
                    </div>
                ))}
            </div>
            <div className="absolute inset-y-0 p-4 right-1 w-155 h-100">
                <img src={image} alt={title} className='w-full h-full -z-10 object-cover border border-[#E193CD] border-4 rounded-xl' />
            </div>
        </div>
    )
}

export default BakeCard