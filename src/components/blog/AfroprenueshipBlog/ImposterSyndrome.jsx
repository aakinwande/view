import React, { useState, useEffect } from "react";
import DNAYP from "../../../images/blogpics/afroprenueship/DNAYP.jpg";
import TFC from "../../../images/blogpics/afroprenueship/TFC.jpg";
import UPTMM from "../../../images/blogpics/afroprenueship/UPTMM.jpg";
import IS from "../../../images/blogpics/afroprenueship/IS.jpg";
import CGPT from "../../../images/blogpics/afroprenueship/CGPT.jpg";
import '../TOCBlog/tocall.css'


const ImposterSyndrome = () => {
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
            HOW TO OVEROCOME IMPOSTER SYNDROME IN ANY INDUSTRY
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
            <img src={IS} alt="" className="moreblog-img" />
            <p className="blog-p">
              Here’s how I overcame imposter syndrome!! <br />
              When I tell people I’m a writer, deep down, I understand that
              writing can be done by anybody. (***let’s face it, these are words
              we speak that are just strung together and somehow, we can attach
              monetary value to a body of work) <br />
              <br />I asked myself where exactly the value for my work lays. And
              for me it’s in THOUGHT AND TRUTH …Stay with me here, you don’t
              want to miss this! <br />
              <br />
              I’ve sold some bodies of work for say USD$2000 and someone else
              had seen it prior, who wouldn’t value it for a slice of pizza.
              (their loss!) <br />
              <br />
              But how do I reconcile the debate within my mind on if my work is
              worth any money? <br />
              <br />
              I ask myself: “To the best of your ABILITY TO THINK did you speak
              the whole TRUTH?” <br />
              <br />
              I understand I’m primarily paid to think, and that’s the
              difference between writers- their inclinations and schools of
              thought! (I’ll even debate this) <br />
              <br />
              I’ve written about how two persons can have the same experience
              with varying outcomes, and it’s the same here as we can consume
              the same research content and distill the information differently…{" "}
              <br />
              <br />
              Every writer is inclined in a certain way and when a client likes
              the way I’m inclined to think, that’s what they pay me for! <br />
              <br />
              …HERE’s THE GOOD PART <br />
              <br />
              I don’t serve everybody, …I can’t! I can only serve those in
              tandem with how my brain mechanism analyses and dishes out
              content; …from copywriting projects to ghostwriting projects.{" "}
              <br />
              <br />
              Understanding that the uniqueness of my thought-trains as an
              individual is valuable not just for their originality, but for the
              proven net positives they have on my clients’ operations and needs
              makes me confident enough to call myself a writer and receive pay
              without feeling an imposter
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
          <img src={UPTMM} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">
              YOU DON’T NEED TO HAVE TALENT, HAVE LEVERAGE
            </h5>

            <a href="/afro-three" class="btn btn-primary">
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

export default ImposterSyndrome;
