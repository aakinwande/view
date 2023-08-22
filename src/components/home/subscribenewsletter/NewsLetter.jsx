import React from "react";
import "./newsletter.css";
import KtnPlus from "../../../images/KickLogo/KtnNewsletter.png";

const NewsLetter = () => {
  return (
    <>
      <div class="container-fluid newsletter">
        <div className="row">
          <h4 className="newsletter-header">
            <img src={KtnPlus} alt="" className="ktnplus" />
          </h4>
        </div>
        <div className="row">
            <p className="newsletter-text">
              We invest countless hours interviewing elite professionals across
              a wide spectrum of fields. These interviews generate content for
              their books, thought pieces, brand marketing, etc. which benefits
              them.
            </p>
          </div>
          <div className="row">
            <p className="newsletter-text">
              We’re legally forbidden to share proprietary information, but for
              the first time, we’re licensed to publicly share the secrets that
              got these one-percenters to the top of their fields which benefits
              you.
            </p>
          </div>
          <div className="row">
            <p className="newsletter-text">
              We’ve uncovered a system they’ve all used to easily fly high in
              their careers- They’re excellent salespeople! …ideas, products,
              deals, services, visions, schemes, businesses, etc. They can sell
              candy to its owner an we’ll show you how
            </p>
          </div>
          <div className="row">
            <p className="newsletter-text">
              KTN+ monthly publication demystifies their strategies. Now you can
              use the same selling techniques of persuasion, seduction, and
              compulsion to blow your business out of the water. Get
              fly-on-the-wall access to tactics used by the top 1% of sales
              closers across the globe for
              <span className="ktn-span" style={{ color: "green" }}>
                {" "}
                $12.99/month
              </span>
            </p>
      </div>
      <div class="container-fluid newsletter">
      <div className="row">
        <button className="newsletter-btn">SUBSCRIBE</button>
      </div>
    </div>
      </div>
          
    
    </>
  );
};

export default NewsLetter;
