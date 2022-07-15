import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <div className='container'>
            <div className='logo'>
                ABSTRAK
            </div>

            <div className='navHold'>
                <div className='nav'>Home</div>
                <div className='nav'>Services</div>
                <div className='nav'>Support</div>
                <div className='nav'>Contact Us</div>

            </div>

            <div className='lang'>
                <div className='lan'>Language</div>
                <button className='buttn'>En</button>
            </div>
        </div>

    )
}

export default Header;