import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Mousewheel, Keyboard, Thumbs } from 'swiper/modules';

import './slider.scss';

import people from '../../assets/people.png';
import houses from '../../assets/houses.png';
import newHomes from '../../assets/newHomes.png';

function Slider() {
  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        keyboard={true}
        cssMode={true}
        touchReleaseOnEdges={true}
        touchMoveStopPropagation={true}
        breakpoints={{
          866: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2.1,
            spaceBetween: 80,
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Mousewheel, Keyboard, Thumbs]}
        className="mySwiper">
        <SwiperSlide>
          <div className="slider__item-people">
            <img className="slider__item-img" src={people} alt="" />
            <div className="slider__item-people-info">
              <h1 className="slider__item-people-title">1K+ People</h1>
              <p className="slider__item-people-text">Successfully Getting Home</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider__item-newhomes">
            <img className="slider__item-img" src={newHomes} alt="" />
            <div className="slider__item-newhomes-info">
              <h1 className="slider__item-newhomes-title">4K+ People Looking for New Homes</h1>
              <p className="slider__item-newhomes-text">People Looking for New Homes</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item-people">
            <img className="slider__item-img" src={people} alt="" />
            <div className="slider__item-people-info">
              <h1 className="slider__item-people-title">1K+ People</h1>
              <p className="slider__item-people-text">Successfully Getting Home</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__item-house">
            <img className="slider__item-img" src={houses} alt="" />
            <div className="slider__item-house-info">
              <h1 className="slider__item-house-title">56 Houses</h1>
              <p className="slider__item-house-text">Sold Monthly</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;

// </div>
