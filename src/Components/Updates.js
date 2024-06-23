import React from 'react'
import './Updates.css'
const Updates = () => {
  return (
    <div>
        <div className='update'>
            <div className='logo1'>
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div className='heading'>
                Get our latest updates
            </div>
            <div className='Udesc'>
                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </div>
            <div className='sub'>
                <input type='email'></input>
                <button>Subscribe</button>
            </div>
            <div className='line'>
            We’ll never share your details with third parties.
            View our Privacy Policy for more info.
            </div>
        </div>
    </div>
  )
}

export default Updates
