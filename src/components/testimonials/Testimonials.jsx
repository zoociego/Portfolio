import React from 'react'
import "./testimonials.css"
import avatar1 from "../../assets/avatar1.jpg"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: avatar1,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam cumque rem quisquam officia ex, culpa obcaecati,distinctio eveniet, sapiente fugiat neque soluta qui velit expedita impedit aspernatur voluptatum sunt" 
  },
  {
    avatar: avatar1,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam cumque rem quisquam officia ex, culpa obcaecati,distinctio eveniet, sapiente fugiat neque soluta qui velit expedita impedit aspernatur voluptatum sunt" 
  },
  {
    avatar: avatar1,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam cumque rem quisquam officia ex, culpa obcaecati,distinctio eveniet, sapiente fugiat neque soluta qui velit expedita impedit aspernatur voluptatum sunt" 
  },
  {
    avatar: avatar1,
    name: "Ernest Achiever",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ipsam cumque rem quisquam officia ex, culpa obcaecati,distinctio eveniet, sapiente fugiat neque soluta qui velit expedita impedit aspernatur voluptatum sunt" 
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials_section container' >
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Navigation, Pagination, Scrollbar, A11y ]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials