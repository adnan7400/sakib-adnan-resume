import React from 'react';
import {NavLink} from 'react-router-dom';
import {images} from '../../src/constants';
import './Navbar.scss';
import { links } from '../data';

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={images.logo} alt="logo"/>
        </div>
        <ul>
        {links.map(({name,icon,path}, index) => {
                return (
                  <li className='nav__item' key={index}>
                    <NavLink 
                      to={path} 
                      className={({isActive}) => 
                        isActive ? 'nav__link active-nav': 'nav__link'
                      }
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {icon}
                      <h3 className="nav__name">{name}</h3>
                    </NavLink>
                  </li>
                )
              })}
        </ul>
    </nav>
  )
}

export default Navbar