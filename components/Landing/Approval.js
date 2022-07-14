import Chatra from "@chatra/chatra";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import parse from "html-react-parser";
const Approval = ({ approvalData }) => {
  const { approval, assure } = approvalData;
  // console.log("approval", approvalData);
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container>
        <Row>
          <Col className="mt-5" md={8}>
            <Headings title={approval.title} />
            <Paragraphs data={parse(approval.paragraph)} />
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
              Contact Us
            </button>
          </Col>
          <Col md={4} className="mt-5 px-4">
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
                {assure.title}
              </h3>
              {parse(assure.paragraph)}
              {/* <ul
                className="listText"
                style={{
                  color: "#203546",
                  fontFamily: "Montserrat",
                  listStyleType: "none",
                }}
              >
                <li>
                  <i
                    className="fa-solid fa-circle-check "
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  On Time Delivery
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  24/7 Support
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Plagarism Free Work
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Domain Specific Writers
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  All Engineering Disciplines
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Ensure Best Price
                </li>
              </ul> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Approval;
