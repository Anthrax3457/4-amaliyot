import React from 'react'
// images

import logo from '../../../assets/images/logo.png'
import popular1 from '../../../assets/images/popular-1.jpg'
import popular2 from '../../../assets/images/popular-2.jpg'
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
            title: 'cappuccino',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.',
            textIcon: 'Order Now'
        },
        {
            id: 3,
            img: popular1,
            title: 'mocha',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.',
            textIcon: 'Order Now'
        },
        {
            id: 4,
            img: popular1,
            title: 'americano',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.',
            textIcon: 'Order Now'
        },
        {
            id: 5,
            img: popular2,
            title: 'cappuccino',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.',
            textIcon: 'Order Now'
        },
        {
            id: 6   ,
            img: popular1,
            title: 'mocha',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. sed ipsum.',
            textIcon: 'Order Now'
        }


    ]
    return (
        <section className="populars__section">
            <div className="populars__container">
                <div className='flex gap-4 justify-start md:justify-center items-center'>
                    <img className='w-14 h-14' src={logo} alt="" />
                    <p className="populars__name">Popular Items</p>
                </div>
                <hr className="populars__hr" />
            </div>
            <div className='datas'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="populars__data-container">
                            <div className="populars__data-content">
                                <div className='grid justify-center'>
                                    <img src={item.img} alt="" className="pupolars__data-img" />
                                </div>
                                <div className='grid justify-center text-center'>
                                    <p className="populars__data-title">
                                        {item.title}
                                    </p>
                                    <hr className="populars__data-hr" />
                                    <p className="populars__data-text">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                            <div className='datas__icon-bg'>
                                <div className='datas__icon-content'>
                                    <p className='datas__icon-text'>
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