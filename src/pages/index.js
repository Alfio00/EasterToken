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
export default function HomePage(){

const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header",
  containerFluid:true
}


const HeaderButton = ()=>{
  return(
    <div className="header-btns  header-btns  ms-auto d-none d-xs-inline-flex">
      <a href='/easteregg' id="login1" class="btn41-43 btn-42" style={{fontWeight: '900'}}>Launch app</a>
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










