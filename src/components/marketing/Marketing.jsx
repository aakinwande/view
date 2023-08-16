import React from 'react'
import './marketing.css'
import WhatWeDo from '../home/whatwedo/WhatWeDo'
import OurWork from '../home/ourwork/OurWork'
import Icon4 from "../../../src/images/parthners/kobo.svg";
import Icon3 from "../../../src/images/parthners/kdp.svg";
import Icon2 from "../../../src/images/parthners/createspace.svg";
import Icon1 from "../../../src/images/parthners/abebooks.svg";

const Marketing = () => {
  return (
  <>
   <div class="container-fluid">
      <div class="row">
        <div class="col background-image-marketing">
          <h1 className="">
          We’ll mold your audience’s feelings about your brand into whatever you want
          </h1>
          <p className="hero-desc">
          We’ll sell your products by positioning them to sell themselves.

         </p>
          <div className="button-container">
            <a
              href="https://calendly.com/kalukalu/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-1">
                <h6 className="btn-text">BOOK A CONSULT</h6>
              </button>
            </a>
          </div>
          <p className="partners">Our Partners</p>
          <div className="partners-img">
            <img src={Icon1} alt="" />
            <img src={Icon2} alt="" />
            <img src={Icon3} alt="" />
            <img src={Icon4} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <h4 className='marketing-header'>MARKETING AND PUBLIC RELATIONS</h4>
          </div>
          <div className="row">
            <p className='marketing-desc'>Some our comprehensive marketing services by genre are:</p>
          </div>
          <div className="row">
          <div className="box">
              <h4>
                <a className="gtext" href="/brand-content-strategy">Brand content strategy</a>
              </h4>
            </div>
            <div className="box">
            <h4>
              <a className="gtext" href="/personality-public-image">Personal Public Image</a>
            </h4>
          </div>
          </div>
        </div>
      </div>
    </div>
<WhatWeDo />
<OurWork />
  </>
  )
}

export default Marketing
