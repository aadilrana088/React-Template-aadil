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
                            <span className="skill">HTML <i className="val">100%</i></span>
                            <ProgressBar now={100} />
                        </div>
                        <div className="progress-div">
                            <span className="skill">CSS <i className="val">90%</i></span>
                            <ProgressBar now={90} />
                        </div>
                        <div className="progress-div">
                            <span className="skill">Javascript <i className="val">70%</i></span>
                            <ProgressBar now={70} />
                        </div>
                    </Col>
                    <Col>
                    <div className="progress-div">
                            <span className="skill">PHP <i className="val">80%</i></span>
                            <ProgressBar now={80} />
                        </div>
                        <div className="progress-div">
                            <span className="skill">WordPress/CMS <i className="val">90%</i></span>
                            <ProgressBar now={90} />
                        </div>
                        <div className="progress-div">
                            <span className="skill">Photoshop  <i className="val">55%</i></span>
                            <ProgressBar now={55} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="count-div">
            <Container>
                <Row>
                    <Col md={3}>
                    <div className="count-box">
                        <div className="count-icon"><AiOutlineSmile /></div>
                        <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" className="purecounter">232</span>
                        <p>Happy Clients</p>
                        </div>
                    </Col>
                    <Col md={3}>
                    <div className="count-box">
                        <div className="count-icon"><AiOutlineSnippets /></div>
                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" className="purecounter">521</span>
                        <p>Projects</p>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div className="count-box">
                        <div className="count-icon"><AiFillAlert /></div>
                        <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="0" className="purecounter">1463</span>
                        <p>Hours Of Support</p>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div className="count-box">
                        <div className="count-icon"><AiFillBulb /></div>
                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="0" className="purecounter">15</span>
                        <p>Hard Workers</p>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
            <div className="clients">
                <Container>
                    <Row>
                        <Col md={4} lg={2} xs={6} >
                            <img src="./images/client-1.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2} xs={6}>
                            <img src="./images/client-2.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2} xs={6}>
                            <img src="./images/client-3.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2} xs={6}>
                            <img src="./images/client-4.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2} xs={6}>
                            <img src="./images/client-5.png" alt="" className="img-fluid"/>
                        </Col>
                        <Col md={4} lg={2} xs={6}>
                            <img src="./images/client-6.png" alt="" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Progressbar