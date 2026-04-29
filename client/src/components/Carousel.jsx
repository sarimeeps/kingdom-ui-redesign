import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.png'
import carousel3 from '../assets/carousel3.png'


const Carousel = () => {

    return (
        <div className="max-w-[1920px]">

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='h-130 md:h-140 lg:h-120 w-full'
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