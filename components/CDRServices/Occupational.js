import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Occupational = ({ occupational }) => {
  return (
    <div>
      <Container>
        <h2
          className="p-2"
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {occupational.title}
        </h2>
        <Row className="py-5">
          <Col
            md={3}
            xs={12}
            className="d-flex flex-row justify-content-center align-items-center my-3 my-md-3"
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "55%",
                backgroundColor: "#017CC9",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "60%",
                  width: "60%",
                  margin: "18px 0 0 22px",
                }}
                src="/images/CDRServices/professional-engineers.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              style={{
                marginTop: "5px",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                marginLeft: "10px",
              }}
            >
              Professional
              <br />
              Engineers
            </div>
          </Col>
          <Col
            md={3}
            xs={12}
            className="d-flex flex-row justify-content-center align-items-center my-3 my-md-3"
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "55%",
                backgroundColor: "#017CC9",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "60%",
                  width: "60%",
                  margin: "18px 0 0 22px",
                }}
                src="/images/CDRServices/engineering.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              style={{
                marginTop: "5px",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                marginLeft: "10px",
              }}
            >
              Engineering
              <br /> Technologists
            </div>
          </Col>
          <Col
            md={3}
            xs={12}
            className="d-flex flex-row justify-content-center align-items-center my-3 my-md-3"
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "55%",
                backgroundColor: "#017CC9",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "60%",
                  width: "60%",
                  margin: "18px 0 0 22px",
                }}
                src="/images/CDRServices/associates.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              style={{
                marginTop: "5px",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                marginLeft: "10px",
              }}
            >
              Engineering
              <br />
              Associates
            </div>
          </Col>
          <Col
            md={3}
            xs={12}
            className="d-flex flex-row justify-content-center align-items-center my-3 my-md-3"
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "55%",
                backgroundColor: "#017CC9",
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  height: "60%",
                  width: "60%",
                  margin: "18px 0 0 22px",
                }}
                src="/images/CDRServices/managers.png"
                alt="licensed-professional-final-1"
                className="img-fluid"
              ></img>
            </div>
            <div
              style={{
                marginTop: "5px",
                fontFamily: "Asap",
                fontWeight: "700",
                fontSize: "18px",
                marginLeft: "10px",
              }}
            >
              Engineering
              <br /> Managers
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Occupational;
