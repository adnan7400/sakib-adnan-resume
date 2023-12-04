import React, {useRef} from 'react'
import { FiSend } from 'react-icons/fi';
import { contactDescription } from '../../data.jsx';
import { FaEnvelopeOpen, FaFacebookF, FaLinkedin, FaPhoneSquareAlt, FaYoutube } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0tkmga8', 'template_7rfzl4s', form.current, 'M4ThEDX0JXSQS5uAk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact section">
        <h2 className="section__title">
            Contact Me
        </h2>

        <div className="contact__container container grid">
            <div className="contact__data">
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
            <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type="text" 
                            name="user_name"
                            placeholder='Name'
                            className="form__control" 
                            />
                        </div>
                        <div className="form__input-div">
                            <input type="email" 
                            name="user_email"
                            placeholder='Your Email'
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
                    <button className='button' type="submit">
                        Send
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                        <div class="check-box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                        </div>
                    </button>
                    
                </form>
        </div>
    </section>
  )
}

export default Contact
