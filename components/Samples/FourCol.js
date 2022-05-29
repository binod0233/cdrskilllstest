import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const FourCol = () => {
  return (
    <Container className="my-3">
      <Headings title="CDR report samples with positive assessment by Engineers Australia" />
      <Paragraphs
        data="Engineers Australia uses a variety of customised papers to assess an engineer's proficiency in engineering skills and knowledge, 
        management, communication, and leadership. CDR report for Engineers Australia consists of three different documents, namely:"
      />
      <div className="py-3">
        <Row>
          <Col
            md={3}
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
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
                src="/images/CDRServices/3-career.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="ourCDRServicesTitle"
              style={{
                marginTop: "5px",
                textAlign: "center",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                color: "#666",
              }}
            >
              3 Career Episodes
            </div>
          </Col>
          <Col
            md={3}
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
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
                src="/images/CDRServices/summary.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="ourCDRServicesTitle"
              style={{
                marginTop: "5px",
                textAlign: "center",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                color: "#666",
              }}
            >
              Summary Statement
            </div>
          </Col>
          <Col
            md={3}
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
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
                src="/images/CDRServices/Continuing.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="ourCDRServicesTitle"
              style={{
                marginTop: "5px",
                textAlign: "center",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                color: "#666",
              }}
            >
              Continuing Professional Development
            </div>
          </Col>
          <Col
            md={3}
            xs={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "55%",
                backgroundColor: "#017CC9",
                color: "#666",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "60%",
                  width: "60%",
                  margin: "18px 0 0 22px",
                  color: "#666",
                }}
                src="/images/CDRServices/cv-resume.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              className="ourCDRServicesTitle"
              style={{
                marginTop: "5px",
                textAlign: "center",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                color: "#666",
              }}
            >
              Cv-Resume
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default FourCol;
