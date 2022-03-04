import React from "react"
import HowCard from "./components/HowCard"
import CardIconOne from "../../../assets/image/landing-1/pancake.png"
import CardIconTwo from "../../../assets/image/landing-1/walletIcon.png"
import CardIconThree from "../../../assets/image/landing-1/BNB.png"
const data = [
  {
  icon:CardIconOne,
  title:"Buy on Pancake",

},
  {
    icon:CardIconTwo,
    title:"Connect your wallet",

  },
  {
    icon:CardIconThree,
    title:"Win BNBs",

}
] 
const FeatureSection = ({ ...rest }) => {
  return (
  <div className="feature-area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-9 col-sm-12">
          <div className="section__heading text-center">
            <h2>How it works</h2>
            <p>Two easy steps: buy and HDOL!</p>
            <p className="hodl">If you hold for more then 24h (min. 100 $EGGS)</p>
            <p id="last">your easter egg will unlocked and you ll be ready to redeem a BNB rewars</p>
          </div>
        </div>
      </div>
        <div className="row  justify-content-center">
            {data.map((item, key) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration={800}
                  data-aos-once="true"
                  key={key}
                >
                  <HowCard
                    image={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
  )
}

export default FeatureSection
