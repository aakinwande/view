import React, { useState, useEffect } from "react";
import DNAYP from "../../../images/blogpics/afroprenueship/DNAYP.jpg";
import TFC from "../../../images/blogpics/afroprenueship/TFC.jpg";
import UPTMM from "../../../images/blogpics/afroprenueship/UPTMM.jpg";
import IS from "../../../images/blogpics/afroprenueship/IS.jpg";
import CGPT from "../../../images/blogpics/afroprenueship/CGPT.jpg";
import '../TOCBlog/tocall.css'

const ColdOutreach = () => {
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
            COLD OUTREACH (HUMAN VS ARTIFICIAL INTELLIGENCE)
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
            <img src={CGPT} alt="" className="moreblog-img" />
            <p className="blog-p">
              CHATGPT GAVE SHALLOW ADVICE WHEN ASKED “HOW TO COLD OUTREACH”
              …LISTEN
              <br />
              UP! Show potential clients what you’ll do for them they don’t want
              to hear it.
              <br />
              <br /> HERE’S COLD OUTREACH SCRIPTS FOR LINKEDIN: <br />
              “Hey (their name), I’ve studied the content you’ve been putting
              out to promote your (X) here’s 10 original posts I’ve created in
              your brand’s voice that’ll speak to your high-ticket customers
              I’ll appreciate your thoughts on them and please feel free to use
              them if you’d like” <br />
              <br />
              HERE’s ANOTHER: “Hey (their name), I’ve seen your (X) product and
              I’ve created these (X) to supercharge your marketing campaign… I’d
              love to get your thoughts and here’s a 2-page pdf spelling out
              more sales conversion ideas you should be implementing.
              <br />
              <br />
              We can easily refine them with a brief conversation if we need to
              or you can just roll with them Let me know…” Both texts compel
              responses using the same subtle sales technique. They’ll bear
              different fruits… PAY ATTENTION TO THIS <br />
              <br />
              1.Your prospect deems you a “forward thinker” and an “initiative
              taker” …you’ve done the work to study and deliver heat! <br />
              <br />
              2.You’re willing to give value free which does two things for you-{" "}
              <br />
              A. If you’ve done due diligence and deliver something incredibly
              useful, they could be inclined to pay you for the work <br />
              B. They may think “huh, if all this fire is free, the premium
              version must be something to behold” …you’ve made an impression!{" "}
              <br />
              <br />
              3.You’ll induce a response (HIGH PROBABILITY) Everyone loves a “no
              obligation” gift. That’s what you’re giving. They can utilize your
              solution with zero burden. (Good enough to at least say thanks to
              you) <br />
              <br />
              4.When people put out marketing content, they crave feedback.
              You’ve not only given feedback you’re giving solutions that make
              their efforts more productive <br />
              <br />
              5.In the second script you’re making yourself part of their team
              saying “WE” …like their problem is yours. They’ll likely want to
              schedule that call. <br />
              <br />
              I’ve landed clients this way and gotten ignored but my batting
              average indicates I’ve won with this strategy way more. <br />
              <br />
              STOP knocking on doors, start kicking them in! Show what you’ll do
              for them, stop pitching “what’s possible” Your
              success-rate-determinant here is how potent the solution you
              deliver is. Posts, videos, Email funnel, Ideas etc. GIVE YOUR BEST
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
          <img src={UPTMM} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
              {" "}
              YOU DON’T NEED TO HAVE TALENT, HAVE LEVERAGE
            </h5>

            <a href="/afro-three" class="btn btn-primary">
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
          <img src={TFC} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
            YOU CAN BILL CLIENTS WHATEVER YOU WANT
            </h5>

            <a href="/afro-two" class="btn btn-primary">
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

export default ColdOutreach;
