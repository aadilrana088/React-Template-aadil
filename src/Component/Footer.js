import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowAltCircleRight
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-div">
      <footer id="footer">
        <div className="footer-top">
          <Container>
            <Row>
              <Col lg={3} md={6} className="footer-contact">
                <h3>
                  BizLand<span>.</span>
                </h3>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="/cdn-cgi/l/email-protection"
                    class="__cf_email__"
                    data-cfemail="f49d9a929bb4918c9599849891da979b99"
                  >
                    info@example.com
                  </a>
                  <br />
                </p>
              </Col>
              <Col lg={3} md={6} className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <FaArrowAltCircleRight /> <a href="#">Home</a>
                  </li>
                  <li>
                    <FaArrowAltCircleRight /> <a href="#">About us</a>
                  </li>
                  <li>
                    <FaArrowAltCircleRight /> <a href="#">Services</a>
                  </li>
                  <li>
                    <FaArrowAltCircleRight />
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <FaArrowAltCircleRight />
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6} className="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <FaArrowAltCircleRight />
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <FaArrowAltCircleRight />
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <FaArrowAltCircleRight />
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <FaArrowAltCircleRight />
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <FaArrowAltCircleRight />
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6} className="footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div class="social-links mt-3">
                  <a href="#!" className="twitter">
                    <FaTwitter />
                  </a>
                  <a href="#!" className="facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#!" className="instagram">
                    <FaInstagram />
                  </a>
                  <a href="#!" className="linkedin">
                    <FaLinkedinIn />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
      <div className="footer-bottom">
          <Container>
            <div class="copyright">
              &copy; Copyright&nbsp;&nbsp;
              <strong>
                <span>
                  <a href="https://webtyx.com/">Webtyx</a>
                </span>
              </strong>
              .&nbsp;&nbsp;All Rights Reserved
            </div>
            <div class="credits">Designed in React JS by Aadil</div>
          </Container>
        </div>
    </div>
  );
};

export default Footer;
