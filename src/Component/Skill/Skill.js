import React from 'react'
import './Skill.css'
import HeroImg2 from '../../Component/HeroImg2/HeroImg2.js'
import html from '../../assets/skills/html.svg'


const Skill = () => {
  return (
    <div>
        <HeroImg2 heading="Skills." text="Lets look at my skills" />

<div className='skill-container'>

        //!Frontend Development
          <div className='boxes box-1'>
          <h2>Frontend Development</h2>
          <div className='box1'>
                <div className='box'>
                    <img src={html}></img>
                    HTML
                </div>
                <div className='box'>
                    <img src={html}></img>
                    CSS3
                </div>
                <div className='box'>
                    <img src={html}></img>
                    JavaScript
                </div>
                <div className='box'>
                    <img src={html}></img>
                    React Js
                </div>
                <div className='box'>
                    <img src={html}></img>
                    Redux
                </div>
                <div className='box'>
                    <img src={html}></img>
                    Tailwind
                </div>
          </div>
          </div>

        //! Backend Development

          <div className='boxes box-2'>
          <h2>Backend Development</h2>
          <div className='box1'>
                <div className='box'>
                    <img src={html}></img>
                    Node Js
                </div>
                <div className='box'>
                    <img src={html}></img>
                    Express Js
                </div>
                <div className='box'>
                    <img src={html}></img>
                    MongoDB
                </div>
                <div className='box'>
                    <img src={html}></img>
                    MySql
                </div>

                
               
          </div>
          </div>


          //! Programming Language
          <div className='boxes box-3'>
          <h2>Programming Language</h2>
          <div className='box1'>
                <div className='box'>
                    <img src={html}></img>
                    C
                </div>
                <div className='box'>
                    <img src={html}></img>
                    Java
                </div>
                
                
          </div>
          </div>

          //! Version Control & Development
          <div className='boxes box-4'>
          <h2>Version Control & Development</h2>
          <div className='box1'>
                <div className='box'>
                <img src={html}></img>
                Git
                </div>
                <div className='box'>
                    <img src={html}></img>
                    GitHub
                </div>
               
          </div>
          </div>


          //! Cloud Computing
          <div className='boxes box-5'>
          <h2>Cloud Computing</h2>
          <div className='box1'>
                <div className='box'>
                    <img src={html}></img>
                    AWS
                </div>
                
                
          </div>
          </div>

        //! Agile Methodology
          <div className='boxes box-6'>
          <h2>Agile Methodology</h2>
          <div className='box1'>
                <div className='box'>
                Scrum
                </div>
               
          </div>
          </div>

        //! Tools
          <div className='boxes box-7'>
          <h2>Tools</h2>
          <div className='box1'>
                <div className='box'>
                   
                    VS Code

                </div>
                <div className='box'>
               
                    Postman
                </div>

          </div>
          </div>

        //! concept
          <div className='boxes box-8'>
          <h2>Concepts</h2>
          <div className='box1'>
                <div className='box'>
                   
                Object Oriented Programming

                </div>
                <div className='box'>
                Data structure & Algorithm
                </div>
                <div className='box'>
                Data base management system
                </div>
                <div className='box'>
                Software Engineering
                </div>
                
          </div>
          </div>
        
          </div>
       </div>
        

    
  )
}

export default Skill