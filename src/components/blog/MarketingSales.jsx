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
      <img src={CBE} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"> HOW TO INCREASE YOUR PERCEIVED VALUE  </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/marketingsales-one" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
    <div class="card">
      <img src={AI} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">THE COLD OUTREACH STRATEGY MAKING US MONEY </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/marketingsales-two" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
    <div class="card">
      <img src={WAH} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">BEING OF UTILITY MAKES YOU A WHORE?</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/marketingsales-three" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
    <div class="card">
      <img src={LRAC} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">HOW TO LAND AND RETAIN ALL CLIENTS </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/marketingsales-four" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
    <div class="card">
      <img src={NCSA} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"> IF YOU HATE THE FEELING OF SELLING READ THIS</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/marketingsales-five" class="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  </>
  )
}

export default MarketingSales
