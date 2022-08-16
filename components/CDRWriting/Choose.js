import Chatra from "@chatra/chatra";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import parse from "html-react-parser";
const Choose = ({ data }) => {
  const { service, best_service } = data;
  return (
    <Container className="mb-3 mb-md-0">
      <Row>
        <Col md={7} className="pt-5">
          <Headings title={best_service?.title} />
          <Paragraphs data={best_service && parse(best_service.paragraph)} />
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
              onClick={() => Chatra("openChat", true)}
            >
              Check Our Pricing
            </button>
          </div>
        </Col>
        <Col md={5} className="mt-md-5 mt-3 ps-md-5 pe-3">
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
              {service?.title}
            </h3>
            {service && parse(service.paragraph)}
            {/* <ul
              style={{
                color: "#203546",
                fontFamily: "Montserrat",
                listStyleType: "none",
              }}
            >
              <li className="ourCDRServicesParagraph">
                <i
                  className="fa-solid fa-link "
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Career Episode Writing Summary
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
                Episode Writing Stage 1 Competency
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
                Assessment Stage 2 Competency
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
                Assessment CDR Reviewing CPD
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
                Writing CDR Plagiarism Checking &
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
                Removal CV Resume Writing
              </li>
            </ul> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Choose;
