import React from 'react';
import './about.css';

const About = () => {
    const aboutImg1 = 'https://lh3.googleusercontent.com/pw/ADCreHfNyec4HvRLaVFViyk9Q-2v9KyY3aJICRVvFdgbVIMQYtuTd63vbddOzcFi-pXuSFr3kGueRD-YIGT09RDlWq875tWPdFVCp8wfWBOIyl8GV1EANsrZ=w2400';
    const aboutImg2 = 'https://lh3.googleusercontent.com/pw/ADCreHdWGmm3iC4m8j3v-vlkAzfee6lVojh4ogtsLLWtQkRBrIS6qsS3M26sPqzIq1qotMziPNdRW8r0gE7ZgVr1erbtyEIu9l56fZikefVeibSsZIbAHKF9=w2400';
    const aboutImg3 = 'https://lh3.googleusercontent.com/pw/ADCreHd7P8KltaDNKg8WiId1zhZrBdQfCO0sXA0loz7_DnOuvBxDbHekHCuq7Nz03U5Lmzj2dZoFrXtTVCfrqVp7gwx9JmiS1redpJB7SpIXj8R4SYLNWCnx=w2400';
    const aboutImg4 = 'https://lh3.googleusercontent.com/pw/ADCreHdxXh0Cf5zvGA_5Ut7n-3eYOHgmFlyuIHA0k5Z0UeGzcw6r8hcZNfsafricoi4a-rBRi7hAyJ0FueJ2JzUZ2ufnJMra9szDLB5WSrwdQcaqrFaob0eq=w2400';
    const aboutImg5 = 'https://lh3.googleusercontent.com/pw/ADCreHfUvgw6PiLSFlCY5LbaLy6f98okdpMOQ_g0K7PtRT-O3fwUz2NxczDuFcsAlmSzBRApuUT073-EkoPXOSCkXYYua_0ytC-m0wjmFkjZeXiPlU-JBzZN=w2400';

    return(
        <div className='about-container'>
            <div className='about-background'>
                <h1 className='about-header'>Little bit about us</h1>
                <div className='about-text'>
                    <p>We are Hunter and Marlys, a couple who traded in their apartment for the open road in June 2022. Since then, we've been exploring the world one adventure at a time, seeking out new experiences and creating memories that will last a lifetime.</p>
                    <p>Our passion for travel stems from a shared desire to break free from the confines of routine and embrace the world's diversity. We believe that life is too short to stay in one place, and that the greatest adventures are often found just beyond our comfort zones.</p>
                    <p>So, we packed our bags, bid farewell to our familiar surroundings, and set out on a journey filled with uncertainty and excitement. We've hiked through lush rainforests, marveled at ancient ruins, and immersed ourselves in vibrant cultures. Each step has been a learning experience, opening our eyes to the beauty and wonder that surrounds us.</p>
                    <p>Along the way, we've shared our experiences with others through our social media handle, Adventurefor2please. We've connected with fellow travelers from all corners of the globe, sharing tips, stories, and encouragement. We hope that our adventures inspire others to chase their dreams and discover the world's hidden gems.</p>
                    <p>Our journey is far from over, and we're eager to see what new adventures await us. We invite you to join us on our journey as we explore the world, one destination at a time. Together, we can prove that adventure isn't just for the young and carefree; it's for anyone who dares to dream and explore.</p>
                    <p>Adventurefor2please: Where life is a journey, and every moment is an adventure waiting to happen!</p>
                </div>
                <div className='about-img-container'>
                    <img className='about-img' src={aboutImg1} alt='about pic1'/>
                    <img className='about-img' src={aboutImg2} alt='about pic2'/>
                    <img className='about-img' src={aboutImg3} alt='about pic3'/>
                    <img className='about-img' src={aboutImg4} alt='about pic4'/>
                    <img className='about-img' src={aboutImg5} alt='about pic5'/>
                </div>
            </div>
        </div>
    )
}

export default About;