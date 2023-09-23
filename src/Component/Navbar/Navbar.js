import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [showBtn, setshowBtn] = useState(false);
  return (
    <div className='navbar'>
        <Link to='/'>
            <h1>Deep Patel</h1>
        </Link>

        <ul className={showBtn?"nav-menu":"nav-menu-active"}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/project'>Project</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <div className='hamburger'>
        {
            showBtn ?
            <FaBars size={20} style={{color:"#fff"}} onClick={()=>setshowBtn(!showBtn)}/>:<AiOutlineClose size={20}style={{color:"#fff"}} onClick={()=>setshowBtn(!showBtn)} ></AiOutlineClose>
        }
        </div>
    </div>
  )
}

export default Navbar