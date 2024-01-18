import React, { useState } from 'react'
import './modal.css'
import { Link } from 'react-router-dom'

const Modal = () => {
    
  const [active, setActive] = useState('hero')
    return (
        <div className='grid justify-end '>
            <div className='modal__items-content text-white'>
                <ul className='modal__items'>
                    <li className={`${active === 'hero' ? 'modal__hero' : 'modal__itemm'}`} onClick={() => { setActive('hero') }}>
                        <Link className='modal__link' to='/' >HOME</Link>
                    </li>
                    <li className={`${active === 'special' ? 'modal__special' : 'modal__itemm'}`} onClick={() => { setActive('special') }}>
                        <Link className='modal__link' to='/special' >TODAY SPECIAL</Link>
                    </li>
                    <li className={`${active === 'menu' ? 'modal__menu' : 'modal__itemm'}`} onClick={() => { setActive('menu') }}>
                        <Link className='head__link' to='/menu' >MENU</Link>
                    </li>
                    <li className={`${active === 'contact' ? 'modal__contact' : 'modal__itemm'}`} onClick={() => { setActive('contact') }}>
                        <Link className='modal__link' to='/contact' >CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Modal