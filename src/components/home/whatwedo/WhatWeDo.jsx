import React from "react";
import "./whatwedo.css";
import GhostBook from "../../../images/whatwedo-icons/ghostwriting.svg";
import Copy from "../../../images/whatwedo-icons/copywriting.svg";
import Market from "../../../images/whatwedo-icons/marketing.svg";

const WhatWeDo = () => {
  return (
<>


    
    <div class="container-fluid whatwedo">
    <h4 class="whatwedo-header">Our Expertise 
</h4>

    <div className="row">
      <div className="col">
      <h2 class="whatwedo-main-text">Professional Ghostwriting</h2>
      </div>
      <div className="col">
      <h2 class="whatwedo-main-text">Persuasive Copywriting</h2>
        </div>
        <div className="col">
        <h2 class="whatwedo-main-text">Provoking Marketing and PR</h2>
        </div>
    </div>


    <div className="row">
      <div className="col">
      <div class="image-box">
              <img src={GhostBook} alt="Ghostwriting" />
            </div>
      </div>
      <div className="col">
      <div class="image-box">
              <img src={Copy} alt="Copywriting" />
            </div>
      </div>
      <div className="col">
      <div class="image-box">
              <img src={Market} alt="Marketing and PR" />
            </div>
      </div>
    </div>
    
      <div className="row">
      <div className="col">
      <p class="whatwedo-paragraph">
      Your experience in life answers someone’s search for answers- that’s great 
content! We listen to digest your story, then package and present it in the best form to achieve 
a purpose. You can grow your authority in your industry, turn your experiences into passive 
income, curate your legacy, impact people’s lives, or do nothing… 
          </p>
      </div>
      <div className="col">
      <p class="whatwedo-paragraph">
      You can say “I’ve been a pilot for 20 years” or “I’ve flown commercial jets for 
over two decades” We compel sales for your business using the right words. The world rewards 
sensation before substance. Our words present your business as delivering something divine 
your customers can’t get elsewhere; they won’t just pay money, they’ll pay attention… 
          </p>
      </div>
      <div className="col">
      <p class="whatwedo-paragraph">
      We’ll make sure your image is recognizable then track your customers to position 
you right in their faces. If they aren’t set to buy what you’re selling, they’ll willingly market you 
to their circle. That’s how good we make you look. Your avatar’s network is a treasure trove of 
potential customers! If “network” is your “net worth”, their network is our homework. we 
market your brand so it sells itself… 
          </p>
      </div>
    </div>

    <div className="row">
      <div className="col">
      <a
        href="/ghostwriting"  style={{textDecoration: 'none'}} 
      >
        
          <button class="whatwedo-btn">LEARN MORE</button>
    
        </a>
      </div>
      <div className="col">
      <a
        href="/copywriting"  style={{textDecoration: 'none'}} 
      >
      
          <button class="whatwedo-btn">LEARN MORE</button>
        
        </a>
      </div>
      <div className="col">
      <a
        href="/marketing"  style={{textDecoration: 'none'}} 
      >
       
          <button class="whatwedo-btn">LEARN MORE</button>
      
        </a>
      </div>
    </div>




    </div>




    <div class="container-fluid whatwedo-phone">
    <h4 class="whatwedo-header-phone">What We Do</h4>
     <div class="row test">
      <div class="col-whatwedo-phone">
        <div class="row">
          <h2 class="whatwedo-main-text-phone">Professional Ghostwriting</h2>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="image-box-phone">
              <img src={GhostBook} alt="Ghostwriting" />
            </div>
          </div>
        </div>
        <div class="row">
          <p class="whatwedo-paragraph-phone">
          Your experience in life answers someone’s search for answers- that’s great 
content! We listen to digest your story, then package and present it in the best form to achieve 
a purpose. You can grow your authority in your industry, turn your experiences into passive 
income, curate your legacy, impact people’s lives, or do nothing… 
          </p>
        </div>
        <a
        href="/ghostwriting"  style={{textDecoration: 'none'}} 
      >
        <div class="row">
          <button class="whatwedo-btn-phone">LEARN MORE</button>
        </div>
        </a>
      </div>
      <div class="col-whatwedo">
        <div class="row">
          <h2 class="whatwedo-main-text-phone">Persuasive Copywriting</h2>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="image-box-phone">
              <img src={Copy} alt="Copywriting" />
            </div>
          </div>
        </div>
        <div class="row">
          <p class="whatwedo-paragraph-phone">
          You can say “I’ve been a pilot for 20 years” or “I’ve flown commercial jets for 
over two decades” We compel sales for your business using the right words. The world rewards 
sensation before substance. Our words present your business as delivering something divine 
your customers can’t get elsewhere; they won’t just pay money, they’ll pay attention… 
          </p>
        </div>
        <a
        href="/copywriting"  style={{textDecoration: 'none'}} 
      >
        <div class="row">
          <button class="whatwedo-btn-phone">LEARN MORE</button>
        </div>
        </a>
      </div>
      <div class="col-whatwedo">
        <div class="row">
          <h2 class="whatwedo-main-text-phone">Marketing and PR</h2>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="image-box-phone">
              <img src={Market} alt="Marketing and PR" />
            </div>
          </div>
        </div>
        <div class="row">
          <p class="whatwedo-paragraph-phone">
          We’ll make sure your image is recognizable then track your customers to position 
you right in their faces. If they aren’t set to buy what you’re selling, they’ll willingly market you 
to their circle. That’s how good we make you look. Your avatar’s network is a treasure trove of 
potential customers! If “network” is your “net worth”, their network is our homework. we 
market your brand so it sells itself… 
          </p>
        </div>
        <a
        href="/marketing"  style={{textDecoration: 'none'}} 
      >
        <div class="row">
          <button class="whatwedo-btn-phone">LEARN MORE</button>
        </div>
        </a>
      </div>
    </div> 
    </div>
    
    
  </>
  );
};

export default WhatWeDo;
