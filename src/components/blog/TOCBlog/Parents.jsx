import React, { useState, useEffect } from "react";
import MYLWTA from "../../../images/blogpics/thoughtofchop/MYLWTA.jpg";
import SPC from "../../../images/blogpics/thoughtofchop/SPC.jpg";
import STBGG from "../../../images/blogpics/thoughtofchop/STBGG.jpg";
import TAT from "../../../images/blogpics/thoughtofchop/TAT.jpg";
import LEOD from "../../../images/blogpics/thoughtofchop/LEOD.jpg";
import '../TOCBlog/tocall.css'

const Parents = () => {
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
            PARENTS DON’T HATE CHILDREN, THEY SPEAK DIFFERENT LANGUAGES
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
            <img src={LEOD} alt="" className="moreblog-img" />
            <p className="blog-p">
              Light serves to expose or direct, depending on context and
              situation. Light coming into a situation can mean clarity and
              direction and in other situations, light thrown in will mean
              uncovering that which was previously hidden. <br />
              <br />
              The same multi-meaning can be read into a range of concepts and
              the most intriguing examples can be found all over the human
              experience. <br />
              <br />
              People can interpret gifts as a show of condescension and an
              attempt at belittling their person. <br />
              <br />
              There’s a parable that tells a story of someone jumping in front
              of a bullet in an attempt to save another’s life, only for the
              saved to turn round and complain that the savior’s blood has
              stained their white shirt. <br />
              <br />
              UNDERSTAND THIS: <br />
              <br />
              An object’s perception affects their reception. <br />
              <br />
              What that means is what you’re giving may not be what is being
              received. <br />
              <br />
              When you shed light on someone’s path, you may do so with the
              intention of guiding them and illuminating their journey but what
              you might have unintentionally done is brought their doom trail to
              light literally. <br />
              <br />
              You might have sent them spiraling into depression because with
              that light comes the reality that they’re headed toward
              destruction. <br />
              <br />
              You mean well but on the receiving end, it’s perceived
              differently. <br />
              <br />
              How do you bridge the gap to ensure everyone is on the same page?{" "}
              <br />
              <br />
              Have you ever wondered why children think parents hate them when
              parents discipline them? Parents only hope to correct a
              destructive habit but the kids receive a message of hatred. <br />
              <br />
              The correction is rooted in love but both parties are essentially
              communicating with different languages. <br />
              <br />
              If we communicate intentions clearly, maybe there’ll be more
              embrace of good deeds as what they are. <br />
              <br />
              Maybe if we let people know what it takes to gift them, they’ll
              appreciate it more. Or maybe we should gift only to the limit of
              the receiver’s level of understanding. <br />
              <br />
              If I bought a vehicle for a 2yr old, they certainly wouldn’t
              appreciate it as much as onlookers who frequent public transport
              systems… <br />
              <br />
              When you shed light, try, and explain that you mean to direct, not
              to expose. Unless that is indeed your intention. <br />
              <br />
              Always make sure you’re speaking the same language
            </p>
          </div>
        </div>
      </div>
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
          <img src={STBGG} class="card-img-top blog-img-bb" alt="..." />
          <div class="card-body">
            <p className="card-text">Date: June 21, 2023 </p>
            <h5 class="card-title">GOING TO THE GYM ISN’T NECESSARY</h5>

            <a href="/toc-three" class="btn btn-primary">
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

export default Parents;
