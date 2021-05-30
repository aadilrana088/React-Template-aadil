import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
function Topbar() {
    return(
        <div className="top-main-div">
            <section id="topbar" class="d-flex align-items-center">
                <div class="container d-flex justify-content-center justify-content-md-between">
                <div class="contact-info d-flex align-items-center">
                    <span><AiOutlineMail /><a href="mailto:contact@example.com">contact@example.com</a></span>
                    <span><AiOutlinePhone /><span>+1 5589 55488 55</span></span>
                </div>
                <div class="social-links d-none d-md-flex align-items-center">
                    <a href="#" class="twitter"><FaTwitter /></a>
                    <a href="#" class="facebook"><FaFacebookF /></a>
                    <a href="#" class="instagram"><FaInstagram /></a>
                    <a href="#" class="linkedin"><FaLinkedinIn /></a>
                </div>
                </div>
            </section>
        </div>
    )
}
export default Topbar