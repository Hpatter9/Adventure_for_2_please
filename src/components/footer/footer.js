import React from 'react';
import './footer.css';

const Footer = ()=> {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

    return (
        <footer className = 'footer-background'>
            <div className='footer-container'>
                {/* <img src={whitelemonlogo} alt = 'Little lemon logo' className='footer-logo' height={50}></img> */}
                <ul className= 'sitenav-list'>
                    <li className = 'sitenav-title'>Site Navigation</li>
                    <li className = 'site-list1'><a href="#home" onClick={scrollToTop}>Home</a></li>
                    <li className = 'site-item'><a href="#menu" onClick={scrollToTop}>Menu</a></li>
                    <li className = 'site-item'><a href="#about" onClick={scrollToTop}>About</a></li>
                    <li className = 'site-item'><a href="#reservations" onClick={scrollToTop}>Reservations</a></li>
                    <li className = 'site-item'><a href="#login" onClick={scrollToTop}>Login</a></li>
                    <li className = 'site-item'><a href="#orderOnline" onClick={scrollToTop}>Order Online</a></li>
                </ul>
                <ul className= 'contactus-list'>
                    <li className = 'contact-title'>Contact Us</li>
                    <li className = 'contact-item'>(555) 123-4567</li>
                    <li className = 'contact-item'>Info@littlelemon.com</li>
                    <li className = 'contact-item'>123 Yummy st., Chicago, IL.</li>
                </ul>
                <ul className ='social-list'>
                    <li className = 'social-title'>Social Media</li>
                    <li className = 'social-item'><a href="https://www.facebook.com">Facebook</a></li>
                    <li className = 'social-item'><a href="https://www.instagram.com">Instagram</a></li>
                    <li className = 'social-item'><a href="https://www.twitter.com">Twitter</a></li>
                </ul>
                <p className='footer-copy'>&copy; 2023 Little Lemon. All rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
