import React from "react";
import "./BlogView.css";
import FullScreenOverlay from "../FullScreenOverlay/FullScreenOverlay";

const BlogView = () => {
  return (
    <>
      <FullScreenOverlay />
      <div className="blog_container">
        <div className="blog_box">
          <h1>BLOGS</h1>
          <div className="blog_content">
            <div className="blog_1">
              <a
                href="https://medium.com/@akakankur81/a-quick-overview-on-react-dom-render-and-hydrate-6d0ec6c1b234"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "white",
                  position: "relative",
                  top: "8rem",
                }}
              >
                {" "}
                More Info...
              </a>
            </div>
            <div className="blog_2">
              <a
                href="https://medium.com/@akakankur81/create-handwritten-text-animation-using-adobe-illustrator-ccdea7691d8d"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "white",
                  position: "relative",
                  top: "8rem",
                }}
              >
                {" "}
                More Info...
              </a>
            </div>
          </div>

          <div className="blog_content">
            <div className="blog_3">
              <a
                href="https://medium.com/@akakankur81/phone-authentication-in-react-js-application-using-firebase-and-firebase-ui-146fd1a975d3"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "white",
                  position: "relative",
                  top: "6rem",
                }}
              >
                {" "}
                More Info...
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogView;
