import React from 'react'
import WorkCard from './WorkCard'
import WorkCradData  from './WorkCardData.js'
import "./WorkCard.css";
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCradData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              isLive={val.isLive}
              github={val.github}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Work