import React, { useState } from 'react';
import menuicon from  '../../assets/hamburger menu.svg';
import { useNavigate } from "react-router-dom";
import './header.css';

const Header = () => {

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen);
  };

  const onClickImage = () => {
    navigate ("/");
  };
  
  const menuItems = [
    { id: 1, label: "Home", link: "/af2p/#/" },
    { id: 2, label: "Contact Us", link: "/af2p/#/contactus" },
    { id: 3, label: "Adventure So Far", link: "/af2p/#/sofar" },
    { id: 4, label: "Future Plans", link: "/af2p/#/future" },
  ];

  return (
    <header className='header-container'>
      <div className='header-logo'>
        <img alt='Little Lemon Logo' height={50} onClick={onClickImage} />
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
          {menuItems.map(item => (
            <li key={item.id}>
              <a href={item.link} className="link" onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='menu-toggle' onClick={toggleMenu}>
        <img src={menuicon} alt='menu-icon'/>
      </div>
    </header>
  );
};

export default Header;
