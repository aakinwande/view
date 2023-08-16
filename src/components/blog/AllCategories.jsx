import React from 'react'
import BlogPost2 from '../../images/blogpics/2.jpg'
import BlogPost3 from '../../images/blogpics/3.jpg'

import './allcategories.css' 

const AllCategories = () => {
  return (
    <>
     <div class="card" >
    <img src={BlogPost3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/" class="btn btn-primary">Read more</a>
    </div>
  </div>
   <div class="card" >
   <img src={BlogPost2} class="card-img-top" alt="..." />
   <div class="card-body">
     <h5 class="card-title">Card title</h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="/" class="btn btn-primary">Read more</a>
   </div>
 </div>
  <div class="card" >
  <img src={BlogPost3 } class="card-img-top" alt="..."  />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="btn btn-primary">Read more</a>
  </div>
</div>
    </>
   
  )
}

export default AllCategories
