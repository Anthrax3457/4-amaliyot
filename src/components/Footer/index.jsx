import React from 'react'
// style
import './style.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <section className="footer">
      <div className="footer__container">
        <div className='footer-contents'>
          <div className='footer-menu__container'>
            <p className='footer__menu-name'>MAIN MENU</p>
            <div className="footer__menu">
              <Link className='list-none'>
                <p className="footer__menu-item"> HOME</p>
              </Link>
              <Link>
                <p className="footer__menu-item"> ABOUT US</p>
              </Link>
              <Link>
                <p className="footer__menu-item"> DIRECTORY</p>
              </Link>
              <Link>
                <p className="footer__menu-item"> BLOG</p>
              </Link>
              <Link>
                <p className="footer__menu-item"> OUR SERVICES</p>
              </Link>
            </div>
          </div>
          <div className='footer-about__container'>
            <p className='footer__about-name'>About Us</p>
            <div className="footer__about">
              <p className="footer__about-item">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
              <p className="footer__about-item">Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.</p>
            </div>
          </div>
          <div className='footer-social__container'>
            <p className='footer__social-name'>Get Social</p>
            <div className="footer__social">
              <p className="footer__social-item">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante.</p>
              <div className='footer-icon'>
                <div className="footer__social-icon">f</div>
                <div className="footer__social-icon">f</div>
                <div className="footer__social-icon">f</div>
                <div className="footer__social-icon">f</div>
                <div className="footer__social-icon">f</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__copy'>
        <p className='copy-text'>
          Copyright © 2084 Your Cafe House
        </p>
      </div>
    </section>
  )
}

export default Footer