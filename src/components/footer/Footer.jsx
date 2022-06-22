import React from 'react'
import "./footer.css"
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <div></div>
      <a href="#" className="footer__logo">Jisus</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jisus. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer