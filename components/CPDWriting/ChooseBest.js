import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const ChooseBest = () => {
  return (
    <Container>
      <Row>
        <Col md={7} className="pt-5">
          <Headings
            title="Choose the best service provider to write 
your CDR report for Engineers Australia."
          />
          <Paragraphs
            data="Engineers who wish to pursue an engineering career in Australia should 
write a CDR report to demonstrate skills, knowledge and experience to 
Engineers Australia. Competency Demonstration Report is one of the most 
crucial documents for anyone looking to start a profession in Australia, as 
it presents your skills in writing."
          />
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
        </Col>
        <Col md={5} className="mt-5 ps-5 pe-3">
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
              Our other Services
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
                  className="fa-solid fa-link"
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
                  className="fa-solid fa-link"
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
                  className="fa-solid fa-link"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Summary Statement Writing
              </li>
              <li className="ourCDRServicesParagraph">
                <i
                  className="fa-solid fa-link"
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
                  className="fa-solid fa-link"
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
                  className="fa-solid fa-link"
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
                  className="fa-solid fa-link"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                CDR Plagiarism Checking & Removal
              </li>
              <li className="ourCDRServicesParagraph">
                <i
                  className="fa-solid fa-link"
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
  );
};

export default ChooseBest;
