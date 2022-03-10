import React from 'react'
import Link from "../../../components/Link"


  import {Accordion} from "react-bootstrap";
  import {AccordionItemFull} from "../../../components/Accordion"
  import {faqDataOne} from "../../../data/faq"

export default function Faq({...rest}){
    return(
       <>
  {/* Blog Single Area  */}
  <div className="faq-main-banner">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="content text-center">
            <h2 id="FAQ">Frequently Asked Question</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="faq-main-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="faq-main-tab-area sticky">
          </div>
        </div>
        <div className="col-xl-6 col-lg-8 col-md-10 faq-single-all-items">
          <div className="faq-main-area-single" id="general">
            <h2>General</h2>
            <Accordion className="accordion">
                {faqDataOne.map(({question,answer,accKey
                },index)=>{return(
                    <AccordionItemFull question={question} answer={answer} accKey={accKey} key={index}/>
                )})}
            </Accordion>
          </div>
          </div>
        </div>
      </div>
    </div>


    </>
    )
}

