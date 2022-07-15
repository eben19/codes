import React from 'react';
import './head.css'

const Head = () => {
    return(
        <div className='header'>
            <div className="header1">
            <div className='logo'>
                X-tates
            </div>

            <div className='srch'>
                <div className='srch-hold'>
                    
                        <input className='inp' type="text" placeholder='search accesories' />
                        <div style={{background:"rgb(235, 169, 46)", borderRadius:" 0 15px 15px 0", border:"none"}}  className='icon-hold'>
                        <img className='srch-icon' src="/images/AssignImage/search.png" alt="" />
                        </div>
                    
                </div>
            </div>

            <div className='carts'>
                
                            <h4>Add to Cart</h4>
                            <img className='srch-icon' src="/images/AssignImage/add-to-cart.png" alt="" />

                            <img className='srch-icon' src="/images/AssignImage/shopping-cart.png" alt="" />

                            <h4>Let's Shop</h4>
            </div>

            </div>

            <div className='header2'>
            <div className='hold'>
                <div className='red'>All Categories</div>
                <div className='navs'>Sunglasses</div>
                <div className='navs'>Heels</div>
                <div className='navs'>Rings</div>
                <div className='navs'>Sneakers</div>
                <div className='navs'>Bags</div>
                <div className='navs'>Face-Caps</div>
                <div className='navs'>Wrist-Watches</div>
                <div className='navs'>Perfumes</div>
                </div>
                <div></div>
            </div>

        </div>

    )
}

export default Head;