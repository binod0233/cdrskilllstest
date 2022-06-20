import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Plag2 = () => {
  return (
    <div>
      <Container className="p-md-5 pt-3">
        <Headings
          title="Professionals at CDRSkillassessment ensure approval by Engineers Australia 
with plagiarism-free CDR"
        />
        <ul
          className="mt-4"
          style={{
            listStyleType: "none",
            fontFamily: "Asap",
            color: "#5B5B5B",
            fontSize: "19px",
          }}
        >
          <li className="ourCDRServicesParagraph">
            {" "}
            <i
              className="fa-solid fa-circle-check"
              style={{
                marginLeft: "-9px",
                marginRight: "10px",
                color: "#017CC9",
              }}
            ></i>
            AI-based plagiarism detection tool to check for plagiarism in your
            CDR Skill Assessment Australia.
          </li>
          <li className="ourCDRServicesParagraph">
            {" "}
            <i
              className="fa-solid fa-circle-check"
              style={{
                marginLeft: "-9px",
                marginRight: "10px",
                color: "#017CC9",
              }}
            ></i>{" "}
            Our professional writers will alter the plagiarised content to make
            it original. Engineers Australia does not accept CDR with
            plagiarism.
          </li>
          <li className="ourCDRServicesParagraph">
            {" "}
            <i
              className="fa-solid fa-circle-check"
              style={{
                marginLeft: "-9px",
                marginRight: "10px",
                color: "#017CC9",
              }}
            ></i>
            Multilevel checking of your CDR to detect plagiarism and removing it
            before submitting CDR to Engineers Australia.
          </li>
          <li className="ourCDRServicesParagraph">
            {" "}
            <i
              className="fa-solid fa-circle-check"
              style={{
                marginLeft: "-9px",
                marginRight: "10px",
                color: "#017CC9",
              }}
            ></i>
            Expert guidance to any engineering applicants or students that need
            help in preparing a Plagiarism-free CDR report for Engineers
            Australia.
          </li>
        </ul>

        <Row>
          <Col md={8} className="mt-5 pt-4">
            <Headings
              title="Choose the best plagiarism checking and 
removing service provider to review your CDR 
for Engineers Australia."
            />
            <Paragraphs
              data="Engineers who wish to pursue an engineering career in Australia should write a CDR 
report to demonstrate skills, knowledge and experience to Engineers Australia. We 
have dedicated engineering teams with years of experience in CDR Reviewing Service 
for engineers in Australia."
            />
            <div className='mobileScreenGuidelinesButton'>

            <button
              style={{
                background: "#017CC9",
                color: "#FFF",
                borderRadius: "5px",
                padding: "3px 11px ",
                fontWeight: "600",
                border: "none",
                outline: "none",
              }}
              >
              Contact an Expert
            </button>
              </div>
          </Col>
          <Col md={4} className="mt-md-5 mt-3 px-4">
            <div
              className="px-4 py-4"
              style={{
                background: " #FFFFFF",
                boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.25)",
                borderRadius: " 10px",
              }}
            >
              <h3
                className="ms-3"
                style={{
                  fontFamily: "Asap",
                  color: " #203546",
                  fontWeight: "700",
                }}
              >
                <BusinessCenterIcon />
               Our Other Services
              </h3>
              <ul
                style={{
                  color: "#203546",
                  fontFamily: "Montserrat",
                  listStyleType: "none",
                }}
              >
                <li className="ourCDRServicesParagraph">
                  <i
                    className="fa-solid fa-circle-check "
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  CDR Writing
                </li>
                <li className="ourCDRServicesParagraph">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Career Episode Writing
                </li>
                <li className="ourCDRServicesParagraph">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Summmary Statement Writing
                </li>
                <li className="ourCDRServicesParagraph">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Stage 1 Competency Assessment
                </li>
                <li className="ourCDRServicesParagraph">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Stage 2 Competency Assistant
                </li>
                <li className="ourCDRServicesParagraph">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  CDR Reviewing
                </li>
                <li className="ourCDRServicesParagraph">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  CDR Plagiarism Checking and Removal
                </li>
                <li className="ourCDRServicesParagraph">
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  CV Resume Writing
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Plag2;
