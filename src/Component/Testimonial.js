import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/pagination/pagination.min.css";
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
// import Swiper core and required modules
import SwiperCore, {
    EffectFlip,Pagination,Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([EffectFlip,Pagination,Navigation]);
function Testimonial() {
    return (
        <div className="testimonial-div">
            <Container>
                <div className="test-slider">
                <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} className="mySwiper">

                    <SwiperSlide>
                    <div className="testimonial-item">
                <img src="images/testimonials-3.jpg" className="testimonial-img" alt="" />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <p>
                  <FaQuoteLeft />
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <FaQuoteRight />
                </p>
              </div>

                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="testimonial-item">
                <img src="images/testimonials-4.jpg" className="testimonial-img" alt="" />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <p>
                  <FaQuoteLeft />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <FaQuoteRight />
                </p>
              </div>    
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="testimonial-item">
                <img src="images/testimonials-5.jpg" className="testimonial-img" alt="" />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <p>
                  <FaQuoteLeft />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <FaQuoteRight />
                </p>
              </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </Container>
        </div>
    ) 
}
export default Testimonial