import React from 'react'
import { MdOutlineError } from "react-icons/md";

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
                        <p className='input__btn-text'>Send Message</p>
                        <img className='input__btn-img' src={det} alt="" />
                    </div>
                </div>
                <div className='map__container grid justify-center items-center text-center'>
                    <div className='px-[10%] md:px-[0px]'>
                        <div className='grid justify-center'>
                            <p className='text-[60px] text-[#757575] text-center'>
                                <MdOutlineError />
                            </p>
                        </div>
                        <h1 className='text-[24px] text-[#3c4043]'>Xatolik yuz berdi</h1>
                        <p className='text-[12px] text-[#3c4043] mt-[3%]'>Bu sahifa Google Xaritalarni notogri yukladi. Texnik malumotlar olish uchun JavaScript konsolini koring.</p>
                    </div>
                </div>
            </div>
        </sectioni>
    )
}

export default Input