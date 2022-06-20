import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Advantages1 = () => {
  return (
    <div>
      <Container className="pt-5">
        <Headings
          title="Advantages of using a reputable service provider for CDR plagiarism 
detection and removal before presenting to Engineers Australia"
        />

        <Row>
          <Col className="pt-md-5 px-md-5 mx-md-5 my-5">
            <Headings title="1. Multilevel Checking " />
            <Paragraphs
              data="To avoid a blatant rejection from Engineers 
    Australia, we utilise multiple plagiarism 
    detection methods and software to check 
    every content of the CDR report. "
            />
          </Col>
          <Col className="px-md-5">
            <img
              src="/images/CDRPlagiarismCheckingandRemoval/Multilevel-checkin.png"
              alt="Information"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="/images/CDRPlagiarismCheckingandRemoval/advanced-software.png"
              alt="appropriate"
              className="img-fluid"
            />
          </Col>
          <Col className="mt-md-5 p-md-5">
            <div className="mt-4 px-md-5 mx-md-5">
              <Headings title="2. Advanced Software" />
              <Paragraphs
                data="Plagiarised content of CDR can be easily 
      detected by Engineers Australia using 
      advanced software for plagiarism content 
      checking."
              />
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col className="pt-md-5 px-md-5 m-md-5">
            <Headings title="3. Provide Electronic Service" />
            <Paragraphs
              data="We provide our clients with an electronic 
    report of plagiarized content found in the 
    CDR Skill Assessment Australia, and we do 
    not charge just for checking plagiarism."
            />
          </Col>
          <Col className="px-5">
            <img
              src="/images/CDRPlagiarismCheckingandRemoval/provide-electronic-service.png"
              alt="use-australian"
              className="img-fluid"
            />
          </Col>
        </Row>

        <Row>
          <Col className="ml-md-5">
            <img
              src="/images/CDRPlagiarismCheckingandRemoval/guidence-final.png"
              alt="academic-achievement"
              className="img-fluid "
            />
          </Col>
          <Col className="m-md-5">
            <div className="m-md-5">
              <Headings title="4. Proper Guidance " />
              <Paragraphs
                data="Professionals with years of experience in 
      plagiarism checking and removing from 
      CDR will guide you to get a positive 
      assessment from Engineers Australia."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advantages1;
