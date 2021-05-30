import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {AiFillClockCircle,AiFillCloseCircle} from 'react-icons/ai'
function About() {
    return (
        <div className="about-section">
            <div class="section-title">
                <h2>About</h2>
                <h3>Find Out More <span>About Us</span></h3>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>
            <Container>
                <Row>
                    <Col xs= {12} md={6}>
                        <div className="about-img">
                            <img src='./images/about.jpg' className="img-fluid" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="about-content">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul>
                            <li>
                                <i class="bx bx-store-alt"><AiFillClockCircle /></i>
                                <div>
                                <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                                </div>
                            </li>
                            <li>
                                <i class="bx bx-images"><AiFillCloseCircle /></i>
                                <div>
                                <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                                <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                                </div>
                            </li>
                            </ul>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About;