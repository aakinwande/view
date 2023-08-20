import React from 'react';
import DNAYP from "../../images/blogpics/afroprenueship/DNAYP.jpg";
import TFC from "../../images/blogpics/afroprenueship/TFC.jpg";
import UPTMM from "../../images/blogpics/afroprenueship/UPTMM.jpg";
import IS from "../../images/blogpics/afroprenueship/IS.jpg";
import CGPT from "../../images/blogpics/afroprenueship/CGPT.jpg";
import "./afro.css";

const Afropreneurship = () => {
  return (
    <>
      <div class="card">
        <img src={DNAYP} class="card-img-top blog-img-bb"  alt="..." />
        <div class="card-body">
        <p className="card-text">Date: May 6, 2023 </p>

          <h5 class="card-title">
            BUILD TRACTION IN YOUR BUSINESS BEFORE NICHING DOWN{" "}
          </h5>
          
          <a href="/afro-one" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={TFC} class="card-img-top blog-img-bb"  alt="..." />
        <div class="card-body">
        <p className="card-text">Date: May 25, 2023 </p>
          <h5 class="card-title">YOU CAN BILL CLIENTS WHATEVER YOU WANT </h5>
          
          <a href="/afro-two" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={UPTMM} class="card-img-top blog-img-bb"  alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 3 2023 </p>
          <h5 class="card-title">
            YOU DON’T NEED TO HAVE TALENT, HAVE LEVERAGE{" "}
          </h5>
          
          <a href="/afro-three" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={IS} class="card-img-top blog-img-bb"  alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 21, 2023 </p>
          <h5 class="card-title">
            HOW TO OVEROCOME IMPOSTER SYNDROME IN ANY INDUSTRY{" "}
          </h5>
          
          <a href="/afro-four" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={CGPT} class="card-img-top blog-img-bb"  alt="..." />
        <div class="card-body">
        <p className="card-text">Date: June 26, 2023 </p>
          <h5 class="card-title">
            COLD OUTREACH (HUMAN VS ARTIFICIAL INTELLIGENCE){" "}
          </h5>
          
          <a href="/afro-five" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default Afropreneurship;
