import React from 'react'
import calendar from '../assets/events_page/calendar.png';
import EventCard from '../components/EventCard';
import club from '../assets/events_page/book_club.png';
import heart from '../assets/events_page/heart_cake.png';
import verse from '../assets/events_page/verse_event.png';
import xg from '../assets/events_page/xg_event.png';

const Events = () => {
  return (
    <div className='max-w-[1920px] flex flex-col items-center justify-center mx-auto w-full '>
      <div id="large-gradient" className="absolute top-0 -z-10 h-90 md:h-250 w-full bg-linear-to-b from-[#E193CD]/80 from-40% via-[#E6ABC9]/60 via-80% to-[#F4C6D3]/0 to-100%"></div>

      <section className='bg-white w-[90%] rounded-xl p-[1.5%] mt-5 justify-center items-center'>
        <img
          src={calendar}
          alt="Calendar"
          className="w-full object-full rounded-xl"
        />
      </section>

      {/* Event Cards */}
      <section className='text-center max-w-[1920px] '>
        <h1 className="mt-12">Events at Kingdom</h1>
        <p className='text-2xl text-[var(--text-h)] pt-4'>Come and connect with your local K-pop community!</p>
        <div className='max-w-425 w-full grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3'>
          <a href="https://www.instagram.com/p/DVOwNPAjk5X/?img_index=1">
            <EventCard
              image={club}
              event="Say You Swear by Meagan Brandy"
              shop="Book Club"
              desc="We will be discussing our thoughts on Say You Swear by Meagan Brandy, our likes/dislikes, and star rating!"
            />
          </a>
          <a href="https://www.instagram.com/kingdomofkpopandmore/p/DUZiETZDNU-/">
            <EventCard
              image={heart}
              event="Vintage Heart Decorating Class"
              shop="Bake Shop"
              desc="Come decorate your very own vintage heart cake for this season of love!"
            />
          </a>
          <a href="https://www.instagram.com/nckpophive/p/DU6QkqmjvCy/">
            <EventCard
              image={verse}
              event="Get to Know 1Verse Event"
              shop="K-pop"
              desc="Welcome to our Multiverse ✨ With 1VERSE on tour and heading to North Carolina for KoreaFest 2026 at the end of March, we’re celebrating!"
            />
          </a>
          <a href="https://www.instagram.com/kingdomofkpopandmore/p/DVeldGXj-wM/">
            <EventCard
              image={xg}
              event="XG Debutverse"
              shop="K-pop"
              desc="Come celebrate XG’s debut anniversary!"
            />
          </a>

        </div>
      </section>

      {/* Google Calendar plugin */}
      <section className='text-center'>
        <h1 className='text-center mt-10'>Request to Host an Event</h1>
      </section>
    </div>
  )
}

export default Events