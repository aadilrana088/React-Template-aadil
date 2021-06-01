import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineMail,AiOutlinePhone} from 'react-icons/ai'
function Topbar() {
    return(
        <div className="top-main-div">
            <section id="topbar" className="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <span><AiOutlineMail /><a href="mailto:contact@example.com">contact@example.com</a></span>
                    <span><AiOutlinePhone /><span>+1 5589 55488 55</span></span>
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                    <a href="#!" className="twitter"><FaTwitter /></a>
                    <a href="#!" className="facebook"><FaFacebookF /></a>
                    <a href="#!" className="instagram"><FaInstagram /></a>
                    <a href="#!" className="linkedin"><FaLinkedinIn /></a>
                </div>
                </div>
            </section>
        </div>
    )
}
export default Topbar