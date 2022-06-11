import React from 'react';
import { Container, Row, Col } from "reactstrap";
const About = () => {
return (
    <section className="sectiondiffer" id="about" >
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark">About Us</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={5}>
            </Col>
          <Col md={{ size:12, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-4"><b>Our Mission</b></h6>
                <p className="text-muted font-weight-light">Our mission is to represent, lead, and serve the airline industry. Representing the airline industry. We improve understanding of the air transport industry among decision makers and increase awareness of the benefits that aviation brings to national and global economies. </p>
              </Col>
              <Col md={6}>
                <h6 className="text-dark font-weight-light f-20 mb-4"><b>Our Vision</b></h6>
                <p className="text-muted font-weight-light">Working together to shape the future growth of a safe, secure and sustainable air transport industry that connects and enriches our world</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;