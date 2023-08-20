import React, { useState } from "react";
import "./blog.css";
import ThoughtsToChop from "./ThoughtsToChop";
import MarketingSales from "./MarketingSales";
import Afropreneurship from "./Afropreneurship";
import NewsLetter from "../home/subscribenewsletter/NewsLetter";
import AllCategories from "./allcategories/AllCategories";
const Blog = () => {
  const [selectedPage, setSelectedPage] = useState("All Categories");

  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col background-image-blog" />
          <div>
            <p className="blog-text">
              Interpretation and execution are how you’ll be unique because
              everybody faces adversity. It’s why some prodigies “outshine”
              their masters and some pale in comparison. Nobody can teach it
              because greatness results from the individuality of human
              experience… Authenticity is your ability to distinguish what logic
              and experiential relevance indicate from narratives establishments
              dictate. Kicking a narrative means probing it to ensure the
              programming you’re letting into your mind facilitates a positive
              stride toward your goals amongst other benefits. The first
              category of KTN is{" "}
              <span className="ktn-blog-text">“Thoughts to chop”</span> read
              posts about interesting narratives that we’ve chopped down for
              clear consumption.
            </p>
            <p className="blog-text">
              Your push for goals demands that you market your interest well in
              the social environment and good marketing is simply packaging
              predicated on truth to pique interests. Check out posts about
              <span className="ktn-blog-text"> “marketing and sales” </span>in
              that category of KTN. We’ve spent time with some of the best
              marketers Earth has to offer and picked up a few nuggets.
            </p>
            <p className="blog-text">
              The voluntary adoption of responsibility will make your life worth
              referencing and your adversities will shape meaning into your
              life. <span className="ktn-blog-text">“Afropreneurship”</span> is
              a category on KTN with posts about entrepreneurship from African
              minds. Amidst the telling times in the African and global business
              landscapes, we believe resilience is a spirit to be adopted. Heavy
              is the head that wears the crown, If you want pawn problems don’t
              aim at being king! We don’t believe in complaints, we’ve invested
              time in sharpening our value, and remain ready to share all we
              learn as we go.
            </p>
            <p className="blog-text">
              One fact the existence of counterfeits tells you if nothing else
              is originals exist! As “smart” tools get more usual and
              commonplace, thinkers will be called upon to go even deeper in
              thought to excavate even smarter ideas for smarter tools. We’re
              ghostwriters and marketers but we’re most proud to be thinkers.
              KTN explores thoughts, narratives, and insight from our research,
              logic, and firsthand experience. Bear in mind that perfection as a
              peak is a fallacy that robs joy. We just create, we don’t
              complain. create an antithesis to our thesis if you object, we’d
              love to read you.
            </p>
          </div>

          <div className="blog-container">
            <div class="row">
              <div class="col-9">
                <h1 className="blog-headersss">{selectedPage}</h1>
              </div>
              <div class="col-3 blog-drop">
                <select className="blog-select" onChange={handlePageChange}>
                <option className="blog-value" value="All Categories" selected> 
                    All Categories
                  </option>
                  <option className="blog-value" value="Thoughts to chop">
                    Thoughts to chop
                  </option>
                  <option className="blog-value" value="Marketing and sales">
                    Marketing and sales
                  </option>
                  <option className="blog-value" value="Afropreneurship">
                    Afropreneurship
                  </option>
                </select>
              </div>

              <div className="row">
              {selectedPage === "All Categories" && <AllCategories />}
                {selectedPage === "Thoughts to chop" && <ThoughtsToChop />}
                {selectedPage === "Marketing and sales" && <MarketingSales />}
                {selectedPage === "Afropreneurship" && <Afropreneurship />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default Blog;
