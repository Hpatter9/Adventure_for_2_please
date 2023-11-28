import React from 'react';
import './future.css';
import logoBack from '../../assets/af2p-logo2-blue-large.png';

const Future = () => {
    return(
        <div className='future-container'>
            <div className = 'future-background'>
                <img src={logoBack} alt= 'logo large and blue'/>
                <div className = 'future-title'>
                    <h1>Taking a break in the States for a bit...</h1>
                </div>
                <div className='future-content'>
                    <h3>Our wanderlust knows no bounds and these are the places we still want to visit in the future.</h3>
                    <ul>
                        <li>South America: We're eager to explore the vibrant cultures, breathtaking landscapes, and diverse wildlife of South America, from the bustling cities of Brazil to the majestic peaks of the Andes.</li>
                        <li>Australia and New Zealand: The vast landscapes, unique wildlife, and laid-back cultures of Australia and New Zealand are calling us. We're dreaming of exploring the Great Barrier Reef, hiking the trails of New Zealand's national parks, and experiencing the Aboriginal and Maori cultures.</li>
                        <li>Antarctica: The frozen continent of Antarctica is a place of immense natural beauty and scientific significance. We're planning to embark on an expedition to witness the incredible wildlife, including penguins, seals, and whales, and learn about the continent's unique ecosystem.</li>
                        <li>United States: We're passionate about exploring our own backyard, and we still have many corners of the United States to discover. From the national parks of the West to the historic cities of the East, we're excited to continue uncovering the beauty and diversity of our country.</li>
                    </ul>
                    <h3>These are just a few of our many aspirations, and we can't wait to share our future adventures with you. Stay tuned for more updates on our travel plans!</h3>
                </div>
            </div>
        </div>
    );
}

export default Future;