import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Headings from "../Headings";
import "./componentStyles.css";

const Faq = () => {
  const [firstActive, setFirstActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  const [fourthActive, setFourthActive] = useState(false);
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Container>
        <Row className="mb-md-5  pb-5 px-5  px-md-0 pb-md-4">
          <Col md={4} className="mt-md-5 mt-1">
            <img
              src="/images/Landing/FAQ.png"
              alt="Frequently asked questions"
              className="img-fluid"
            />
          </Col>
          <Col md={7} className="ms-md-5">
            <div className="d-flex align-items-center">
              <Headings title="Frequently Asked Questions" />
            </div>
            <Row className="mt-3">
              <Col xs={12} className="p-md-4  my-5 my-md-0">
                <div
                  className="frequentlyAskedCard"
                  style={{ height: firstActive ? "fit-content" : 0 ,paddingBottom:"10px"}}
                >
                  <div
                    className="pe-3 d-flex justify-content-between "
                    style={{
                      background: " #203546",

                      borderRadius: "5px",
                    }}
                    onClick={() => setFirstActive(!firstActive)}
                  >
                    <p
                      style={{
                        color: firstActive ? "white" : "white",

                        padding: "10px",
                        fontFamily: "Arial",
                        fontWeight: "400",
                      }}
                    >
                      <strong>
                      How fast can you deliver my CDRs Report?
                      </strong>
                    </p>
                    <span className="frequentlyAskedTitleParagraph">
                      {firstActive ? (
                        <i className="fa-solid fa-chevron-up text-white"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-down text-white"></i>
                      )}
                    </span>
                  </div>
                  <Row
                    className="frequentlyAskedRow "
                    style={{ display: firstActive ? "block" : "none" }}
                  >
                    <p className="frequentlyAskedParagraph">
                    We will deliver you a complete CDR Report within Three weeks.

                    </p>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12} className="p-md-4 mt-2 my-5 my-md-0">
                <div
                  className="frequentlyAskedCard"
                  style={{ height: secondActive ? "fit-content" : 0,paddingBottom:"10px" }}
                >
                  <div
                    className="pe-3 d-flex justify-content-between "
                    style={{
                      background: secondActive ? "#203546" : "#203546",

                      borderRadius: "5px",
                    }}
                    onClick={() => setSecondActive(!secondActive)}
                  >
                    <p
                      style={{
                        color: secondActive ? "white" : "white",

                        padding: "10px",
                        fontFamily: "Arial",
                        fontWeight: "400",
                      }}
                    >
                      <strong>
                      What do I need to submit for the career Episode Report?
                      </strong>
                    </p>
                    <span className="frequentlyAskedTitleParagraph">
                      {secondActive ? (
                        <i className="fa-solid fa-chevron-up text-white"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-down text-white"></i>
                      )}
                    </span>
                  </div>
                  <Row
                    className="frequentlyAskedRow"
                    style={{ display: secondActive ? "block" : "none" }}
                  >
                    <p className="frequentlyAskedParagraph">
                    The Documents Required for CDR writing services are as follows:<br/>
              • Three Career Episodes Report (Academic/project/work bases)<br/>
              • Summary Statement Report<br/>
              • Continuing Professional Development (CPD) Report<br/>
              • Cv-Resume Report<br/>
              • Recent passport size photograph<br/>
              • Bio page of your identity<br/>
              • English language test Report<br/>
              • Academic Transcripts Certificate<br/>

                    </p>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row className="mt-md-5">
              <Col xs={12} className="p-md-4 mb-2 my-5 my-md-0">
                <div
                  className="frequentlyAskedCard"
                  style={{ height: thirdActive ? "fit-content" : 0,paddingBottom:"10px" }}
                >
                  <div
                    className="pe-3 d-flex justify-content-between "
                    style={{
                      background: thirdActive ? "#203546" : "#203546",

                      borderRadius: "5px",
                    }}
                    onClick={() => setThirdActive(!thirdActive)}
                  >
                    <p
                      style={{
                        color: thirdActive ? "white" : "white",

                        padding: "10px",
                        fontFamily: "Arial",
                        fontWeight: "400",
                      }}
                    >
                      <strong>Do I need to provide my academic project?</strong>
                    </p>
                    <span className="frequentlyAskedTitleParagraph">
                      {thirdActive ? (
                        <i className="fa-solid fa-chevron-up text-white"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-down text-white"></i>
                      )}
                    </span>
                  </div>
                  <Row
                    className="frequentlyAskedRow"
                    style={{ display: thirdActive ? "block" : "none" }}
                  >
                    <p className="frequentlyAskedParagraph">
                    An academic project is a crucial document that must be submitted as a career Episode Report during your professional studies. 
                    </p>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12} className="p-md-4 my-2 my-5 my-md-0">
                <div
                  className="frequentlyAskedCard"
                  style={{ height: fourthActive ? "fit-content" : 0,paddingBottom:"10px" }}
                >
                  <div
                    className="pe-3 d-flex justify-content-between "
                    style={{
                      background: fourthActive ? "#203546" : "#203546",

                      borderRadius: "5px",
                    }}
                    onClick={() => setFourthActive(!fourthActive)}
                  >
                    <p
                      style={{
                        color: fourthActive ? "white" : "white",

                        padding: "10px",
                        fontFamily: "Arial",
                        fontWeight: "400",
                      }}
                    >
                      <strong>
                      How long is your CDRs service valid?

                      </strong>
                    </p>
                    <span className="frequentlyAskedTitleParagraph">
                      {fourthActive ? (
                        <i className="fa-solid fa-chevron-up text-white"></i>
                      ) : (
                        <i className="fa-solid fa-chevron-down text-white"></i>
                      )}
                    </span>
                  </div>
                  <Row
                    className="frequentlyAskedRow"
                    style={{ display: fourthActive ? "block" : "none" }}
                  >
                    <p className="frequentlyAskedParagraph">
                    It will be valid for no more than three years.

                    </p>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
