import Carousel from '../components/Carousel';
import RouteCard from '../components/RouteCard';
import InstaPlugin from '../components/InstaPlugIn';

import bake from '../assets/baked-item.jpg';
import kpop from '../assets/kpop-items.png';
import books from '../assets/books.png';


const Homepage = () => {

    const homeCards = [
        {id: 1, image: books, title:'Book Shop', link:'/'},
        {id: 2, image: kpop, title:'K-Pop', link:'/'},
        {id: 3, image: bake, title:'Bake Shop', link:'/'}
    ]

    return (
        <div className='w-full flex flex-col items-center justify-center mb-8'>
            <Carousel />
            <h1 id='slogan' className='text-center mt-16 mb-12'>"Feeding you through your eyes, ears, and mouth!"</h1>
            <ul className="w-full justify-center items-center flex flex-col md:flex-row gap-6 lg:gap-15">
                {homeCards.map(card => (
                    <li
                    key={card.id}
                    className='w-full max-w-[350px] lg:max-w-[420px]'
                    >
                        <RouteCard image={card.image} title={card.title} link={card.link} />
                    </li>
                ))}
            </ul>
            <section>
                <InstaPlugin />
            </section>
        </div>
    )
}
export default Homepage;