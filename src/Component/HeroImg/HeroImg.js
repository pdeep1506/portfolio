import React from 'react'
import './HeroImg.css'
import { Link } from 'react-router-dom'
import IntroImg from "../../assets/intro-bg.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
      <img className="into-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
      <p>HI, I'M Deep Patel.</p>
      <h1>Azure Cloud <bl></bl>Engineer</h1>
      <div>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  </div>
  )
}

export default HeroImg