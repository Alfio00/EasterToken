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
import { MoralisProvider } from "react-moralis";


/*function getLibrary(provider) {
  return new Web3(provider)
}
<Web3ReactProvider getLibrary={getLibrary}>*/

function MyApp({ Component, pageProps}) {
      return (
          <Layout>
            <MoralisProvider serverUrl="https://azf7jeolfymc.usemoralis.com:2053/server" appId="LJQ1di1ySKXiMwMc8W1bXGAsYA8QTNj7KslklElh">
              <Component {...pageProps} />
            </MoralisProvider>
          </Layout>
      );
    }

  export default MyApp;