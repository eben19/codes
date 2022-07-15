import React from 'react';
import './herro2.css';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { BsCartPlus } from 'react-icons/bs';


const Herro2 = () => {
    return(
        <div className='display'>
            <div className='display-hold'>
            <div className='feat'>
                <h4>Featured Products</h4>
                <div className='but'>
                <button>See all</button>
                <div> <MdOutlineArrowForwardIos /> 
                </div>
                </div>
            </div>

            <div className='dis'>
            <div className='display-box'>
                <div className='display-img'>
                    <img src="/images/AssignImage/sneak.jpg" alt="" />
                </div>
                <h4>Sneakers</h4>
                <h5>$50.00</h5>
                <button className='add'>Add to cart <BsCartPlus /></button>
            </div>

            <div className='display-box'>
                <div className='display-img'>
                    <img src="/images/AssignImage/watch3.jpg" alt="" />
                </div>
                <h4>Wristwatches</h4>
                <h5>$50.00</h5>
                <button className='add'>Add to cart <BsCartPlus /></button>
            </div>

            <div className='display-box'>
                <div className='display-img'>
                    <img src="/images/AssignImage/perf2.png" alt="" />
                </div>
                <h4>Perfumes</h4>
                <h5>$50.00</h5>
                <button className='add'>Add to cart <BsCartPlus /></button>
            </div>

            <div className='display-box'>
                <div className='display-img'>
                    <img src="/images/AssignImage/sneak-fine.webp" alt="" />
                </div>
                <h4>Sneakers</h4>
                <h5>$50.00</h5>
                <button className='add'>Add to cart <BsCartPlus /></button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Herro2;