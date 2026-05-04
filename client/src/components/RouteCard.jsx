import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const RouteCard = ({ image, title, link }) => {

    return (
        <Link to={link}>
            <div className="group relative overflow-hidden rounded-lg bg-white flex h-40 w-90 lg:h-85 lg:w-115">
                <img src={image} alt="route-card" className='absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-300' />
                <div className="absolute bg-[#475B76]/40 group-hover:bg-[#475B76]/50 transition duration-300 w-full h-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span class="bg-left-bottom bg-gradient-to-r from-[#fff] to-[#fff] bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                        <h2 id='card-title' className='text-white group-hover:-translate-y-1 transition-all duration-300'>{title}</h2>
                    </span>
                </div>
            </div>
        </Link>

    )
}

export default RouteCard;