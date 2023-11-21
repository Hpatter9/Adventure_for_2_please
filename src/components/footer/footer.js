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
                </ul>
                <ul className= 'contactus-list'>
                    <li className = 'contact-title'>Contact Us</li>
                    <li className = 'contact-item'>(555) 123-4567</li>
                    <li className = 'contact-item'>Info@gmail.com</li>
                    <li className = 'contact-item'>123 Wonderlust St., Denver, CO.</li>
                </ul>
                <ul className ='social-list'>
                    <li className = 'social-title'>Social Media</li>
                    <li className = 'social-item'><a href="https://www.facebook.com">Facebook</a></li>
                    <li className = 'social-item'><a href="https://www.instagram.com">Instagram</a></li>
                    <li className = 'social-item'><a href="https://www.tictok.com">TicTok</a></li>
                </ul>
                <p className='footer-copy'>&copy; 2023 Adventurefor2please. All rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
