import React from 'react'
// style
import './style.css'
// images
import menuBoard from '../../assets/images/menu-board.png'
import det from '../../assets/images/tm-brown-button.png'
import logo from '../../assets/images/logo.png'


const Daily = () => {
  return (
    <div className='daily'>
      <div className="daily__container">
        <div className='flex gap-4 justify-center items-center'>
          <img className='w-14 h-14' src={logo} alt="" />
          <p className="daily__name"> Daily Menu</p>
        </div>
        <hr className="daily__hr" />
      </div>
      <div className='daily__content'>
        <img className='daily__menu' src={menuBoard} alt="" />
        <div className='daily__text-content'>
          <p className='daily__title'>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.</p>
          <div className='daily__texts'>
            <p className='daily__text'><span className='daily__num'>1.</span>Tellus eget condimentum rhoncus.</p>
            <p className='daily__text'><span className='daily__num'>2.</span>Sem quam semper libero.</p>
            <p className='daily__text'><span className='daily__num'>3.</span>Sit amet adipiscing sem neque sed ipsum.  </p>
            <p className='daily__text'><span className='daily__num'>4.</span>Nam quam nunc, blandit vel, luctus pulvinar.</p>
            <p className='daily__text'><span className='daily__num'>5.</span>Maecenas nec odio et ante tincidunt tempus.</p>
            <p className='daily__text'><span className='daily__num'>6.</span>Donec vitae sapien ut libero ventenatis faucibus.</p>
          </div>
          <div className='daily__btn'>
            <p className='daily__btn-text'>READ MORE</p>
            <img className='daily__btn-img' src={det} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Daily