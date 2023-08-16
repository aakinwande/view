import React from 'react'
import './copywriting.css'
import WhatWeDo from '../home/whatwedo/WhatWeDo'
import OurWork from '../home/ourwork/OurWork'
import Icon4 from "../../../src/images/parthners/kobo.svg";
import Icon3 from "../../../src/images/parthners/kdp.svg";
import Icon2 from "../../../src/images/parthners/createspace.svg";
import Icon1 from "../../../src/images/parthners/abebooks.svg";

const Copywriting = () => {
  return (
    <>
     <div class="container-fluid">
      <div class="row">
        <div class="col background-image-copywriting">
          <h1 className="">
          We’ll sell your products by positioning them to sell themselves.
          </h1>
          <p className="hero-desc">
          We’ll digest your vision and weave narratives that sell it to your
            target audience.          </p>
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
            <h4 className='copywriting-header'>PROFESSIONAL COPYWRITING</h4>
          </div>
          <div className="row">
            <p className='copywriting-desc'>Some our comprehensive copywriting services by genre are:</p>
          </div>
          <div className="row">
          <div className="box">
              <h4>
                <a className="gtext" href="/sales-funnel-scripts">Sales gunnel script</a>
              </h4>
            </div>
            <div className="box">
            <h4>
              <a className="gtext" href="/email-campaign">Email campaign</a>
            </h4>
          </div>
          <div className="box">
            <h4>
              <a className="gtext" href="/sales-call-scripts">Sales call scripts</a>
            </h4>
          </div>
          <div className="box">
            <h4>
              <a className="gtext" href="/website-content">Website content</a>
            </h4>
          </div>
          <div className="box">
            <h4>
              <a className="gtext" href="/thought-leadership-articles">
                Thought leadership articles
              </a>
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

export default Copywriting
