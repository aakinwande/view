import React from "react";
import "./tocall.css";

const BlogAll = (props) => {
  const shareOnFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(props.title)}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnInstagram = () => {
    // Implement Instagram sharing logic here
    // Note that Instagram has limitations on sharing content programmatically
  };

  const shareOnLinkedIn = () => {
    const shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(props.title)}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <><div className="container toc">
      <a href="/blog" className="blogback">
      <p>
        <i class="fa-solid fa-arrow-left-long"></i> BACK TO BLOG
      </p>
    </a>
    <h4 className="moreblog-title">{props.title}</h4><p className="moreblog-icon">Share
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
      </p><img src={props.img} alt="" className="moreblog-img" /><p className="moreblog-desc">{props.desc}</p>
    </div>
    </>
  );
};

export default BlogAll;

