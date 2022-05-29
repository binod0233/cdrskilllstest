import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Section2 = () => {
  return (
    <div style={{ background: "#E5E5E5" }} className='mt-2 mt-md-0'>
      <Container>
        <Headings title="What Exactly is an Engineers Australia Career Episode Report writing? " />
        <Paragraphs
          data="Career Episode Report writing describes your engineering education and job experience. It is an essential and constructive 
engineering activity for Engineers Australia. Each of the three career episodes writing focuses on a different phase of your 
engineering career. Each episode shows how you used your engineering knowledge and skills in the nominated occupation.
The uniqueness of your Career Episode Report and your command of the English language are the foundations of good career 
episode report writing."
        />
        <Headings
          title="CDRskillassessment provides the best Career Episode report writing 
Services in Australia "
        />
        <Paragraphs
          data="Each episode explains how you utilised your engineering knowledge and skills in the nominated occupation. The originality 
of your Career episode report and your command of the English language are the cornerstones of good Career episode report 
writing. Engineers Australia's Career Episode Report (CER) records your engineering education and/or job  experience,as long 
as it involves crucial and constructive engineering activity. Each of the three career episodes focuses on a specific time of your 
engineering activities."
        />

        <Row>
          <Col className="mt-md-5 mt-3" md={8}>
            <Headings
              title="Top-Notch Career Episode Writing Service 
provider in Australia."
            />
            <Paragraphs
              data="Engineers who wish to pursue an engineering career in Australia should write 
a Summary Statement to represent the competency element of all three career 
episodes in tabular format to Engineers Australia. A summary statement is one 
of the most crucial documents of CDR for anyone looking to start an engineering 
profession in Australia, as it presents your skills in writing."
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
              Check Our Pricing
            </button>
            </div>
         
          </Col>
          <Col md={4} className="mt-2 mt-md-5 px-4 pb-5 pb-0">
            <div
              className="px-4 py-4"
              style={{
                background: " #FFFFFF",
                boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.25)",
                borderRadius: " 10px",
              }}
            >
              <h3
                className="ms-3 ourCDRServicesTitle"
                style={{
                  fontFamily: "Asap",
                  color: " #203546",
                  fontWeight: "700",
                }}
              >
                <BusinessCenterIcon/>
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
                    className="fa-solid fa-circle-check"
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
                  Summary Episode Writing
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
                  Stage 2 Competency Assessment
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
                  CPD Writing
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
                  CDR Plagiarism Checking and Removal{" "}
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

        <Headings title="Considerations for Career Episode Report writing." />
        <Paragraphs
          data="Writing a Career Episode Report is both an art and a science. While EA assesses your engineering ability through career episodes, 
it warns you not to incorporate too many technicalities. As a result, deciding how much technicality to provide is an art.
The Career 
Episode Report is all about YOU! Engineers Australia expects to read what YOU did rather than what the TEAM did. As a result, make 
sure that your input is printed correctly.
Each Career Episode report focuses on one Competency Unit and the factors that follow it. 
The competency units fluctuate depending on the occupational category you are applying for.
"
        />
      </Container>
    </div>
  );
};

export default Section2;
