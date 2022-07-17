import Chatra from "@chatra/chatra";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import parse from "html-react-parser";
const WantTo = ({ data }) => {
  return (
    <Container>
      <Row className="pb-4">
        <Col md={7} className="pt-5">
          <Headings title={data?.title} />
          <Paragraphs data={parse(data?.paragraph)} />
          <button
            style={{
              background: "#017CC9",
              color: "#FFF",
              borderRadius: "5px",
              padding: "7px 11px ",
              fontWeight: "600",
              border: "none",
              outline: "none",
            }}
            onClick={() => Chatra("openChat", true)}
          >
            Contact an Expert
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
              <BusinessCenterIcon className="me-3" />
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
                CPD Writing
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

export default WantTo;
