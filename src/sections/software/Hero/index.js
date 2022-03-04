
import React from 'react';
import Link from "../../../components/Link"
import imageTwo from "../../../assets/image/landing-1/laptop-img-1.png";

export default function HeroSection ({data}) {
  return (
    <div className='cont'>
      <video autoPlay muted loop className='videoBg'>
        <source src="https://cdn.discordapp.com/attachments/948656546865356892/948656610622992404/X2Download.com-Free_Easter_Egg_Background_-_Free_Easter_Background360p_Trim.mp4" type="video/mp4"/>
    </video>
       <div className="overlay">
        <h1>BUNNY POLA LOST ALL HIS EGGS</h1>
        <h3>HODL and help him catch'em all!</h3>
         <button type="button" class="btn btn-secondary">FIND YOUR EGG</button>
       </div>
    </div>
  )
}

