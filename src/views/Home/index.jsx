import React from 'react'
// style
import './style.css'
// images
import det from '../../assets/images/tm-brown-button.png'
import line from '../../assets/images/header-line.png'
import HomeImage from '../../assets/images/light.png'
import Table from '../../assets/images/table-set.png'
import GCard from '../../components/Gcard'
import Popular from '../../components/Popular'
import Special from '../../components/special'
import Daily from '../../components/daily'

const Home = () => {
  return (
    <section className='home__section'>
      <div className='home'>
        <div className='home__container'>
          <div className='home__image-container'>
            <img className='home__imagee' src={HomeImage} alt="" />
            <img className='home__image' src={HomeImage} alt="" />
            <img className='home__image' src={HomeImage} alt="" />
          </div>
          <div className='home__content'>
            <div className='home__title-content'>
              <img className='home__img' src={line} alt="" />
              <p className='home__title'>Welcome To</p>
              <img className='home__img' src={line} alt="" />
            </div>
            <div className='home-text-content'>
              <p className='home__text'>CAFE HOUSE</p>
              <div className='grid justify-center text-start'>
                <p className='home__texts'>Cafe House template is a mobile-friendly responsive <span className='text-[#c79c60]'>Bootstrap v3.3.5</span> layout by <span className='text-[#c79c60]'>templatemo.</span> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </p>
              </div>
              <div>
                <div className='home__btn'>
                  <p className='home__btn-text'>Deatlis</p>
                  <img className='home__btn-img' src={det} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='grid justify-center items-center home__table'>
            <img src={Table} alt="" />
          </div>
        </div>
        <GCard />
        <Popular />
        <Special />
        <Daily />
      </div>
    </section>
  )
}

export default Home