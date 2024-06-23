import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className='header'>
            <div className='lft'>
                <div className='title'>Find a dream job that changes life.</div>
                <div className='descp'>With lots of unique blocks, you can easily build a page without coding. Build your next job website.</div>
                <div className='box'>
                    <input></input>
                    <input></input>
                    <button className='btn1'>Search</button>
                </div>
            </div>
            <div className='ryt'>
                <img src='src\img\office.png'></img>
            </div>
      </div>
    </div>
  )
}

export default Header
