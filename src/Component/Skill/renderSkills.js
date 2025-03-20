import React from 'react'

const renderSkills = (skills) => {
    return skills.map((skill, index) => (
        <div className='box' key={index}>
          
          {skill.name}
        </div>
      ))
}

export default renderSkills