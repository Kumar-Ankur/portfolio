import React from "react";
import HeaderView from "../HeaderView/HeaderView";
import AboutView from "../AboutView/AboutView";
import ProjectView from "../ProjectView/ProjectView";
import BlogView from "../BlogView/BlogView";
import ContactView from "../ContactView/ContactView";

const HomeView = () => {
  return (
    <>
      <HeaderView />
      <AboutView />
      <ProjectView />
      <BlogView />
      <ContactView />
    </>
  );
};

export default HomeView;
