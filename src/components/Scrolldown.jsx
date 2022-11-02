import React from "react";
import './ScrollDown.css';

const ScrollDown = () => {
    return(
        <div className="scroll-down">
            <strong><a>Scroll down!</a></strong>
            <img className="scroll-down--arrow" src="src/assets/down-arrow.svg"/>
        </div>
    )
}

export default ScrollDown;