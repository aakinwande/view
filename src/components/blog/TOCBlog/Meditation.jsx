import React, { useState, useEffect } from "react";
import MYLWTA from "../../../images/blogpics/thoughtofchop/MYLWTA.jpg";
import SPC from "../../../images/blogpics/thoughtofchop/SPC.jpg";
import STBGG from "../../../images/blogpics/thoughtofchop/STBGG.jpg";
import TAT from "../../../images/blogpics/thoughtofchop/TAT.jpg";
import LEOD from "../../../images/blogpics/thoughtofchop/LEOD.jpg";
import '../TOCBlog/tocall.css'

const Meditation = () => {
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
          <h4 className="moreblog-title">MEDITATION OR INSOMNIA?</h4>
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
            <img src={TAT} alt="" className="moreblog-img" />
            <p className="blog-p">
              3rd April 2023 -Thoughts I meditated on at 12:07 AM <br />
              <br />
              1. LIMITED MINDSET resembles CONTENTMENT, check yourself.
              <br />
              <br />
              2. Fine line between GREED and UNDERVALUING your service; How
              should you walk that line to avoid falling on either end of the
              spectrum. <br />
              <br />
              3. People will say you’re SPINELESS but if you eventually avoid
              catastrophe having run away earlier, they’ll say you’re
              PERCEPTIVE. <br />
              <br />
              4. Dream big! If you don’t make it they’ll say you’re DELUSIONAL
              but if you do they’ll call you GENIUS. …Fair game <br />
              <br />
              5. There’ll always be commentators in and around your life, DON’T
              be one. <br />
              <br />
              6. Advice will come from loved ones stemming from the purest place
              in their hearts about what they believe is best for you. <br />
              <br />
              Going against the grain is considered truant and dismissive but if
              your route works out, you’re considered independent and a born
              leader. <br />
              <br />
              7. You will be wrong many times when you take charge of your life
              but the alternative is to be wrong many times because another
              person is in control of your life. <br />
              <br />
              8. Will you CREATE an imperfect yet fulfilling life and take
              responsibility for wins and losses or BURDEN people who have their
              lives to live with the task of curating yours too. <br />
              <br />
              9. Spending life COMPLAINING leads to jagged self-worth and quiet
              desperation; Embracing RESPONSIBILITY despite difficulties leads
              to impervious liberty of mind and fortitude of spirit even in
              imperfect conditions and outcomes. <br />
              <br />
              10. Am I crazy, I should be ASLEEP. <br />
              What crossed your mind the last time you meditated?
            </p>
          </div>
        </div>
      </div>
      <p className="readmore-ktn">Read more KTN on Thought to Chop</p>
      <div className="bottomblog-ktn">
        <div class="card theblogcard">
          <img src={SPC} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">GROW YOUR CONFIDENCE BY 1000%</h5>

            <a href="/toc-one" class="btn btn-primary">
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
          <img src={MYLWTA} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">HOW ORIGINAL IS YOUR LIFE?</h5>

            <a href="/toc-two" class="btn btn-primary">
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

export default Meditation;
