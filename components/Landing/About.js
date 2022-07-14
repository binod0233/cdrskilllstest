import Chatra from "@chatra/chatra";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";

const About = ({ about }) => {
  const image1 = about[0].image.data.attributes.url;
  const image2 = about[1].image.data.attributes.url;
  // console.log("about", about);
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container>
        <Row className="pt-1 desktopScreenSteps">
          <Col className="pt-md-5">
            <Headings title={about[0].title} />
            <Paragraphs data={parse(about[0].paragraph)} />
            {/* <ul className="mt-4 listText" style={{ listStyle: "none" }}>
              <li>
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                3 Career Episodes
              </li>
              <li>
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                SummaryStatement
              </li>
              <li>
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Continuing Professional Development
              </li>
              <li>
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Cv-resume
              </li>
            </ul> */}
          </Col>
          <Col>
            <img
              src={image1}
              alt="image-Recovered-Recovered 1"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className="desktopScreenSteps">
          <Col>
            <img src={image2} alt="why-chose" className="img-fluid" />
          </Col>
          <Col className="mt-md--5">
            <div className="mt-md-5">
              <Headings title={about[1].title} />
              <Paragraphs data={parse(about[1].paragraph)} />

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
                Hire Us
              </button>
            </div>
          </Col>
        </Row>
        <div className="mobileScreenSteps">
          <Row>
            <Col xs={12} className="mt-4">
              <Headings title={about[0].title} />

              <img
                src={image1}
                alt="image-Recovered-Recovered 1"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} className="pt-md-5">
              <Paragraphs data={parse(about[0].paragraph)} />

              {/* <ul className="mt-4 listText" style={{ listStyle: "none" }}>
                <li>
                  {" "}
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  3 Career Episodes
                </li>
                <li>
                  {" "}
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  SummaryStatement
                </li>
                <li>
                  {" "}
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Continuing Professional Development
                </li>
                <li>
                  {" "}
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Cv-resume
                </li>
              </ul> */}
            </Col>
          </Row>
          <Row>
            <Headings title={about[1].title} />

            <Col xs={12}>
              <img src={image2} alt="why-chose" className="img-fluid" />
            </Col>
            <Col xs={12} className="mt-md-5 mt-4">
              <div className="mt-md-5">
                <Paragraphs data={parse(about[1].paragraph)} />

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
                  Hire Us
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
