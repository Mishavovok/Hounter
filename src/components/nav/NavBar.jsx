import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import arrow from '../../assets/arrow.svg';
import './navBar.scss';
function NavBar() {
  const [menu, setMenu] = useState(false)
  const [popup, setPopup] = useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__logo">
          <img className="nav__logo-img" src={logo} alt="" />
          <a className="nav__logo-text" href="">
            Hounter
          </a>
        </div>
        <ul className={menu ? "nav__list-active" : "nav__list"}>
          <li className="nav__link">
            About Us
          </li>
          <li className="nav__link">
            Article
          </li>
          <li onClick={() => setPopup(!popup)} className="nav__link">
            Property
            <img className="nav__link-img" src={arrow} alt="" />
            {popup ? <ul className="nav__list-menu">
              <li className='nav__list-menu-link'>
                House
              </li>
              <li className='nav__list-menu-link'>
                Villa
              </li>
              <li className='nav__list-menu-link'>
                Apartment
              </li>
            </ul> : ''
            }

          </li>
          <li className="nav__link ">
            Sign Up!
          </li>

        </ul>
        <div onClick={() => setMenu(!menu)} className='nav__burger'>{
          menu ? <span className='nav__list-line-clouse'></span>
            : <span className='nav__list-line'></span>
        }
        </div>




        <span className="nav__bg"></span>
      </nav>
    </header>
  );
}

export default NavBar;
