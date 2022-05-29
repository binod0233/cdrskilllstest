import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Elements = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container>
        <Headings title="Elements of Competency for Stage 1 Assessment to be a member of EA" />
        <Paragraphs
          data="As per the requirement of Engineers Australia, each of the three vocational group of Stage 1 Competency Assessment has 
its own set of details for the elements. Engineers must exhibit each element in an overall sense to be regarded as a Stage 1 
component. Each Element contains a set of Indicators that serve as a reference to the level of performance and enable a 
determination of whether the competency element has been met. These Indicators define and detail the many methods for 
demonstrating and assessing the element."
        />
        <Paragraphs
          data="
Each competency is made up of elements that explain a specific performance area. The three elements are the Engineers 
Australia membership requirement and essential actions that make up the Stage 1 Competency Assessment."
        />
        <Row className="py-4">
          <Col
            md={4}
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
                src="/images/Stage1CompetencyAssessment/elements1.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="ourCDRServicesParagraph"
              style={{
                marginTop: "5px",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                marginLeft: "10px",
              }}
            >
              Competency 1 <br />
              Knowledge Base
            </div>
          </Col>
          <Col
            md={4}
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
                src="/images/Stage1CompetencyAssessment/elements2.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="ourCDRServicesParagraph"
              style={{
                marginTop: "5px",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                marginLeft: "10px",
              }}
            >
              Competency 2<br /> Engineering Ability
            </div>
          </Col>
          <Col
            md={4}
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
                src="/images/Stage1CompetencyAssessment/elements3.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="ourCDRServicesParagraph"
              style={{
                marginTop: "5px",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                marginLeft: "10px",
              }}
            >
              Competency 3<br /> Professional Attributes
            </div>
          </Col>
        </Row>

        <Paragraphs
          data="
CDRskillassessment offers a variety of CDR samples that meet Engineers Australia membership requirements and are eligible 
for examination for membership with Engineers Australia. Engineers Australia just approved all of our CDR samples, ensuring 
they meet EA standards. These samples comprise three narratives, a summary statement, and a CPD, and they are written in a 
high style yet simple language that is easy to modify."
        />
      </Container>
    </div>
  );
};

export default Elements;
