import React, { useState } from 'react';
import menuicon from '../../assets/hamburger menu.svg';
import { useNavigate } from "react-router-dom";
import './header.css';
import headerLogo from '../../assets/af2plogo-whitetext.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickImage = () => {
    navigate("/");
  };

  const menuItems = [
    { id: 1, label: "Home", link: "/af2p/#/" },
    { id: 5, label: "Globe", link: "/af2p/#/globe"},
    { id: 4, label: "Future Plans", link: "/af2p/#/future" },
    { id: 3, label: "Adventure So Far", link: "/af2p/#/sofar" },
    { id: 2, label: "Contact Us", link: "/af2p/#/contactus" },
  ];

  return (
    <header className="header-container">
      <div className="header-logo">
        <img
          src={headerLogo}
          alt="Adventure for 2 Please header logo"
          onClick={onClickImage}
        />
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="link" onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header-social">
        <a href="https://www.facebook.com/adventurefor2please/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.linkedin.com/in/adventurefor2please/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.instagram.com/adventurefor2please/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="mailto:adventurefor2please@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <img src={menuicon} alt="menu-icon" />
      </div>
    </header>
  );
};

export default Header;
