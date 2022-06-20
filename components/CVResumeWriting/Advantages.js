import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";

const Advantages = () => {
  const list = [
    {
      image: "/images/CVResumeWriting/multilevel-checking.png", 
      title: "Multilevel checking",
      details: `To avoid a blatant rejection from Engineers Australia, we utilise multiple
    error detection methods and software
    to check every content of the written
    CDR resume for Engineers Australia.`,
    },
    {
      image: "/images/CVResumeWriting/provide-electronic-service.png",
      title: "Provide electronic service",
      details: `To avoid a blatant rejection from 
    Engineers Australia, we utilise multiple 
    error detection methods and software 
    to check every content of the written 
    CDR resume for Engineers Australia.`,
    },
    {
      image: "/images/CVResumeWriting/proper-guidence.png",
      title: "Proper guidance",
      details: `Professionals with years of experience 
    in CDR resume writing will guide you 
    to get a positive assessment from 
    Engineers Australia`,
    },
  ];
  return (
    <div>
      <Container className="p-5">
        <Headings
          title="Advantages of using a reputable service provider for CDR Resume writing 
before presenting to Engineers Australia:"
        />
        <Row className="pt-md-5 mt-md-5 mt-3">
          {list.map((l,i) => (
            <Col key={i} md={4}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={l.image}
                  className="img-fluid cvResumeImage"
                  style={{ height: "300px" }}
                />
              </div>
              <h4
                style={{ color: "#078CF8", fontWeight: "700" }}
                className="mt-4 ml-4 mb-2 mr-4 text-center ourCDRServicesTitle"
              >
                {l.title}
              </h4>
              <p
                className="ourCDRServicesParagraph"
                style={{
                  color: "#5B5B5B",
                  fontFamily: "Asap",
                  fontWeight: "400",
                  padding: "15px",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                {l.details}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Advantages;
