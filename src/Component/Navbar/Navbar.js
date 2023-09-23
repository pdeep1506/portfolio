import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>
            <h1>Deep Patel</h1>
        </Link>

        <ul className='nav-menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/project'>Project</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar