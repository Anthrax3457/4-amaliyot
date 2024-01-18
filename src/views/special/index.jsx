import React from 'react'
// style
import './style.css'
// images
import det from '../../assets/images/tm-brown-button.png'
import line from '../../assets/images/header-line.png'
import HomeImage from '../../assets/images/light.png'
import Table from '../../assets/images/table-set.png'
import Popular from './Popular'
import Daily from '../../components/daily'


const Special = () => {
  return (
    <section className='today__section'>
      <div className='today'>
        <div className='today__container'>
          <div className='today__image-container'>
            <img className='today__image' src={HomeImage} alt="" />
            <img className='today__image' src={HomeImage} alt="" />
            <img className='today__image' src={HomeImage} alt="" />
          </div>
          <div className='today__content'>
            <div className='today__title-content'>
              <img className='today__img' src={line} alt="" />
              <p className='today__title'>Today's Special</p>
              <img className='today__img' src={line} alt="" />
            </div>
            <div className='today-text-content'>
              <p className='today__text'>CAFE HOUSE</p>
              <div className='grid justify-center'>
                <p className='today__texts'>
                  Cafe House template is a <span className='text-[#c79c60]'>mobile-friendly</span> responsive Bootstrap v3.3.5 layout by <span className='text-[#c79c60]'>
                    templatemo.</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
              <div>
                <div className='today__btn'>
                  <p className='today__btn-text'>READ MORE</p>
                  <img className='today__btn-img' src={det} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='grid justify-center items-center today__table'>
            <img src={Table} alt="" />
          </div>
        </div>
        <Popular />
        <Daily />
      </div>
    </section>
  )
}

export default Special