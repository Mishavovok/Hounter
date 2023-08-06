import React from 'react'


import home from "../../assets/home.png"
import guestbook from "../../assets/guestbook.png"
import dewan from "../../assets/dewan.png"
import interior from "../../assets/interior.png"
import './modal.scss'

function Modal({ activ, setActiv, children }) {
    console.log(children)
    console.log(activ)
    return (
        <div onClick={() => setActiv(false)} className={activ ? ' activ' : 'modal'}>
            < div className="modal__content">
                {children}

            </div>


        </div >
    )
}

export default Modal