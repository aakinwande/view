import React from "react";
import "./whatwedo.css";
import GhostBook from "../../../images/whatwedo-icons/ghostwriting.svg";
import Copy from "../../../images/whatwedo-icons/copywriting.svg";
import Market from "../../../images/whatwedo-icons/marketing.svg";

const WhatWeDo = () => {
  return (

    
    <div class="container-fluid whatwedo">
    <h4 class="whatwedo-header">What We Do</h4>
    
    <div class="row test">
      <div class="col-whatwedo">
        <div class="row">
          <h2 class="whatwedo-main-text">Professional Ghostwriting</h2>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="image-box">
              <img src={GhostBook} alt="Ghostwriting" />
            </div>
          </div>
        </div>
        <div class="row">
          <p class="whatwedo-paragraph">
            A unique and discrete way to bring your ideas and stories to life.
            Experienced ghostwriters are here to assist you in 
          </p>
        </div>
        <a
        href="/ghostwriting"  style={{textDecoration: 'none'}} 
      >
        <div class="row">
          <button class="whatwedo-btn">LEARN MORE</button>
        </div>
        </a>
      </div>
      <div class="col-whatwedo">
        <div class="row">
          <h2 class="whatwedo-main-text">Professional Copywriting</h2>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="image-box">
              <img src={Copy} alt="Copywriting" />
            </div>
          </div>
        </div>
        <div class="row">
          <p class="whatwedo-paragraph">
            Crafting compelling content to convey your message effectively.
            Our skilled copywriters ensure your ideas
          </p>
        </div>
        <a
        href="/copywriting"  style={{textDecoration: 'none'}} 
      >
        <div class="row">
          <button class="whatwedo-btn">LEARN MORE</button>
        </div>
        </a>
      </div>
      <div class="col-whatwedo">
        <div class="row">
          <h2 class="whatwedo-main-text">Marketing Public Relations</h2>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="image-box">
              <img src={Market} alt="Marketing and PR" />
            </div>
          </div>
        </div>
        <div class="row">
          <p class="whatwedo-paragraph">
            Crafting strategic campaigns to position your brand effectively.
            Our marketing experts can help you build a
          </p>
        </div>
        <a
        href="/marketing"  style={{textDecoration: 'none'}} 
      >
        <div class="row">
          <button class="whatwedo-btn">LEARN MORE</button>
        </div>
        </a>
      </div>
    </div>
    
  
  </div>
  );
};

export default WhatWeDo;
