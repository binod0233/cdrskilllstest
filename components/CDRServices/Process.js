import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import  Link  from "next/link";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Process = () => {
  return (
    <div>
      <Container className="p-5">
        <Headings title="CDR Services for positive assessment by Engineers Australia" />
        <Paragraphs
          data="Engineers Australia uses a variety of customised papers to assess an engineer's proficiency in engineering skills and knowledge, 
management, communication, and leadership. CDR report for Engineers Australia consists of three different documents, namely: "
        />
        <div className="py-3">
          <Row>
            <Col
              md={3}
              xs={12}
              className="d-flex flex-column justify-content-center align-items-center my-3 my-md-0"
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
                  src="/images/CDRServices/3-career.png"
                  alt="licensed-professional-final-1"
                  className="img-fluid"
                ></img>
              </div>
              <div
                className="ourCDRServicesTitle"
                style={{
                  marginTop: "5px",
                  textAlign: "center",
                  fontFamily: "Asap",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#666",
                }}
              >
                3 Career Episodes
              </div>
            </Col>
            <Col
              md={3}
              xs={12}
              className="d-flex flex-column justify-content-center align-items-center my-3 my-md-0"
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
                  src="/images/CDRServices/summary.png"
                  alt="licensed-professional-final-1"
                  className="img-fluid"
                ></img>
              </div>
              <div
                className="ourCDRServicesTitle"
                style={{
                  marginTop: "5px",
                  textAlign: "center",
                  fontFamily: "Asap",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#666",
                }}
              >
                Summary Statement
              </div>
            </Col>
            <Col
              md={3}
              xs={12}
              className="d-flex flex-column justify-content-center align-items-center my-3 my-md-0"
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
                  src="/images/CDRServices/Continuing.png"
                  alt="licensed-professional-final-1"
                  className="img-fluid"
                ></img>
              </div>
              <div
                className="ourCDRServicesTitle"
                style={{
                  marginTop: "5px",
                  textAlign: "center",
                  fontFamily: "Asap",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#666",
                }}
              >
                Continuing Professional Development
              </div>
            </Col>
            <Col
              md={3}
              xs={12}
              className="d-flex flex-column justify-content-center align-items-center my-3 my-md-0"
            >
              <div
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "55%",
                  backgroundColor: "#017CC9",
                  color: "#666",
                }}
              >
                <img
                  style={{
                    objectFit: "contain",
                    height: "60%",
                    width: "60%",
                    margin: "18px 0 0 22px",
                    color: "#666",
                  }}
                  src="/images/CDRServices/cv-resume.png"
                  alt="licensed-professional-final-1"
                  className="img-fluid"
                ></img>
              </div>
              <div
                className="ourCDRServicesTitle"
                style={{
                  marginTop: "5px",
                  textAlign: "center",
                  fontFamily: "Asap",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#666",
                }}
              >
                Cv-Resume
              </div>
            </Col>
          </Row>
        </div>
        <div className="py-md-5 pt-4 pb-0">
          <Headings
            title="CDR Services offers professional writers with years of experience writing 
CDR reports in Australia."
          />
          <Paragraphs
            data="We ensure high-quality CDR services with original and plagiarism-free content. While writing the CDR report, expert writers 
