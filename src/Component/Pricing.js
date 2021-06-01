import React from "react";
import { Container,Row, Col } from "react-bootstrap";

const Pricing = () => {
  return (
    <div className="pricing-div">
      <div class="section-title">
        <h2>Pricing</h2>
        <h3>
          Check our <span>Pricing</span>
        </h3>
        <p>
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="pricing-box">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div class="box">
                <h3>Free</h3>
                <h4>
                  <sup>$</sup>0<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li class="na">Pharetra massa</li>
                  <li class="na">Massa ultricies mi</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div class="box featured">
                <h3>Business</h3>
                <h4>
                  <sup>$</sup>19<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li class="na">Massa ultricies mi</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div class="box">
                <h3>Developer</h3>
                <h4>
                  <sup>$</sup>29<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div class="box">
                <span class="advanced">Advanced</span>
                <h3>Ultimate</h3>
                <h4>
                  <sup>$</sup>49<span> / month</span>
                </h4>
                <ul>
                  <li>Aida dere</li>
                  <li>Nec feugiat nisl</li>
                  <li>Nulla at volutpat dola</li>
                  <li>Pharetra massa</li>
                  <li>Massa ultricies mi</li>
                </ul>
                <div class="btn-wrap">
                  <a href="#" class="btn-buy">
                    Buy Now
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Pricing;
