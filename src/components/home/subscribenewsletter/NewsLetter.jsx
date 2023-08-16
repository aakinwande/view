import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div class="container-fluid newsletter">
        <div className="row">
        <h4 className="newsletter-header">Subcribe to our Newsletter</h4>
        </div>
        <div className="row">
                <p className='newsletter-text'>There's only one way to find out...</p>
        </div>
        <div className="row">
                <p className='newsletter-text'>Give us a call to begin your journey to becoming a published author.</p>
        </div>
        <div className="row">
                <p className='newsletter-text'>Enjoy our white-glove approach to the book-writing process and experience the best in quality, talent, and professionalism.</p>
        </div>
        <div className="row">
            <button className='newsletter-btn'>SUBSCRIBE</button>
        </div>
        
      
    </div>
  )
}

export default NewsLetter
