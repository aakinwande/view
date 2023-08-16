import React from "react";
import "./hero.css";
import Icon1 from "../../../images/parthners/abebooks.svg";
import Icon2 from "../../../images/parthners/createspace.svg";
import Icon3 from "../../../images/parthners/kdp.svg";
import Icon4 from "../../../images/parthners/kobo.svg";

const Hero = () => {
  return (
    <div class="container-fluid-hero">
      <div class="row background-image">
        <div className="col">
          <div className="row">
            <h5 className="hero-header">
              Tell us your rough ideas, we’ll tell the world your polished story
            </h5>
            <div className="row">
              <p className="hero-desc">
                In a couple of months, you can be a{" "}
                <span style={{ fontWeight: "bold" }}>published author </span>
                touching lives or not but time will pass regardless.
              </p>
            </div>
            <div className="row btn-crow">
              <div className="col">
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
              <div className="col">
                <a href="/contact-us">
                  <button className="btn-2">
                    <h6 className="btn-text">CONTACT US</h6>
                  </button>
                </a>
              </div>
            </div>

            <div className="row">
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

        {/* <div class="col background-image">
          <h5 className="hero-header">
            Tell us your rough ideas, we’ll tell the world your polished story
          </h5>
          <p className="hero-desc">
            In a couple of months, you can be a{" "}
            <span style={{ fontWeight: "bold" }}>published author </span>
            touching lives or not but time will pass regardless.
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
            <a href="/contact-us">
              <button className="btn-2">
                <h6 className="btn-text">CONTACT US</h6>
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
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
