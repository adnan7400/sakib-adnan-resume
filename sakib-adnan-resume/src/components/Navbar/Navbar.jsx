import React from 'react';
import {images} from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images.logo} alt="logo" className='logo'/>
        </div>
        <ul className="app__navbar-links">
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item}`}>{item}</a>
            </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar;