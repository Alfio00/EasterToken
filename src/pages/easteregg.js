import React, {useEffect, useState} from "react"
import { FooterSection } from "../sections/InnerPages"
import errorImage from "../assets/image/404.png"
import PageWrapper from '../components/PageWrapper'

/*import { useWeb3React } from '@web3-react/core'
import { injected } from '../components/wallet/connectors'
import TokenListRinkeby from '../assets/token-list-rinkeby.json'
import useBalance from '../action/useBalance.js'

import Web3Connect from "web3connect";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3"*/

import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import BN from 'bn.js'
import Moralis from "moralis";


export default function EasterPage(){
  Moralis.onAccountChanged(function(){
    logout();
  })

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
  const Web3Api = useMoralisWeb3Api();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(loading){
      if(isAuthenticated){
        document.getElementById('login').style.display = 'none'
        document.getElementById('hide').style.display = 'inline'  
        document.getElementById('hide1').style.display = 'inline'  
      }
      else{
      document.getElementById('login').style.display = 'inline'
      document.getElementById('hide').style.display = 'none'  
      document.getElementById('hide1').style.display = 'none'  
      }
    }
    setLoading(true)
  }, [loading]);
 
  async function login(){
    console.log(isAuthenticated)
    if (!isAuthenticated) {

      await authenticate({signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          document.getElementById('login').style.display = 'none'
          document.getElementById('hide').style.display = 'inline'  
          document.getElementById('hide1').style.display = 'inline'  
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
    document.getElementById('hide1').style.display = 'none'  
  }

  async function fetchTokenBalances() {
    var wallet = user.get('ethAddress')
    const options = {
      chain: "bsc",
      address: wallet,
    };
    const balances = await Web3Api.account.getTokenBalances(options);
    var i
    for(i=0; i<balances.length; i++){
      if(balances[i].token_address === '0x657fa236edbe902557e0b825162c8937418dc876'){
        var bilancio = balances[i].balance
        var decimali = balances[i].decimals
        const balanceWeiBN = new BN(bilancio)
        const decimalsBN = new BN(decimali)
        const divisor = new BN('10').pow(decimalsBN)
        const beforeDecimal = balanceWeiBN.div(divisor)
        if(beforeDecimal > 1)
          document.getElementById('qui').innerText = 'SEI UN CHAD'
        else 
          document.getElementById('qui').innerText = 'FAI CACARE' 
      }
    }
  
  };
    

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
    <PageWrapper innerPageHeader={true} HeaderButton={<HeaderButton/>}>
      <button onClick={login} id='login'>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating} id='hide'>Logout</button>
      <button onClick={fetchTokenBalances} id='hide1'>Check your balance</button>

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
