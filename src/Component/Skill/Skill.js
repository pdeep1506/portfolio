import React from 'react'
import './Skill.css'
import HeroImg2 from '../../Component/HeroImg2/HeroImg2.js'
import cryptohunter from '../../assets/cryptohunter.png'
import HtmlIcon from '@mui/icons-material/Html';
const Skill = () => {
  return (
    <div>
        <HeroImg2 heading="Skills." text="Lets look at my skills" />

<div className='skill--card'>

        <div className='skill--item '>
        <img src={cryptohunter} className='img' alt="image" />
    
            <p>html</p>
        </div>
        
</div>
    </div>
  )
}

export default Skill