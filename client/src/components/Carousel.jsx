import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.png'
import carousel3 from '../assets/carousel3.png'


const Carousel = () => {

    return (
        <div className="w-full max-w-[1905px]">

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ 
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet !w-2.5 !h-2.5 transition-all duration-300' ,
                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-gray-500 !w-6 !rounded-full',
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                className='h-140 md:h-150 lg:h-160 w-full my-4'
            >
                {[
                    carousel1,
                    carousel2,
                    carousel3
                ].map((img, index) => (
                    <SwiperSlide key={index} className=''>
                        <img
                            src={img}
                            alt={`image-${index}`}
                            className='h-full w-full object-fill' />
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel;