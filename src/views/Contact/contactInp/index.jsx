import React from 'react'
// imgaes

import det from '../../../assets/images/tm-brown-button.png'
// import line from '../../assets/images/header-line.png'

const Inputs = () => {
    return (
        <div className='bg-white'>
            <div className="inputs__container">
                <p className="inputs__title"></p>
                <input type="text" name="" id="" className="inputs__inp" />
                <input type="text" name="" id="" className="inputs__inp" />
                <input type="text" name="" id="" className="inputs__inp" />
                <textarea className='inputs__textarea' name="" id="" cols="30" rows="10"></textarea>
                <div className='inputs__btn'>
                    <p className='inputs__btn-text'>READ MORE</p>
                    <img className='inputs__btn-img' src={det} alt="" />
                </div>
            </div >
        </div >
    )
}

export default Inputs