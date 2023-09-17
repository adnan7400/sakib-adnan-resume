import React from 'react'
import { FiSend } from 'react-icons/fi';
import { contactDescription } from '../../data.jsx';
import { FaEnvelopeOpen, FaFacebookF, FaLinkedin, FaPhoneSquareAlt, FaYoutube } from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
        <h2 className="section__title">
            Get In <span>Touch</span>
        </h2>

        <div className="contact__container container grid">
            <div className="contact__data">
                <h3 className="contact__title">
                    Feel free to reach out.
                </h3>
                <p className="contact__description">
                    {contactDescription}
                </p>

                <div className="contact__info">
                    <div className="info__item">
                        <FaEnvelopeOpen className='info__icon'/>
                        <div>
                            <span className="info__title">Email</span>
                            <h4 className="info__desc">adnan7400@gmail.com</h4>
                        </div>
                    </div>

                    <div className="info__item">
                        <FaPhoneSquareAlt className='info__icon'/>
                        <div>
                            <span className="info__title">Phone</span>
                            <h4 className="info__desc">778-862-0746</h4>
                        </div>
                    </div>
                </div>

                <div className="contact__socials">
                    <a href="https://facebook.com" className="contact__social-link">
                        <FaFacebookF />
                    </a>

                    <a href="https://linkedin.com" className="contact__social-link">
                        <FaLinkedin />
                    </a>

                    <a href="https://youtube.com" className="contact__social-link">
                        <FaYoutube />
                    </a>
                </div>
            </div>
            <form className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type="text" 
                            placeholder='Your Name'
                            className="form__control" 
                            />
                        </div>
                        <div className="form__input-div">
                            <input type="email" 
                            placeholder='Your Email'
                            className="form__control" 
                            />
                        </div>
                        <div className="form__input-div">
                            <input type="text" 
                            placeholder='Your Subject'
                            className="form__control" 
                            />
                        </div>
                    </div>

                    <div className="form__input-div">
                        <textarea 
                        placeholder='Your Message'
                        className="form__control textarea">
                        </textarea>
                    </div>
                    <button className='button'>
                        Send
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>
                </form>
        </div>
    </section>
  )
}

export default Contact
