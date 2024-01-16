import React from 'react'
// images

import logo from '../../assets/images/logo.png'
import popular1 from '../../assets/images/popular-1.jpg'
import popular2 from '../../assets/images/popular-2.jpg'
// import popular3 from '../../assets/images/popular-3.jpg'
// style
import './style.css'

const Popular = () => {
    const data = [
        {
            id: 1,
            img: popular1,
            title: 'americano',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.',
            textIcon: 'Order Now'
        },
        {
            id: 2,
            img: popular2,
            title: 'americano',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.',
            textIcon: 'Order Now'
        },
        {
            id: 3,
            img: popular1,
            title: 'americano',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.',
            textIcon: 'Order Now'
        }
    ]
    return (
        <section className="popular__section">
            <div className="popular__container">
                <div className='flex gap-4 justify-center items-center'>
                    <img className='w-14 h-14' src={logo} alt="" />
                    <p className="popular__name">Popular Items</p>
                </div>
                <hr className="popular__hr" />
            </div>
            <div className='data'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="popular__data-container">
                            <div className="popular__data-content">
                                <div className='grid justify-center'>
                                    <img src={item.img} alt="" className="pupolar__data-img" />
                                </div>
                                <div className='grid justify-center text-center'>
                                    <p className="popular__data-title">
                                        {item.title}
                                    </p>
                                    <hr className="popular__data-hr" />
                                    <p className="popular__data-text">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                            <div className='data__icon-bg'>
                                <div className='data__icon-content'>
                                    <p className='data__icon-text'>
                                        {item.textIcon}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Popular