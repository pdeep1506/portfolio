import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <div id="aboutMe">
          <h1>I Build Scalable & Secure Cloud Solutions</h1>
          <h6>
          Hi, I'm Deep Patel, an Azure Cloud Engineer with expertise in cloud infrastructure, DevOps, and automation. I specialize in designing scalable and secure Azure solutions, automating cloud provisioning with Terraform, Bicep, and ARM templates, and implementing CI/CD pipelines for seamless deployments.
I have hands-on experience managing Azure Kubernetes Service (AKS), securing cloud environments with Azure Defender, Key Vault, and RBAC, and optimizing costs and performance using Azure Advisor and auto-scaling strategies.
Beyond cloud engineering, I enjoy developing web applications using React, Node.js, and serverless technologies like Azure Functions. My goal is to build efficient, high-performing systems that enhance business operations and drive innovation.

          </h6>
        </div>

        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      {/* <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={restaurant} className="img" alt="Restaurant Project" />
          </div>
          <div className="img-stack bottom">
            <img src={quote} className="img" alt="Quote Project" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutContent;
