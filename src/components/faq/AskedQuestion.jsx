// FAQ.js

import React, { useState } from 'react';
import './faq.css';

const AskedQuestion = () => {
  const [faqData, setFaqData] = useState([
    {
      question: "How does the ghostwriting process work at your company? ",
      answer: "In-depth collaboration. We begin with a detailed consultation to understand your goals and voice. Our writers then create drafts, incorporating your feedback at every step. This iterative approach ensures the final content aligns perfectly with your vision. ",
    },
    {
      question: " Can you assist with marketing strategies alongside ghostwriting?",
      answer: " Yes, please! Our services go beyond just writing. We help you develop comprehensive marketing strategies that integrate the content our ghostwriters produce. From SEO ptimization to social media campaigns, our goal is to maximize the impact of your content. ",
    },
    {
      question: " How do you ensure the content aligns with my brand's voice and values?",
      answer: "Our team takes the time to thoroughly research your brand and engage in open communication as regularly as needed to ensure the content we produce resonates with your audience and reflects your values. ",
    },
    {
      question: " Can you help me with editing and proofreading existing content? ",
      answer: " Absolutely! Our team includes skilled editors who can review and polish your existing content. Whether you need grammar and style corrections or want to enhance clarity and coherence, we've got you covered. ",
    },
    {
      question: "What industries do you specialize in when it comes to ghostwriting and marketing? ",
      answer: " Our team boasts expertise across diverse industries, including but not limited to coaching, public speaking, general business, finance, lifestyle, etc. We tailor our approach to match the unique requirements and nuances of each industry. ",
    },
    {
      question: "How do you ensure the confidentiality of sensitive projects? ",
      answer: "Confidentiality is a top priority for us. We sign non-disclosure agreements (NDAs) to ensure the utmost privacy for your projects. Your ideas and information are safe with us. ",
    },
    {
      question: "How can your marketing services help increase my brand's online visibility? ",
      answer: "Our marketing experts can develop strategies that enhance your online visibility. From search engine optimization (SEO) to social media campaigns, we focus on increasing your brand's presence in the digital landscape, driving organic traffic and engagement. ",
    },
    {
      question: "What is the typical turnaround time for ghostwritten content? ",
      answer: "Turnaround times vary based on the complexity and length of the content. We prioritize delivering quality work within agreed-upon timelines. During our initial consultation, we'll provide a clear estimate of the time required for your project. ",
    },
    // Add more question-answer pairs
  ]);
console.log(setFaqData)
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h4 className='faq-head'>Frequently Asked Questions</h4>
      <p className='faq-desc'>Ghostwriting, Copywriting, and Marketing Services
</p>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleAccordionClick(index)}
        >
          <div className="faq-question">
            {item.question}
            <span className={`accordion-icon ${activeIndex === index ? 'expanded' : ''}`}>
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? 'visible' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AskedQuestion;
