import React from 'react'

// style
import './style.css'

import det from '../../../assets/images/tm-brown-button.png'

const Input = () => {
    return (
        <sectioni className="inputs__sections">
            <div className="inputs__contents">
                <p className="inputs__title">Send us a message</p>
            </div>
            <div className='inputs__container'> 
                <div className="inputs__inps">
                    <input type="text" name="" id="" placeholder='NAME' className="inputs__inp" />
                    <input type="text" name="" id="" placeholder='EMAIL' className="inputs__inp" />
                    <input type="text" name="" id="" placeholder='SUBJECT' className="inputs__inp" />
                    <textarea name="" id="" cols="10" placeholder='MESSAGE' className='inputs__textarea' rows="5"></textarea>
                    <div className='input__btn'>
                        <p className='input__btn-text'>READ MORE</p>
                        <img className='input__btn-img' src={det} alt="" />
                    </div>
                </div>
                <div className='map__container'>
                </div>
            </div>
        </sectioni>
    )
}

export default Input