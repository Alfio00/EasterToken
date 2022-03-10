import React from 'react'
import {FaTelegram} from 'react-icons/fa'
import {GiTakeMyMoney, GiEasterEgg} from 'react-icons/gi'
import {IoIosPeople} from 'react-icons/io'
import {IoDiamond} from 'react-icons/io5'
import {RiExchangeDollarLine, RiRepeatLine, RiLuggageDepositLine} from 'react-icons/ri'
export default function RoadMap ({...rest}){
    return(
        <>
       <h2 style={{marginTop: '30px'}} id="Roadmap">Roadmap</h2>
<div class="timeline"> 
  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    <div class="timeline__event__icon ">
    <i><FaTelegram/></i>
    </div>
    <div class="timeline__event__date">
        Q1 2022
    </div>
    <div class="timeline__event__content ">
      <div class="timeline__event__title">
        500 Telegram Member
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
    <i><GiTakeMyMoney/></i>
    </div>
    <div class="timeline__event__date">
      Q1 2022
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Huge marketing
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div class="timeline__event__icon">
      <i class="lni-slim"></i>
      <i><IoIosPeople/></i>
    </div>
    <div class="timeline__event__date">
      Q2 2022
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        1000 Telegram Member
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp timeline__event--type1">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>
      <i><IoDiamond/></i>
    </div>
    <div class="timeline__event__date">
      Q2 2022
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        500 holders
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>
      <i><GiEasterEgg/></i>
    </div>
    <div class="timeline__event__date">
      Q2 2022
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Easter Rewards
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>
      <i><RiExchangeDollarLine/></i>
    </div>
    <div class="timeline__event__date">
      Q3 2022
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        CMC & CG Listing
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type3">
    <div class="timeline__event__icon">
      <i><RiLuggageDepositLine/></i>
    </div>
    <div class="timeline__event__date">
      Q3 2022
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Staking platform beta
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type1">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>
      <i><RiRepeatLine/></i>
    </div>
    <div class="timeline__event__date">
      Future objective
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Repeat Rewards every holidays
      </div>
    </div>
  </div>
</div>
          
        
        </>
    )
}
