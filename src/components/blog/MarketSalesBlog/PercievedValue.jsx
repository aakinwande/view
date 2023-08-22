import React, { useState, useEffect } from "react";
import CBE from "../../../images/blogpics/marketingsales/CBE.jpg";
import AI from "../../../images/blogpics/marketingsales/AI.jpg";
import WAH from ".././../../images/blogpics/marketingsales/WAH.jpg";
import LRAC from "../../../images/blogpics/marketingsales/LRAC.jpg";
import NCSA from "../../../images/blogpics/marketingsales/NCSA.jpg";
import '../TOCBlog/tocall.css'

const PercievedValue = () => {
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
            HOW TO INCREASE YOUR PERCEIVED VALUE
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
            <img src={CBE} alt="" className="moreblog-img" />
            <p className="blog-p">
              You can earn $96k, $36k or $144k annually, depending on the month
              as a solopreneur. Content presented like that embodies the essence
              of copywriting, marketing, and sales. <br />
              <br />
              Its packaging predicated on truth to pique interests… <br />
              <br />
              I’ve just said “Some months, a solopreneur may earn $8k, in other
              months- $3k, and in others- $12k” You can say “I’ve been a pilot
              for 20 years” or “I’ve flown commercial jets for over two decades”
              The latter packs more gravitas! <br />
              <br />
              This representation strategy is effective in pitches, book
              marketing, ads, delivering reports to investors, etc. <br />
              <br />
              Speak the truth and deliver a Bentley in what looks like a yacht.
              Goes without saying- you must have the Bentley! …You must have the
              substance! …Or at least be convinced you do <br />
              <br />
              When marketing, articulate, formulate, and present:
              <br />
              1.Ensuring you take nothing away from your impeccable substance;{" "}
              <br />
              <br />
              2.Ensuring your substance is represented by a status it may yet
              become. <br />
              <br />
              You lose currency of PERCEIVED VALUE if you cannot market the
              right way even when you’re crème de la crème…
            </p>
          </div>
        </div>
      </div>

      <p className="readmore-ktn">Read more KTN on Marketing and Sales</p>
      <div className="bottomblog-ktn">
        <div class="card theblogcard">
          <img src={AI} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
              THE COLD OUTREACH STRATEGY MAKING US MONEY
            </h5>

            <a href="/marketingsales-two" class="btn btn-primary">
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

export default PercievedValue;
