import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const WhatMakesUsBest = () => {
  return (
    <Container>
      <Headings
        title="What makes us the best CDR reviewing service provider for Engineers 
in Australia? "
      />
      <Paragraphs
        data="A CDR report allows engineers to demonstrate that their expertise meets Australian standards. Engineers Australia uses a variety 
of customised papers to assess an engineer's proficiency in engineering skills and knowledge, management, communication, and 
leadership. CDRXpert has reviewed over 250 CDRs and has effectively offered the following services:"
      />
      <Row className='desktopScreenSteps'>
        <Col xs={6} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
            1. Ensuring the technicalities:
          </h4>
          <p className="stepsParagraph">
            Engineers Australia, need a number of finer features. When a CDR
            report is created by an inexperienced person, these finer aspects
            are frequently overlooked, resulting in CDR rejection by Engineers
            Australia. Experts at CDRskillassessment focus primarily on the
            service of reviewing the technical parts of the CDR, as this is the
            most essential factor in determining the success of your application
            in Engineers Australia.
          </p>
        </Col>
        <Col xs={6} className="px-md-5 px-2">
          <img
            src="/images/CDRReviewing/what1.png"
            alt="discuss your project with our top Expert
            writers"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row className='desktopScreenSteps'>
        <Col xs={6}>
          <div>
            <img
              src="/images/CDRReviewing/what2.png"
              alt="CDRXpert's Work Process"
              style={{ float: "right" }}
              className="img-fluid"
            />
          </div>
        </Col>
        <Col xs={6} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-4 ourCDRServicesTitle">
            2. Plagiarism Check and Removal
          </h4>
          <p className="stepsParagraph">
            The easiest part is detecting plagiarism. We use special software
            for plagiarism detection. The most difficult step is eliminating the
            stolen text from the CDR report while essentially keeping its core
            substance. Only professional writers with more than five years of
            experience in Australia review CDR for Engineers.
          </p>
        </Col>
      </Row>
      <Row className="pb-3 desktopScreenSteps">
        <Col xs={6} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
            3. Proofreading and Editing
          </h4>
          <p className="stepsParagraph ">
            We also assist our clients with CDR proofreading and later editing.
            As a result, if you're concerned about the textual quality of your
            CDR report, we will assist you.
          </p>
        </Col>
        <Col xs={6}>
          <div>
            <img
              src="/images/CDRReviewing/what3.png"
              alt="top-quality CDR Report"
              style={{
                marginLeft: "5vw",
              }}
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
      <div className='mobileScreenSteps'>
      <Row className=''>
      <Col xs={12} className="px-md-5 px-2 d-flex justify-content-center">
          <img
            src="/images/CDRReviewing/what1.png"
            alt="discuss your project with our top Expert
            writers"
            className="img-fluid"
            style={{height:"200px"}}
          />
        </Col>
        <Col xs={12} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
            1. Ensuring the technicalities:
          </h4>
          <p className="stepsParagraph">
            Engineers Australia, need a number of finer features. When a CDR
            report is created by an inexperienced person, these finer aspects
            are frequently overlooked, resulting in CDR rejection by Engineers
            Australia. Experts at CDRskillassessment focus primarily on the
            service of reviewing the technical parts of the CDR, as this is the
            most essential factor in determining the success of your application
            in Engineers Australia.
          </p>
        </Col>
      
      </Row>
      <Row className=''>
        <Col xs={12}>
          <div className='d-flex justify-content-center'>
            <img
              src="/images/CDRReviewing/what2.png"
              alt="CDRXpert's Work Process"
              style={{ height:'200px' }}
              className="img-fluid"
            />
          </div>
        </Col>
        <Col xs={12} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-4 ourCDRServicesTitle">
            2. Plagiarism Check and Removal
          </h4>
          <p className="stepsParagraph">
            The easiest part is detecting plagiarism. We use special software
            for plagiarism detection. The most difficult step is eliminating the
            stolen text from the CDR report while essentially keeping its core
            substance. Only professional writers with more than five years of
            experience in Australia review CDR for Engineers.
          </p>
        </Col>
      </Row>
      <Row className="pb-3 ">
      <Col xs={12}>
          <div className="d-flex justify-content-center">
            <img
              src="/images/CDRReviewing/what3.png"
              alt="top-quality CDR Report"
              style={{
                height:'200px'
              }}
              className="img-fluid"
            />
          </div>
        </Col>
        <Col xs={12} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
            3. Proofreading and Editing
          </h4>
          <p className="stepsParagraph ">
            We also assist our clients with CDR proofreading and later editing.
            As a result, if you're concerned about the textual quality of your
            CDR report, we will assist you.
          </p>
        </Col>
        
      </Row>
      </div>
    </Container>
  );
};

export default WhatMakesUsBest;
