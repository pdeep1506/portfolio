import React from 'react';
import WorkCard from './WorkCard';
import ProjectCardData from './WorkCardData';
import "./WorkCard.css";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
             
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
