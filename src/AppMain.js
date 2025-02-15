import React from "react";
import './AppMain.css';

export default function AppMain (props) {
    return (
<div className="container AppMain">
  <div className="Intro">
    <h2>Examples of my Portfolio:</h2>
  </div>
  <div className="container">
    <div className="row">
    <div className="col-1"></div>
      <div className="col-4"><h3><a href="https://github.com/casakc/travel-project" target="_blank"
          rel="noopener noreferrer" title="Please click to view the code of my example of a responsive webpage">Responsive Webpage</a></h3></div>
      <div className="col-6"><h3><a href="https://w3add-travel-project.netlify.app/" target="_blank" rel="noopener noreferrer">https://w3add-travel-project.netlify.app/</a></h3></div>
      <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
      <div className="col-4"><h3><a href="https://github.com/casakc/react-add-on-week-1" target="_blank"
          rel="noopener noreferrer" title="Please click to view the code of my example of a webpage with react">
          Webpage using React</a></h3></div>
      <div className="col-6"><h3><a href="https://react-add-on-week-2.netlify.app/" target="_blank"
          rel="noopener noreferrer" title="Please click to view my example of a webpage with react">
          https://react-add-on-week-2.netlify.app/</a></h3></div>
          <div className="col-1"></div>
      </div>
            <div className="row">
            <div className="col-1"></div>
      <div className="col-4"><h3>Python Example</h3></div>
      <div className="col-6"><h3><a href="https://react-add-on-week-2.netlify.app/" target="_blank"
          rel="noopener noreferrer">
          </a><em><small>To be updated soon</small></em></h3></div>
          <div className="col-1"></div>
      </div>
      <div className="row">
      <div className="col-1"></div>
      <div className="col-4"><h3><a href="https://github.com/casakc/ai-add-on-week2" target="_blank"
          rel="noopener noreferrer" title="Please click to view the code of my example of a webpage with AI and JavaScript">AI + JavaScript Example</a></h3></div>
      <div className="col-6"><h3><a href="https://ai-add-on-week2.netlify.app/" target="_blank"
          rel="noopener noreferrer">
          https://ai-add-on-week2.netlify.app/</a></h3></div>
          <div className="col-1"></div>
      </div>
    </div>  
 </div>
    );}
