import React from 'react'
import "./services.css"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"

const Services = () => {
  return (
    <section id='services' className='section'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>  

            <ul className="service__list">
              <li>
                <SiHtml5 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiHtml5 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiHtml5 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiHtml5 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiHtml5 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiHtml5 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
            </ul>
        </article>

        {/* END OF UI/UX */}

        {/* WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>  

            <ul className="service__list">
              <li>
                <SiJavascript className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiJavascript className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiJavascript className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiJavascript className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiJavascript className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiJavascript className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
            </ul>
        </article>

        {/* END WEB DEVELOPMENT */}

        {/* Content Creation */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>  

            <ul className="service__list">
              <li>
                <SiCss3 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiCss3 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiCss3 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiCss3 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiCss3 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
              <li>
                <SiCss3 className="service__list-icon"/> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 
              </li>  
            </ul>
        </article>

        {/*  END Content Creation */}

      </div>
    </section>
  )
}

export default Services