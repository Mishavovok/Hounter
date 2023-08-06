import React from 'react'


import dianne from '/dianne.png'
import jenny from '/jenny.png'
import robert from '/robert.png'
import ben from '../../assets/ben.png'

import adviсe1 from '../../assets/adviсe1.png'
import adviсe2 from '../../assets/adviсe2.png'
import adviсe3 from '../../assets/adviсe3.png'
import adviсe4 from '../../assets/adviсe4.png'

import './adviсe.scss'

function Adviсe() {
    return (
        <div className='advice'>
            <h1 className='advice__title'>See tips and trick from our partnership</h1>
            <h1 className='advice__text'>Find Out More About
                Selling And Buying Homes
            </h1>
            <button className='advice__button'>More Artikel</button>
            <div className='advice__blok'>
                <div>
                    <div className='advice__blok-item'>
                        <img className='advice__blok-item-img' src={adviсe2} alt="" />
                        <div className='advice__blok-info'>
                            <div className='advice__human-info'>
                                <img className='advice__human-info-img' src={dianne} alt="" />
                                <p className='advice__blok-info-name'>Dianne Russell</p>
                            </div>
                            <p className='advice__blok-info-title'>The things we need to check when we want to buy a house</p>
                            <div className='advice__human-info'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z" fill="#888B97" />
                                </svg>
                                <p className='advice__blok-info-data'>4 min read | 25 Apr 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className='advice__blok-item'>
                        <img className='advice__blok-item-img' src={adviсe3} alt="" />
                        <div className='advice__blok-info'>
                            <div className='advice__human-info'>
                                <img className='advice__human-info-img' src={jenny} alt="" />
                                <p className='advice__blok-info-name'>Dianne Russell</p>
                            </div>
                            <p className='advice__blok-info-title'>The things we need to check when we want to buy a house</p>
                            <div className='advice__human-info'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z" fill="#888B97" />
                                </svg>
                                <p className='advice__blok-info-data'>4 min read | 25 Apr 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className='advice__blok-item'>
                        <img className='advice__blok-item-img' src={adviсe4} alt="" />
                        <div className='advice__blok-info'>
                            <div className='advice__human-info'>
                                <img className='advice__human-info-img' src={robert} alt="" />
                                <p className='advice__blok-info-name'>Dianne Russell</p>
                            </div>
                            <p className='advice__blok-info-title'>The things we need to check when we want to buy a house</p>
                            <div className='advice__human-info'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z" fill="#888B97" />
                                </svg>
                                <p className='advice__blok-info-data'>4 min read | 25 Apr 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='advice__blok-left'>
                    <img className='advice__blok-left-img' src={adviсe1} alt="" />
                    <div className='advice__blok-left-info'>
                        <img className='advice__human-info-img' src={ben} alt="" />
                        <p className='advice__blok-left-name'>Cameron Williamson</p>
                    </div>
                    <p className='advice__blok-left-title'>12 Things to know before buying a house</p>
                    <p className='advice__blok-left-text'>Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house</p>
                    <div className='advice__blok-info-data'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM14 14C13.9075 14.0927 13.7976 14.1663 13.6766 14.2164C13.5557 14.2666 13.426 14.2924 13.295 14.2924C13.164 14.2924 13.0343 14.2666 12.9134 14.2164C12.7924 14.1663 12.6825 14.0927 12.59 14L9.3 10.71C9.20551 10.6174 9.13034 10.5069 9.07885 10.3851C9.02735 10.2632 9.00055 10.1323 9 10V6C9 5.45 9.45 5 10 5C10.55 5 11 5.45 11 6V9.59L14 12.59C14.39 12.98 14.39 13.61 14 14Z" fill="#888B97" />
                        </svg>
                        <p className='advice__blok-info-data-text'>8 min read | 25 Apr 2021</p>
                    </div>
                </div>
            </div>
            <span className='advice__bg-left'></span>
            <span className='advice__bg-right'></span>
        </div>

    )
}

export default Adviсe