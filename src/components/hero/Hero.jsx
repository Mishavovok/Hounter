import React from 'react';
import Slider from '../slider/Slider';
import hero from '../../assets/hero.png';
import text from '../../assets/yourDreams.png';
import geolocation from '../../assets/geolocation.svg';
import arrow from '../../assets/arrow-right.svg';
import traveloka from '../../assets/traveloka.png';
import tiket from '../../assets/tiket.png';
import airbnb from '../../assets/airbnb.png';
import trip from '../../assets/trip.png';
import './hero.scss';
function Hero() {
  return (
    <div className="conteiner">
      <div className="hero">
        <div className="hero__item">
          <h1 className="hero__item-title">
            Find The Place To Live
            <img src={text} alt="your dreams" className="hero__item-title-img" />
            Easily Here
          </h1>
          <p className="hero__item-text">
            Everything you need about finding your place to live will be here, where it will be
            easier for you
          </p>
          <form className="hero__form">
            <img className="hero__form-geo" src={geolocation} alt="geolocation" />
            <input
              className="hero__form-input"
              type="text"
              placeholder="Search for the location you want!"
            />
            <button className="hero__form-button">
              <p>Search</p>
              <img className="hero__form-button-img" src={arrow} alt="" />
            </button>
          </form>
          <p className="hero__item-companies">Our Partnership</p>
          <div className="hero__item-partners">
            <img className="hero__item-partners-img margin" src={traveloka} alt="traveloka" />
            <img className="hero__item-partners-img" src={tiket} alt="tiket" />
            <img className="hero__item-partners-img" src={airbnb} alt="airbnb" />
            <img className="hero__item-partners-img" src={trip} alt="trip" />
          </div>
        </div>

        <div className="hero__item">
          <img className="hero__item-img" src={hero} alt="" />
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Hero;
