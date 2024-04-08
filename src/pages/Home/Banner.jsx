// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
      <div className='container mx-auto'>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className='w-full' src="https://as2.ftcdn.net/v2/jpg/04/85/07/01/1000_F_485070165_ZnBEolijlAgjSwQ2RPyF5uRzb4vaBZq8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://static.vecteezy.com/system/resources/thumbnails/017/275/541/small/islamic-calligraphy-arabic-arts-bismillah-logo-in-arabi-bismele-in-arabic-bismillah-translation-is-god-name-vector.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src="https://www.shutterstock.com/shutterstock/videos/1054392689/thumb/8.jpg?ip=x480" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;