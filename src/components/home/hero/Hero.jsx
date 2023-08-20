import React from "react";
import "./hero.css";

import Parth1 from "../../../images/parthners/kamwe.png";
import Parth2 from "../../../images/parthners/largo.png";
import Parth3 from "../../../images/parthners/rjen.png";
import Parth4 from "../../../images/parthners/wealthywomen.png";
import Parth5 from "../../../images/parthners/empireconcepts.svg";
import Parth6 from "../../../images/parthners/dewtech.svg";

const Hero = () => {
  return (
    <div class="container-fluid-hero">
      <div class="row background-image">
        <div className="col">
          <div className="row">
            <h5 className="hero-header">
              Living life is your role, telling and selling your story is ours
            </h5>
            <div className="row">
              <p className="hero-desc">
                {" "}
                We weave narratives to compel your audience with{" "}
                <span style={{ fontWeight: "bold" }}>
                  ghostwritten{" "}
                </span> and{" "}
                <span style={{ fontWeight: "bold" }}>marketing content. </span>
              </p>
            </div>
            <div className="row btn-crow">
              <div className="col">
                <a
                  href="https://calendly.com/kalukalu/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-hero-one">
                    <h6 className="btn-text">FREE DISCOVERY CALL</h6>
                  </button>
                </a>
              </div>
              <div className="col">
                <a href="/contact-us">
                  <button className="btn-hero-two">
                    <h6 className="btn-text">SHARE YOUR ROUGH IDEAS</h6>
                  </button>
                </a>
              </div>
            </div>

            <div className="row">
              <p className="partners">We Proudly Associate With </p>
              <div className="partners-hero-img">
                <a href="https://kamwe.tech/"   target="_blank"
                  rel="noopener noreferrer">
                  <img src={Parth1} alt="" />
                </a>
                <a href="https://largofinancialservices.com/"   target="_blank"
                  rel="noopener noreferrer">
                  <img src={Parth2} alt="" />
                </a>
                <a href="https://rjen.co.uk/" target="_blank"
                  rel="noopener noreferrer">
                  <img src={Parth3} alt="" />
                </a>
                <a href="https://wealthywisewoman.com/"   target="_blank"
                  rel="noopener noreferrer">
                  <img src={Parth4} alt="" />
                </a>
                <a href="/">
                  <img src={Parth5} alt="" />
                </a>
                <a href="/" >
                  <img src={Parth6} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

   
      </div>
    </div>
  );
};

export default Hero;
