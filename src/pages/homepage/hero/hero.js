import React from 'react';
import './hero.css';

const Hero = () => {
    const heroImage = 'https://lh3.googleusercontent.com/pw/ADCreHdyl2MQhQoI-_Whmv13la3xAQG_VoS4FLjyuk1hQ7otYr_uPR0rba7PbWLeS_H99bOC5hAKjHYwLxJMWv46d28Au3Tg3vJ0oMlFSitSg2MXdL-l63C6=w2400';
    return (
        <div className = 'hero-container'>
            <div className='hero-background'>
                <img className='hero-img' src={heroImage} alt='Us on our adventures'/>
                <h1 className='hero-text1'>We Are</h1>
                <h1 className='hero-text2'>Adventure for 2 Please!</h1>
            </div>
        </div>
    )
}
export default Hero;