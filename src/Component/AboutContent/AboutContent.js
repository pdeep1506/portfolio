import "./AboutContent.css";

import React from "react";
import { Link } from "react-router-dom";
import quote from "../../assets/quote.png";
import restaurant from "../../assets/restaurant.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        {/* <h1>Who Am I?</h1> */}
        {/* Im a software developer. */}
        <p>
         {/* <br></br> */}
          Turning Code into Innovation, One Line at a Time
        
          </p>
         
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        {/* <Link to="/skill">
          <button className="btn">Skills</button>
        </Link> */}
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={restaurant} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={quote} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
