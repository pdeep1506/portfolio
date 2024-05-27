import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes} from 'react-icons/fa'
import Deep from '../../assets/Deep.png'
const Navbar = () => {
    const [showBtn, setshowBtn] = useState(false);
    const [color, setColor] = useState(false);
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    const handleClick = () => setshowBtn(!showBtn);
    window.addEventListener("scroll", changeColor);
    return (
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
          {/* <h1>Portfolio</h1> */}
          <img src={Deep} alt='Deep'></img>
        </Link>
        <ul className={showBtn ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" onClick={handleClick}>Home</Link>
          </li>
          <li>
            <Link to="/project" onClick={handleClick}>Project</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleClick}>Contact</Link>
          </li>
          <li>
            <Link to='/timeline' onClick={handleClick}>Timeline</Link>
          </li>

          <li>
            <Link to='/Skill' onClick={handleClick}>Skills</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {showBtn ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    );
}

export default Navbar