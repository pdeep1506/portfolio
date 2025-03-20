import React from 'react';
import './Skill.css';
import HeroImg2 from '../../Component/HeroImg2/HeroImg2.js';
import renderSkills from './renderSkills.js';
import {
  agile,
  
  certifications, // Fixed from "certificates"
  cloudComputingSkills,
  
  
  automationIaC, // Replacing "programmingLanguages" with the correct name
  databaseSkills,
  devOpsSkills,
  monitoringSecurity,
  networking,
  containerization,
  
  versionControlSkills,
} from './data.js';

const Skill = () => {
  return (
    <div>
      <HeroImg2 heading="Skills." text="Let's look at my skills" />

      <div className="skill-container">
        
        {/* Frontend Development */}
     
        {/* Infrastructure as Code & Automation */}
        <div className="boxes box-3">
          <h2>Infrastructure as Code & Automation</h2>
          <div className="box1">{renderSkills(automationIaC)}</div>
        </div>

        {/* Database Management */}
        <div className="boxes box-4">
          <h2>Database Management</h2>
          <div className="box1">{renderSkills(databaseSkills)}</div>
        </div>

        {/* DevOps & CI/CD */}
        <div className="boxes box-5">
          <h2>DevOps & CI/CD</h2>
          <div className="box1">{renderSkills(devOpsSkills)}</div>
        </div>

        {/* Cloud Computing */}
        <div className="boxes box-6">
          <h2>Cloud Computing</h2>
          <div className="box1">{renderSkills(cloudComputingSkills)}</div>
        </div>

        {/* Security & Monitoring */}
        <div className="boxes box-7">
          <h2>Security & Monitoring</h2>
          <div className="box1">{renderSkills(monitoringSecurity)}</div>
        </div>

        {/* Networking */}
        <div className="boxes box-8">
          <h2>Networking</h2>
          <div className="box1">{renderSkills(networking)}</div>
        </div>

        {/* Containerization & Orchestration */}
        <div className="boxes box-9">
          <h2>Containerization & Orchestration</h2>
          <div className="box1">{renderSkills(containerization)}</div>
        </div>

        {/* Version Control & Development */}
        <div className="boxes box-10">
          <h2>Version Control & Development</h2>
          <div className="box1">{renderSkills(versionControlSkills)}</div>
        </div>


       

       

        {/* Certifications */}
        <div className="boxes box-14">
          <h2>Certifications</h2>
          <div className="box1">{renderSkills(certifications)}</div>
        </div>

      </div>
    </div>
  );
};

export default Skill;
