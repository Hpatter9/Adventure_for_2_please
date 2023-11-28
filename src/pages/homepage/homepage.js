import React from 'react';
import './homepage.css';
import Hero from './hero/hero';
import About from './about/about';
import RandomPic from './randompic/randompic';
import FavoritesSection from './favorites/favorites';
import Instagram from './instagram/instagram';

const Homepage = () => {
    return (
        <div className='homepage'>
            <Hero />
            <About />
            <Instagram />
            <FavoritesSection />
            <RandomPic />
        </div>
    )
}

export default Homepage;