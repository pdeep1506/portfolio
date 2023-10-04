
import "./WorkCard.css";
import React from 'react'
import { NavLink } from "react-router-dom";
const WorkCard = (props) => {
    return (
        <div className="project-card">
          <img src={props.imgsrc} alt="image" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
            <NavLink to={props.github} target="_blank" className="btn">
                Code 
              </NavLink>
            {props.isLive && 
              <NavLink to={props.isLive} target="_blank" className="btn">
                Live
              </NavLink>
            }
             
            </div>
          </div>
        </div>
      );
}

export default WorkCard