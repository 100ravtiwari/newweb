import './Navv.css';
import React, { useState } from 'react';
import img1 from '../../assets/pi.png';
import img2 from '../../assets/Hamburger.png';
import img3 from '../../assets/cc.png';

const Nav = () => {
  const [menuu, setMenuu] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setMenuu(!menuu);
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setMenuu(false);
    setIsOpen(true);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <div className="mai-main">
      <div className='main'>
        <div className='title'>
          <img className='menubtn1' src={img1} alt="Title" />
        </div>
        <div className='menu'>
          <div className='circmen' onClick={toggleMenu}>
            {isOpen ? (
              <img className='menubtn' src={img2} alt="Menu" />
            ) : (
              <img className='closebtn1' src={img3} alt="Close" />
            )}
          </div>
          <ul className='menuitems'>
            <li><a href='#aboutus' onClick={() => scrollToSection('aboutus')}>About Us</a></li>
            <li><a href='#experience' onClick={() => scrollToSection('experince')}>Experience</a></li>
            <li><a href='#skill' onClick={() => scrollToSection('skill')}>Skills</a></li>
            <li><a href='#contact' onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div className={menuu ? 'phn-opt' : 'phn-off'}>
        <ul className='menuitemsphn'>
          <li><a href='#aboutus' onClick={() => scrollToSection('aboutus')}>About Us</a></li>
          <li><a href='#experince' onClick={() => scrollToSection('experince')}>Experience</a></li>
          <li><a href='#skill' onClick={() => scrollToSection('skill')}>Skills</a></li>
          <li><a href='#contact' onClick={() => scrollToSection('contact')}>Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
