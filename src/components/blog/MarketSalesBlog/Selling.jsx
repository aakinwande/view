import React, { useState, useEffect } from "react";
import CBE from "../../../images/blogpics/marketingsales/CBE.jpg";
import AI from "../../../images/blogpics/marketingsales/AI.jpg";
import WAH from ".././../../images/blogpics/marketingsales/WAH.jpg";
import LRAC from "../../../images/blogpics/marketingsales/LRAC.jpg";
import NCSA from "../../../images/blogpics/marketingsales/NCSA.jpg";
import '../TOCBlog/tocall.css'


const Selling = () => {
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
    IF YOU HATE THE FEELING OF SELLING READ THIS
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
      <img src={NCSA} alt="" className="moreblog-img" />
      <p className="blog-p">
      Don’t sell alcohol to people in remission to meet sales quotas, you’ll
        feel yuck!
        <br /><br /> Observe keyboards when crafting marketing narratives- “yoU”
        comes before “I” (it works best this way) <br />
        Care for clients before
        yourself so marketing won’t leave a sour aftertaste. <br /><br />
        IF MARKETING FEELS
        YUCK, YOU’RE DOING IT WRONG <br /><br />The aim is to land clients who NEED your
        service/product, not to land clients at any cost. Here’s a strategy 🏆
        <br /><br />
        SWITCH MARKETING THEMES from “here’s why you need me” to “here’s how I
        meet your needs” <br /><br />
        The former emphasizes their needs and CLAIMS you’re the
        solution; the latter suggests their needs are apparent to everyone and
        SHOWS you’re the solution. <br /><br />
        IS IT CLEAR THEY NEED YOU? <br /><br />
        Position as the
        viable option- Let them experience what it’d be like to have you or your
        product on their team; it’ll sway purchasing decisions in your favor.<br /><br />
        Your job is to make sure you’re positioned in their view and can back up
        your claims! <br /><br />AVOID DEMEANING CLIENT ACQUISITION PHASES <br /><br />If 25 clients are
        your target, land one and tailor your marketing campaign to their
        Likeness. When you land one, there’s another in the ethos. Find the
        second one, and you’ll see there are 10 more.<br /><br /> This perspective will make
        marketing easier ON you… Your conscience is clear; you’re making genuine
        money, your clients are having a transformative experience with your
        offerings… <br /><br />Doesn’t make marketing easier FOR you though.<br /><br /> This isn’t a
        “hack” … <br /><br />It’s just what you do to stop marketing from feeling YUCK.
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
    <img src={LRAC} class="card-img-top blog-img-bb" alt="..." />
    <div class="card-body">
      <p className="card-text">Date: June 21, 2023 </p>
      <h5 class="card-title">
      HOW TO LAND AND RETAIN ALL CLIENTS
      </h5>

      <a href="/marketingsales-four" class="btn btn-primary">
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

export default Selling;
