import React from 'react'
import "./contact.css"
import { HiOutlineMail } from "react-icons/hi"
import { BsWhatsapp } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0rw4tl8', 'template_vqtp9z5', form.current, 'tGRaub24MPo3BtN56')

    e.target.reset()
  };

  return (
    <section id='contact' className='contact_section'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className='contact__icon'/>
              <h4>Email</h4>
              <h5>moseslpez@gmail.com</h5>
              <a href="mailto: moseslpez@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__icon'/>
              <h4>WhatsApp</h4>
              <h5>Jesus Lopez</h5>
              <a href="https://wa.me/+56941650785" target="_blank">Chat with me</a>
            </article>
            <article className="contact__option">
              <BsInstagram className='contact__icon'/>
              <h4>Instagram</h4>
              <h5>@zoociego</h5>
              <a href="https://www.instagram.com/zoociego/" target="_blank">Send a message</a>
            </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail} className="form">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact