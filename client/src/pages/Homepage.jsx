import Carousel from '../components/Carousel';
import RouteCard from '../components/RouteCard';
import InstaPlugin from '../components/InstaPlugIn';
import front from '../assets/kingdom_front.png'
import bake from '../assets/route_cards/baked-item.jpg';
import kpop from '../assets/route_cards/kpop-items.png';
import books from '../assets/route_cards/books.png';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";

const Homepage = () => {

    const homeCards = [
        { id: 1, image: books, title: 'Book Shop', link: '/' },
        { id: 2, image: kpop, title: 'K-Pop', link: '/' },
        { id: 3, image: bake, title: 'Bake Shop', link: '/' }
    ]

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <Carousel />
            {/* Shop Cards Section */}
            <h1 id='slogan' className='text-center mt-20 mb-12'>"Feeding you through your eyes, ears, and mouth!"</h1>
            <ul className="w-full justify-center items-center flex flex-col mb-16 md:flex-row gap-6 lg:gap-15">
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
            <section className="w-full justify-items-center mt-16 p-20 bg-linear-to-l from-[#E79CD6]/50 to-[#E7AAD4]/50 to-[#E6ABC9]/50 to-[#E8B7D2]/50 to-[#F4C6D3]/50">
                <div className="grid lg:grid-cols-2 max-w-[1920px] items-center space-x-10">
                    <div className="max-w-2xl mb-12">
                        <h1 className='lg:text-left text-center my-6 lg:mt-6'>Happy You're Here!</h1>
                        <hr class="hidden lg:block w-12 h-1 mb-9 mt-2 bg-[var(--text-h)] "></hr>
                        <p className='font-(family-name:--sans) lg:text-[1.375rem] md:text-xl text-lg'>
                            Welcome to Kingdom of K-pop, Romance Books, and Bake Shop! We are a small, woman-owned family business dedicated to creating a welcoming space for North Carolina’s K-pop fans, romance book lovers, and dessert enthusiasts.
                        </p>
                        <p className='font-(family-name:--sans) lg:text-[1.375rem] md:text-xl text-lg'>
                            Our goal is to build a fun and supportive community where you can celebrate your favorite artists, authors, and more. Our physical store opened in <strong>Clemmons, NC</strong> in July 2024, and we’re excited to grow together with your support!
                        </p>
                        <button id='cta' className='flex items-center gap-4 mt-6'>
                            READ MORE
                            <IoArrowForwardCircleOutline size={25} />
                        </button>
                    </div>
                    <figure className="min-w-min p-0 justify-items-end">
                        <img src={front} alt="Kingdom's storefront" />
                    </figure>
                </div>
            </section>
            {/* Socials Section */}
            <section className="max-w-[1920px] w-full gap-40 grid lg:grid-cols-2 pt-20 mt-20 -mb-20">
                <article className='lg:justify-self-end'>
                    <InstaPlugin />
                </article>
                <div className="flex flex-col gap-6 md:ml-6 lg:text-left text-center">
                    <h1 className='mt-6'>Follow Our Socials!</h1>
                    <hr class="hidden md:block w-12 h-1 mb-6 bg-[var(--text-h)] "></hr>
                    <p className='w-md font-(family-name:--sans) text-xl font-medium justify-center items-center'>Catch up on new arrivals and restock as we post updates on social media!</p>
                    <ul className='flex flex-col gap-6 items-center md:items-start justify-center font-(family-name:--btn-font)'>
                        <li className=' w-md rounded-2xl p-2 pl-4 bg-gradient-to-r from-[#ffd600] via-[#ff7a00] via-2% via-[#ff0069] via-8% via-[#e90097] via-11% to-[#7638fa] to-79%'>
                            <a href="https://www.instagram.com/kingdomofkpopandmore/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center gap-3 justify-start'>
                                <div className='w-12 h-12 object-contain rounded-full bg-white flex items-center justify-center'>
                                    <IoLogoInstagram size={30} className='bg-gradient-to-b from-[#ffd600] via-[#ff7a00] via-2% via-[#ff0069] via-8% via-[#e90097] via-11% to-[#7638fa] to-79%' />
                                </div>
                                <div className='flex flex-col text-left text-white'>
                                    <p className='font-bold text-lg'>Instagram</p>
                                    <p className='font-medium text-sm'>@kingdomofkpopandmore</p>
                                </div>
                            </a>
                        </li>
                        <li className='w-md rounded-2xl bg-[#1E6ED5] p-2 pl-4'>
                            <a
                                href="https://www.facebook.com/profile.php?id=61558391370752"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center gap-3 justify-start'
                            >
                                <div className='w-12 h-12 object-contain rounded-full bg-white flex items-center justify-center'>
                                    <FaFacebookSquare size={30} className='text-[#1e6ed5]' />
                                </div>
                                <div className='flex flex-col text-left text-white'>
                                    <p className='font-bold text-lg'>Facebook</p>
                                    <p className='font-medium text-sm'>@kingdomofkpopandmore</p>
                                </div>

                            </a>
                        </li>
                        <li className='w-md rounded-2xl bg-[#000000] p-2 pl-4'>
                            <a
                                href="https://www.tiktok.com/@kingdomkpopandmore"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center gap-3 justify-start'
                            >
                                <div className='w-12 h-12 object-contain rounded-full bg-white flex items-center justify-center'>
                                    <IoLogoTiktok size={30} />
                                </div>
                                <div className='flex flex-col text-left text-white'>
                                    <p className='font-bold text-lg'>Tiktok</p>
                                    <p className='font-medium text-sm'>@kingdomkpopandmore</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default Homepage;