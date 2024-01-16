import React from 'react'
// style
import './style.css'
// images
import det from '../../assets/images/tm-brown-button.png'
import line from '../../assets/images/header-line.png'
import HomeImage from '../../assets/images/light.png'
import Table from '../../assets/images/table-set.png'
import GCard from './Gcard'
import Our from './our'


const Menu = () => {
  return (
    <section className='menu__section'>
      <div className='menu'>
        <div className='menu__container'>
          <div className='menu__image-container'>
            <img className='menu__image' src={HomeImage} alt="" />
            <img className='menu__image' src={HomeImage} alt="" />
            <img className='menu__image' src={HomeImage} alt="" />
          </div>
          <div className='menu__content'>
            <div className='menu__title-content'>
              <img className='menu__img' src={line} alt="" />
              <p className='menu__title'>Our Menus</p>
              <img className='menu__img' src={line} alt="" />
            </div>
            <div className='menu-text-content'>
              <p className='menu__text'>CAFE HOUSE</p>
              <p className='menu__texts'>Cafe House template is a mobile-friendly responsive <span className='text-[#c79c60]'>Bootstrap v3.3.5</span> layout by <span className='text-[#c79c60]'>templatemo.</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              </p>
              <div>
                <div className='menu__btn'>
                  <p className='menu__btn-text'>READ MORE</p>
                  <img className='menu__btn-img' src={det} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='grid justify-center items-center menu__table'>
            <img src={Table} alt="" />
          </div>
        </div>
        <GCard />
        <Our/>
      </div>
    </section>
  )
}

export default Menu