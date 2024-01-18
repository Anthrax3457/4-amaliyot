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
                    <input type="text" name="" id="" placeholder='NAME' className="inputs__inp focus:border-[2px] border-[#c79c60] active:border-[#c79c60]" />
                    <input type="text" name="" id="" placeholder='EMAIL' className="inputs__inp focus:border-[2px] border-[#c79c60] active:border-[#c79c60]" />
                    <input type="text" name="" id="" placeholder='SUBJECT' className="inputs__inp focus:border-[2px] border-[#c79c60] active:border-[#c79c60]" />
                    <textarea name="" id="" cols="10" placeholder='MESSAGE' className='inputs__textarea focus:border-[2px] border-[#c79c60] active:border-[#c79c60]' rows="5"></textarea>
                    <div className='input__btn'>
                        <p className='input__btn-text'>Send Messae</p>
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