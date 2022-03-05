import React from "react";
// import "../Fontawesome";
// import "../../assets/scss/bootstrap.scss"
// import "../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../node_modules/react-modal-video/scss/modal-video.scss";
// import "../../../node_modules/swiper/swiper.scss";
// import "../../assets/scss/main.scss"
// import "../../assets/scss/react-scss.scss"

// import "../../assets/fonts/fontawesome-5/css/all.min.css"

import { useWeb3React } from '@web3-react/core'
import { injected } from '../../components/wallet/connectors'
import TokenListRinkeby from '../../assets/token-list-rinkeby.json'
import { useState } from 'react'
import useBalance from '../../action/useBalance.js'
import Web3 from "web3"

export default function Layout({ children }) {

  return (
    <div className="layout" >
      {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}
