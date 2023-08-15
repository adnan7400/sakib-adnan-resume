import React from 'react';
import Profile from "../../assets/ProfileS.png"
import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";
import "./home.css"
import { description } from "../../data.jsx"

const Home = () => {
  return (
    <section className="home section grid">
        <img src={Profile} alt="" className="home__img" />
        <div className="home__content">
           <div className="home__data">
                <h1 className="home__title">
                    <span>Sakib Adnan</span> 
                </h1>
                <h2 className="home__job">
                    <span>Software Engineer</span>
                </h2>
                <br></br>
                <p className="home__description">{description}</p>
                <Link to="/about" className="button">
                    More About Me{' '} 
                    <span className='button__icon'>
                        <FaArrowRight />
                    </span>
                </Link>
            </div> 
        </div>

        <div className="color__block">

        </div>
    </section>
  )
}

export default Home
