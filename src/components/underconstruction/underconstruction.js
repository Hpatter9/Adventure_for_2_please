import React from 'react';
import "./underconstruction.css";
import Logo from '../../assets/af2p-logo2.png'

const UnderConstruction = () => {
    return (
        <div className= 'uc-background'>
            <div className = 'uc-container'>
                <h1 className = 'uc-text'>Sorry, we're still under construction...</h1>
                <img className = 'uc-image' src = {Logo} alt = 'under construction'></img>
            </div>
        </div>
    );
};

export default UnderConstruction;