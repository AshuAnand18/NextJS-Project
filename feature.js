import Image from 'next/image'
import React from 'react';
import { Container, Row, Col } from "reactstrap";
const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <Image src={feature.img} alt="" className="img-fluid d-block mx-auto" width="500" height="300"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="mt-5 mt-sm-0 mb-4">
                <div className="my-4">
                  <i className={feature.icon}></i>
                </div>
                <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                <p className="text-muted mb-3 f-15">{feature.desc}</p>
               </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <div className="my-4">
              <i className="mdi mdi-account-group"></i>
            </div>
            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
            <p className="text-muted mb-3 f-15">{feature.desc}</p>
            </div>
        </Col>
        <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
          <div>
            <Image src={feature.img} alt="" className="img-fluid d-block mx-auto" width="500" height="300"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}
const Feature = () => {
const features = [
    {id : 1, img : "https://www.hansairways.com/assets/new-images/hans-airways1.jpg", title : "HIGH SPEED", desc:"Our Airways provides the fast speed means of transport Passengers and goods can be transported easily from one place to another", link : "/"},
    {id : 2, img : "https://airwaysaviation.com/wp-content/uploads/2016/01/airways-aviation-pilot-training.jpg", title : "LESS EXPENSIVE", desc : "Providing less expensive cost for the journey. Even more affordable for those who can't afford to travel in a wholetime because of having less budget. Most Reliable mode to travel", link : "/"},
    {id : 3, img : "https://livefromalounge.com/wp-content/uploads/2018/07/IMG_7826-01-1.jpg", title : "COMFORTABLE", desc : "Providing Comfortability to our delighted passengers is one of the plus point of Zenith Airways. It's so spacious and gentle. Plus we are very delighted to have you all.", link : "/"},
  ];
return (
    <section className="section relative" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text">FEATURES</span></h3>
              <p className="text-muted">Zenith Airways has been giving you the most incredible service ever since the 1900s. Here depicting some of the features of our Airways:</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}
export default Feature;