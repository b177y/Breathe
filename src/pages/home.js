import React, { useState } from "react";
import SettingsIcon from "../assets/settingsicon.svg";
import {Link} from "react-router-dom";

function HomePage(){
    const [ inhale, setInhale ] = useState(7);
    const [ hold, setHold ] = useState(7);
    const [ exhale, setExhale ] = useState(7);
    const cssAnimation = `
    @keyframes breatheAnimation {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
    `
    return(
        <div className="screen">
            <style>{cssAnimation}</style>
            <div className="settingsButton"><Link to="/settings">
                <img className="settingsIcon" src={SettingsIcon} alt="Settings" /></Link>
            </div>
            <div className="mainsection circle" style={{animationDuration: 4}}>
                <p className="circle-text">Hold</p>
            </div>
            <div className="footer"><p>Swipe for useful information >></p></div>
        </div>
        )
}

export default HomePage
