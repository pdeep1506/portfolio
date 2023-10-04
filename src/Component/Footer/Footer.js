import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaPhone,
    FaMailBulk,
    FaGithub,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
  import {BiLink} from 'react-icons/bi';
import './Footer.css'

const Footer = () => {
  const navigation = useNavigate();
 
    return (
        <div className="footer">
          <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                <div>
                  <p>London, Canada.</p>
              
                </div>
              </div>
              <div className="phone">
                <h4>
                  <FaPhone
                    size={20}
                    style={{ color: "#fff", marginRight: "2rem" }}
                  />
                  1-519-702-8536
                </h4>
              </div>
              <div className="email">
                <h4>
                  <FaMailBulk
                    size={20}
                    style={{ color: "#fff", marginRight: "2rem" }}
                  />
                  pdeep1506@gmail.com
                </h4>
              </div>
            </div>
    
            <div className="right">
              {/* <h4>About the company</h4>
              <p>
                This is me Fahimul kabir. CEO & Founder of Tech2etc. I enjoy
                discussing new projects and design challenges.
              </p> */}
              <div className="social">
               
               <Link  target="_blank" to='https://twitter.com/pdeep1506'>

                <FaTwitter
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
               </Link>

               <Link target='_blank' to='https://linkedin.com/in/pdeep1506'>

                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
               </Link>
                  <Link target='_blank' to='https://github.com/pdeep1506'>

                  <FaGithub  size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                  </Link>

                  
                  <Link target='_blank' to='https://linktr.ee/pdeep1506'>

                  <BiLink  size={30} style={{ color: "#fff", marginRight: "1rem" }} />

                  </Link>
                  
              </div>
            </div>
          </div>
        </div>
      );
  
}

export default Footer