import React from "react";
import './hero.css'

const Hero = () => {
    return (
        <>
        <div className="main-hero">
            <div className="hero-hold">
                <div className="left">
                    <h1>Business Goals <br/> Achieved With Design</h1>
                    <h4>Understanding the resilence, beauty, nature, that<br/> makes a design unique in all aspects.</h4>
                    <div className="buttns">
                    <button className="get">Get Started</button>
                    <div className="see">
                        <h4 className="vid">See Video</h4>
                        <img src="/images/play.png" alt="" />
                    </div>
                    </div>

                </div>
                <div className="right">
                    <div className="right-hold">
                        <img src="/images/bizTalk.jpg" alt="eben" />
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Hero;