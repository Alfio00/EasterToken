import React, {useEffect, useState} from 'react';
import {
  HeroSection,
  BrandSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  TestimonialSection,
  RoadMap,
  Faq,
  FooterSection,
} from "../sections/software"

import PageWrapper from '../components/PageWrapper'
import Moralis from 'moralis';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export default function HomePage(){

  Moralis.onAccountChanged(function(){
    logout();
    document.getElementById('login').style.display = 'inline'
    document.getElementById('hide').style.display = 'none'  
  })

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if(loading){
      if(isAuthenticated){
        document.getElementById('login1').style.display = 'none'
        document.getElementById('hide2').style.display = 'inline'  
      }
      else{
      document.getElementById('login1').style.display = 'inline'
      document.getElementById('hide2').style.display = 'none'  
    }
  } 
  setLoading(true)

}, [loading]);

  async function login(){
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Powered by Moralis API, your data are safe." })
        .then(function (user) {
          console.log("logged in user:", user);
          document.getElementById('login1').style.display = 'none'
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
    document.getElementById('login1').style.display = 'inline'
    document.getElementById('hide2').style.display = 'none'  
  }


const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header",
  containerFluid:true
}


const HeaderButton = ()=>{
  return(
    <div className="header-btns  header-btns  ms-auto d-none d-xs-inline-flex">
      <a onClick={login} id="login1" class="btn41-43 btn-42" style={{fontWeight: '900'}}>Connect Wallet</a>
      <button onClick={logOut} disabled={isAuthenticating} id='hide2'>Logout</button>
    </div>
  )
}

  return (
    <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton/>}>
      <HeroSection/>
      <BrandSection/>
      <FeatureSection/>
      <ContentSectionOne/>
      <ContentSectionTwo />
      <TestimonialSection />
      <RoadMap/>
      <Faq />
      <FooterSection/>
    </PageWrapper>
  )
}










