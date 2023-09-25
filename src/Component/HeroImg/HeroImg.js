import React from 'react'
import './HeroImg.css'
import { Link } from 'react-router-dom'


const HeroImg = () => {
  return (
    <div>
            <div className='content'>
                    <p>HI, I'M Deep Patel</p>
                    <h1>Software Developer</h1>

                    <div>
                        <Link to='/project' className='btn'>PROJECTS</Link>
                        <Link to='/contact' className='btn btn-light'>Contact</Link>
                    </div>
            </div>
   
    </div>
  )
}

export default HeroImg