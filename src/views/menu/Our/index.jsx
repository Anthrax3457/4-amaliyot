import React from 'react'
// style
import './style.css'
// images
import vmenu from '../../../assets/images/vertical-menu-bg.png'
import logo from '../../../assets/images/logo.png'
import menu1 from '../../../assets/images/menu-1.jpg'
import menu2 from '../../../assets/images/menu-2.jpg'
import menu3 from '../../../assets/images/menu-3.jpg'
import menu4 from '../../../assets/images/menu-4.jpg'
import menu5 from '../../../assets/images/menu-5.jpg'

const Our = () => {

    const menudata = [
        {
            id: 1,
            img: menu1,
            title: 'Americano',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.',
            sum: '30'
        },
        {
            id: 2,
            img: menu2,
            title: 'Americano',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.',
            sum: '20'
        },
        {
            id: 3,
            img: menu3,
            title: 'Americano',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.',
            sum: '15'
        },
        {
            id: 4,
            img: menu4,
            title: 'Americano',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.',
            sum: '25'
        },
        {
            id: 5,
            img: menu5,
            title: 'Americano',
            text: 'Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque. Red ipsum.',
            sum: '45'
        }
    ]
    return (
        <div>
            <div className="our__container">
                <div className='flex gap-4 justify-center items-center'>
                    <img className='w-14 h-14' src={logo} alt="" />
                    <p className="our__name">Our Menus</p>
                </div>
                <hr className="our__hr" />
            </div>
            <div className='our__content'>
                <div className='vertical__menu'>
                    <img className='vertical__bg' src={vmenu} alt="" />
                    <div className='vertical__items'>
                        <p className='vertical__item text-[#c79c60]'>AFFOGATO</p>
                        <p className='vertical__item'>CAFFÈ AMERICANO</p>
                        <p className='vertical__item'>CAFFÈ LATTE</p>
                        <p className='vertical__item'>COFFEE MILK</p>
                        <p className='vertical__item'>CAFÉ MOCHA</p>
                        <p className='vertical__item'>CAPPUCCINO</p>
                        <p className='vertical__item'>ESPRESSO</p>
                        <p className='vertical__item'>ICED COFFEE</p>
                        <p className='vertical__item'>INSTANT COFFEE</p>
                        <p className='vertical__item'>MOCHA</p>
                        <p className='vertical__item'>BLACK COFFEE</p>
                    </div>
                </div>
                <div className='dataourmenu__container'>
                    {menudata.map((item, index) => {
                        return (
                            <div key={index} className="ourmenudata__container">
                                <div className='our__image-content'>
                                    <img className='our__image' src={item.img} alt="" />
                                </div>
                                <div className='our__texts'>
                                    <div className='our__texts-content'>
                                        <p className='our__title'>{item.title}</p>
                                        <p className='our__id'>{item.id}</p>
                                    </div>
                                    <p className='our__text '>{item.text}</p>
                                </div>
                                <div className='our__sum-container'>
                                    <div className='our__sum-content'>
                                        <span className='our__summ'>$</span>
                                        <p className='our__sum'>{item.sum}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Our