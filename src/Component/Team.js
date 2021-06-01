import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
function Team() {
  return (
    <div className="team-div">
      <div class="section-title">
        <h2>Team</h2>
        <h3>
          Our Hardworking <span>Team</span>
        </h3>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div class="member">
              <div class="member-img">
                <img src="images/team-1.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href="#" class="twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" class="facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" class="instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" class="linkedin">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div class="member">
              <div class="member-img">
                <img src="images/team-2.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href="#" class="twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" class="facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" class="instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" class="linkedin">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div class="member">
              <div class="member-img">
                <img src="images/team-3.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href="#" class="twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" class="facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" class="instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" class="linkedin">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div class="member">
              <div class="member-img">
                <img src="images/team-4.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href="#" class="twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" class="facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" class="instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" class="linkedin">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Team;
