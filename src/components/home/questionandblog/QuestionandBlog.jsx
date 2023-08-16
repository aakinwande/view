import React from "react";
import "./questionandblog.css";

const QuestionandBlog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col question-col">
          <div className="row">
            <h4 className="question-location">Questions?</h4>
          </div>
          <div className="row">
          <div className="col">
             <button className="question-btn">SEE OUR FAQ</button>
             </div>
          </div>
        </div>
        <div className="col blog-col">
          <div className="row">
            <h4 className="blog-location">Blog</h4>
          </div>
          <div className="row">
            <div className="col">
            <button className="blog-btn">VISIT OUR BLOG</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionandBlog;
