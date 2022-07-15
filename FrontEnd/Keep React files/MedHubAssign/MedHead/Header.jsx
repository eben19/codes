import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <div className='container'>
            <div className='con'>
            <div className='logo'>
                <img src="/images/AssignMed/logo-svg.svg" alt="" />  Med-Hub </div>

            <div className='navHold'>
                <div className='nav'>Home</div>
                <div className='nav'>About</div>
                <div className='nav'>Services</div>
                <div className='nav'>Community</div>

            <div className='bttn1'>Sign in </div>
               
               </div>
               </div>
        </div>

    )
}

export default Header;