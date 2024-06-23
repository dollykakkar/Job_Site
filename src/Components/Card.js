import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div>
        <div className='sec5'>
          <div className='description'>
            <p className='p12'>News that help</p>
            <p className='p21'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>

{/* CARDS */}
      <div className='crdd'>
          <div class="card crd">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-title ">Career</p>
              <p class="card-text pcrd">How to win any job you want. Get started with 5 steps.</p>
            </div>
          </div>
          <div class="card crd">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-title">Lifestyle</p>
              <p class="card-text pcrd">10 ways to reduce your office work depression.</p>
            </div>
          </div>
          <div class="card crd">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <p class="card-title">Career</p>
              <p class="card-text pcrd">Why should you work as a team even on small projects.</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
export default Card
