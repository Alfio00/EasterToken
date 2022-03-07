import React, { Component } from 'react';
import {
  HeroSection,
  BrandSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  ContentSectionThree,
  IntegrationSection,
  PricingSection,
  FooterSection,
  TestimonialSection
} from "../sections/software"

import PageWrapper from '../components/PageWrapper'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../components/wallet/connectors'
import TokenListRinkeby from '../assets/token-list-rinkeby.json'
import { useState } from 'react'
import useBalance from '../action/useBalance.js'



export default function HomePage(){

const [selectedToken, setSelectedToken] = useState(TokenListRinkeby[0])

const { activate, account } = useWeb3React()

const [balance] = useBalance(
    selectedToken.address,
    selectedToken.decimals
)

const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header",
  containerFluid:true
}


const HeaderButton = ()=>{
  return(
    <div className="header-btns  header-btns  ms-auto d-none d-xs-inline-flex">
  
     <button className="btn sign-in-btn focus-reset" onClick={() => activate(injected)}>Connect wallet</button>
     {balance}
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
      <ContentSectionThree />
      <TestimonialSection />
      <FooterSection/>
    </PageWrapper>
  )
}