at CDRskillassessment follow the guidelines and format mentioned in Engineers Australia's MSA booklet. Our professional Experts 
from an engineering background devote a considerable effort to preparing the CDR report. Use our CDR service to ensure a positive 
assessment from Engineers Australia in a few simple steps."
          />

          <Row className="py-5 desktopScreenSteps">
            <Col xs={5} md={5}>
              <img
                style={{
                  float: "right",
                  objectFit: "contain",
                  height: "300px",
                }}
                src="/images/CDRServices/applicant.png"
                alt="Submit-your-query-1"
                className="img-fluid"

              />
            </Col>
            <Col xs={2}
              md={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center stepsInACircle"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 01
              </div>
            </Col>
            <Col md={5} xs={5} className="pt-5">
              <h4
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
                className="ourCDRServicesTitle"
              >
                Applicant requirement Analysis
              </h4>
              <Paragraphs
                data="  Different applicants are from various profession for which they
                have particular criterion so its our job to analysis their
                individual requirement and provide them genuine report."
              />
            </Col>
          </Row>
          <Row className='desktopScreenSteps'>
            <Col md={5} xs={5} className="pt-5 ">
              <h4
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
                className="ourCDRServicesTitle"
              >
                Expert Advice
              </h4>
              <Paragraphs
                data="After listening to Applicant's requirement we consider
                professional expert advice. We only hire professional writers
                who are well known in the particular engineering discipline."
              />
            </Col>

            <Col
              md={2} xs={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center stepsInACircle"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 02
              </div>
            </Col>
            <Col md={5} xs={5}>
              <img
                style={{
                  float: "float",
                  height: "300px",
                  objectFit: "contain",
                }}
                src="/images/CDRServices/expert.png"
                alt="expert"
                className="img-fluid"

              />
            </Col>
          </Row>

          <Row className='desktopScreenSteps'>
            <Col md={5} xs={5}>
              <img
                style={{ float: "left", objectFit: "contain", height: "300px" }}
                src="/images/CDRServices/reviewing-checking.png"
                alt="Reviewing and checking"
                className="img-fluid"

              />
            </Col>
            <Col
              md={2} xs={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center stepsInACircle"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 03
              </div>
            </Col>
            <Col md={5} xs={5} className="pt-5 mt-5">
              <h4
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
                className="ourCDRServicesTitle"
              >
                Reviewing and checking for Plagiarism
              </h4>
              <Paragraphs
                data=" After the report is completed we go for a number of reviews and
                evaluations since we believe in quality. Only after a number of
                reviews we handle the report to the applicant."
              />
            </Col>
          </Row>
          <Row className='desktopScreenSteps'>
            <Col md={5} xs={5} className="pt-5 mt-5 mt-md-5">
              <h4
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
                className="ourCDRServicesTitle"
              >
                Deliver CDR Report
              </h4>
              <Paragraphs
                data="  We send you the draft copy of the final report in case you want
                the additional modification to your CDR Report. Once you are
                satisfied, we finalize your CDR report and send to you."
              />
            </Col>

            <Col
              md={2} xs={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center stepsInACircle"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 04
              </div>
            </Col>
            <Col md={5} xs={5}>
              <img
                style={{
                  float: "float",
                  objectFit: "contain",
                  height: "300px",
                }}
                src="/images/CDRServices/Deliver.png"
                alt="Deliver"
                className="img-fluid"
              />
            </Col>
          </Row>
        </div>
        <div className='mobileScreenSteps'>
        <Row className="py-md-5 my-4 my-md-0">
            <Col xs={6} >
              <img
                style={{
                  float: "right",
                  
                }}
                src="/images/CDRServices/applicant.png"
                alt="Submit-your-query-1"
                className="img-fluid"

              />
            </Col>
            <Col xs={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 01
              </div>
            </Col>
            <Col xs={12} className="pt-md-5 pt-3">
              <h4
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
                className="ourCDRServicesTitle"
              >
                Applicant requirement Analysis
              </h4>
              <Paragraphs
                data="  Different applicants are from various profession for which they
                have particular criterion so its our job to analysis their
                individual requirement and provide them genuine report."
              />
            </Col>
          </Row>
          <Row className='my-4 my-md-0'>
        
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center "
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 02
              </div>
            </Col>
            <Col xs={6}>
              <img
                
                src="/images/CDRServices/expert.png"
                alt="expert"
                className="img-fluid"

              />
            </Col>
            <Col xs={12} className="pt-md-5 pt-3 ">
              <h4
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
                className="ourCDRServicesTitle"
              >
                Expert Advice
              </h4>
              <Paragraphs
                data="After listening to Applicant's requirement we consider
                professional expert advice. We only hire professional writers
                who are well known in the particular engineering discipline."
              />
            </Col>

          </Row>

          <Row className='my-4 my-md-0'>
            <Col xs={6}>
              <img
                src="/images/CDRServices/reviewing-checking.png"
                alt="Reviewing and checking"
                className="img-fluid"

              />
            </Col>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 03
              </div>
            </Col>
            <Col xs={12} className="pt-md-5 mt-md-5 pt-3">
              <h4
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
                className="ourCDRServicesTitle"
              >
                Reviewing and checking for Plagiarism
              </h4>
              <Paragraphs
                data=" After the report is completed we go for a number of reviews and
                evaluations since we believe in quality. Only after a number of
                reviews we handle the report to the applicant."
              />
            </Col>
          </Row>
          <Row className='my-4 my-md-0'>
            <Col
              xs={6}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 04
              </div>
            </Col>
            <Col xs={6}>
              <img
             
                
                src="/images/CDRServices/Deliver.png"
                alt="Deliver"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} className="pt-md-5  mt-md-5 pt-3">
              <h4
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
                className="ourCDRServicesTitle"
              >
                Deliver CDR Report
              </h4>
              <Paragraphs
                data="  We send you the draft copy of the final report in case you want
                the additional modification to your CDR Report. Once you are
                satisfied, we finalize your CDR report and send to you."
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Process;
