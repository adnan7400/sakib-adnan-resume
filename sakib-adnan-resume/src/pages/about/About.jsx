import React from 'react';
import Info from '../../components/Info.jsx';
import { FaDownload } from "react-icons/fa";
import Resume from "../../assets/Sakib-Adnan-Resume.pdf"

const About = () => {
  return (
    <main className="section container">
        <section className="about">
            <h2 className="section__title">
                About <span>Me</span>
            </h2>

            <div className="about__container grid">
                <div className="about__info">
                    <h3 className="h3 section__subtitle">Personal Info</h3>
                    <ul className="info__list grid">
                        <Info />
                    </ul>

                    <a href={Resume} download="" className="button">
                        Download Resume 
                        <span className="button__icon">
                            <FaDownload />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    </main>
  )
}

export default About
