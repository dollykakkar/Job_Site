import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <div className='nav'>
            <div className='logo'>Brainwave.io</div>
            <div className='menu'>
                <ul>
                    <li>Demos</li>
                    <li>Pages</li>
                    <li>Support</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='btns'>
                <button>Login</button>
                <button> Sign up</button>
            </div>
      </div>
    </div>
  )
}

export default NavBar
