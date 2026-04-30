import Carousel from '../components/Carousel';
import RouteCard from '../components/RouteCard';

import bake from '../assets/baked-item.jpg';
import kpop from '../assets/kpop-items.png';
import books from '../assets/books.png';


const Homepage = () => {

    const homeCards = [
        {id: 1, image: books, title:'Book Shop', link:'/'},
        {id: 2, image: kpop, title:'K-Pop', link:'/'},
        {id: 3, image: bake, title:'Books', link:'/'}
    ]

    return (
        <div className='flex flex-col items-center justify-center mb-8'>
            <Carousel />
            <h1 className='border mt-13.5 mb-6'>"Feeding you through your eyes, ears, and mouth!"</h1>
            <ul className="flex flex-1 gap-15">
                {homeCards.map(card => (
                    <li
                    key={card.id}
                    className=''
                    >
                        <RouteCard image={card.image} title={card.title} link={card.link} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Homepage;