import React from 'react'
// style
import './style.css'
// images
import det from '../../assets/images/tm-brown-button.png'
import line from '../../assets/images/header-line.png'
import HomeImage from '../../assets/images/light.png'
import Table from '../../assets/images/table-set.png'
import Input from './input/inddex'


const Menu = () => {
  return (
    <section className='contact__section'>
      <div className='contact'>
        <div className='contact__container'>
          <div className='contact__image-container'>
            <img className='contact__imagee' src={HomeImage} alt="" />
            <img className='contact__image' src={HomeImage} alt="" />
            <img className='contact__image' src={HomeImage} alt="" />
          </div>
          <div className='contact__content'>
            <div className='contact__title-content'>
              <img className='contact__img' src={line} alt="" />
              <p className='contact__title'>Contact Us</p>
              <img className='contact__img' src={line} alt="" />
            </div>
            <div className='contact-text-content'>
              <p className='contact__text'>CAFE HOUSE</p>
              <div className='grid justify-center'>
                <p className='contact__texts'>afe House is free <span className='text-[#c79c60]'>responsive Bootstrap</span> v3.3.5 layout by <span className='text-[#c79c60]'>templatemo.</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
              <div>
                <div className='contact__btn'>
                  <p className='contact__btn-text'>MESSAGE US</p>
                  <img className='contact__btn-img' src={det} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='grid justify-center items-center contact__table'>
            <img src={Table} alt="" />
          </div>
        </div>

        <Input />
      </div>
    </section>
  )
}

export default Menu