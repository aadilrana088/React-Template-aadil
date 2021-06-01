import React from "react";
import { Container, Col, Row,Form, Button } from "react-bootstrap";
import { GoLocation, GoMail } from "react-icons/go";
import { IoMdCall } from "react-icons/io";
const Contactus = () => {
  return (
    <div className="contact-div">
      <div className="section-title">
        <h2>Contact</h2>
        <h3>
          <span>Contact Us</span>
        </h3>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="info-box mb-4">
              <div className="info-box-icon">
                <GoLocation />
              </div>
              <h3>Our Address</h3>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="info-box  mb-4">
              <div className="info-box-icon">
                <GoMail />
              </div>
              <h3>Email Us</h3>
              <p>
                <a
                  href="/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="563539382237352216332e373b263a337835393b"
                >
                  contact@example.com
                </a>
              </p>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="info-box  mb-4">
              <div className="info-box-icon">
                <IoMdCall />
              </div>
              <h3>Call Us</h3>
              <p>+1 5589 55488 55</p>
            </div>
          </Col>
        </Row>
        <div className="map-form">
          <Row>
            <Col lg={6}>
              <iframe
                className="mb-4 mb-lg-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameborder="0"
                allowfullscreen
                title="Embedded Map"
              ></iframe>
            </Col>
            <Col lg={6}>
                <div className="form-head">Please fill the form Carefully</div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contactus;
