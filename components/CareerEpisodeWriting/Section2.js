import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import parse from "html-react-parser";
const Section2 = ({ data }) => {
  const { content6 } = data;
  return (
    <div style={{ background: "#E5E5E5" }} className="mt-2 mt-md-0">
      <Container>
        <Headings title={content6[0]?.title} />
        <Paragraphs data={content6[0] && parse(content6[0].paragraph)} />
        <Headings title={content6[1]?.title} />
        <Paragraphs data={content6[1] && parse(content6[1].paragraph)} />

        <Row>
          <Col className="mt-md-5 mt-3" md={8}>
            <Headings title={content6[2]?.title} />
            <Paragraphs data={content6[2] && parse(content6[2].paragraph)} />

            <div className="mobileScreenGuidelinesButton">
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
                <BusinessCenterIcon />
                {content6[5]?.title}
              </h3>
              {content6[5]?.paragraph && parse(content6[5].paragraph)}
              {/* <ul
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
              </ul> */}
            </div>
          </Col>
        </Row>

        <Headings title={content6[3]?.title} />
        <Paragraphs data={content6[3] && parse(content6[3].paragraph)} />
      </Container>
    </div>
  );
};

export default Section2;
