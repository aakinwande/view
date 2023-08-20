import React from "react";
import "./questionandblog.css";

const QuestionandBlog = () => {
  return (
    <div className="container qb">
      <div className="row">
        <div className="col question-col">
            <div className="row">
            <h4 className="question-location">What's on your mind?</h4>
            </div>
            <div className="row">
            <a href="/faq">
            <button className="question-btn">See Answer to FAQ</button>
            </a>
            </div>
        </div>
        <div class="vertical-line"></div>
        <div className="col blog-col">
            <div className="row">
            <h4 className="blog-location">KTN</h4>
            </div>
            <div className="row">
            <a href="/blog">
            <button className="blog-btn">Read more...</button>
            </a>
            </div>
        </div>
      </div>
      


    
    </div>
  );
};

export default QuestionandBlog;
