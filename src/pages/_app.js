import React from "react";
// import "../assets/scss/bootstrap.scss"
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import "../../node_modules/swiper/swiper.scss";
import "../assets/scss/main.scss"
import "../assets/scss/react-scss.scss"
import "../assets/scss/components/_source.scss"

import "../assets/fonts/fontawesome-5/css/all.min.css"
import Layout from "../components/Layout";

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'


function getLibrary(provider) {
  return new Web3(provider)
}


const MyApp = ({ Component, pageProps}) => {
      return (
          <Layout>
            <Web3ReactProvider getLibrary={getLibrary}>
              <Component {...pageProps} />
            </Web3ReactProvider>
          </Layout>
      );
    }

    export default MyApp;