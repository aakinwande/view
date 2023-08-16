import React from 'react'
import './ghostwriting.css'
import WhatWeDo from '../home/whatwedo/WhatWeDo'
import OurWork from '../home/ourwork/OurWork'
import Icon4 from "../../../src/images/parthners/kobo.svg";
import Icon3 from "../../../src/images/parthners/kdp.svg";
import Icon2 from "../../../src/images/parthners/createspace.svg";
import Icon1 from "../../../src/images/parthners/abebooks.svg";

const Ghostwriting = () => {
  return (
   <>
     <div class="container-fluid">
      <div class="row">
        <div class="col background-image-ghostwrting">
          <h1 className="">
          Ghostwriting Services by Professionals
          </h1>
          <p className="hero-desc">
          Let’s talk about your book idea! If you haven’t got ideas that’s okay, we’ll listen to your story and brainstorm for you
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
            <h4 className='ghost-header'>PROFESSIONAL GHOSTWRITING</h4>
          </div>
          <div className="row">
            <p className='ghost-desc'>Some our comprehensive ghostwriting services by genre are:</p>
          </div>
          <div className="row">
          <div className="box">
              <h4>
                <a className="gtext" href="/businessbooks">Business Books</a>
              </h4>
            </div>
            <div className="box">
              <h4>
                <a className="gtext" href="/memoir-autobiography">Memoir/Autobiography</a>
              </h4>
            </div>
            <div className="box">
              <h4>
                <a className="gtext" href="/general-non-fiction">General Nonfiction</a>
              </h4>
            </div>
            <div className="box">
              <h4>
                <a className="gtext" href="/self-help">Self-help</a>
              </h4>
            </div>
            <div className="box">
              <h4>
                <a className="gtext" href="/fiction">Fiction</a>
              </h4>
            </div>
            <div className="box">
              <h4>
                <a className="gtext" href="/children">Children's</a>
              </h4>
            </div>
            <div className="box">
              <h4>
                <a className="gtext" href="/social-media">Social Media</a>
              </h4>
            </div>
            <div className="box">
              <h4>
                <a className="gtext" href="/speeches">Speeches</a>
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

export default Ghostwriting
