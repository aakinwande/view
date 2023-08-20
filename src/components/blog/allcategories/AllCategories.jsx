import React from "react";
import SPC from "../../../images/blogpics/thoughtofchop/SPC.jpg";
import STBGG from "../../../images/blogpics/thoughtofchop/STBGG.jpg";
import MYLWTA from "../../../images/blogpics/thoughtofchop/MYLWTA.jpg";
import AI from "../../../images/blogpics/marketingsales/AI.jpg";
import CBE from "../../../images/blogpics/marketingsales/CBE.jpg";
import WAH from "../../../images/blogpics/marketingsales/WAH.jpg";
import DNAYP from "../../../images/blogpics/afroprenueship/DNAYP.jpg";
import TFC from "../../../images/blogpics/afroprenueship/TFC.jpg";
import UPTMM from "../../../images/blogpics/afroprenueship/UPTMM.jpg";

const AllCategories = () => {
  return (
    <>
      <div class="card">
        <img src={SPC} class="card-img-top blog-img-bb" alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title">GROW YOUR CONFIDENCE BY 1000% </h5>
          
          <a href="/toc-one" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={MYLWTA} class="card-img-top blog-img-bb" alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title">HOW ORIGINAL IS YOUR LIFE? </h5>
          
          <a href="/toc-two" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={STBGG} class="card-img-top blog-img-bb" alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title"> GOING TO THE GYM ISN’T NECESSARY </h5>
          
          <a href="/toc-three" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={CBE} class="card-img-top blog-img-bb" alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title"> HOW TO INCREASE YOUR PERCEIVED VALUE </h5>
          
          <a href="/marketingsales-one" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={AI} class="card-img-top blog-img-bb" alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title">
            THE COLD OUTREACH STRATEGY MAKING US MONEY{" "}
          </h5>
          
          <a href="/marketingsales-two" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={WAH} class="card-img-top blog-img-bb" alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title">BEING OF UTILITY MAKES YOU A WHORE?</h5>
          
          <a href="/marketingsales-three" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={DNAYP} class="card-img-top blog-img-bb" alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title">
            BUILD TRACTION IN YOUR BUSINESS BEFORE NICHING DOWN{" "}
          </h5>
          
          <a href="/afro-one" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={TFC} class="card-img-top blog-img-bb" alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title">YOU CAN BILL CLIENTS WHATEVER YOU WANT </h5>
          
          <a href="/afro-two" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={UPTMM} class="card-img-top blog-img-bb" alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title">
            YOU DON’T NEED TO HAVE TALENT, HAVE LEVERAGE{" "}
          </h5>
          
          <a href="/afro-three" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default AllCategories;
