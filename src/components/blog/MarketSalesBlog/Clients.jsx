import React, { useState, useEffect } from "react";
import CBE from "../../../images/blogpics/marketingsales/CBE.jpg";
import AI from "../../../images/blogpics/marketingsales/AI.jpg";
import WAH from ".././../../images/blogpics/marketingsales/WAH.jpg";
import LRAC from "../../../images/blogpics/marketingsales/LRAC.jpg";
import NCSA from "../../../images/blogpics/marketingsales/NCSA.jpg";
import '../TOCBlog/tocall.css'


const Clients = () => {
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
    HOW TO LAND AND RETAIN ALL CLIENTS
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
      <img src={LRAC} alt="" className="moreblog-img" />
      <p className="blog-p">
      Marketing isn’t presenting the full picture; it’s turning heads and hinting full picture! <br /><br />
      Start observing the picture they form then affirm their imaginations with complimentary products, 
      brands, or services. <br /><br />
      It’s like Leonardo DiCaprio’s “inception”- Your goal is: <br />
      MAKE THEM REACH CONCLUSIONS ON THEIR OWN 
      Otherwise, they feel cheated or coerced to purchase. <br /><br />
      When #Apple sells iPhones (**with a million different capabilities) they market features not the whole 
      product.<br /><br />
      They create camera-quality ads and hint editing power. 
      When you purchase, you get the camera, speakers, screen resolution, processor speed, multitasking 
      capabilities, security features etc. <br /><br />
      In a market with high concern for Cyber security, guess which feature gets the higher ad budget. <br /><br />
      …Listen to your audience. Deliver what their mind makes your product out to be. 
      You’re recording sales anyway! <br /><br />
      Whether they’ve purchased to use one feature or all, YOU SOLD. <br /><br />
      HERE’s THE KICKER <br /><br />
      You’ve not used your iPhone for all it can deliver I can bet on that; Sometimes just finding out stuff it 
      can do justifies your purchase months down the line! <br /><br />
      Let your brand/product be a gift that keeps on giving. <br /><br />
      You DON’T have to say all you can deliver. Market one “best-seller” feature and when you reel them 
      in, JUST KEEP GIVING! <br /><br />
      1.Be a no-brainer deal (multi-dimensional utility) <br /><br />
      2.Observe the needs of your market/audience <br /><br />
      3.Market the aspect of your offer they seem to need <br /><br />
      4.Be the solution to that pressing need <br /><br />
      5.Keep unfolding your multi-dimensional utility in time <br /><br />
      That’s how you LAND AND RETAIN buyers.
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
    <img src={WAH} class="card-img-top blog-img-bb" alt="..." />
    <div class="card-body">
      <p className="card-text">Date: June 21, 2023 </p>
      <h5 class="card-title">BEING OF UTILITY MAKES YOU A WHORE?</h5>

      <a href="/marketingsales-three" class="btn btn-primary">
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
  )
}

export default Clients
