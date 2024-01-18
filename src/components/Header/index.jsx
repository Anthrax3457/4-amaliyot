import React, { useState } from 'react'
// logo
import logo from '../../assets/images/logo.png'
import underline from '../../assets/images/nav-underline.png'
import Headlogo from '../../assets/images/favicon.ico'
import { IoMenu } from "react-icons/io5";
// react-router-dom
import { Link } from 'react-router-dom'
// style
import './style.css'
import Modal from './modal'


const Header = () => {
  const [active, setActive] = useState('hero')
  const [modal, setModal] = useState(false)

  return (
    <section className="head">
      <div className="head__container">
        <div className='head_logo-content'>
          <img className='head__logo' src={Headlogo} alt="Logo" />
          <a className='head__name' href="#">
            Cafe House
          </a>
        </div>
        <div className='head__items-content'>
          <ul className='head__items'>
            <li className={`${active === 'hero' ? 'head__hero' : 'head__itemm'}`} onClick={() => { setActive('hero') }}>
              <Link className='head__link' to='/' >HOME</Link>
            </li>
            <li className={`${active === 'special' ? 'head__special' : 'head__itemm'}`} onClick={() => { setActive('special') }}>
              <Link className='head__link' to='/special' >TODAY SPECIAL</Link>
            </li>
            <li className={`${active === 'menu' ? 'head__menu' : 'head__itemm'}`} onClick={() => { setActive('menu') }}>
              <Link className='head__link' to='/menu' >MENU</Link>
            </li>
            <li className={`${active === 'contact' ? 'head__contact' : 'head__itemm'}`} onClick={() => { setActive('contact') }}>
              <Link className='head__link' to='/contact' >CONTACT</Link>
            </li>
          </ul>
          {modal ?
            (<div>
              <button>
                <p onClick={() => { setModal(false) }} className='head_menu-icon'><IoMenu /></p>
              </button>
            </div>
            ) :
            (
              <div>
                <button>
                  <p onClick={() => { setModal(true) }} className='head_menu-icon'><IoMenu /></p>
                </button>
              </div>
            )}
        </div>
      </div>
      {modal ? <Modal /> : ''}
    </section>
  )
}

export default Header