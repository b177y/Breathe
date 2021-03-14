import React, { useState } from "react";
import SettingsIcon from "../assets/settingsicon.svg";
import {Link} from "react-router-dom";

function HomePage(){
    const [ inhale, setInhale ] = useState(2);
    const [ hold, setHold ] = useState(2);
    const [ exhale, setExhale ] = useState(2);
    const [ duration, setDuration ] = useState(6);
    const [ breatheWord, setBreatheWord ] = useState("Inhale");
    const cssAnimation = `
    @keyframes breathe {
        0% {
             height: 600px
             width: 600px;
             font-size: 60px;
        }
        50% {
             height: 200px
             width: 200px;
             font-size: 40px;
        }
        100% {
             height: 600px
             width: 600px;
             font-size: 60px;
        }
    }
    `

    return(
        <div className="screen">
            <style>{cssAnimation}</style>
            <div className="settingsButton"><Link to="/settings">
                <img className="settingsIcon" src={SettingsIcon} alt="Settings" /></Link>
            </div>
            <div className="mainsection circle" style={{animationDuration: `${duration}s`}}>
                <p className="circle-text">{breatheWord}</p>
            </div>
            <div className="footer"><p>Tap here for useful information</p></div>
        </div>
        )
}

export default HomePage
