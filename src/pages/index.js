import React from 'react';
import {
  HeroSection,
  BrandSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  ContentSectionThree,
  FooterSection,
  TestimonialSection,
  Faq
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
      <Faq />
      <FooterSection/>
    </PageWrapper>
  )
}










