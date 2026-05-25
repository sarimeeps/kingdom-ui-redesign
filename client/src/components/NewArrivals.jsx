import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import arrival1 from '../assets/kpop_carousel/new-arrival-1.jpg';
import arrival2 from '../assets/kpop_carousel/new-arrival-2.jpg';
import arrival3 from '../assets/kpop_carousel/new-arrival-3.jpg';
import arrival4 from '../assets/kpop_carousel/new-arrival-4.jpg';
import arrival5 from '../assets/kpop_carousel/new-arrival-5.jpg';
import arrival6 from '../assets/kpop_carousel/new-arrival-6.jpg';

// import carousel1 from '../assets/home_carousel/carousel1.png';

import { IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const NewArrivals = () => {

  const images = [
    { id: 1, src: arrival1, artist: 'DK x Seungkwan', album: 'Serenade' },
    { id: 2, src: arrival2, artist: 'BTS', album: 'BTS Anthology' },
    { id: 3, src: arrival3, artist: 'IVE', album: 'Revive+' },
    { id: 4, src: arrival4, artist: 'ILLIT', album: 'Not Cute Anymore' },
    { id: 5, src: arrival5, artist: 'KPOP DEMON HUNTERS', album: 'Lightsticks' },
    { id: 6, src: arrival6, artist: 'TOMORROW X TOGETHER', album: 'TXT Anthology' }
  ];

  return (
    <div className="w-full h-full max-w-6xl mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20}    // Gap between slides in pixels
        slidesPerView={3}    // Number of visible slides
        navigation={
          {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }    
        // Enables left/right arrows
        // pagination={true}    // Enables pagination dots
        loop={true}          // Infinite scrolling
        scrollbar={{ draggable: true, hide: true, }} // Enables draggable scrollbar

      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className="flex flex-col items-center my-8">
            <div className="aspect-square overflow-hidden rounded-md">
              <img
                src={item.src}
                alt={`Slide ${item.id}`}
                className="w-full h-full object-cover items-center justify-center rounded-md"
              />
            </div>
            <div className="mt-2 text-center font-(family-name:--sans) ">
              <p className="text-sm">{item.artist}</p>
              <p className="text-xl font-semibold">{item.album}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      {/* <div className={`px-1`}> */}
        {/* <div onClick={() => Swiper.slidePrev()} className="swiper-button-prev">
          <IoIosArrowForward size={30} className="rotate-180 text-[var(--text-h)]" />
        </div>
        <div onClick={() => Swiper.slideNext()} className="swiper-button-next">
          <IoIosArrowForward size={30} className="text-[var(--text-h)]" />
        </div> */}
      </div>
    // </div>
  )
}

export default NewArrivals