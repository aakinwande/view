import React, { useState } from "react";
import "./testimonial.css";
import Susan from "../../../images/testimonialpics/susan.jpeg";
import Megan from "../../../images/testimonialpics/megan.jpg";
import Chritiana from "../../../images/testimonialpics/chritiana.jpg";
import Solaru from "../../../images/testimonialpics/solaru.jpg";
import Eze from "../../../images/testimonialpics/eze.jpg";
import David from "../../../images/testimonialpics/david.jpg";
import Rebecca from "../../../images/testimonialpics/rebecca.jpg";
import Doniie from "../../../images/testimonialpics/donnie.jpg";
import Ag from "../../../images/testimonialpics/ag.jpg";
import Travis from "../../../images/testimonialpics/travis.jpg";
import Ralph from "../../../images/testimonialpics/Ralph.jpeg";

const Testimonial = () => {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const numberOfTestimonialsToShow = 3;

  const testimonials = [
    {
      imgSrc: Ralph,
      name: "Ralph Danna P. A.",
      description: "Owner of Dannasales, Spring Hill, Florida, United States.",
      text: "Kick&co creations are not mere narratives; they are exquisite tapestries of emotion and insight. Delve into their world for unmatched ghostwriting and marketing mastery. Beyond mere words, you'll be immersed in stories ignited by fervor and woven with depth. For those who demand extraordinary content and forge heartfelt connections with their audience, Kick&co is the pinnacle of artful expression",
    },
    {
      imgSrc: Susan,
      name: "Susan Ritter",
      description: "Founder, Wealthy Wise Woman, Greater Tampa Bay Area.",
      text: "I believe, like being a composer, it is a gift to come up with a piece of writing that can move people to action- Only some people have this gift. I believe you are one of those people. For those who are not great at writing, Kick&co services are the answer to their problem. Oftentimes, telling our stories can be difficult. We want to put ourselves in the best light. We are a little too close to our own pain and pride to tell it in a way that is interesting to others. Having someone write it for us, great storytellers like the team here is a boon.",
    },

    {
      imgSrc: Chritiana,
      name: "Christina Beauchemin",
      description:
        "Author, Speaker, Educator, Let My Legacy Be Love, LLC, Malden Bridge, New York, United States",
      text: "Ghostwriting is a skill. To catch the thoughts and voice of another person and put it into your words is a skill, not many people do well, but you are super talented, so I can see why you are successful. I think this is a wonderful service. So many  people have great ideas and stories to tell, but they don't have the words. They don't understand the craft. In those many, many cases, this team can help them get a story told. I know I will recommend you! If creativity is not your thing and words are not your best asset, check out Kick’s services. They're great at what they do",
    },
    {
      imgSrc: Travis,
      name: "Travis Robbins",
      description: "Adventurer/Walker, The Connection Odyssey,Watertown, South Dakota, United States.",
      text: "I want to send a big appreciation to Kick&co, I never thought I'd write a book until last year considering I didn't even like reading until last year. Your help, expertise, and openness to work with me is greatly appreciated.",
    },

    {
      imgSrc: Ag,
      name: "Ag Goldsmith",
      description: "  Finance Director, Hendrick Toyota Scion, Charleston, South Carolina, United States.",
      text: "This is a great team! Very intellectual, and efficient, and serves as great accountability partners for projects you work on.",
    },
    {
      imgSrc: Rebecca,
      name: "Rebecca Jenkins",
      description: "Founder at RJEN. Bristol, United Kingdom..",
      text: "You walk your talk",
    },
    {
      imgSrc: Doniie,
      name: "Donnie McFall, MBA",
      description: "Owner of McFall Consulting Inc. Minneapolis, Minnesota, United States..",
      text: "This team is an awesome team. Truly awesome. That word is overused, but you truly fill that word with meaning. It is truly an honor to read your work.",
    },

    {
      imgSrc: Eze,
      name: "Douglas Eze, CFF",
      description: "Founder & CEO, Largo Financial Services LLC. Washington DC-Baltimore Area, United States.",
      text: "I love seeing a band of young people come together to create something and you have created something truly remarkable here; I happily recommend your services to people",
    },
    {
      imgSrc: Megan,
      name: "Megan Tribble",
      description: "Content Marketer and Coach, Danville, Indiana, United States.",
      text: "Love the direction you went with the narrative, fantastic writing. Gosh, I can just imagine the types of people who would benefit from YOU telling their story, you’re creating artwork with words– fantastic. Keep up the good work",
    },
    {
      imgSrc: David,
      name: "David D. Doerrier",
      description: "Presentation Empowerment Coach David D. Doerrier, LLC Atlanta Metropolitan Area, United States.",
      text: "Your experience of ghostwriting is a great example of turning ideas into profitable ventures. It's all about adding value and creating win-win partnerships. Providing this valuable service has been your key to success. Well done!",
    },
    {
      imgSrc: Solaru,
      name: "Elizabeth Solaru",
      description: "Director, Luxury Business Emporium, London Area, United Kingdom.",
      text: "Contextualization and personalization are what AI is lacking right now. There will always be a need for great writers like Kick’s",
    },
    
  ];
  const testimonialsToDisplay = showAllTestimonials
    ? testimonials
    : testimonials.slice(0, numberOfTestimonialsToShow);

  return (
    <div className="container">
      <h4 className="testimonial-header">Great People Blow Our Trumpet</h4>
      <div className="row pb-5">
        {testimonialsToDisplay.map((testimonial, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12">
            <div className="col test-all">
              <div className="row">
                <p
                  style={{
                    color: "#333",
                    fontFamily: "Georgia, serif",
                    lineHeight: "1.6",
                    textAlign: "center",
                    fontStyle: "italic",
                    padding: "15px 20px",
                    backgroundColor: "#F9F9F9",
                  }}
                  className="testimonial-text"
                >
                  {testimonial.text}
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <img
                    className="testimonial-img"
                    src={testimonial.imgSrc}
                    alt=""
                  />
                </div>
                <div className="col-8 pt-3">
                  <div className="row">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-desc">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {testimonials.length > numberOfTestimonialsToShow && (
          <div className="col-lg-4 col-md-6 col-12">
            {showAllTestimonials ? (
              <button
                className="show-less-button"
                onClick={() => setShowAllTestimonials(false)}
              >
                SHOW LESS
              </button>
            ) : (
              <button
                className="read-more-button"
                onClick={() => setShowAllTestimonials(true)}
              >
                READ MORE
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
