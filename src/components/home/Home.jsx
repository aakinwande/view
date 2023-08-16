import React from "react";
import Hero from "./hero/Hero";
import OurWork from "./ourwork/OurWork";
import Cta from "./cta/Cta";
import Testimonial from "./testimonial/Testimonial";
import WhatWeDo from "./whatwedo/WhatWeDo";
import Masterpiece from "./masterpiece/Masterpiece";
import QuestionandBlog from "./questionandblog/QuestionandBlog";
import NewsLetter from "./subscribenewsletter/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <OurWork />
      <Cta />
      <Testimonial />
      <WhatWeDo />
      <Masterpiece />
      <QuestionandBlog />
      <NewsLetter />
    </>
  );
};

export default Home;
