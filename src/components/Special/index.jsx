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
                <div className='flex gap-4 justify-start md:justify-center items-center'>
                    <img className='w-14 h-14' src={logo} alt="" />
                    <p className="special__name">Today's Special</p>
                </div>
                <hr className="special__hr" />
            </div>
            <div className='special__content'>
                <div className='special__image-content'>
                    <img className='special__image' src={special1} alt="" />
                </div>
                <div className='one__container'>
                    <p className='one__title'>
                        Donec pede justo
                    </p>
                    <p className='one__text'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>

                </div>
                <div className='special__imag-content'>
                    <img className='special__imag' src={special2} alt="" />
                    <div className='two__container'>
                        <p className='two__title'>
                            Etiam sit amet
                        </p>
                        <p className='two__text'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                    </div>
                    <div className='special__img-content'>
                        <img className='special__imgg' src={special3} alt="" />
                        <div className='third__container'>
                            <p className='third__text'> 
                                Vivamus elementum
                            </p>
                        </div>
                        <img className='special__img' src={special4} alt="" />
                        <div className='four__container'>
                            <p className='four__text'>
                                Quisque rutrum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Special