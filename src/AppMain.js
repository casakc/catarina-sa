import React from "react";
import './AppMain.css';

export default function AppMain (props) {
    return (
<div className="App-main">
  <div className="Intro">
    <h2>Examples of my Portfolio:</h2>
  </div>
  <div className="table">
    <div className="row">
      <div className="col-4"><h3>Responsive Webpage</h3></div>
      <div className="col-7"><h3><a href="https://w3add-travel-project.netlify.app/" target="_blank" rel="noopener noreferrer">https://w3add-travel-project.netlify.app/</a></h3></div>
      </div>
      <div className="row">
      <div className="col-4"><h3>Webpage using React</h3></div>
      <div className="col-7"><h3><a href="https://react-add-on-week-2.netlify.app/" target="_blank"
          rel="noopener noreferrer">
          https://react-add-on-week-2.netlify.app/</a></h3></div>
      </div>
            <div className="row">
      <div className="col-4"><h3>Python Example</h3></div>
      <div className="col-7"><h3><a href="https://react-add-on-week-2.netlify.app/" target="_blank"
          rel="noopener noreferrer">
          </a></h3></div>
      </div>
      <div className="row">
      <div className="col-4"><h3>AI + JavaScript Example</h3></div>
      <div className="col-7"><h3><a href="https://ai-add-on-week2.netlify.app/" target="_blank"
          rel="noopener noreferrer">
          https://ai-add-on-week2.netlify.app/</a></h3></div>
      </div>
    </div>
 </div>
    );}
