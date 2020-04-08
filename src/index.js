import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeView from './component/presentation/HomeView/HomeView';
import AboutView from './component/presentation/AboutView/AboutView';
import ProjectView from './component/presentation/ProjectView/ProjectView';
import BlogView from './component/presentation/BlogView/BlogView';
import ContactView from './component/presentation/ContactView/ContactView';
import "./styles/index.css";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={HomeView} />
    <Route path='/about' component={AboutView} />
    <Route path="/project" component={ProjectView} />
    <Route path="/blog" component={BlogView} />
    <Route path="/contact" component={ContactView} />
  </Router>,
  document.getElementById('root')
);
