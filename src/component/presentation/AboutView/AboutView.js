import React from "react";
import "./AboutView.css";
import FullScreenOverlay from "../FullScreenOverlay/FullScreenOverlay";
import { GiFastArrow  } from 'react-icons/gi';
import { FaUserFriends  } from 'react-icons/fa';
import { GoSearch  } from 'react-icons/go';

const AboutView = () => {
  return (
    <>
    <FullScreenOverlay />
    <div className="about_container">
      <div className="about_box">
        <h1>ABOUT</h1>
        <span>This is who I am in nutshell:</span>
        <div className="about_content">
          <div className="about_content_1">
            <div className="circle"><span className="icon_style"><GiFastArrow /></span></div>
            <h3 className="about_heading">Fast Learner</h3>
            <p className="about_desc">
              I love writing code and like to explore new languages I think will
              make me more efficient in my daily tasks.
            </p>
          </div>
          <div className="about_content_1">
            <div className="circle"><span className="icon_style"><FaUserFriends /></span></div>
            <h3 className="about_heading">Committed</h3>
            <p className="about_desc">
              You need a reliable person that will get the job done? Look no
              further! I deliver work on time and communicate often with my team
              if necessary.
            </p>
          </div>
          <div className="about_content_1">
            <div className="circle"><span className="icon_style"><GoSearch /></span></div>
            <h3 className="about_heading">Attention to Details</h3>
            <p className="about_desc">
              Understanding the mechanism of each language is what I am all
              about! i do not like the feeling of solving a problem without
              knowing how I did it.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default AboutView;
