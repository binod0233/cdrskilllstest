import Chatra from "@chatra/chatra";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const About = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container>
        <Row className="pt-1 desktopScreenSteps">
          <Col className="pt-md-5">
            <Headings
              title="What is CDR report for Engineers 
Australia?"
            />
            <Paragraphs
              data="A CDR report allows engineers to demonstrate that their 
expertise meets Australian standards. Engineers Australia 
uses a variety of customised papers to assess an engineer's 
proficiency in engineering skills and knowledge, management, 
communication, and leadership. CDR report for Engineers 
Australia consists of three different documents, namely: "
            />
            <ul className="mt-4 listText" style={{ listStyle: "none" }}>
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
            </ul>
          </Col>
          <Col>
            <img
              src="/images/Landing/image-Recovered-Recovered 1.png"
              alt="image-Recovered-Recovered 1"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className='desktopScreenSteps'>
          <Col>
            <img
              src="/images/Landing/why-chose-CDr2 1.png"
              alt="why-chose"
              className="img-fluid"
            />
          </Col>
          <Col className="mt-md--5">
            <div className="mt-md-5">
              <Headings
                title="What makes our CDR Report writing 
service better than others?"
              />
              <Paragraphs
                data="Our Expert writers have many years of experience in this CDR 
writing field and have always worked smart to deliver our promised 
services. We have almost an Excellent success rate until now. Here 
are our significant factors that makes our service better than others"
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
                onClick={() => Chatra("openChat", true)}
              >
                Hire Us
              </button>
            </div>
          </Col>
        </Row>
        <div className='mobileScreenSteps'>
        <Row >
        <Col xs={12} className="mt-4">
        <Headings
              title="What is CDR report for Engineers 
Australia?"
            />
            <img
              src="/images/Landing/image-Recovered-Recovered 1.png"
              alt="image-Recovered-Recovered 1"
              className="img-fluid"
            />
          </Col>
          <Col xs={12} className="pt-md-5">
            
            <Paragraphs
              data="A CDR report allows engineers to demonstrate that their 
expertise meets Australian standards. Engineers Australia 
uses a variety of customised papers to assess an engineer's 
proficiency in engineering skills and knowledge, management, 
communication, and leadership. CDR report for Engineers 
Australia consists of three different documents, namely: "
            />
            <ul className="mt-4 listText" style={{ listStyle: "none" }}>
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
            </ul>
          </Col>
          
        </Row>
        <Row >
        <Headings
                title="What makes our CDR Report writing 
service better than others?"
              />
          <Col xs={12}>
            <img
              src="/images/Landing/why-chose-CDr2 1.png"
              alt="why-chose"
              className="img-fluid"
            />
          </Col>
          <Col xs={12} className="mt-md-5 mt-4">
            <div className="mt-md-5">
             
              <Paragraphs
                data="Our Expert writers have many years of experience in this CDR 
writing field and have always worked smart to deliver our promised 
services. We have almost an Excellent success rate until now. Here 
are our significant factors that makes our service better than others"
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
