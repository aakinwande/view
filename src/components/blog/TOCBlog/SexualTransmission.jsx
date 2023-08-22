import React, { useState, useEffect } from "react";
import MYLWTA from "../../../images/blogpics/thoughtofchop/MYLWTA.jpg";
import SPC from "../../../images/blogpics/thoughtofchop/SPC.jpg";
import STBGG from "../../../images/blogpics/thoughtofchop/STBGG.jpg";
import TAT from "../../../images/blogpics/thoughtofchop/TAT.jpg";
import LEOD from "../../../images/blogpics/thoughtofchop/LEOD.jpg";
import '../TOCBlog/tocall.css'

const SexualTransmission = () => {
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
          <h4 className="moreblog-title">GOING TO THE GYM ISN’T NECESSARY</h4>
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
            <img src={STBGG} alt="" className="moreblog-img" />
            <p className="blog-p">
              Driving to the gym to run treadmills feels a bit odd knowing I
              could’ve run to the gym and back home as a full work-out session
              😅 Here are some HUSH HUSH 🤫 motivations for remaining a gym
              member-
              <br />
              <br /> 1. Sexual transmutation! …Yeah. Observing and channeling
              good energy from “attractive” people inspires productive work-out
              sessions - Like when your crush comes to watch your game, and
              suddenly you display pro-level skill for 90 minutes straight 😂{" "}
              <br />
              <br />
              2. Healthy competition! Call it camaraderie or any other positive
              term, but witnessing my friend run the treadmill for 60 minutes
              straight before lifting some mighty kilograms makes me want to at
              least attempt the same feat or push the envelope, so I can flex on
              him for a mutual laugh. 😂
              <br />
              <br />
              3. Belonging to a tribe! We all crave this. That’s why remote
              workers who agitated for the liberty to work from “home” still
              step out to “work” from coffee shops and co-working spaces
              sometimes. Working out for 30 minutes straight seems a short while
              with your tribe gingering you, but you may struggle to complete
              15-minute sessions alone. Even lone wolves can achieve more with a
              tribe… I support wellness, fitness, health, and wholeness.
              Whatever motivates your discipline and commitment to good health,
              whether you exercise at the gym or do the work from home; kudos!
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
          <img src={TAT} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title"> MEDITATION OR INSOMNIA? </h5>

            <a href="/toc-four" class="btn btn-primary">
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

export default SexualTransmission;
