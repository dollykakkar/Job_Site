import React from 'react'
import './Section2.css'
const Section2 = () => {
  return (
    <div>
      <div className='sec2'>
        <div className='desc'>
            <p className='p1'>Jobs by category</p>
            <p className='p2'>With lots of unique blocks, you can easily build a page without coding.</p>
        </div>
        <div className='cmpny'>
            <div className='cmp'>
                <p className='p11'>Design</p>
                <p className='p22'>47 Jobs</p>
            </div>
            <div className='cmp'>
                <p className='p11'>Marketing</p>
                <p className='p22'>51 Jobs</p>
            </div>
            <div className='cmp'>
                <p className='p11'>Engneering</p>
                <p className='p22'>89 Jobs</p>
            </div>
            <div className='cmp'>
                <p className='p11'>Management</p>
                <p className='p22'>16 Jobs</p>
            </div>
            <div className='cmp'>
                <p className='p11'>Finance</p>
                <p className='p22'>24 Jobs</p>
            </div>
            <div className='cmp'>
                <p className='p11'>Coustomer Support</p>
                <p className='p22'>36 Jobs</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
