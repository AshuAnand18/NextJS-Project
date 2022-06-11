import Image from 'next/image'
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Home = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center">
        <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRZPKUFxe3pyyMyzk7pI_zi_5o5O02dVwEA&usqp=CAU" alt="" className="img-fluid mx-auto d-block" width="500" height="300"/>
            </div>
          </Col>
          <Col lg={6}>
            <div className="pr-lg-5">
              <h2 className="text-primary f-10">A WAY OF COMFORT</h2>
              <h1 className="mb-3 font-weight-normal line-height-1_4">BEING THE MOST TRUSTWORTHY AIRWAYS</h1>
              <p className="text-muted mb-14 pb-2"><b>Give a way more to your comfort, and we are here to bring you the most safe and confortable airways. Zenith Airways was started by our honourable Mr. Purushottam Das and his co Mr. Ayan Shah. This has been the best opportunity to bring you with such reliable service. It will be pleasure to welcome you all.</b></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Home;