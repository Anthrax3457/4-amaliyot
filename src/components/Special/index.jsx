import React from 'react'

// images
import logo from '../../assets/images/logo.png'
import special1 from '../../assets/images/special-1.jpg'
import special2 from '../../assets/images/special-2.jpg'
import special3 from '../../assets/images/special-3.jpg'
import special4 from '../../assets/images/special-4.jpg'
// style
import './style.css'


const Special = () => {
    return (
        <section className='special'>
            <div className="special__container">
                <div className='flex gap-4 justify-center items-center'>
                    <img className='w-14 h-14' src={logo} alt="" />
                    <p className="special__name">Today's Special</p>
                </div>
                <hr className="special__hr" />
            </div>
            <div className='special__content'>
                <div className='special__image-content'>
                    <img className='special__image' src={special1} alt="" />
                </div>
                <div className='special__imag-content'>
                    <img  className='special__imag' src={special2} alt="" />
                    <div className='special__img-content'>
                        <img className='special__imgg'  src={special3} alt="" />
                        <img className='special__img' src={special4} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Special