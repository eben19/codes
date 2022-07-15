import React from "react";
import './headAssign.css'


const Head = () => {
    return(
        <div>

            <div className="head">
                <div className="holder">
                    <div className="logoHold">LOGO</div>
                    <div className="navi1">
                        <a href="" className="navi">Home</a>
                        <a href="" className="navi">Market</a>
                        <a href="" className="navi">Dashboard</a>
                        <a href="" className="navi">Community</a>
                        <a href="" className="navi">Wishlist</a>
                    </div>

                    <div className="srch">
                        <button className="exp">Explore</button>
                        <button className="search"> <img  className="imgNew" src="/image/search.png" alt="e-ben" /> Search</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Head;