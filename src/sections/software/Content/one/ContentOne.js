import React from "react"
import Link  from "../../../../components/Link"
import imageOne from "../../../../assets/image/landing-1/chart-img-1.png"
import imageTwo from "../../../../assets/image/landing-1/chart-small-img-1.png";

const ContentSectionOne = ({ ...rest }) => {

  return (
    <>
      {/* Content Area-1 */}
      <div className="content-area-1">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-10 col-sm-12 order-lg-0 order-1"
              data-aos="fade-right"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content">
                <div className="section__heading">
                  <h2>What's BunnyCoin?</h2>
                  <p>
                    BunnyCoinBSC is a new project that favors holders.
                    You have heard over and over again that now the BSC smart chain is claiming victims every day,
                    our bunny with his sweet face will help those who truly believe in this chain to obtain the best possible results.
                  </p>
                </div>
                <div className="content__btn">
                  <Link
                    to={"/"}
                    className="btn  btn--link focus-reset focus-reset"
                  >
                    Join us on Telegram
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-10 col-sm-12 order-lg-1 order-0"
              data-aos="fade-left"
              data-aos-duration={800}
              data-aos-once="true"
            >
              <div className="content-image-group-1">
                <div className="image__1">
                  <img src={imageOne} alt="content"/>
                </div>
                <div className="image__2">
                  <img src={imageTwo} alt="content"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSectionOne
