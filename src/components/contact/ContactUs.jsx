import React from 'react'
import './contact.css'
import NewsLetter from '../home/subscribenewsletter/NewsLetter'

const ContactUs = () => {
  return (
    <>
    <div class="container-fluid">
    <div class="row">
      <div class="col background-image-contact">
        <h4 className='contact-header'>Contact Us</h4>
      </div>
    </div>
  </div>
  <div class="form-contact">
    <div class="row contact-top">
      <div className="col">
            <input  type="text" class="form-control form-top" id="name" placeholder="Name" />
      </div>
      <div className="col">
            <input type="email" class="form-control form-top" id="email" placeholder="Email" />
      </div>
      <div className="col">
            <input type="tel" class="form-control form-top" id="phone" placeholder="Phone" />
      </div>
      </div>

      <div className="row contact-second">
        <div className="col">
        <div class="form-group">
            <textarea class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
      </div>
      </div>
      <div className="row">
        <div className="col">
        <button type="submit" class="btn-contact">Submit</button>
        </div>
      </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col location-col">
        <div className="row">
        <h4 className='address-location'>Location</h4>
        </div>
        <div className="row">
          <p className='address-contact'>Address: <span className='address-contact-span'> PLOT 2450 CADASTRAL ZONE E27, APO RESETTLEMENT ABUJA, NGERIA</span></p>
        </div>
      </div>
      <div className="col contact-col">
      <div className="row">
      <h4 className='contact-location'>Contact Info</h4>
      </div>
      <div className="row">
          <div className="col">
            <div className="row">
              <p className='phone-contact'>Phone:<span className='phone-contact-span'> +234 70-393-65403</span> </p>
            </div>
            <div className="row">
            <p className='phone-contact'>Email:<span className='phone-contact-span'> info@kickandcosynergy.com</span> </p>
              </div>
          </div>
      </div>  
      </div>
    </div>
  </div>
  <NewsLetter />
  </>
  )
}

export default ContactUs
