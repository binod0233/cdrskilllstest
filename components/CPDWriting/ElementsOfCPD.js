import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const  ElementsOfCPD = () => {
  return (
    <Container className="pt-4">
      <Headings title="Elements of CPD as described by Engineers Australia" />
      <Paragraphs
        data="CPD Statement writing for engineers in Australia will be evaluated based on elements mentioned by Engineers Australia. There are four 
elements of CPD described by Engineers Australia mentioned as follows:"
      />
      <Row className='desktopScreenSteps'>
        <Col xs={6} className="px-md-5 ">
          <h4 className="stepsSubHeading mt-md-5">1. Personal commitment</h4>
          <p className="stepsParagraph">
            Personal Commitment should be written in the CPD Writing format
            described by Engineers Australia (EA). Personal Commitment in CPD
            Australia describes the engineer Applicants’ or students’ positive
            behaviour in their workplace and how they manage all the
            responsibilities for the engineering domain of their profession.
          </p>
        </Col>
        <Col xs={6} className="px-5">
          <img
            src="/images/CPDWriting/step1.png"
            alt="discuss your project with our top Expert
            writers"
            className="img-fluid"
          />
        </Col>
      </Row >
      <Row className='desktopScreenSteps'>
        <Col xs={6}>
          <div>
            <img
              src="/images/CPDWriting/step2.png"
              alt="CDRXpert's Work Process"
              style={{ float: "right" }}
              className="img-fluid"
            />
          </div>
        </Col>
        <Col xs={6} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-4">2. Technical proficiency</h4>
          <p className="stepsParagraph">
            Technical proficiency in CPD statement in Australia covers all your
            Engineering skills, knowledge, creativity, innovation, etc.
          </p>
        </Col>
      </Row>
      <Row className='desktopScreenSteps'>
        <Col xs={6} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-5">3. Value of Workplace</h4>
          <p className="stepsParagraph">
            Value of workplace indicates your role to communicate at the
            workplace to make a positive impact at the workplace. It also
            reflects decision-making abilities and leadership skills.
          </p>
        </Col>
        <Col xs={6} className="px-5">
          <img
            src="/images/CPDWriting/step3.png"
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
              src="/images/CPDWriting/step4.png"
              alt="CDRXpert's Work Process"
              style={{ float: "right" }}
              className="img-fluid"
            />
          </div>
        </Col>
        <Col xs={6} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-4">
            4. Obligations to the community
          </h4>
          <p className="stepsParagraph">
            Obligations to the community in CPD Statement writing should be in
            the correct CPD Writing format. A high-quality CPD statement will be
            assessed based on how well the students or engineers. Applicants
            carry out the activities or are willing to undergo risk for
            sustainable solutions.
          </p>
        </Col>
      </Row>
      <div className='mobileScreenSteps'>
      <Row className=''>
      <Col xs={12} className="px-5">
          <img
            src="/images/CPDWriting/step1.png"
            alt="discuss your project with our top Expert
            writers"
            className="img-fluid"
          />
        </Col>
        <Col xs={12} className="px-md-5 ">
          <h4 className="stepsSubHeading mt-md-5">1. Personal commitment</h4>
          <p className="stepsParagraph">
            Personal Commitment should be written in the CPD Writing format
            described by Engineers Australia (EA). Personal Commitment in CPD
            Australia describes the engineer Applicants’ or students’ positive
            behaviour in their workplace and how they manage all the
            responsibilities for the engineering domain of their profession.
          </p>
        </Col>
        
      </Row >
      <Row className=''>
        <Col xs={12}>
          <div>
            <img
              src="/images/CPDWriting/step2.png"
              alt="CDRXpert's Work Process"
              style={{ float: "right" }}
              className="img-fluid"
            />
          </div>
        </Col>
        <Col xs={12} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-4">2. Technical proficiency</h4>
          <p className="stepsParagraph">
            Technical proficiency in CPD statement in Australia covers all your
            Engineering skills, knowledge, creativity, innovation, etc.
          </p>
        </Col>
      </Row>
      <Row className=''>
      <Col xs={12} className="px-5">
          <img
            src="/images/CPDWriting/step3.png"
            alt="discuss your project with our top Expert
            writers"
            className="img-fluid"
          />
        </Col>
        <Col xs={12} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-5">3. Value of Workplace</h4>
          <p className="stepsParagraph">
            Value of workplace indicates your role to communicate at the
            workplace to make a positive impact at the workplace. It also
            reflects decision-making abilities and leadership skills.
          </p>
        </Col>
        
      </Row>
      <Row className=''>
      <Col xs={12}>
          <div>
            <img
              src="/images/CPDWriting/step4.png"
              alt="CDRXpert's Work Process"
              style={{ float: "right" }}
              className="img-fluid"
            />
          </div>
        </Col>
      <Col xs={12} className="px-md-5 pt-md-5">
          <h4 className="stepsSubHeading mt-md-4">
            4. Obligations to the community
          </h4>
          <p className="stepsParagraph">
            Obligations to the community in CPD Statement writing should be in
            the correct CPD Writing format. A high-quality CPD statement will be
            assessed based on how well the students or engineers. Applicants
            carry out the activities or are willing to undergo risk for
            sustainable solutions.
          </p>
        </Col>
       
        
      </Row>
      </div>
    </Container>
  );
};

export default ElementsOfCPD;
