import React, {useEffect, useState} from "react"
import { FooterSection } from "../sections/InnerPages"
import PageWrapper from '../components/PageWrapper'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import BN from 'bn.js'
import Moralis from "moralis";
import image from "../assets/image/landing-1/logo_nosfondo.png"

import $ from 'jquery';

export default function EasterPage(){
  let myDate = new Date
  let day = myDate.getDate()
  let mounth = myDate.getMonth() + 1

  Moralis.onAccountChanged(function(){
    logout();
    document.getElementById('login').style.display = 'inline'
    document.getElementById('hide').style.display = 'none'  
    document.getElementById('hide1').style.display = 'none'  
    document.getElementById('hide2').style.display = 'none' 
  })

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const [loading, setLoading] = useState(false);

  const HeaderButton = ()=>{
    return(
      <div className="header-btns  header-btns ">
        <button class="btnEgg" onClick={login} id='login'>Connect Wallet</button>
        <button class="btnEgg" onClick={logOut} id='hide'>Logout</button>
      </div>
    )
  }

  useEffect(() => {
   
    if(HeaderButton()){
      if(isAuthenticated){
        document.getElementById('login').style.display = 'none'
        document.getElementById('hide').style.display = 'inline'  
      }
      else{
      document.getElementById('login').style.display = 'inline'
      document.getElementById('hide').style.display = 'none'  
    }
  } 

}, [HeaderButton]);

async function login(){
  if (!isAuthenticated) {

    await authenticate({signingMessage: "Powered by Moralis API, your data are safe." })
      .then(function (user) {
        console.log("logged in user:", user);
        document.getElementById('login').style.display = 'none'
        document.getElementById('hide').style.display = 'inline'  
        document.getElementById('hide1').style.display = 'inline'  
        document.getElementById('hide2').style.display = 'inline' 
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

async function logOut(){
  await logout();
  console.log("logged out");
  document.getElementById('login').style.display = 'inline'
  document.getElementById('hide').style.display = 'none' 
}

  async function fetchTokenBalances() {
    console.log(user)
    if(!user) 
      alert('Please connect your wallet')

    else{  
      console.log('im here')
    var wallet = user.get('ethAddress')
    const options = {
      chain: "bsc",
      address: wallet,
    };
    const balances = await Web3Api.account.getTokenBalances(options);
    console.log(balances)
    var i
    for(i=0; i<balances.length; i++){
      if(balances[i].token_address === '0x0a5c8ac9f3b5d61ab8f3eda81f4b639c8b3e9c7c'){
        var bilancio = balances[i].balance
        var decimali = balances[i].decimals
        const balanceWeiBN = new BN(bilancio)
        const decimalsBN = new BN(decimali)
        const divisor = new BN('10').pow(decimalsBN)
        const beforeDecimal = balanceWeiBN.div(divisor)
        if(beforeDecimal >= 400000000000){
          document.getElementById('egg').style.display= 'block'
          document.getElementById('hide1').style.display= 'none'
          document.getElementById('hide2').style.display = 'none' 
        }
        else {
          document.getElementById('qui').innerText = 'You need at least 0.5% of the supply' 
          document.getElementById('hide1').style.display= 'block'
          document.getElementById('hide2').style.display = 'block' 
        }
      }
    }
    }
  
  };

  
  function clickEgg(){    
    if(day != '17' && mounth != '4'){
      alert('Egg is already locked. It will be unlocked on easter day (April 17th)')
    }
    else{
      var box = $('.box');
      if(box.hasClass('open'))
        {
          return;
        }
      box.addClass('click');
      setTimeout(function (){
        box.removeClass('click');
        box.toggleClass('closed open');		
      }, 500);
    }
  }
  
  const Header = {
    headerClasses:"site-header--menu-center site-header--sticky light-header",
    containerFluid:true
  }
  

    
 return (
    <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton/>}>
      <div className="cont">

      <video autoPlay muted loop className='videoBg'>
       <source src="https://cdn.discordapp.com/attachments/948656546865356892/952198618499133530/Free_Stock_Videos___Kids_Cartoon_Background_Landscape_Video___Copyright_Free_Video_For_YouTube__.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      <div className="col-3">
      </div>
      <div className="overlay">
        <div className="col-6 centering" >  
               <button onClick={clickEgg} type="button" className="box closed" style={{display: 'none'}} id="egg"></button>
               <h2 id="qui"></h2>
               <button onClick={fetchTokenBalances}  class="btnEgg"  style={{width:'auto'}}>Check your balance</button>     
              
        </div>
        </div>
      </div>

      <div className="col-3">
      </div>
    </PageWrapper>
  )
}
