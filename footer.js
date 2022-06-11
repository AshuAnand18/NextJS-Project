import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <section className="footer section" id="foot">
      <Container>
        <Row>
        <div className="title text-center mb-4">
              <h3 className="font-weight-normal text-dark">CONTACT INFO</h3></div>
          <Col lg={7}>
              <div className="mb-4">
                <p className="text-muted mt-4 mb-2"><b>Local Web : </b><u>www.zen234.com</u></p>
                <h6 className="text-muted font-weight-normal"><b>Local Phone:</b>+91-9888299900</h6>
              </div>
          </Col>
          <Col lg={5}>
            <Row>
              <Col md={8}>
                <h6 className="text-dark mb-3"><b>Our Address</b></h6>
                <p className="text-muted f-14">Street-11/B, Zen-Classic Yard, New Delhi</p>
                <h6 className="text-muted pb-2"><b>Email:</b> ZenWays1990@gmail.com</h6>
                <h6 className="text-muted pb-2"><b>Mobile No.:</b> +91-8888999967</h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Footer;