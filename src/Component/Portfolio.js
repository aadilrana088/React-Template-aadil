import React from "react";
import { Tabs, Tab, Container, Col, Row } from "react-bootstrap";
function Portfolio() {
  return (
    <div className="portfolio-div">
      <div className="section-title">
        <h2>Portfolio</h2>
        <h3>
          Check our <span>Portfolio</span>
        </h3>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="portfolio-tab">
        <Container>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              <div className="tab-cont">
                  <Container>
                      <Row>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-5.jpg" alt=""/></Col>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-6.jpg" alt=""/></Col>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-1.jpg" alt=""/></Col>
                      </Row>
                      <Row>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-4.jpg" alt=""/></Col>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-2.jpg" alt=""/></Col>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-3.jpg" alt=""/></Col>
                      </Row>
                      <Row>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-8.jpg" alt=""/></Col>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-9.jpg" alt=""/></Col>
                      </Row>
                  </Container>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <div className="tab-cont">
                <Container>
                    <Row>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-4.jpg" alt=""/></Col>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-2.jpg" alt=""/></Col>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-3.jpg" alt=""/></Col>
                    </Row>
                </Container>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <div className="tab-cont">
                <Container>
                    <Row>
                    <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-8.jpg" alt=""/></Col>
                      <Col lg={4} md={6}><img className="img-fluid" src="images/portfolio-9.jpg" alt=""/></Col>
                    </Row>
                </Container>
              </div>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </div>
  );
}
export default Portfolio;
