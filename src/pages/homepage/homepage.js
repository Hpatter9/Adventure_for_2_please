import React from 'react';
import './homepage.css';
import Hero from './hero/hero';
import About from './about/about';
import RandomPic from './randompic/randompic';
import GlobeComponent from './globe/globe';

const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            <GlobeComponent />
            <RandomPic />
        </>
    )
}

export default Homepage;