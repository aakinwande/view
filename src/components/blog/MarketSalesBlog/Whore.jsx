import React, { useState, useEffect } from "react";
import CBE from "../../../images/blogpics/marketingsales/CBE.jpg";
import AI from "../../../images/blogpics/marketingsales/AI.jpg";
import WAH from ".././../../images/blogpics/marketingsales/WAH.jpg";
import LRAC from "../../../images/blogpics/marketingsales/LRAC.jpg";
import NCSA from "../../../images/blogpics/marketingsales/NCSA.jpg";
import '../TOCBlog/tocall.css'


const Whore = () => {
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
            BEING OF UTILITY MAKES YOU A WHORE?
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
            <img src={WAH} alt="" className="moreblog-img" />
            <p className="blog-p">
              We’re all whores; we just sell different parts of ourselves”
              -Thomas Shelby, OBE. <br />
              <br />
              If you have no use, you’re useless. Your value lies in the parts
              of yourself you commercialize; Your mind, time, energy, or other
              (hopefully virtuous) elements of your being. Make your offering
              note-worthy, and get great at marketing! <br />
              <br />
              Deploy tools to compel attention and convince audiences… intrigue,
              suspense, knowledge, humor, silence, shock, mystery, controversy,
              emotion, etc. <br />
              <br />
              The ability to get people doing what they otherwise wouldn’t have
              (on their own) seen a need to, is powerful. <br />
              <br />
              Everyone uses marketing and sales techniques scripted or free
              flow- <br />
              To show one way better than another, distinguish and layout.{" "}
              <br />
              Convince and convey, illustrate, and portray, describe and direct,
              induce and seduce. <br />
              To compel and conduct, euphemize and gentrify ideas, package and
              deliver thought. <br />
              To make the inexplicable concrete, to show feelings. <br />
              To guide gently and suggest kindly, to nudge people drawing their
              own conclusions in directions favoring you… <br />
              <br />
              It’s the essence of clear communication, marketing, and sales.{" "}
              <br />
              <br />
              You need these skills for social and business interaction. Babies
              cry and look adorable to get parents’ attention, we’ve practiced
              since birth! <br />
              <br />
              Sales & marketing teams need to know the psychology of persuasion,
              trends can only get you so far. Coaches, leaders, Teachers,
              entrepreneurs, and preachers all need to have their marketing
              utensils sharpened. <br />
              <br />
              Whatever you’re selling, You need the ability to convince!
              Audiences will need swaying- from potential life partners to
              customers to parliament. Regardless of what part of yourself you
              commercialize to be of utility in life, getting good at marketing
              has only upsides.
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
            <h5 class="card-title">HOW TO INCREASE YOUR PERCEIVED VALUE</h5>

            <a href="/marketingsales-one" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={AI} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
              {" "}
              THE COLD OUTREACH STRATEGY MAKING US MONEY
            </h5>

            <a href="/marketingsales-two" class="btn btn-primary">
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

export default Whore;
