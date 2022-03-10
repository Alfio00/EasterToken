import React from 'react'
import Link  from "../../../components/Link"
// import BrandLogo from "../../../assets/image/png/logo-white.png"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterSection({...rest}){
    return (
      <>
            {/* Footer Area */}
        <footer className="footer-area" style={{paddingBottom: '60px'}}>
          <div className="container">
            <div className="row justify-content-md-between justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 col-12">
                <div className="join-us-content text-center text-md-start">
                  <h2>500+ People joined us.<br></br>
                    When are you joining?</h2>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-4 col-8">
                <div className="join-us-btn text-md-end text-center">
                  <a className="btn" href="https://t.me/BunnyCoinBSC" target="_blank">Join our telegram</a>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <p style={{textAlign:'center', marginTop: '170px', color:'white'}}> Creators of token are not liable for any loss when trading this cryptocurrency token. Nothing on this page is financial advice.</p>
            </div>
          </div>
        </footer>
      </>
    )
}