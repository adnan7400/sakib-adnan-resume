import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { links } from '../data';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
import './navbar.scss'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="app__navbar">
        <div className='app__navbar-logo'>
            <img src={logo} alt='Logo'  />
            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}></div>     
            <ul className='app__navbar-links'>
            {links.map(({name,path}, index) => {
            return (
                <li className='app__flex h3-text' key={index}>
                    <div />
                    <NavLink 
                        to={path} 
                        // className='app__navbar-navlinks'
                        className={({isActive}) => 
                        isActive ? 'app__navbar-navlinks active-nav': 'app__navbar-navlinks'
                      }
                    >
                        <h3>{name}</h3>
                    </NavLink>
                </li>
            )
            })}
            </ul>
        
            {/* <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {toggle && (
                        <motion.div
                            whileInView={{x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut'}}
                        >
                            <HiX onClick={() => setToggle(false)} 
                                {...links.map(({name,path}, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink 
                                                to={path} 
                                                className='app__navbar-navlinks'
                                                onClick={() => setToggle(false)} 
                                            >
                                                <h3>{name}</h3>
                                            </NavLink>
                                        </li>
                                    )
                                    })}
                            />

                        </motion.div>
                    )
                }
            </div>        */}
            <div 
                className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} 
                onClick={()=> setShowMenu(!showMenu)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>        
        
    </nav>
  )
}

export default Navbar