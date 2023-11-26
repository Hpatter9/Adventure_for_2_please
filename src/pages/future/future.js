import React from 'react';
import UnderConstruction from '../../components/underconstruction/underconstruction';
import './future.css';

const Future = () => {
    return(
        <div className='future-container'>
            <div className = 'future-background'>
                <div className = 'future-title'>
                    <h1>Duh, we're gonna travel in the future still!</h1>
                </div>
                <div className = 'future-content'>
                    <UnderConstruction />
                </div>
            </div>
        </div>
    );
}

export default Future;