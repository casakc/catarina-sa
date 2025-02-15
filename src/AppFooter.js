import React, { useState } from "react";
import "./AppFooter.css";
import logoOne from './linkedin.png';

export default function AppFooter(props) {
    const [buttonText, setButtonText] = useState("My e-mail");
    
    const handleMouseEnter = () => setButtonText("casakc@gmail.com");
    const handleMouseLeave = () => setButtonText("My e-mail");

    return (
        <div className="AppFooter">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-2">
                    <button 
                        className="btn btn-primary" 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}>
                        {buttonText}
                    </button>
                </div>
                <div className="col-2">
                    <img src={logoOne} alt="LinkedIn logo" title="LinkedIn logo" className="col-2-img img-fluid" />
                </div>
                <div className="col-5">
                    <p><small>Coded by Catarina S-A and hosted on <a className="App-link"
                        href="https://github.com/casakc/catarina-sa"
                        target="_blank"
                        rel="noopener noreferrer" title="Please click to view the code of this webpage">GitHub</a> and <a className="App-link"
                        href="https://catarina-sa.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer">Netlify</a></small></p>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}
