import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Fourunits = () => {
  return (
    <Container>
      <Headings
        title="Show your competency through Stage 2 Assessment, Get Chartered 
Membership of Engineers Australia"
      />
      <Paragraphs
        data="The Stage 2 Competency standards are used as the basis of assessment for registration on the National Engineering Register 
(NER) and Chartered membership of Engineers Australia (CPEng).  The Stage 2 Competency Assessment describes the profession's 
knowledge and skill foundation, engineering application abilities, and professional skills, values, and attitudes required to practice 
independently or unsupervised. The stage 2 competency requirements are similar in that they apply to professional engineers in 
leadership and management roles, and they are organized into four units:"
      />

      <Row className="py-4">
        <Col
          md={3}
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center my-2 my-md-0"
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "55%",
              backgroundColor: "#017CC9",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "60%",
                width: "60%",
                margin: "18px 0 0 22px",
              }}
              src="/images/Stage2CompetencyAssessment/unit1.png"
              alt="licensed-professional-final-1"
              className="img-fluid"
            ></img>
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "Asap",
              fontWeight: "700",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            className="ourCDRServicesParagraph"
          >
            Personal
            <br />
            Commitment
          </div>
        </Col>
        <Col
          md={3}
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center my-2 my-md-0"
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "55%",
              backgroundColor: "#017CC9",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "60%",
                width: "60%",
                margin: "18px 0 0 22px",
              }}
              src="/images/Stage2CompetencyAssessment/unit2.png"
              alt="licensed-professional-final-1"
              className="img-fluid"
            ></img>
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "Asap",
              fontWeight: "700",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            className="ourCDRServicesParagraph"
          >
            Obligation to
            <br /> the Community
          </div>
        </Col>
        <Col
          md={3}
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center my-2 my-md-0"
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "55%",
              backgroundColor: "#017CC9",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "60%",
                width: "60%",
                margin: "18px 0 0 22px",
              }}
              src="/images/Stage2CompetencyAssessment/unit3.png"
              alt="licensed-professional-final-1"
              className="img-fluid"
            ></img>
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "Asap",
              fontWeight: "700",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            className="ourCDRServicesParagraph"
          >
            Value in
            <br />
            the Worksplace
          </div>
        </Col>
        <Col
          md={3}
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center my-2 my-md-0"
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "55%",
              backgroundColor: "#017CC9",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "60%",
                width: "60%",
                margin: "18px 0 0 22px",
              }}
              src="/images/Stage2CompetencyAssessment/unit4.png"
              alt="licensed-professional-final-1"
              className="img-fluid"
            ></img>
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "Asap",
              fontWeight: "700",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            className="ourCDRServicesParagraph"
          >
            Technical
            <br /> Proficiency
          </div>
        </Col>
      </Row>
      <Paragraphs
        data="Each unit includes competency and achievement indicators. The accomplishment indicators provided in this guideline serve as a 
reference to the management and leadership duties that are likely to be evaluated in order to demonstrate such competence."
      />
      <Row className="py-5">
        <img
          src="/images/Stage2CompetencyAssessment/stage2.png"
          alt="Stage 2 Competency Assessment ensures Chartered Membership of EA"
        />
      </Row>
      <Headings title="Stage 2 Competency Assessment ensures Chartered Membership of EA" />
      <Paragraphs
        data="Chartered Membership of Engineers Australia entails a lifetime commitment to maintaining competence in a particular practice 
area. The Chartered members of Engineers Australia are assessed using the Stage 2 Competency Assessment (CPEng). Engineers 
Australia offers Chartered profession membership recognized internationally by the Australian government and business."
      />
    </Container>
  );
};

export default Fourunits;
