import React from "react"
import Link  from "../../../../components/Link"
import imageOne from "../../../../assets/image/landing-1/chart-img-2.png"
import imageTwo from "../../../../assets/image/landing-1/coniglio-navicella.png"

const ContentSectionTwo = ({ ...rest }) => {
  return (
    <>
     {/* Content Area-2 */}
<div className="content-area-2">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-6 col-md-10 col-sm-12" data-aos="fade-right" data-aos-duration={800} data-aos-once="true">
          <div className="image__2">
            <img src={imageTwo} alt="content" id="image_one" />
          </div>
      </div>
      <div className="col-lg-6 col-md-10 col-sm-12" data-aos="fade-left" data-aos-duration={800} data-aos-once="true">
        <div className="content">
          <div className="section__heading">
            <h2>The advantages for holders are many, why?
            </h2>
            <p>it is very simple to understand, those who hold at least 0.5% of the supply will have the opportunity to receive 
              a guaranteed prize in bnb from the egg that each of you will have in your account and which will open exactly on
              Easter day, the prizes are many and the luckiest will even win the X BNB prize.</p>
          </div>
          <div className="content__btn">
            <Link to="/easteregg.html" className="btn  btn--link focus-reset focus-reset">Check our platform</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ContentSectionTwo
