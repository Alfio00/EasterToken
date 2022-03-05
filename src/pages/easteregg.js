import React, { Component } from "react"
import { FooterSection } from "../sections/InnerPages"
import errorImage from "../assets/image/404.png"
import PageWrapper from '../components/PageWrapper'

import { useWeb3React } from '@web3-react/core'
import { injected } from '../components/wallet/connectors'
import TokenListRinkeby from '../assets/token-list-rinkeby.json'
import { useState } from 'react'
import useBalance from '../action/useBalance.js'
import Web3 from "web3"

export default function EasterPage(){

var web3 = new Web3();  
 
const { activate, account, chainId } = useWeb3React()

const [selectedToken, setSelectedToken] = useState(TokenListRinkeby[0])

const [balance] = useBalance(
    selectedToken.address,
    selectedToken.decimals
)

async function connect() {
  try {
    await activate(injected)
    console.log(balance)
    checkBalance()
  } catch (ex) {
    console.log(ex)
  }
}


function checkBalance(){
  if(balance < 0.01)
    document.getElementById('qui').innerText = "hai troppi pochi token semrbi il cazzo"
  else
    document.getElementById('qui').innerText = "vero chad"

}

const Header = {
  headerClasses:"site-header--menu-center site-header--sticky dark-header",
  containerFluid:true
}

const HeaderButton = ()=>{
  return(
    <div className="header-btns  header-btns  ms-auto d-none d-xs-inline-flex">
     <button id="connectButton" className="btn sign-in-btn focus-reset" onClick={connect}>
          Connnect wallet
     </button>
        
    </div>
  )
}

  return (
    <PageWrapper innerPageHeader={true} HeaderButton={<HeaderButton/>}>
      <button id="connectButton" className="btn sign-in-btn focus-reset" onClick={connect}>
          Connnect wallet
     </button>

        <div className="thank-you-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                <div className="thankyou-content text-center">
                  <img className="w-100" src={errorImage} alt="404" />
                  <h2 id="qui"> </h2>
                  <p>
                    Ups! It seems like the page you are looking for is not
                    available! Please try again with another page or go back to
                    home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Area */}
        <FooterSection />
    </PageWrapper>
  )
}
