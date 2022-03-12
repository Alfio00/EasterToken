
import React from 'react';
import Link from "../../../components/Link"
import imageTwo from "../../../assets/image/landing-1/laptop-img-1.png";

export default function HeroSection ({data}) {
  return (
    <div className='cont'>
      <video autoPlay muted loop className='videoBg'>
        <source src="https://cdn.discordapp.com/attachments/948656546865356892/949389545877680138/hero-bg-video.mp4" type="video/mp4"/>
    </video>
       <div className="overlay">
        <h1>OUR BUNNY LOST ALL HIS EGGS</h1>
        <h3>HODL and help him catch'em all!</h3>
         <button src="bunnycoinbsc.com/easteregg.html" type="button" class="btn41-43 btn-42" style={{width: '166px', fontWeight: '900'}}>FIND YOUR EGG</button>
       </div>
    </div>
  )
}

