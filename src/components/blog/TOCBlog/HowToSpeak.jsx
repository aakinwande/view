import React, { useState, useEffect } from "react";
import SPC from "../../../images/blogpics/thoughtofchop/SPC.jpg";
import STBGG from "../../../images/blogpics/thoughtofchop/STBGG.jpg";
import TAT from "../../../images/blogpics/thoughtofchop/TAT.jpg";
import MYLWTA from "../../../images/blogpics/thoughtofchop/MYLWTA.jpg";
import LEOD from "../../../images/blogpics/thoughtofchop/LEOD.jpg";
import '../TOCBlog/tocall.css'

const HowToSpeak = () => {
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
          <h4 className="moreblog-title">GROW YOUR CONFIDENCE BY 1000%</h4>
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
            <img src={SPC} alt="" className="moreblog-img" />
            <p className="blog-p">
              Listen to confident people speak you’ll start expressing yourself
              confidently… <br />
              Experiencing an energy awakens it’s likeness within you. <br />
              <br />
              “Iron sharpeneth iron” “Show your friends I’ll tell who you are”
              “Birds of same feather flock together” The fact is- Like calls
              unto like, deep unto deep. <br />
              <br />
              Listen to confident people speak people will say you’re confident
              as all you’ll know to be is that. Just like computers- (garbage-in
              garbage-out) what you ingest you’ll digest and project. <br />
              <br />
              That’s why they say “read a lot” because you’ll speak only
              knowledge! …that’s literally all you’ll have to give! <br />
              <br />
              Practice makes improvement! Keep ingesting all you want to be.{" "}
              <br />
              <br />
              Curate your content diet you’ll create the reality you previously
              thought could only be imagined. Surround your conscious mind with
              indicators of what you want, your subconscious will deliver HOW to
              produce them.
            </p>
          </div>
        </div>
      </div>

      <p className="readmore-ktn">Read more KTN on Thought to Chop</p>
      <div className="bottomblog-ktn">
        <div class="card theblogcard">
          <img src={MYLWTA} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">HOW ORIGINAL IS YOUR LIFE? </h5>

            <a href="/toc-two" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={STBGG} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title"> GOING TO THE GYM ISN’T NECESSARY </h5>

            <a href="/toc-three" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={TAT} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">MEDITATION OR INSOMNIA? </h5>

            <a href="/toc-four" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={LEOD} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
              PARENTS DON’T HATE CHILDREN, THEY SPEAK DIFFERENT LANGUAGES{" "}
            </h5>

            <a href="/toc-five" class="btn btn-primary">
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

export default HowToSpeak;
