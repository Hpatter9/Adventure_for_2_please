import React from 'react';
import './homepage.css';
import Hero from './hero/hero';
import About from './about/about';
import RandomPic from './randompic/randompic';

const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            <RandomPic />
        </>
    )
}

export default Homepage;