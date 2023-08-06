import React from 'react'


import dianne from '/dianne.png'
import jenny from '/jenny.png'
import robert from '/robert.png'
import ben from '../../assets/ben.png'

import formBg1 from "../../assets/formBg1.png"
import formBg2 from "../../assets/formBg2.png"
import formBg3 from "../../assets/formBg3.png"
import formBg4 from "../../assets/formBg4.png"

import './mail.scss'
function Mail() {
    return (
        <div className='mail'>
            <div className='mail__form'>
                <img className='mail__form-dianne' src={dianne} alt="" />
                <img className='mail__form-jenny' src={jenny} alt="" />
                <img className='mail__form-robert' src={robert} alt="" />
                <img className='mail__form-ben' src={ben} alt="" />
                <img className='mail__form-formBg1' src={formBg1} alt="" />
                <img className='mail__form-formBg2' src={formBg2} alt="" />
                <img className='mail__form-formBg3' src={formBg3} alt="" />
                <img className='mail__form-formBg4' src={formBg4} alt="" />
                <h1 className='mail__form-title'>Subscribe For More Info
                    And Update From Hounter
                </h1>
                <form className='form' action="">
                    <svg className='form__img' width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H17C17.7956 16 18.5587 15.6839 19.1213 15.1213C19.6839 14.5587 20 13.7956 20 13V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM17 2L10.5 6.47C10.348 6.55777 10.1755 6.60397 10 6.60397C9.82446 6.60397 9.65202 6.55777 9.5 6.47L3 2H17Z" fill="#3B82F6" />
                    </svg>
                    <input className='form__input' placeholder='Your email here' type="email" />
                    <button className='form__button'>Subsribe Now</button>
                </form>
            </div>

        </div>
    )
}

export default Mail