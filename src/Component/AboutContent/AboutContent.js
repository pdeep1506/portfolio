import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";
import quote from "../../assets/quote.png";
import restaurant from "../../assets/restaurant.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <div id="aboutMe">
          <h1>I Develop Systems that Work</h1>
          <h6>
            Hi, I'm Deep Patel, a passionate Software Developer with a knack for turning ideas into efficient and scalable applications. 
            I have experience in both frontend and backend development, with a special love for React and Node.js. 
            Whether it's building dynamic web apps or crafting seamless user experiences, I'm all in! 
            When I'm not coding, you'll find me exploring new tech trends or brainstorming my next big project. 
            Let's connect and create something awesome together!
          </h6>
        </div>

        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={restaurant} className="img" alt="Restaurant Project" />
          </div>
          <div className="img-stack bottom">
            <img src={quote} className="img" alt="Quote Project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
