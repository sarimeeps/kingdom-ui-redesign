import React from 'react'
import calendar from '../assets/events_page/october/oct26.png';
import EventCard from '../components/EventCard';
import club from '../assets/events_page/october/oct_book.png';
import trivia from '../assets/events_page/october/trivia.png';
import hallowteez from '../assets/events_page/october/hallowteez.png';
import tubatu from '../assets/events_page/october/tubatu.png';


const Events = () => {
  return (
    <div className='max-w-[1920px] flex flex-col items-center justify-center mx-auto w-full '>
      <div id="large-gradient" className="absolute top-0 -z-10 h-90 md:h-250 w-full bg-linear-to-b from-[#E193CD]/80 from-40% via-[#E6ABC9]/60 via-80% to-[#F4C6D3]/0 to-100%"></div>

      <section className='bg-white w-[75%] rounded-xl p-[1.5%] mt-5 justify-center items-center'>
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
          <a href="https://www.instagram.com/p/DeABI4ZSVce/">
            <EventCard
              image={club}
              event="Twilight of Embers by Tessa Hale"
              shop="Book Club"
              desc="We will be discussing our thoughts on Twilight of Embers by Tessa Hale, our likes/dislikes, and star rating!"
            />
          </a>
          <a href="https://www.instagram.com/p/DeABI4ZSVce/">
            <EventCard
              image={trivia}
              event="5th GEN Guess the Song Trivia"
              shop="K-pop"
              desc="Come test your knowledge of 5th generation K-pop groups and their songs! Join us for a fun and interactive trivia night!"
            />
          </a>
          <a href="https://www.instagram.com/p/DatUZJZyCiw/">
            <EventCard
              image={hallowteez}
              event="HallowTEEZ"
              shop="K-pop"
              desc="Set sail for HallowTEEZ: Grand Line Market, a One Piece-inspired Halloween celebration honoring ATEEZ’s 8th Debut Anniversary! ⏳✨"
            />
          </a>
          <a href="https://www.instagram.com/p/DdZ82YCGjVK/?img_index=1">
            <EventCard
              image={tubatu}
              event="TUBATU:Who Done It?"
              shop="K-pop"
              desc="Join us for a TXT inspired murder mystery game! Collect clues, solve riddles, and accomplish activities to solve the mystery!"
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