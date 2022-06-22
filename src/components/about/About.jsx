import React from "react"
import "./about.css"
import ME from "../../assets/img1.jpg"
import { AiOutlineTrophy } from "react-icons/ai"
import { FiUsers } from "react-icons/fi"
import { MdOutlineFolderSpecial } from "react-icons/md"

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>
            
                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <AiOutlineTrophy className="about__icon"/>
                            <h5>Experiences</h5>
                            <small>3+ years working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <MdOutlineFolderSpecial className="about__icon"/>
                            <h5>Projects</h5>
                            <small>50+ completed</small>
                        </article>

                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate fuga eaque dicta veritatis ipsam quidem blanditiis sint. 
                        Non aliquid hic distinctio facilis ut, voluptas voluptates rem praesentium eligendi dolorum repellat.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About