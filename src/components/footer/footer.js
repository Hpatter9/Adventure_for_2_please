import React from 'react';
import './footer.css';
import footerLogo from '../../assets/af2p-logo2.png'

const Footer = ()=> {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      
    return (
        <footer className = 'footer-container'>
            <div className='footer-background'>
                <img src ={footerLogo} alt = 'adventure for 2 please logo' className='footer-logo' height={50}></img>
                <ul className= 'sitenav-list'>
                    <li className = 'sitenav-title'>Site Navigation</li>
                    <li className = 'site-list1'><a href="#home" onClick={scrollToTop}>Home</a></li>
                    <li className = 'site-item'><a href="#sofar" onClick={scrollToTop}>Adventures So Far</a></li>
                    <li className = 'site-item'><a href="#contactus" onClick={scrollToTop}>Contact Us</a></li>
                    <li className = 'site-item'><a href="#future" onClick={scrollToTop}>Future Plans</a></li>
                    <li className = 'site-item'><a href="#globe" onClick={scrollToTop}>Our Travels</a></li>
                </ul>
                <ul className= 'contactus-list'>
                    <li className = 'contact-title'>Contact Us</li>
                    <li className = 'contact-item'>Hpatter9@gmail.com</li>
                    <li className = 'contact-item'>Denver, CO., USA</li>
                </ul>
                <ul className ='social-list'>
                    <li className = 'social-title'>Social Media</li>
                    <li className = 'social-item'><a href="https://www.instagram.com/adventurefor2please/">Instagram</a></li>
                    <li className = 'social-item'><a href="https://www.tiktok.com/@adventurefor2please">TikTok</a></li>
                </ul>
                <p className='footer-copy'>&copy; 2023 Adventurefor2please. All rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
