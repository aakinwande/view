import React from "react";
import Megan from "../../images/testimonialpics/megan.jpg";
import Solaru from "../../images/testimonialpics/solaru.jpg";
import Doniie from "../../images/testimonialpics/donnie.jpg";
import Masterpiece from "../home/masterpiece/Masterpiece";
import QuestionandBlog from "../home/questionandblog/QuestionandBlog";

const EmailOutreach = () => {
  return (
    <>
      <div class="container-fluid-hero-copy">
        <div class="row background-image-copy">
          <div className="col">
            <div className="row">
              <h5 className="hero-header-copy">
                We use words to paint pictures so your audience pays attention
                and money
              </h5>
              <div className="row">
                <p className="hero-desc-copy">
                  “High conversion” sales emails, scripts, and pitches are just
                  arguments; Speaking to qualified leads gets higher conversion
                  percentages; but that’s one factor, how compelling is your
                  argument? That’s the second factor, the third factor is the
                  volume of qualified leads reached. We deliver all three that’s
                  why clients are always impressed with our results.
                </p>
              </div>
              <div className="row btn-crow-copy">
                <div className="col">
                  <a
                    href="https://calendly.com/kalukalu/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-hero-one-copy">
                      <h6 className="btn-text-copy">FREE DISCOVERY CALL</h6>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <h4 class="testimonial-header">Great People Blow Our Trumpet</h4>
        <div class="row pb-5">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="row">
              <p
                style={{
                  color: "#333",
                  fontFamily: "Georgia, serif",
                  lineHeight: "1.6",
                  textAlign: "center",
                  fontStyle: "italic",
                  padding: "15px 20px",
                  backgroundColor: "#F9F9F9",
                }}
                className="testimonial-text"
              >
                "Contextualization and personalization are what AI is lacking
                right now. There will always be a need for great writers like
                Kick’s"
              </p>
            </div>
            <div className="row">
              <div className="col-4">
                <img className="testimonial-img" src={Solaru} alt="" />
              </div>
              <div className="col-8 pt-3">
                <div className="row">
                  <h4 className="testimonial-name">Elizabeth Solaru</h4>
                  <p className="testimonial-desc">
                    {" "}
                    Director, Luxury Business Emporium, <br />
                    London Area, United Kingdom.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div className="col">
              <div className="row">
                <p
                  style={{
                    color: "#333",
                    fontFamily: "Georgia, serif",
                    lineHeight: "1.6",
                    textAlign: "center",
                    fontStyle: "italic",
                    padding: "15px 20px",
                    backgroundColor: "#F9F9F9",
                  }}
                  className="testimonial-text"
                >
                  "This team is an awesome team. Truly awesome. That word is
                  overused, but you truly fill that word with meaning. It is
                  truly an honor to read your work."
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="testimonial-img" src={Doniie} alt="" />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">Donnie McFall, MBA</h4>
                    <p className="testimonial-desc">
                      {" "}
                      Owner of McFall Consulting Inc. Minneapolis, Minnesota,{" "}
                      <br />
                      United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div className="col">
              <div className="row">
                <p
                  style={{
                    color: "#333",
                    fontFamily: "Georgia, serif",
                    lineHeight: "1.6",
                    textAlign: "center",
                    fontStyle: "italic",
                    padding: "15px 20px",
                    backgroundColor: "#F9F9F9",
                  }}
                  className="testimonial-text"
                >
                  "Love the direction you went with the narrative, fantastic
                  writing. Gosh, I can just imagine the types of people who
                  would benefit from YOU telling their story, you’re creating
                  artwork with words– fantastic. Keep up the good work."
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="testimonial-img" src={Megan} alt="" />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">Megan Tribble</h4>
                    <p className="testimonial-desc">
                      Content Marketer and Coach, <br />
                      Danville, Indiana, United States.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid copysection">
        <h4 style={{ fontSize: "20px" }}>
          You can say “I’ve been a pilot for 20 years” or “I’ve flown commercial
          jets for over two decades” We compel sales for your business using the
          right words. The world rewards sensation before substance. Our words
          present your business as delivering something divine your customers
          can’t get elsewhere; they won’t just pay money, they’ll pay attention…
          you can multiply your business or remain where you are.
        </h4>
        <a
          href="https://calendly.com/kalukalu/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-copysection">MULTIPLY MY BUSINESS</button>
        </a>
      </div>
      <Masterpiece />
      <QuestionandBlog />
    </>
  );
};

export default EmailOutreach;
