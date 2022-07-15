import React from 'react';
import './herro.css';
import { MdPayment } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa'



const Herro = () => {
    return(
        <div className='contain'>
            <div className='con-hold'>
           <div className='left-acc'>

               <div className='acc'>
                   <div className='img-hold'>
                   <img className='acc-img' src="/images/AssignImage/cap.jpg" alt="" />
                   </div>
                   <div className='price'>
                       <h5>Face-caps</h5>
                       <h5 style={{color:"gray"}}>$50</h5>
                   </div>
               </div>

               <div className='acc'>
                   <div className='img-hold'>
                   <img className='acc-img' src="images/AssignImage/glass1.jfif" alt="" />
                   </div>
                   <div className='price'>
                       <h5>Sunglass</h5>
                       <h5 style={{color:"gray"}}>$100</h5>
                   </div>
               </div>

               <div className='acc'>
                   <div className='img-hold'>
                   <img className='acc-img' src="images/AssignImage/heels.jfif" alt="" />
                   </div>
                   <div className='price'>
                       <h5>Shoes</h5>
                       <h5 style={{color:"gray"}}>$150</h5>
                   </div>
               </div>

               <div className='acc'>
                   <div className='img-hold'>
                   <img className='acc-img' src="images/AssignImage/perf.webp" alt="" />
                   </div>
                   <div className='price'>
                       <h5>Perfumes</h5>
                       <h5 style={{color:"gray"}}>$200</h5>
                   </div>
               </div>

               <div className='acc'>
                   <div className='img-hold'>
                   <img className='acc-img' src="images/AssignImage/ring.jpg" alt="" />
                   </div>
                   <div className='price'>
                       <h5>Rings</h5>
                       <h5 style={{color:"gray"}}>$500</h5>
                   </div>
               </div>

               <div className='acc'>
                   <div className='img-hold'>
                   <img className='acc-img' src="images/AssignImage/sneak.jpg" alt="" />
                   </div>
                   <div className='price'>
                       <h5>Sneakers</h5>
                       <h5 style={{color:"gray"}}>$150</h5>
                   </div>
               </div>

               <div className='acc'>
                   <div className='img-hold'>
                   <img className='acc-img' src="images/AssignImage/watch.jpeg" alt="" />
                   </div>
                   <div className='price'>
                       <h5>Wristwatches</h5>
                       <h5 style={{color:"gray"}}>$600</h5>
                   </div>
               </div>

               <div className='acc'>
                   <div className='img-hold'>
                   <img className='acc-img' src="images/AssignImage/cap3.webp" alt="" />
                   </div>
                   <div className='price'>
                       <h5>Face-caps</h5>
                       <h5 style={{color:"gray"}}>$100</h5>
                   </div>
               </div>

               

           </div>


           <div className='mid-acc'>
               <img src="/images/AssignImage/couple-sunglasses.jpg" alt="" />

               <div className='sun'>SUNGLASS <br/>COLLECTION</div>
           </div>



           <div className='right-acc'>
               <div className='right-top'>
               <img className='right-img' src="/images/AssignImage/cap3.webp" alt="" />
                <h4  className='sneak'>FACE-CAPS COLLECTION</h4>
               </div>

               <div className='right-bottom'>
               <img className='right-img' src="/images/AssignImage/watch2.jpg" alt="" />
                <h4 className='sneak'>WRISTWATCH COLLECTION</h4>
               </div>

           </div>

           </div>

           <div className='hero2'>
               <div className='hero2-hold'>
                   <div className='hero2-box'>
                       <div> <FaShippingFast /></div>
                       <h5>Free Shipping</h5>
                       <h6>To any destination</h6>
                   </div>

                   <div className='hero2-box'>
                       <div className='icon'> <BiSupport /></div>
                       <h5>24/7 Support</h5>
                       <h6>Reliable Center</h6>
                   </div>

                   <div className='hero2-box'>
                       <div> <RiSecurePaymentFill /></div>
                       <h5>90 Days Return</h5>
                       <h6>We Care</h6>
                   </div>

                   <div className='hero2-box'>
                       <div> <MdPayment /> </div>
                       <h5>Payment Secure</h5>
                       <h6>Secured Platform</h6>
                   </div>
               </div>
           </div>


        </div>

    )
}

export default Herro;