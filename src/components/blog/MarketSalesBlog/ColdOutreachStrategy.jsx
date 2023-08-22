import React, { useState, useEffect } from "react";
import CBE from "../../../images/blogpics/marketingsales/CBE.jpg";
import AI from "../../../images/blogpics/marketingsales/AI.jpg";
import WAH from ".././../../images/blogpics/marketingsales/WAH.jpg";
import LRAC from "../../../images/blogpics/marketingsales/LRAC.jpg";
import NCSA from "../../../images/blogpics/marketingsales/NCSA.jpg";
import '../TOCBlog/tocall.css'


const ColdOutreachStrategy = () => {
  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent("GROW YOUR CONFIDENCE BY 1000%")}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnInstagram = () => {
    // Implement Instagram sharing logic here
    // Note that Instagram has limitations on sharing content programmatically
  };

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
      window.location.href
    )}&title=${encodeURIComponent("GROW YOUR CONFIDENCE BY 1000%")}`;
    window.open(shareUrl, "_blank");
  };

  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container-fluid toc">
        <div className="row">
          <h4 className="moreblog-title">
            THE COLD OUTREACH STRATEGY MAKING US MONEY
          </h4>
        </div>
        <div className="row">
          <div className="col-4">
            <p className="moreblog-icon">
              Share KTN on
              <div className="blog-icons">
                <button onClick={shareOnFacebook} className="blog-icon">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button onClick={shareOnTwitter} className="blog-icon">
                  <i className="fab fa-twitter"></i>
                </button>
                <button onClick={shareOnInstagram} className="blog-icon">
                  <i className="fab fa-instagram"></i>
                </button>
                <button onClick={shareOnLinkedIn} className="blog-icon">
                  <i className="fab fa-linkedin"></i>
                </button>
              </div>
            </p>
            <p className="moreblog-icon">
              Subscribe to KTN +
              <button className="ktnplus-btn">SUBSCRIBE</button>
            </p>
          </div>
          <div className="col-8">
            <img src={AI} alt="" className="moreblog-img" />
            <p className="blog-p">
              Cold outreach is an art AI CAN’T help you with… <br />
              Your message is secondary! …finding where “ideal clients” nest
              determines the success rate of your campaign. <br />
              <br />
              Ever been hunting? …you track a trail to find the pack. <br />
              <br />
              Birds of the same feathers flock together so find where they hang
              out before shooting. Effective cold outreach is the same. You’re
              hunting for clients in a jungle marketplace; Identify one and
              track their trail! <br />
              <br />
              Chances are they relate with like-minded people with similar
              challenges. In every cluster of 10, at least 2 have mutual
              challenges. (Could be more) <br />
              <br />
              They’ve identified themselves for you, find their clusters, and
              your message will be welcomed like music to a choir! <br />
              <br />
              This strategy is HOW TO HIT BIRDS IN A FLOCK. Throwing stones
              almost guarantees you hit AT LEAST TWO… <br />
              <br />
              Don’t worry about the ability to throw at first, how’s your
              ability to track? Focus on finding and speaking to the right
              flock. <br />
              <br />
              Just putting out messages into the abyss is a (hopeful) outreach
              campaign strategy… (Hope isn’t a plan) <br />
              <br />
              Proper tracking unravels avatar patterns and behavioral frameworks
              that increase the potency of your message as it’ll be landing on
              fertile soil! <br />
              <br />
              Learning what connects avatar networks also informs what offers
              you can make to turn “maybe” to “I wish I’d met you sooner, how do
              I make a payment please?” <br />
              <br />
              One avatar’s network is a treasure trove of potential leads! …if
              our network is our net worth, their network is your homework.{" "}
              <br />
              <br />
              It’ll be like hovering magnets over a toolbox of shiny objects;
              rest-assured metals will cling… Follow spanners to sheds they lay-
              you might end up finding a car.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <p className="readmore-ktn">Read more KTN on Marketing and Sales</p>
      <div className="bottomblog-ktn">
        <div class="card theblogcard">
          <img src={CBE} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
            HOW TO INCREASE YOUR PERCEIVED VALUE
            </h5>

            <a href="/marketingsales-one" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={WAH} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title"> BEING OF UTILITY MAKES YOU A WHORE? </h5>

            <a href="/marketingsales-three" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={LRAC} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">HOW TO LAND AND RETAIN ALL CLIENTS </h5>

            <a href="/marketingsales-four" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={NCSA} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
              IF YOU HATE THE FEELING OF SELLING READ THIS
            </h5>

            <a href="/marketingsales-five" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <a href="/blog" className="blogback">
          <button className="btn-readmorektn">VIEW ALL</button>
        </a>
      </div>



      <div className="container-fluid blogfootersection">
        <div className="row">
          <p className="moreblog-icon-footer">
            Connet with Us
            <div className="blog-icons">
              <button onClick={shareOnFacebook} className="blog-icon-footer">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button onClick={shareOnTwitter} className="blog-icon-footer">
                <i className="fab fa-twitter"></i>
              </button>
              <button onClick={shareOnInstagram} className="blog-icon-footer">
                <i className="fab fa-instagram"></i>
              </button>
              <button onClick={shareOnLinkedIn} className="blog-icon-footer">
                <i className="fab fa-linkedin"></i>
              </button>
            </div>
          </p>
          <div
            className={`back-to-top-button ${isAtTop ? "hidden" : ""}`}
            onClick={scrollToTop}
          >
            Back to Top{" "}
            <i class="fa-solid fa-caret-up" style={{ marginLeft: "5px" }}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColdOutreachStrategy;
