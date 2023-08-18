import React from "react";
import "./marketing.css";
import OurWork from "../home/ourwork/OurWork";
import Masterpiece from "../home/masterpiece/Masterpiece";
import Eze from "../../images/testimonialpics/eze.jpg";
import Rebecca from "../../images/testimonialpics/rebecca.jpg";
import Ag from "../../images/testimonialpics/ag.jpg";
import NewsLetter from "../home/subscribenewsletter/NewsLetter";

const Marketing = () => {
  return (
    <>
      <div class="container-fluid-hero-market">
        <div class="row background-image-market">
          <div className="col">
            <div className="row">
              <h5 className="hero-header-market">Preserve your essence</h5>
              <div className="row">
                <p className="hero-desc-market">
                  No one has lived your life we cannot know your experiences and
                  expertise until you tell us how you want us to know it. Let’s
                  tell the world what they must know about you
                </p>
              </div>
              <div className="row btn-crow-market">
                <div className="col">
                  <a
                    href="https://calendly.com/kalukalu/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-hero-one-market">
                      <h6 className="btn-text-market">FREE DISCOVERY CALL</h6>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurWork />
      <div class="container">
        <h4 class="testimonial-header">Great People Blow Our Trumpet</h4>
        <div class="row pb-5">
          <div class="col-lg-4 col-md-6 col-12">
            <div className="col">
              <div className="row">
                <p style={{ color: "black" }} className="testimonial-text">
                  "You walk your talk."
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="testimonial-img" src={Rebecca} alt="" />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">Rebecca Jenkins</h4>
                    <p className="testimonial-desc">
                      {" "}
                      Founder at RJEN. <br />
                      Bristol, United Kingdom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div className="col">
              <div className="row">
                <p style={{ color: "black" }} className="testimonial-text">
                  "This is a great team! Very intellectual, and efficient, and
                  serves as great accountability partners for projects you work
                  on."
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="testimonial-img" src={Ag} alt="" />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">Ag Goldsmith</h4>
                    <p className="testimonial-desc">
                      Finance Director, Hendrick Toyota Scion, Charleston,{" "}
                      <br />
                      South Carolina, United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-12">
            <div className="col">
              <div className="row">
                <p style={{ color: "black" }} className="testimonial-text">
                  "I love seeing a band of young people come together to create
                  something and you have created something truly remarkable
                  here; I happily recommend your services to people."
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="testimonial-img" src={Eze} alt="" />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">Douglas Eze, CFF</h4>
                    <p className="testimonial-desc">
                      {" "}
                      Founder & CEO, Largo Financial Services LLC. <br />{" "}
                      Washington DC-Baltimore Area, United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid newsletter">
        <div className="row">
          <h4 className="newsletter-header">Subscribe to KTN+</h4>
        </div>
        <div className="row">
          <p className="newsletter-text">
            We’ll make sure your image is recognizable then track your customers
            to position you right in their faces. If they aren’t set to buy what
            you’re selling, they’ll willingly market you to their circle. That’s
            how good we make you look. Your avatar’s network is a treasure trove
            of potential customers! If “network” is your “net worth”, their
            network is our homework. we market your brand so it sells itself…
          </p>
        </div>
        <div className="row">
          <a
            href="https://calendly.com/kalukalu/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className="newsletter-btn">LET'S MEET</button>
          </a>
        </div>
      </div>
      <Masterpiece />
      <NewsLetter />
    </>
  );
};

export default Marketing;
