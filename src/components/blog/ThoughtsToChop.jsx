import React from "react";
import SPC from "../../images/blogpics/thoughtofchop/SPC.jpg";
import STBGG from "../../images/blogpics/thoughtofchop/STBGG.jpg";
import TAT from "../../images/blogpics/thoughtofchop/TAT.jpg";
import LEOD from "../../images/blogpics/thoughtofchop/LEOD.jpg";
import MYLWTA from "../../images/blogpics/thoughtofchop/MYLWTA.jpg";
import "./thoughtstochop.css";

const ThoughtsToChop = () => {
  return (
    <>
      <div class="card">
        <img src={SPC} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">GROW YOUR CONFIDENCE BY 1000% </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/toc-one" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={MYLWTA} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">HOW ORIGINAL IS YOUR LIFE? </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/toc-two" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={STBGG} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"> GOING TO THE GYM ISN’T NECESSARY </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/toc-three" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={TAT} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">MEDITATION OR INSOMNIA? </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/toc-four" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
      <div class="card">
        <img src={LEOD} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">PARENTS DON’T HATE CHILDREN, THEY SPEAK DIFFERENT LANGUAGES </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/toc-five" class="btn btn-primary">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default ThoughtsToChop;
