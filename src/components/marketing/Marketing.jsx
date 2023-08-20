import React from "react";
import "./marketing.css";
import NewsLetter from "../home/subscribenewsletter/NewsLetter";
import QuestionandBlog from "../home/questionandblog/QuestionandBlog";

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
    


      <div class="container-fluid cta">
      <h4 style={{fontSize: '20px', paddingTop: '20px'}}> We’ll make sure your image is recognizable then track your customers
            to position you right in their faces. If they aren’t set to buy what
            you’re selling, they’ll willingly market you to their circle. That’s
            how good we make you look. Your avatar’s network is a treasure trove
            of potential customers! If “network” is your “net worth”, their
            network is our homework. we market your brand so it sells itself…</h4>
      <button style={{fontSize: '14px', paddingRight: '82px', paddingLeft: '82px' }} className="btn-cta">LET'S MEET</button>
    </div>
    <QuestionandBlog />
      <NewsLetter />
    </>
  );
};

export default Marketing;
