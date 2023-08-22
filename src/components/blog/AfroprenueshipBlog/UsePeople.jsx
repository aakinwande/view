import React, { useState, useEffect } from "react";
import DNAYP from "../../../images/blogpics/afroprenueship/DNAYP.jpg";
import TFC from "../../../images/blogpics/afroprenueship/TFC.jpg";
import UPTMM from "../../../images/blogpics/afroprenueship/UPTMM.jpg";
import IS from "../../../images/blogpics/afroprenueship/IS.jpg";
import CGPT from "../../../images/blogpics/afroprenueship/CGPT.jpg";
import '../TOCBlog/tocall.css'


const UsePeople = () => {
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
            YOU DON’T NEED TO HAVE TALENT, HAVE LEVERAGE
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
            <img src={UPTMM} alt="" className="moreblog-img" />
            <p className="blog-p">
              Earn a living using other people’s talent! <br />
              <br />
              You’ve heard OPM (other people’s money) echoed in the investing
              world… OPT (other people’s talent) is perhaps not echoed as
              fervently but celebrated nonetheless. <br />
              <br />
              You can pay talented people to get jobs done for you or give them
              tools to deliver the best for others… <br />
              Either way you’re reaping benefits off talent absent from your
              toolkit. <br />
              <br />
              Find talented people to partner with, don’t waste time learning
              what they’re perfecting. Someone’s lurking who will if you don’t-
              making their own team formidable! <br />
              <br />
              Elite businesses understand the OPT concept hence all the rave
              about attracting and retaining top talent… <br />
              They’ll pay what they command and reap exponential benefits over
              time in return. <br />
              <br />
              It’s why sports teams trade players and tech giants juggle the
              same people. If Apple showed interest, Alphabet would love to have
              them. <br />
              They know top talent is the crux of the matter. <br />
              <br />
              Losing an investment opportunity isn’t as regret-inducing as
              Losing top talent. Assisting their upward trajectory earns you an
              asset that’ll keep yielding rewards (monetary and otherwise){" "}
              <br />
              <br />
              Efficient partnerships are predicated on each party being of
              recognizable utility, not 50/50 input splits <br />
              <br />
              If you can’t do it, fund those who can; you’ll earn from skills
              you don’t have. This approximates every partnership on the face of
              the planet. <br />
              <br />
              With all the generic #AI content out now, talented ghostwriters
              will become more expensive to hire… (If you need original content
              that is) <br />
              <br />
              We’re at the advent of an era where thinkers, writers, creators,
              etc. will have increasing value as the talent pool seemingly
              shrinks and computer-generated content floods your feed. <br />
              <br />
              FIND TOP TALENT NOW. <br />
              <br />
              Partner to optimize their workflow or start building a
              relationship that’ll afford you concessions when you need to work
              with them. <br />
              <br />
              They’ve invested time and acquired the skill; Swoop in! invest
              your resources and reap the benefits! Now’s the time to earn from
              people’s Talent by empowering them or using them.
            </p>
          </div>
        </div>
      </div>

      <p className="readmore-ktn">Read more KTN on Afropreneurship</p>
      <div className="bottomblog-ktn">
        <div class="card theblogcard">
          <img src={DNAYP} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
              BUILD TRACTION IN YOUR BUSINESS BEFORE NICHING DOWN
            </h5>

            <a href="/afro-one" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={TFC} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title"> YOU CAN BILL CLIENTS WHATEVER YOU WANT</h5>

            <a href="/afro-two" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={IS} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
              {" "}
              HOW TO OVEROCOME IMPOSTER SYNDROME IN ANY INDUSTRY{" "}
            </h5>

            <a href="/afro-four" class="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
        <div class="card theblogcard">
          <img src={CGPT} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
              COLD OUTREACH (HUMAN VS ARTIFICIAL INTELLIGENCE)
            </h5>

            <a href="/afro-five" class="btn btn-primary">
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

export default UsePeople;
