import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const OurStrength = () => {
  return (
    <Container className="mb-5">
      <Row className="mt-4">
        <Col md={8}>
          <Headings title="Our Strengths" />
          <Paragraphs
            data="Our primary goal is to see our client's successful approval with a well-formed 
report following proper guidelines created for the migrants. CDRskillassessment 
provides high-quality services to achieve 100% customer satisfaction."
          />
          <Row>
            <Col xs={12} md={4} className=" p-md-3">
              <div
                className="thousandsCard"
                style={{
                  borderRadius: "10px",
                }}
              >
                <div className="d-flex justify-content-center ">
                  <div style={{ height: "60px", width: "60px" }}>
                    <img
                      src="/images/SpecificSamples/strength1.png"
                      alt="Dollar"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <h6
                  className="ourCDRServicesParagraph"
                  style={{
                    color: "#017CC9",
                    textAlign: "center",
                    marginTop: "40px",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                >
                  <strong>Ensure Best Price</strong>
                </h6>
                <p
                  className="thousandsParagraph ourCDRServicesTitle"
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontFamily: "Century Gothic",
                  }}
                >
                  We provide the most reasonable price while maintaining the
                  superior report quality.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4} className=" p-md-3">
              <div
                className="thousandsCard"
                style={{
                  borderRadius: "10px",
                }}
              >
                <div className="d-flex justify-content-center ">
                  <div style={{ height: "60px", width: "60px" }}>
                    <img
                      src="/images/SpecificSamples/strength2.png"
                      alt="Dollar"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <h6
                  className="ourCDRServicesParagraph"
                  style={{
                    color: "#017CC9",
                    textAlign: "center",
                    marginTop: "40px",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                >
                  <strong>Plagiarism Free Work</strong>
                </h6>
                <p
                  className="thousandsParagraph ourCDRServicesTitle"
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontFamily: "Century Gothic",
                  }}
                >
                  We provide the most reasonable price while maintaining the
                  superior report quality.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4} className=" p-md-3">
              <div
                className="thousandsCard"
                style={{
                  borderRadius: "10px",
                }}
              >
                <div className="d-flex justify-content-center ">
                  <div style={{ height: "60px", width: "60px" }}>
                    <img
                      src="/images/SpecificSamples/strength1.png"
                      alt="Dollar"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
                <h6
                  className="ourCDRServicesParagraph"
                  style={{
                    color: "#017CC9",
                    textAlign: "center",
                    marginTop: "40px",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                >
                  <strong>24/7 Service </strong>
                </h6>
                <p
                  className="thousandsParagraph ourCDRServicesTitle"
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontFamily: "Century Gothic",
                  }}
                >
                  We provide the most reasonable price while maintaining the
                  superior report quality.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={4} className="mt-5">
          <img
            src="/images/SpecificSamples/strength.gif"
            alt=""
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OurStrength;
