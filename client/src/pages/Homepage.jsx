import Carousel from '../components/Carousel';
import RouteCard from '../components/RouteCard';
import InstaPlugin from '../components/InstaPlugIn';
import front from '../assets/kingdom_front.png'
import bake from '../assets/route_cards/baked-item.jpg';
import kpop from '../assets/route_cards/kpop-items.png';
import books from '../assets/route_cards/books.png';
import { IoArrowForwardCircleOutline } from "react-icons/io5";


const Homepage = () => {

    const homeCards = [
        { id: 1, image: books, title: 'Book Shop', link: '/' },
        { id: 2, image: kpop, title: 'K-Pop', link: '/' },
        { id: 3, image: bake, title: 'Bake Shop', link: '/' }
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
            {/* About Section */}
            <section className="grid lg:grid-cols-2 w-full justify-center items-center py-20 px-6 gap-5 bg-linear-to-l from-[#E79CD6]/50 to-[#E7AAD4]/50 to-[#E6ABC9]/50 to-[#E8B7D2]/50 to-[#F4C6D3]/50">
                <div >
                    <h1 className='lg:text-left text-center my-6'>Happy You're Here!</h1>
                    <hr class="hidden lg:block w-12 h-1 my-6 bg-[var(--text-h)] "></hr>
                    <p className='font-(family-name:--sans) lg:text-[1.375rem] text-sm'>
                        Welcome to Kingdom of K-pop, Romance Books, and Bake Shop! We are a small, woman-owned family business dedicated to creating a welcoming space for North Carolina’s K-pop fans, romance book lovers, and dessert enthusiasts.
                        Our goal is to build a fun and supportive community where you can celebrate your favorite artists, authors, and more. Our physical store opened in <strong>Clemmons, NC</strong> in July 2024, and we’re excited to grow together with your support!
                    </p>
                    <button className='flex items-center gap-4 mt-6'>
                        READ MORE 
                        <IoArrowForwardCircleOutline size={25} />
                    </button>
                </div>
                <figure>
                    <img src={front} alt="Kingdom's storefront" className='h-auto w-full lg:w-(1/2)' />
                </figure>
            </section>
            {/* Socials Section */}
            <section className="grid lg:grid-cols-2 w-full justify-center items-center py-20 px-6 gap-5">
                <div className='w-100 h-150 order-last md:order-first justify-center bg-[var(--text)] rounded-xl'></div>

                <div className="flex flex-col items-center gap-6">
                    <h1>Follow Our Socials!</h1>
                    <hr class="hidden md:block w-12 h-1 my-6 bg-[var(--text-h)] "></hr>
                    <p>Catch up on new arrivals and restock as we post updates on social media!</p>
                    <button>Instagram</button>
                    <button>Facebook</button>
                    <button>TikTok</button>
                </div>
            </section>
            <section>
                <InstaPlugin />
            </section>
        </div>
    )
}
export default Homepage;