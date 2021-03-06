
import React from 'react'

import imageOne from "../../../assets/image/brand-black/bscscan.png";
import imageTwo from "../../../assets/image/brand-black/cmc.png";
import imageThree from "../../../assets/image/brand-black/cg.png";
import imageFour from "../../../assets/image/brand-black/poocoin.png";
import imageFive from "../../../assets/image/brand-black/moon.png";
import imageSix from "../../../assets/image//brand-black/pancake.png";


export default function BrandSection() {
    return(
       <>
       {/* Brand Area*/}
        <div className="brand-area">
        <div className="container">
            <div className="row justify-content-center align-items-center">
            <div className="col-12" data-aos="fade-up" data-aos-duration={800} data-aos-once="true">
                <div className="brand-area-logos d-flex justify-content-center justify-content-xl-between align-items-center flex-wrap">
                <div className="brand-area__single">
                    <img src={imageOne} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                    <img src={imageTwo} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                    <img src={imageThree} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                    <img src={imageFour} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                    <img src={imageFive} alt="brand" className="w-100" />
                </div>
                <div className="brand-area__single">
                    <img src={imageSix} alt="brand" className="w-100" />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

       </>
    )
}