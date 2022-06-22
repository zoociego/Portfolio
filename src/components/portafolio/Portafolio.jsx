import React from 'react'
import "./portafolio.css"
import IMG1 from "../../assets/img2.jpg"
import IMG2 from "../../assets/img3.jpg"
import IMG3 from "../../assets/img4.jpg"
import IMG4 from "../../assets/img5.jpeg"
import IMG5 from "../../assets/img6.jpg"
import IMG6 from "../../assets/img7.png"


const data =  [
  {
    id: 1,
    title: "title1",
    image: IMG4,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 2,
    title: "title1",
    image: IMG4,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 3,
    title: "title1",
    image: IMG4,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 4,
    title: "title1",
    image: IMG4,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 5,
    title: "title1",
    image: IMG1,
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    id: 6,
    title: "title1",
    image: IMG4,
    github: "https://github.com",
    demo: "https://github.com"
  },
]

const Portafolio = () => {
  return (
    <section id='portafolio' className='portafolio_section'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>
      <div className="container portafolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portafolio__item">
                <div className="portafolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portafolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>     
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>  
                </div>   
              </article> 
            )
          })
        }
      </div>
        
    </section>
  )
}

export default Portafolio