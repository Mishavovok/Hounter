import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './reviews.scss'

import dianne from '/dianne.png'
import jenny from '/jenny.png'
import robert from '/robert.png'

import Slider1 from '../../assets/slider1.png'
import slider2 from '../../assets/slider2.png'
import slider3 from '../../assets/slide3.png'

function Reviews() {
    return (
        <div className='reviews'>
            <h1 className='reviews__title'>See Our Review</h1>
            <h1 className='reviews__text'>What Our User Say About Us</h1>
            <div className='reviews__slider'>
                <Swiper
                    slidesPerView={1.9}
                    grabCursor={true}
                    loop={true}
                    spaceBetween={80}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='reviews__slider-img' src={slider3} alt="" />
                        <div className='slider__info'>
                            <div className='slider__info-item'>
                                <h1 className='slider__info-title'>Best! I got the house I wanted through Hounter</h1>
                                <p className='slider__info-text'>Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.</p>
                                <div className='slider__info-blok'>
                                    <div>
                                        <img src={dianne} alt="" />
                                        <div className='slider__people'>
                                            <p className='slider__info-name'>Dianne Russell</p>
                                            <p className='slider__info-location'>Manager Director</p>
                                        </div>
                                    </div>
                                    <div className='slider__info-blok-rating'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.6048 8.70885C23.5315 8.49286 23.3965 8.30307 23.2166 8.16292C23.0366 8.02277 22.8196 7.93838 22.5922 7.92018L15.941 7.39168L13.0628 1.02052C12.9712 0.815315 12.8221 0.641025 12.6336 0.518684C12.445 0.396343 12.2251 0.331178 12.0004 0.331055C11.7756 0.330932 11.5557 0.395855 11.367 0.517989C11.1783 0.640123 11.0291 0.814249 10.9372 1.01935L8.05901 7.39168L1.40784 7.92018C1.18437 7.93789 0.970738 8.0196 0.792491 8.15554C0.614244 8.29148 0.478935 8.47589 0.402752 8.68672C0.326569 8.89754 0.312738 9.12586 0.362913 9.34434C0.413088 9.56282 0.525145 9.76222 0.685677 9.91868L5.60084 14.7102L3.86251 22.2375C3.80973 22.4654 3.82664 22.7038 3.91107 22.9219C3.99549 23.14 4.14352 23.3278 4.33595 23.4607C4.52837 23.5936 4.75632 23.6657 4.99019 23.6674C5.22407 23.6692 5.45308 23.6007 5.64751 23.4707L12 19.2357L18.3525 23.4707C18.5512 23.6026 18.7856 23.6706 19.0241 23.6653C19.2626 23.6601 19.4937 23.582 19.6865 23.4414C19.8792 23.3009 20.0243 23.1047 20.1022 22.8793C20.1802 22.6538 20.1872 22.4099 20.1223 22.1803L17.9885 14.7137L23.2805 9.95135C23.627 9.63868 23.7542 9.15102 23.6048 8.70885Z" fill="#F59E0B" />
                                        </svg>
                                        <p className='slider__info-blok-rating-text'>4.6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className='reviews__slider-img' src={Slider1} alt="" />
                        <div className='slider__info'>
                            <div className='slider__info-item'>
                                <h1 className='slider__info-title'>Through the Hounter, I can get a house for my self</h1>
                                <p className='slider__info-text'>By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!</p>
                                <div className='slider__info-blok'>
                                    <div>
                                        <img src={jenny} alt="" />
                                        <div className='slider__people'>
                                            <p className='slider__info-name'>Esther Howard</p>
                                            <p className='slider__info-location'>Head of Marketing</p>
                                        </div>
                                    </div>
                                    <div className='slider__info-blok-rating'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.6048 8.70885C23.5315 8.49286 23.3965 8.30307 23.2166 8.16292C23.0366 8.02277 22.8196 7.93838 22.5922 7.92018L15.941 7.39168L13.0628 1.02052C12.9712 0.815315 12.8221 0.641025 12.6336 0.518684C12.445 0.396343 12.2251 0.331178 12.0004 0.331055C11.7756 0.330932 11.5557 0.395855 11.367 0.517989C11.1783 0.640123 11.0291 0.814249 10.9372 1.01935L8.05901 7.39168L1.40784 7.92018C1.18437 7.93789 0.970738 8.0196 0.792491 8.15554C0.614244 8.29148 0.478935 8.47589 0.402752 8.68672C0.326569 8.89754 0.312738 9.12586 0.362913 9.34434C0.413088 9.56282 0.525145 9.76222 0.685677 9.91868L5.60084 14.7102L3.86251 22.2375C3.80973 22.4654 3.82664 22.7038 3.91107 22.9219C3.99549 23.14 4.14352 23.3278 4.33595 23.4607C4.52837 23.5936 4.75632 23.6657 4.99019 23.6674C5.22407 23.6692 5.45308 23.6007 5.64751 23.4707L12 19.2357L18.3525 23.4707C18.5512 23.6026 18.7856 23.6706 19.0241 23.6653C19.2626 23.6601 19.4937 23.582 19.6865 23.4414C19.8792 23.3009 20.0243 23.1047 20.1022 22.8793C20.1802 22.6538 20.1872 22.4099 20.1223 22.1803L17.9885 14.7137L23.2805 9.95135C23.627 9.63868 23.7542 9.15102 23.6048 8.70885Z" fill="#F59E0B" />
                                        </svg>
                                        <p className='slider__info-blok-rating-text'>4.9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className='reviews__slider-img' src={slider2} alt="" />
                        <div className='slider__info'>
                            <div className='slider__info-item'>
                                <h1 className='slider__info-title'>My house sold out fast!</h1>
                                <p className='slider__info-text'>I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!</p>
                                <div className='slider__info-blok'>
                                    <div>
                                        <img src={robert} alt="" />
                                        <div className='slider__people'>
                                            <p className='slider__info-name'>Courtney Henry</p>
                                            <p className='slider__info-location'>CEO Andarafish</p>
                                        </div>
                                    </div>
                                    <div className='slider__info-blok-rating'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.6048 8.70885C23.5315 8.49286 23.3965 8.30307 23.2166 8.16292C23.0366 8.02277 22.8196 7.93838 22.5922 7.92018L15.941 7.39168L13.0628 1.02052C12.9712 0.815315 12.8221 0.641025 12.6336 0.518684C12.445 0.396343 12.2251 0.331178 12.0004 0.331055C11.7756 0.330932 11.5557 0.395855 11.367 0.517989C11.1783 0.640123 11.0291 0.814249 10.9372 1.01935L8.05901 7.39168L1.40784 7.92018C1.18437 7.93789 0.970738 8.0196 0.792491 8.15554C0.614244 8.29148 0.478935 8.47589 0.402752 8.68672C0.326569 8.89754 0.312738 9.12586 0.362913 9.34434C0.413088 9.56282 0.525145 9.76222 0.685677 9.91868L5.60084 14.7102L3.86251 22.2375C3.80973 22.4654 3.82664 22.7038 3.91107 22.9219C3.99549 23.14 4.14352 23.3278 4.33595 23.4607C4.52837 23.5936 4.75632 23.6657 4.99019 23.6674C5.22407 23.6692 5.45308 23.6007 5.64751 23.4707L12 19.2357L18.3525 23.4707C18.5512 23.6026 18.7856 23.6706 19.0241 23.6653C19.2626 23.6601 19.4937 23.582 19.6865 23.4414C19.8792 23.3009 20.0243 23.1047 20.1022 22.8793C20.1802 22.6538 20.1872 22.4099 20.1223 22.1803L17.9885 14.7137L23.2805 9.95135C23.627 9.63868 23.7542 9.15102 23.6048 8.70885Z" fill="#F59E0B" />
                                        </svg>
                                        <p className='slider__info-blok-rating-text'>4.3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='reviews__slider-img' src={slider3} alt="" />
                        <div className='slider__info'>
                            <div className='slider__info-item'>
                                <h1 className='slider__info-title'>Best! I got the house I wanted through Hounter</h1>
                                <p className='slider__info-text'>Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.</p>
                                <div className='slider__info-blok'>
                                    <div>
                                        <img src={dianne} alt="" />
                                        <div className='slider__people'>
                                            <p className='slider__info-name'>Dianne Russell</p>
                                            <p className='slider__info-location'>Manager Director</p>
                                        </div>
                                    </div>
                                    <div className='slider__info-blok-rating'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.6048 8.70885C23.5315 8.49286 23.3965 8.30307 23.2166 8.16292C23.0366 8.02277 22.8196 7.93838 22.5922 7.92018L15.941 7.39168L13.0628 1.02052C12.9712 0.815315 12.8221 0.641025 12.6336 0.518684C12.445 0.396343 12.2251 0.331178 12.0004 0.331055C11.7756 0.330932 11.5557 0.395855 11.367 0.517989C11.1783 0.640123 11.0291 0.814249 10.9372 1.01935L8.05901 7.39168L1.40784 7.92018C1.18437 7.93789 0.970738 8.0196 0.792491 8.15554C0.614244 8.29148 0.478935 8.47589 0.402752 8.68672C0.326569 8.89754 0.312738 9.12586 0.362913 9.34434C0.413088 9.56282 0.525145 9.76222 0.685677 9.91868L5.60084 14.7102L3.86251 22.2375C3.80973 22.4654 3.82664 22.7038 3.91107 22.9219C3.99549 23.14 4.14352 23.3278 4.33595 23.4607C4.52837 23.5936 4.75632 23.6657 4.99019 23.6674C5.22407 23.6692 5.45308 23.6007 5.64751 23.4707L12 19.2357L18.3525 23.4707C18.5512 23.6026 18.7856 23.6706 19.0241 23.6653C19.2626 23.6601 19.4937 23.582 19.6865 23.4414C19.8792 23.3009 20.0243 23.1047 20.1022 22.8793C20.1802 22.6538 20.1872 22.4099 20.1223 22.1803L17.9885 14.7137L23.2805 9.95135C23.627 9.63868 23.7542 9.15102 23.6048 8.70885Z" fill="#F59E0B" />
                                        </svg>
                                        <p className='slider__info-blok-rating-text'>4.6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='reviews__slider-img' src={Slider1} alt="" />
                        <div className='slider__info'>
                            <div className='slider__info-item'>
                                <h1 className='slider__info-title'>Through the Hounter, I can get a house for my self</h1>
                                <p className='slider__info-text'>By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!</p>
                                <div className='slider__info-blok'>
                                    <div>
                                        <img src={jenny} alt="" />
                                        <div className='slider__people'>
                                            <p className='slider__info-name'>Esther Howard</p>
                                            <p className='slider__info-location'>Head of Marketing</p>
                                        </div>
                                    </div>
                                    <div className='slider__info-blok-rating'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.6048 8.70885C23.5315 8.49286 23.3965 8.30307 23.2166 8.16292C23.0366 8.02277 22.8196 7.93838 22.5922 7.92018L15.941 7.39168L13.0628 1.02052C12.9712 0.815315 12.8221 0.641025 12.6336 0.518684C12.445 0.396343 12.2251 0.331178 12.0004 0.331055C11.7756 0.330932 11.5557 0.395855 11.367 0.517989C11.1783 0.640123 11.0291 0.814249 10.9372 1.01935L8.05901 7.39168L1.40784 7.92018C1.18437 7.93789 0.970738 8.0196 0.792491 8.15554C0.614244 8.29148 0.478935 8.47589 0.402752 8.68672C0.326569 8.89754 0.312738 9.12586 0.362913 9.34434C0.413088 9.56282 0.525145 9.76222 0.685677 9.91868L5.60084 14.7102L3.86251 22.2375C3.80973 22.4654 3.82664 22.7038 3.91107 22.9219C3.99549 23.14 4.14352 23.3278 4.33595 23.4607C4.52837 23.5936 4.75632 23.6657 4.99019 23.6674C5.22407 23.6692 5.45308 23.6007 5.64751 23.4707L12 19.2357L18.3525 23.4707C18.5512 23.6026 18.7856 23.6706 19.0241 23.6653C19.2626 23.6601 19.4937 23.582 19.6865 23.4414C19.8792 23.3009 20.0243 23.1047 20.1022 22.8793C20.1802 22.6538 20.1872 22.4099 20.1223 22.1803L17.9885 14.7137L23.2805 9.95135C23.627 9.63868 23.7542 9.15102 23.6048 8.70885Z" fill="#F59E0B" />
                                        </svg>
                                        <p className='slider__info-blok-rating-text'>4.9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='reviews__slider-img' src={slider2} alt="" />
                        <div className='slider__info'>
                            <div className='slider__info-item'>
                                <h1 className='slider__info-title'>My house sold out fast!</h1>
                                <p className='slider__info-text'>I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!</p>
                                <div className='slider__info-blok'>
                                    <div>
                                        <img src={robert} alt="" />
                                        <div className='slider__people'>
                                            <p className='slider__info-name'>Courtney Henry</p>
                                            <p className='slider__info-location'>CEO Andarafish</p>
                                        </div>
                                    </div>
                                    <div className='slider__info-blok-rating'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.6048 8.70885C23.5315 8.49286 23.3965 8.30307 23.2166 8.16292C23.0366 8.02277 22.8196 7.93838 22.5922 7.92018L15.941 7.39168L13.0628 1.02052C12.9712 0.815315 12.8221 0.641025 12.6336 0.518684C12.445 0.396343 12.2251 0.331178 12.0004 0.331055C11.7756 0.330932 11.5557 0.395855 11.367 0.517989C11.1783 0.640123 11.0291 0.814249 10.9372 1.01935L8.05901 7.39168L1.40784 7.92018C1.18437 7.93789 0.970738 8.0196 0.792491 8.15554C0.614244 8.29148 0.478935 8.47589 0.402752 8.68672C0.326569 8.89754 0.312738 9.12586 0.362913 9.34434C0.413088 9.56282 0.525145 9.76222 0.685677 9.91868L5.60084 14.7102L3.86251 22.2375C3.80973 22.4654 3.82664 22.7038 3.91107 22.9219C3.99549 23.14 4.14352 23.3278 4.33595 23.4607C4.52837 23.5936 4.75632 23.6657 4.99019 23.6674C5.22407 23.6692 5.45308 23.6007 5.64751 23.4707L12 19.2357L18.3525 23.4707C18.5512 23.6026 18.7856 23.6706 19.0241 23.6653C19.2626 23.6601 19.4937 23.582 19.6865 23.4414C19.8792 23.3009 20.0243 23.1047 20.1022 22.8793C20.1802 22.6538 20.1872 22.4099 20.1223 22.1803L17.9885 14.7137L23.2805 9.95135C23.627 9.63868 23.7542 9.15102 23.6048 8.70885Z" fill="#F59E0B" />
                                        </svg>
                                        <p className='slider__info-blok-rating-text'>4.3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
        </div >
    )
}

export default Reviews