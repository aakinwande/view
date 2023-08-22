import React, { useState, useEffect } from "react";
import DNAYP from "../../../images/blogpics/afroprenueship/DNAYP.jpg";
import TFC from "../../../images/blogpics/afroprenueship/TFC.jpg";
import UPTMM from "../../../images/blogpics/afroprenueship/UPTMM.jpg";
import IS from "../../../images/blogpics/afroprenueship/IS.jpg";
import CGPT from "../../../images/blogpics/afroprenueship/CGPT.jpg";

const BuildTransaction = () => {
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
          BUILD TRACTION IN YOUR BUSINESS BEFORE NICHING DOWN
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
            <img src={DNAYP} alt="" className="moreblog-img" />
            <p className="blog-p">
            Don’t niche away your profit! <br />
              “Niching-down” is trumpeted for good reason; <br />
              But don’t overly simplify your offer untill your prospect market
              resembles endangered species… <br />
              <br />
              Target a market with flourishing numbers. Offer solutions to their
              mutual needs. <br />
              Especially as you’re trying to build traction… <br />
              You’ll hardly uncover all you can offer stomping unto the scene
              laser-niched down without exploration. <br />
              <br />
              The flip-side is you can bill more if your prospective market has
              exclusivity like endangered species… <br />
              <br />
              BUT <br />
              <br />
              Starting out, you wouldn’t have amassed the liver nor value
              proposition to command premium pay."
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>
                EXPLORE AND BUILD TRACTION FIRST.{" "}
              </span>
              <br />
              <br />
              You’ve got one shot- don’t target 2 birds on a wire. Go to the
              park, target the flock of birds group feeding. <br />
              You dramatically increase your probability of hitting one <br />
              <br />
              Do so couple more times to uncover the “best” offer THEN
              niche-down. <br />
              <br />
              THE BEST OFFER is one that exercises your strengths, tackles a
              unique pain point for clients, and makes your bank app your
              favorite to open. <br />
              <br />
              Don’t niche away your profit!
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>

      <p className="readmore-ktn">Read more KTN on Afropreneurship</p>
      <div className="bottomblog-ktn">
        <div class="card theblogcard">
          <img src={TFC} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">YOU CAN BILL CLIENTS WHATEVER YOU WANT</h5>

            <a href="/afro-two" class="btn btn-primary">
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

export default BuildTransaction;
