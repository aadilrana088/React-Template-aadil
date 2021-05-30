import React from 'react'
import { Col, Container, Row, ProgressBar } from 'react-bootstrap'
import {AiOutlineSmile,AiOutlineSnippets,AiFillAlert,AiFillBulb} from 'react-icons/ai'
function Progressbar() {
    return (
        <div className="progressbar">
            <Container>
                <Row>
                    <Col>
                        <div className="progress-div">
                            <span class="skill">HTML <i class="val">100%</i></span>
                            <ProgressBar now={100} />
                        </div>
                        <div className="progress-div">
                            <span class="skill">CSS <i class="val">90%</i></span>
                            <ProgressBar now={90} />
                        </div>
                        <div className="progress-div">
                            <span class="skill">Javascript <i class="val">70%</i></span>
                            <ProgressBar now={70} />
                        </div>
                    </Col>
                    <Col>
                    <div className="progress-div">
                            <span class="skill">PHP <i class="val">80%</i></span>
                            <ProgressBar now={80} />
                        </div>
                        <div className="progress-div">
                            <span class="skill">WordPress/CMS <i class="val">90%</i></span>
                            <ProgressBar now={90} />
                        </div>
                        <div className="progress-div">
                            <span class="skill">Photoshop  <i class="val">55%</i></span>
                            <ProgressBar now={55} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="count-div">
            <Container>
                <Row>
                    <Col md={3}>
                    <div class="count-box">
                        <div className="count-icon"><AiOutlineSmile /></div>
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">232</span>
                        <p>Happy Clients</p>
                        </div>
                    </Col>
                    <Col md={3}>
                    <div class="count-box">
                        <div className="count-icon"><AiOutlineSnippets /></div>
                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" class="purecounter">521</span>
                        <p>Projects</p>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div class="count-box">
                        <div className="count-icon"><AiFillAlert /></div>
                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="0" class="purecounter">1463</span>
                        <p>Hours Of Support</p>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div class="count-box">
                        <div className="count-icon"><AiFillBulb /></div>
                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="0" class="purecounter">15</span>
                        <p>Hard Workers</p>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
            <div className="clients">
                <Container>
                    <Row>
                        <Col md={4} lg={2}>
                            <img src="./images/client-1.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2}>
                            <img src="./images/client-2.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2}>
                            <img src="./images/client-3.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2}>
                            <img src="./images/client-4.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2}>
                            <img src="./images/client-5.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2}>
                            <img src="./images/client-6.png" alt="" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Progressbar