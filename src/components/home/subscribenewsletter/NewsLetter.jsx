import React from "react";
import "./newsletter.css";

const NewsLetter = () => {
  return (
    <div class="container-fluid newsletter">
      <div className="row">
        <h4 className="newsletter-header">Subscribe to KTN+</h4>
      </div>
      <div className="row">
        <p className="newsletter-text">
          We invest countless hours interviewing elite professionals across a
          wide spectrum of fields. These interviews generate content for their
          books, thought pieces, brand marketing, etc. <span className="ktn-span">which benefits them.</span>
        </p>
      </div>
      <div className="row">
        <p className="newsletter-text">
          We’re legally forbidden to share proprietary information, but for the
          first time, we’re licensed to publicly share the secrets that got
          these one-percenters to the top of their fields <span className="ktn-span">which benefits you.</span>
        </p>
      </div>
      <div className="row">
        <p className="newsletter-text">
          We’ve uncovered a system they’ve all used to easily fly high in their
          careers- They’re excellent salespeople! …ideas, products, deals,
          services, visions, schemes, businesses, etc. They can sell candy to
          its owner and <span className="ktn-span">we’ll show you how.</span>
        </p>
      </div>
      <div className="row">
        <p className="newsletter-text">
          KTN+ monthly publication demystifies their strategies. Now you can use
          the same selling techniques of persuasion, seduction, and compulsion
          to blow your business out of the water. Get fly-on-the-wall access to
          tactics used by the top 1% of sales closers across the globe for
          <span className="ktn-span"> $12.99/month</span>
        </p>
      </div>
      <div className="row">
        <button className="newsletter-btn">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default NewsLetter;
