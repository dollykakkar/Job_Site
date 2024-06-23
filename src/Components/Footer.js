import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='flft'>
            <h3>Brainwave.io</h3>
            <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            <div className='icns'>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
        </div>
        <div className='fryt'>
            <div className='cpny'>
                <p>Company</p>
                <a href='#'>About us</a>
                <a href='#'>Contact us</a>
                <a href='#'>Careers</a>
                <a href='#'>Press</a>
            </div>
            <div className='product'>
                <p>Product</p>
                <a href='#'>Features</a>
                <a href='#'>Pricing</a>
                <a href='#'>News</a>
                <a href='#'>Help Desk</a>
                <a href='#'>Support</a>
            </div>
            <div className='service'>
                <p>Service</p>
                <a href='#'>Digital Marketing</a>
                <a href='#'>Content Writing</a>
                <a href='#'>SEO of Buisness</a>
                <a href='#'>UI Design</a>
            </div>
            <div className='legal'>
                <p>Legal</p>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms & Conditions</a>
                <a href='#'>Return Policy</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
