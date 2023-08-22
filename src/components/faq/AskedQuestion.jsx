// FAQ.js

import React, { useState } from 'react';
import './faq.css';
import FaqPic from '../../images/pages/faq.png'

const AskedQuestion = () => {
  const [GhostwritingData, setGhostwritingData] = useState([
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

  const [CopywritingData, setCopywritingData] = useState([
    {
      question: "What types of content can you help me with? ",
      answer: "We offer a wide range of copywriting services, including website content, blog posts, social media captions, product descriptions, email campaigns, press releases, and more. ",
    },
    {
      question: "How do you understand my brand's voice and tone? ",
      answer: "We conduct in-depth research about your brand, its values, and your target audience. We also take the time to understand your existing content and any specific guidelines you provide to ensure consistency in tone and messaging.",
    },
    {
      question: "What is the process for working with your copywriting service?",
      answer: "Our process typically involves initial consultation, research, content creation, revision, and finalization. We collaborate closely with you to ensure that the content aligns with your vision and goals.",
    },
    {
      question: "What if I don't like the first draft of the content? ",
      answer: "We offer a revision process to make sure you're satisfied with the final result. We encourage open communication so that we can make the necessary adjustments and revisions to meet your expectations. ",
    },
    {
      question: "How long does it take to complete a writing project? ",
      answer: "The timeline depends on the scope and complexity of the project. Smaller projects like blog posts might be completed in a few days, while larger projects such as website overhauls could take a few weeks. We'll provide you with a specific timeline during our initial discussions. ",
    },
    {
      question: "How do you determine the pricing for your copywriting services? ",
      answer: "Our pricing is based on factors like the type of content, word count, research required, and project complexity. We provide transparent pricing details before starting any project, so you'll know exactly what to expect.",
    },
  ]);
  const [MarketingData, setMarketingData] = useState([
    {
      question: "How do you tailor your strategies to my specific business needs? ",
      answer: "We start by conducting a thorough analysis of your business, industry, target audience, and ompetitors. This research helps us create customized strategies that align with your goals and deliver measurable results. ",
    },
    {
      question: " How do you measure the success of a marketing or PR campaign? ",
      answer: "We track key performance indicators (KPIs) relevant to the campaign's goals. This could include metrics such as website traffic, social media engagement, media coverage, lead generation, conversion rates, and more. ",
    },
  ]);

  const [paymentData, setPaymentData] = useState([
    {
      question: " How do I make a payment for the services I've selected?",
      answer: "Once you've finalized the details of your project and received an invoice from us, you can follow the payment instructions provided in the invoice. This may involve clicking a payment link or transferring funds to the provided bank account. ",
    },
    {
      question: "Do you require any upfront payment before starting a project?",
      answer: "Yes, to initiate the project and secure your spot in our schedule, we typically require a partial upfront payment. The specific amount and terms will be outlined in your project agreement. ",
    },
    {
      question: "Can I request a refund if I'm not satisfied with the services provided?",
      answer: "We are committed to delivering high-quality services that meet your expectations. If you're dissatisfied with our work, we'll work closely with you to address your concerns and make necessary revisions. However, refunds are considered on a case-by-case basis, and terms are detailed in our service agreement. ",
    },
    {
      question: "Are there any additional fees or hidden charges I should be aware of?",
      answer: "We believe in transparency, and we strive to communicate all costs upfront. Any potential additional charges will be clearly outlined in the initial project proposal and agreement. ",
    },
    {
      question: " Can I get an official receipt for the payment I've made? ",
      answer: "Certainly, once your payment is processed, we will provide you with an official receipt detailing the transaction. This receipt can be used for your records or for any business-related purposes. ",
    },
    {
      question: "What should I do if I have a question about a payment or invoice? ",
      answer: "If you have any questions or concerns about a payment or invoice, please reach out to our billing department. We're here to assist you and address any inquiries you may have. ",
    },
  ]);
console.log(setGhostwritingData)
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
     <img src={FaqPic} alt='' className='faq-image'/>
     <h5 className='faq-desc'>Ghostwriting
</h5>
      {GhostwritingData.map((item, index) => (
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


       <h5 className='faq-desc'>Copywriting</h5>
      {CopywritingData.map((item, index) => (
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
      
      <h5 className='faq-desc'> Marketing and Public Relations
      </h5>
            {MarketingData.map((item, index) => (
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

<h5 className='faq-desc'> Payments
      </h5>
            {paymentData.map((item, index) => (
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
