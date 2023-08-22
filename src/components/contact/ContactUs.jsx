import React from "react";
import "./contact.css";
import KtnPlus from "../../images/KickLogo/KtnNewsletter.png";

const ContactUs = () => {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col background-image-contact">
            <h4 className="contact-header">Reach out now</h4>
          </div>
        </div>
      </div>
      <div>
        <p className="contact-text">
          As AI saturates the content market with each passing second, authentic
          stories, brands, and content by humans will get rarer and more
          valuable like vintage cars and collectors’ art
        </p>
        <p className="contact-text">
          Tell us your rough ideas, if you haven’t formed them that’s okay,
          we’ll listen to your story and brainstorm for you
        </p>
      </div>
      <div class="form-contact">
        <div class="row contact-top">
          <div className="col">
            <input
              type="text"
              class="form-control form-top"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="col">
            <input
              type="email"
              class="form-control form-top"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="col">
            <input
              class="form-control form-top"
              placeholder="How many books have you got in you"
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="100"
            />
          </div>
        </div>
        <div class="row contact-top">
          <div class="col">
            <label for="name" className="contact-label">
              What service of ours do you need
            </label>
            <select id="services" name="services" class="custom-select">
              <option value="ghostwriting" selected>
                Ghostwriting
              </option>
              <option value="copywriting">Copywriting</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <div class="col">
            <label for="name" className="contact-label">
              Have you read KTN?{" "}
            </label>
            <select id="services" name="services" class="custom-select">
              <option value="yes" selected>
                Yes
              </option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div className="row contact-second">
          <div className="col">
            <div class="form-group">
              <textarea
                class="form-control"
                id="message"
                rows="4"
                placeholder="Tell us something cool about you: 
"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="submit" class="btn-contact">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div class="container-fluid cta" style={{ marginBottom: "150px" }}>
        <h4>
          We’re ready to meet if you have books in you, your business deserves
          exponential growth or you have a brand the world must know.
        </h4>
        <a
                  href="https://calendly.com/kalukalu/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
        <button className="btn-cta">LET'S MEET</button>
        </a>
      </div>

      <div class="container-fluid newsletter">
        <div className="row">
          <h4 className="newsletter-header">
            <img src={KtnPlus} alt="" className="ktnplus" />
          </h4>
        </div>
        <div className="row">
          <p className="newsletter-text">
            We’re legally forbidden to share proprietary information, but for
            the first time, we’re licensed to publicly share the secrets we’ve
            uncovered by interviewing the world’s best sales team leads.
          </p>
        </div>
        <div className="row">
          <p className="newsletter-text">
            They’ve closed millions of dollars’ worth of pitches, deals,
            schemes, businesses acquisitions and mergers. These people can sell
            candy to its owner and KTN+ monthly publication gives you fly
            on-the-wall access to tactics they use globally to multiply their
            businesses for
            <span className="ktn-span" style={{ color: "green" }}>
              {" "}
              $12.99/month
            </span>
          </p>
        </div>
        <div class="container-fluid newsletter">
          <div className="row">
            <button className="newsletter-btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
