import React from "react";
import "./ghostwriting.css";
import OurWork from "../home/ourwork/OurWork";
import Susan from "../../images/testimonialpics/susan.jpeg";
import Chritiana from "../../images/testimonialpics/chritiana.jpg";
import Eze from "../../images/testimonialpics/eze.jpg";
import David from "../../images/testimonialpics/david.jpg";
import Travis from "../../images/testimonialpics/travis.jpg";
import Ralph from "../../images/testimonialpics/Ralph.jpeg";
import Masterpiece from "../home/masterpiece/Masterpiece";

const Ghostwriting = () => {
  return (
    <>
      <div class="container-fluid-hero-ghost">
        <div class="row background-image-ghost">
          <div className="col">
            <div className="row">
              <h5 className="hero-header-ghost">
                Everyone has a book in them. Short of words? Speak with a 6ft2”
                ghostwriter.
              </h5>
              <div className="row">
                <p className="hero-desc-ghost">
                  Let’s talk about your book idea! If you haven’t got ideas
                  that’s okay, we’ll listen to your story and brainstorm for
                  you.
                </p>
              </div>
              <div className="row btn-crow-ghost">
                <div className="col">
                  <a
                    href="https://calendly.com/kalukalu/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-hero-one-ghost">
                      <h6 className="btn-text-ghost">FREE DISCOVERY CALL</h6>
                    </button>
                  </a>
                </div>
                <div className="col">
                  <a href="/contact-us">
                    <button className="btn-hero-two-ghost">
                      <h6 className="btn-text-ghost">SHARE YOUR ROUGH IDEAS</h6>
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
          <div className="col-lg-4 col-md-6 col-12">
            <div className="row">
              <p style={{ color: "black" }} className="testimonial-text">
                "I believe, like being a composer, it is a gift to come up with
                a piece of writing that can move people to action- Only some
                people have this gift. I believe you are one of those people.
                For those who are not great at writing, Kick&co services are the
                answer to their problem. Oftentimes, telling our stories can be
                difficult. We want to put ourselves in the best light. We are a
                little too close to our own pain and pride to tell it in a way
                that is interesting to others. Having someone write it for us,
                great storytellers like the team here is a boon. "
              </p>
            </div>
            <div className="row">
              <div className="col-4">
                <img className="testimonial-img" src={Susan} alt="" />
              </div>
              <div className="col-8 pt-3">
                <div className="row">
                  <h4 className="testimonial-name">Susan Ritter</h4>
                  <p className="testimonial-desc">
                    {" "}
                    Founder, Wealthy Wise Woman, Greater Tampa Bay Area.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div className="col">
              <div className="row">
                <p style={{ color: "black" }} className="testimonial-text">
                  "Ghostwriting is a skill. To catch the thoughts and voice of
                  another person and put it into your words is a skill, not many
                  people do well, but you are super talented, so I can see why
                  you are successful. I think this is a wonderful service. So
                  many people have great ideas and stories to tell, but they
                  don't have the words. They don't understand the craft. In
                  those many, many cases, this team can help them get a story
                  told. I know I will recommend you! If creativity is not your
                  thing and words are not your best asset, check out Kick’s
                  services. They're great at what they do."
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="testimonial-img" src={Chritiana} alt="" />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">Christina Beauchemin</h4>
                    <p className="testimonial-desc">
                      {" "}
                      Author, Speaker, Educator,
                      <br /> Let My Legacy Be Love, LLC, Malden Bridge, <br />
                      New York, United States
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
                  "Kick&co creations are more than just compelling narratives;
                  they are works of art. Reach out to them for exceptional
                  ghostwriting and marketing services where you'll receive more
                  than words, you’ll get stories told with passion and depth,
                  especially for those seeking outstanding content and
                  meaningful connections with their audience, look no further"
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="testimonial-img" src={Ralph} alt="" />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">Ralph Danna P. A.</h4>
                    <p className="testimonial-desc">
                      {" "}
                      Owner of Dannasales, Spring Hill, Florida, United States .
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

          <div class="col-lg-4 col-md-6 col-12">
            <div className="col">
              <div className="row">
                <p style={{ color: "black" }} className="testimonial-text">
                  "Your experience of ghostwriting is a great example of turning
                  ideas into profitable ventures. It's all about adding value
                  and creating win-win partnerships. Providing this valuable
                  service has been your key to success. Well done!"
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="testimonial-img" src={David} alt="" />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">David D. Doerrier</h4>
                    <p className="testimonial-desc">
                      {" "}
                      Presentation Empowerment Coach David D. Doerrier,
                      <br /> LLC Atlanta Metropolitan Area, <br />
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
                <p style={{ color: "black" }} className="testimonial-text">
                  "I want to send a big appreciation to Kick&co, I never thought
                  I'd write a book until last year considering I didn't even
                  like reading until last year. Your help, expertise, and
                  openness to work with me is greatly appreciated."
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img className="testimonial-img" src={Travis} alt="" />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">Travis Robbins</h4>
                    <p className="testimonial-desc">
                      Adventurer/Walker, The Connection Odyssey,Watertown, South
                      Dakota, United States.
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
            Your experience in life answers someone’s search for answers- that’s
            great content! We listen to digest your story, then package and
            present it in the best form to achieve a purpose. You can grow your
            authority in your industry, turn your experiences into passive
            income, curate your legacy, impact people’s lives, or do nothing…
          </p>
        </div>
        <div className="row">
          <a
            href="https://calendly.com/kalukalu/30min"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}
          >
            <button className="newsletter-btn">
              TURN MY STORY TO PASSIVE INCOME
            </button>
          </a>
        </div>
      </div>
      <Masterpiece />
    </>
  );
};

export default Ghostwriting;
