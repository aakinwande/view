import React from 'react'
import "./marketingsales.css";
import AI from '../../images/blogpics/marketingsales/AI.jpg'
import CBE from '../../images/blogpics/marketingsales/CBE.jpg'
import WAH from '../../images/blogpics/marketingsales/WAH.jpg'
import LRAC from '../../images/blogpics/marketingsales/LRAC.jpg'
import NCSA from '../../images/blogpics/marketingsales/NCSA.jpg'


const  MarketingSales = () => {
  return (
    <>
    <div class="card">
      <img src={CBE} class="card-img-top blog-img-bb"  alt="..." />
      <div class="card-body">
      <p className="card-text">Date: June 21, 2023 </p>
        <h5 class="card-title"> HOW TO INCREASE YOUR PERCEIVED VALUE  </h5>
       
        <a href="/marketingsales-one" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
    <div class="card">
      <img src={AI} class="card-img-top blog-img-bb"  alt="..." />
      <div class="card-body">
      <p className="card-text">Date: June 21, 2023 </p>
        <h5 class="card-title">THE COLD OUTREACH STRATEGY MAKING US MONEY </h5>
     
        <a href="/marketingsales-two" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
    <div class="card">
      <img src={WAH} class="card-img-top blog-img-bb"  alt="..." />
      <div class="card-body">
      <p className="card-text">Date: June 21, 2023 </p>
        <h5 class="card-title">BEING OF UTILITY MAKES YOU A WHORE?</h5>
      
        <a href="/marketingsales-three" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
    <div class="card">
      <img src={LRAC} class="card-img-top blog-img-bb"  alt="..." />
      <div class="card-body">
      <p className="card-text">Date: June 21, 2023 </p>
        <h5 class="card-title">HOW TO LAND AND RETAIN ALL CLIENTS </h5>
     
        <a href="/marketingsales-four" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
    <div class="card">
      <img src={NCSA} class="card-img-top blog-img-bb"  alt="..." />
      <div class="card-body">
      <p className="card-text">Date: June 21, 2023 </p>
        <h5 class="card-title"> IF YOU HATE THE FEELING OF SELLING READ THIS</h5>
        <a href="/marketingsales-five" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  </>
  )
}

export default MarketingSales
