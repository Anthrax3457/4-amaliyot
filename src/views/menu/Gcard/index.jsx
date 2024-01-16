import React from 'react'
// style
import './style.css'

// images
import det from '../../../assets/images/tm-brown-button.png'
import shadow from '../../../assets/images/shadow.png'
import menu from '../../../assets/images/1.jpg'


const GCard = () => {
    return (
        <section className='GCard'>
            <div className='gcard__container'>
                <p className='gcard__name'>Variety of Menus</p>
                <div className='gcard__content'>
                    <p className='gcard__text'>Cafe House</p>
                    <p className='gcard__texts'>This is free HTML5 website template from <span className='text-[#0066CC]'>template<span className='text-[#30A430]'>mo</span></span>. Fndimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Ettiam sit amet orci eget eros faucibus tincidunt.</p>
                </div>
                <div>
                    <div className='gcard__btn'>
                        <p className='gcard__btn-text'>READ MORE</p>
                        <img className='gcard__btn-img' src={det} alt="" />
                    </div>
                </div>
            </div>
            <div className='Gcard__image-content'>
                <div className='gcard__image'>
                    <img className='gcard__imeg' src={menu} alt="" />
                </div>
                <img className='gcard__img' src={shadow} alt="" />
            </div>
        </section >
    )
}

export default GCard