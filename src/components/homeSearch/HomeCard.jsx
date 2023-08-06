import React from 'react'


import './homeCard.scss'
function HomeCard({ img, title, prise, property, propertyImg, propertyBgr, propertyColor, ownerImg, ownerName, ownerLocation }) {
    return (
        <div className='homecard'>
            <img className='homecard__img' src={img} alt="" />
            <div className='homecard__propertu' style={{ background: propertyBgr }}>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={propertyImg} fill={propertyColor} />
                </svg>
                <p className='homecard__propertu-text'>{property}</p>
            </div>

            <h2 className='homecard__title'>{title}</h2>
            <p className='homecard__text'>{prise}</p>
            <div className='homecard__info'>
                <img src={ownerImg} alt="" />
                <div className='homecard__info-blok'>
                    <p className='homecard__info-title'>{ownerName}</p>
                    <p className='homecard__info-text'>{ownerLocation}</p>
                </div>
            </div>
        </div>




    )
}

export default HomeCard