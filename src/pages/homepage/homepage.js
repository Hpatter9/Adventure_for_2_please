import React from 'react';
import './homepage.css';
import Hero from './hero/hero';
import About from './about/about';
import RandomPic from './randompic/randompic';
import FavoritesSection from './favorites/favorites';

const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            <FavoritesSection />
            <RandomPic />
        </>
    )
}

export default Homepage;