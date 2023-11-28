import React from 'react';
import './instagram.css';
import logoBack from '../../../assets/af2p-logo2.png';

const Instagram = () => {
    return(
        <div className='instagram-container'>
            <div className = 'instagram-background'>
                <div className = 'instagram-image'>
                    <img src={logoBack} alt= 'logo large and blue'/>
                </div>
                <div className = 'instagram-text'>
                    <div className = 'instagram-title'>
                        <h1>Follow us on Instagram!</h1>
                    </div>
                    <div className='instagram-content'>
                        <h2>Follow us on Instagram to see our latest photos and updates!</h2>
                        <a href="https://www.instagram.com/adventurefor2please/" target="_blank" rel="noreferrer">
                            <button className='instagram-button'>@Adventurefor2Please</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Instagram;