import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <div className='container'>
            <div className='logo'>
                <img src="/image/telegram.png" alt="" />
            </div>

            <div className='navHold'>
                <div className='nav'>Home</div>
                <div className='nav'>About</div>
                <div className='nav'>Service</div>
                <div className='nav'>Contact</div>

            </div>

            <div className='button'>Sign Up</div>
        </div>

    )
}

export default Header;