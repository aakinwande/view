import React from "react";
import "./ourwork.css";
import Work1 from "../../../images/testimonials/1.jpg";
import Work2 from "../../../images/testimonials/2.jpg";
import Work3 from "../../../images/testimonials/3.jpg";
import Work4 from "../../../images/testimonials/4.jpg";
import Work5 from "../../../images/testimonials/5.jpg";
import Work6 from "../../../images/testimonials/6.jpg";
import Work7 from "../../../images/testimonials/7.jpg";
import Work8 from "../../../images/testimonials/8.jpg";
import Work9 from "../../../images/testimonials/9.jpg";
import Work10 from "../../../images/testimonials/10.jpg";


const OurWork = () => {
  return (
<div class="container">
<h4 className="ourwork-header">Our Work</h4>
  <div class="row-work">
    <div class="col-work">
      <img src={Work1} alt="" class="img-fluid" />
    </div>
    <div class="col-work">
      <img src={Work2} alt="" class="img-fluid" />
    </div>
    <div class="col-work">
      <img src={Work3} alt="" class="img-fluid" />
    </div>
    <div class="col-work">
      <img src={Work4} alt="" class="img-fluid" />
    </div> <div class="col-work">
      <img src={Work5} alt="" class="img-fluid" />
    </div>
    <div class="col-work">
      <img src={Work6} alt="" class="img-fluid" />
    </div> <div class="col-work">
      <img src={Work7} alt="" class="img-fluid" />
    </div>
    <div class="col-work">
      <img src={Work8} alt="" class="img-fluid" />
    </div>
    <div class="col-work">
      <img src={Work9} alt="" class="img-fluid" />
    </div>
    <div class="col-work">
      <img src={Work10} alt="" class="img-fluid" />
    </div>
    
  </div>
</div>
  );
};

export default OurWork;
