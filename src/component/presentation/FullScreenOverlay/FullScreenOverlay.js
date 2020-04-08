import React from "react";
import "./FullScreenOverlay.css";
import { Link } from "react-router-dom";

const FullScreenOverlay = () => {
  const closeSilder = () => {
    if (document.getElementById("myNav")) {
      document.getElementById("myNav").style.width = "0%";
    }
    if (document.getElementById("menuToggle")) {
      document.getElementById("menuToggle").style.display = "block";
    }
    if (document.querySelectorAll(".overlay_container")) {
      const nodeList = document.querySelectorAll(".overlay_container");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.display = "block";
      }
    }
  };

  const openSlider = () => {
    if (document.getElementById("myNav")) {
      document.getElementById("myNav").style.width = "100%";
    }
    if (document.getElementById("menuToggle")) {
      document.getElementById("menuToggle").style.display = "none";
    }
    if (document.querySelectorAll(".overlay_container")) {
      const nodeList = document.querySelectorAll(".overlay_container");
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.display = "none";
      }
    }
  };
  return (
    <>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeSilder}>
          &times;
        </a>
        <div className="overlay-content">
          <Link style={{ textDecoration: "none" }} to="/">
            <span>Home</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <span>About Me</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/project">
            <span>Projects</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/blog">
            <span>Blogs</span>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <span>Contact Me</span>
          </Link>
        </div>
      </div>
      <div className="overlay_container">
        <div id="menuToggle" onClick={openSlider}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default FullScreenOverlay;
