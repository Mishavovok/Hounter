import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


import './homeSearch.scss';
import HomeCard from './HomeCard';



function HomeSearch() {
  const [activ, setActiv] = useState(0);
  const [button, setButton] = useState([]);
  const [items, setItems] = useState([])
  const SliderRef = useRef()

  const handelNext = () => {
    SliderRef.current.swiper.slideNext()
  }
  const handlePrev = () => {
    SliderRef.current.swiper.slidePrev()
  }

  useEffect(() => {
    fetch('https://64d0b822ff953154bb79589e.mockapi.io/button')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setButton(arr);
      });
  }, []);

  useEffect(() => {
    fetch(`https://64d0b822ff953154bb79589e.mockapi.io/homecard?${activ > 0 ? `status=${activ}` : ''}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, [activ]);

  return (
    <div className="homesearch">

      <h1 className="homesearch-title">Our Recommendation</h1>
      <div className="homesearch__filter">
        <h1 className="homesearch__filter-title">Featured House</h1>
        {button.map((obj) => (
          <button key={obj.id} onClick={() => setActiv(obj.id)} className={activ === obj.id ? "homesearch__filter-item-activ" : "homesearch__filter-item"}>
            <svg className={activ === obj.id ? "homesearch__filter-item-img-activ" : "homesearch__filter-item-img"} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={obj.img} fill="#888B97" />
            </svg>
            <p className={activ === obj.id ? "homesearch__filter-item-title-activ" : "homesearch__filter-item-title"}>{obj.text}</p>
          </button>
        ))}

        <button className='button__prev' onClick={handlePrev}>
          <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50775 17.1646C7.77805 17.1651 8.04001 17.0704 8.24815 16.8969C8.36529 16.7991 8.46212 16.6791 8.5331 16.5437C8.60407 16.4082 8.6478 16.2601 8.66177 16.1076C8.67574 15.9551 8.65968 15.8014 8.61451 15.6552C8.56934 15.5089 8.49595 15.3731 8.39854 15.2555L3.21574 9.01601L8.21344 2.76487C8.30954 2.6458 8.3813 2.50879 8.4246 2.36172C8.46791 2.21465 8.4819 2.06042 8.46577 1.90789C8.44965 1.75536 8.40372 1.60754 8.33064 1.47293C8.25755 1.33832 8.15875 1.21957 8.03991 1.12351C7.92021 1.01753 7.78004 0.937598 7.62818 0.88872C7.47633 0.839841 7.31607 0.823074 7.15747 0.83947C6.99887 0.855866 6.84535 0.905071 6.70655 0.983998C6.56774 1.06293 6.44665 1.16987 6.35087 1.29812L0.763163 8.28263C0.593008 8.49093 0.499989 8.7522 0.499989 9.02183C0.499989 9.29146 0.593008 9.55273 0.763163 9.76102L6.54754 16.7455C6.66359 16.8864 6.81102 16.9978 6.97785 17.0706C7.14468 17.1434 7.32622 17.1756 7.50775 17.1646Z"
              fill="#3C4563" />
          </svg>
        </button>
        <button className='button__next' onClick={handelNext}>
          <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.65891 0.835396C1.3886 0.834864 1.12665 0.929592 0.918511 1.10313C0.801367 1.20086 0.704535 1.32088 0.633558 1.45632C0.562582 1.59175 0.518856 1.73995 0.504886 1.89242C0.490916 2.04488 0.506975 2.19863 0.552145 2.34484C0.597315 2.49106 0.670706 2.62687 0.768117 2.74449L5.95092 8.98399L0.953218 15.2351C0.857121 15.3542 0.785358 15.4912 0.742054 15.6383C0.69875 15.7854 0.684759 15.9396 0.700885 16.0921C0.717011 16.2446 0.762935 16.3925 0.83602 16.5271C0.909104 16.6617 1.00791 16.7804 1.12675 16.8765C1.24645 16.9825 1.38662 17.0624 1.53847 17.1113C1.69033 17.1602 1.85058 17.1769 2.00918 17.1605C2.16778 17.1441 2.3213 17.0949 2.46011 17.016C2.59891 16.9371 2.72 16.8301 2.81579 16.7019L8.40349 9.71737C8.57365 9.50907 8.66667 9.2478 8.66667 8.97817C8.66667 8.70854 8.57365 8.44727 8.40349 8.23898L2.61912 1.25447C2.50306 1.11359 2.35564 1.00223 2.18881 0.929419C2.02197 0.856607 1.84043 0.824394 1.65891 0.835396Z"
              fill="#3C4563" />
          </svg>

        </button>
      </div>
      <div className='card'>
        <Swiper
          breakpoints={{
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },

            990: {
              slidesPerView: 4,
              spaceBetween: 10,
            },

            866: {
              slidesPerView: 3,
              spaceBetween: 10,
            }
          }}

          ref={SliderRef}
          className="mySwiper"
        >

          {items.map((obj) =>
            <SwiperSlide key={obj.id}> <HomeCard key={obj.id} {...obj} /></SwiperSlide>


          )}


        </Swiper>

      </div>

    </div >
  );
}

export default HomeSearch;
