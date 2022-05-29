import React, { useState } from "react";
import {  Row, Col, Container } from "react-bootstrap";
import Headings from "../Headings";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FrequentlyAsked = () => {
  const [firstActive, setFirstActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  const [fourthActive, setFourthActive] = useState(false);
  const [fifthActive, setFifthActive] = useState(false);
  const [sixthActive, setSixthActive] = useState(false);

  return (
    <Container className="mb-5">
      <Headings title="Frequently asked questions" />
      <Row className="mt-md-5">
        <Col xs={12} md={6} className="p-4 my-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: firstActive ? "fit-content" : 0 ,paddingBottom:"10px"}}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: firstActive ? "#203546" : "white",
                border: "1px solid #203546",
                borderRadius: "5px",
              }}
              onClick={() => setFirstActive(!firstActive)}
            >
              <p
                style={{
                  color: firstActive ? "white" : "#203546",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>
                What is CDR Report, and why it is Required?
                </strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {firstActive ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: firstActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
              A competency Demonstration report, also known as CDR, is a document that reflects your engineering knowledge, skills, abilities, and experience to get selected as an engineer for an Australian immigration visa. CDR Report is prepared for Engineers Australia to prove that you are an eligible candidate for the position you applied for on an Australian immigration visa.

              </p>
            </Row>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-4 mt-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: secondActive ? "fit-content" : 0,paddingBottom:"10px" }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: secondActive ? "#203546" : "white",
                border: "1px solid #203546",
                borderRadius: "5px",
              }}
              onClick={() => setSecondActive(!secondActive)}
            >
              <p
                style={{
                  color: secondActive ? "white" : "#203546",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>
                How do I write My perfect competency Demonstration (CDR) Report?
                </strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {secondActive ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: secondActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
              A perfect CDR Report is written by following all the strict guidelines of Engineers Australia mentioned in the MSA booklet. Engineers Australia Expects you to write an ideal CDR Report on your own; However, you might be an inexperienced writer so you can take professional help from reliable Service providers.

              </p>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12} md={6} className="p-4 mb-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: thirdActive ? "fit-content" : 0,paddingBottom:"10px" }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: thirdActive ? "#203546" : "white",
                border: "1px solid #203546",
                borderRadius: "5px",
              }}
              onClick={() => setThirdActive(!thirdActive)}
            >
              <p
                style={{
                  color: thirdActive ? "white" : "#203546",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                                <strong>Do you offer complete CDRs report writing services for an Australian immigration visa?</strong>

              </p>
              <span className="frequentlyAskedTitleParagraph">
                {thirdActive ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: thirdActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
              We offer our complete CDRs report writing and reviewing services, including a Summary statement Report, three career Episode Reports, continuing Professional development (CPD) Report, and Cv-Resume Report for an Australian immigration visa.        
              </p>
            </Row>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-4 my-2 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: fourthActive ? "fit-content" : 0,paddingBottom:"10px" }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: fourthActive ? "#203546" : "white",
                border: "1px solid #203546",
                borderRadius: "5px",
              }}
              onClick={() => setFourthActive(!fourthActive)}
            >
              <p
                style={{
                  color: fourthActive ? "white" : "#203546",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>
                What are the documents required for the CDR writing service?

                </strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {fourthActive ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: fourthActive ? "block" : "none" }}
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

      <Row className="mt-5">
        <Col xs={12} md={6} className="p-4 my-3 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: fifthActive ? "fit-content" : 0,paddingBottom:"10px" }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: fifthActive ? "#203546" : "white",
                border: "1px solid #203546",
                borderRadius: "5px",
              }}
              onClick={() => setFifthActive(!fifthActive)}
            >
              <p
                style={{
                  color: fifthActive ? "white" : "#203546",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>                Which English language tests do Engineers Australia accept?
</strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {fifthActive ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: fifthActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
              The English Language tests that Engineers Australia accepts are:<br/>
              • IELTS<br/>
              • TOEFL iBT <br/>

              </p>
            </Row>
          </div>
        </Col>

        <Col xs={12} md={6} className="p-4 my-4 my-md-0">
          <div
            className="frequentlyAskedCard"
            style={{ height: sixthActive ? "fit-content" : 0,paddingBottom:"10px" }}
          >
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                background: sixthActive ? "#203546" : "white",
                border: "1px solid #203546",
                borderRadius: "5px",
              }}
              onClick={() => setSixthActive(!sixthActive)}
            >
              <p
                style={{
                  color: sixthActive ? "white" : "#203546",

                  padding: "10px",
                  fontFamily: "Arial",
                  fontWeight: "400",
                }}
              >
                <strong>                How fast can you deliver my CDRs Report?
</strong>
              </p>
              <span className="frequentlyAskedTitleParagraph">
                {sixthActive ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </span>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: sixthActive ? "block" : "none" }}
            >
              <p className="frequentlyAskedParagraph">
              We will deliver you a complete CDR Report within Three weeks.
 </p>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FrequentlyAsked;
