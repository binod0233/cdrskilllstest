import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";

const RequiredDocuments = ({ data }) => {
  const { content4, assessment_data } = data;
  return (
    <Container>
      <Headings title={content4[3]?.title} />
      <Paragraphs
        data={content4[3]?.paragraph && parse(content4[3].paragraph)}
      />
      {assessment_data &&
        assessment_data.map((item, index) => (
          <>
            {index % 2 === 0 ? (
              <Row className="desktopScreenSteps" key={item.id}>
                <Col xs={6} className="px-md-5 pt-md-5">
                  <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
                    {item?.title}
                  </h4>
                  <div className="stepsParagraph">
                    {item?.paragraph && parse(item.paragraph)}
                  </div>
                </Col>
                <Col xs={6} className="px-md-5">
                  <img
                    src={item?.image?.data?.attributes?.url}
                    alt="discuss your project with our top Expert
            writers"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            ) : (
              <Row className="desktopScreenSteps">
                <Col xs={6}>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={item?.image?.data?.attributes?.url}
                      alt="CDRXpert's Work Process"
                      style={{}}
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col xs={6} className="px-md-5 pt-md-5">
                  <h4 className="stepsSubHeading mt-md-4 ourCDRServicesTitle">
                    {item?.title}
                  </h4>
                  <div className="stepsParagraph">
                    {item?.paragraph && parse(item.paragraph)}
                  </div>
                </Col>
              </Row>
            )}
          </>
        ))}

      <div className="mobileScreenSteps">
        {assessment_data &&
          assessment_data.map((item, index) => (
            <Row key={item.id}>
              <Col xs={12} className="px-md-5">
                <div className="d-flex justify-content-center">
                  <img
                    src={item?.image?.data?.attributes?.url}
                    alt="discuss your project with our top Expert
            writers"
                    className="img-fluid"
                    style={{ height: "200px" }}
                  />
                </div>
              </Col>
              <Col xs={12} className="px-md-5 pt-md-5">
                <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
                  {item?.title}
                </h4>
                <div className="stepsParagraph">
                  {item?.paragraph && parse(item.paragraph)}
                </div>
              </Col>
            </Row>
          ))}
        {/* <Row>
          <Col xs={12} className="px-md-5">
            <div className="d-flex justify-content-center">
              <img
                src="/images/Stage2CompetencyAssessment/req1.png"
                alt="discuss your project with our top Expert
            writers"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </div>
          </Col>
          <Col xs={12} className="px-md-5 pt-md-5">
            <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
              1. Engineering Competency Claim
            </h4>
            <p className="stepsParagraph">
              According to your selection of assessment pathways, the number of
              engineering competency claims (ECCs) lies between 11 to 16. Those
              engineers who selected ECR (Engineering competency report) pathway
              have to provide 16 engineering competency claims (ECCs). The
              presented claims, report, record and resume provide information to
              Engineers Australia about the engineer’s involvement in the
              engineering projects. Engineering competency claims are presented
              with the elements of Stage 2 Competency Assessment Engineers
              Australia.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/images/Stage2CompetencyAssessment/req2.png"
                alt="CDRXpert's Work Process"
                style={{ height: "200px" }}
                className="img-fluid"
              />
            </div>
          </Col>
          <Col xs={12} className="px-md-5 pt-md-5">
            <h4 className="stepsSubHeading mt-md-4 ourCDRServicesTitle">
              2. Engineering Experience Record (EER)
            </h4>
            <p className="stepsParagraph">
              The Engineering Experience Record (EER) is a 700-word overview of
              job duties and employment. Preparing the above-mentioned
              submission items is a time-consuming and difficult task. If you
              have a strong understanding of the requirements, it can be simple
              to prepare all submissions
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/images/Stage2CompetencyAssessment/req3.png"
                alt="top-quality CDR Report"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </div>
          </Col>
          <Col xs={12} className="px-md-5 pt-md-5">
            <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
              3. Continuing Professional Development (CPD) Report
            </h4>
            <p className="stepsParagraph ">
              CPD is an abbreviation for Continuing Professional Development,
              and it refers to the learning activities that professionals engage
              in in order to improve and grow their skills. CPD refers to a
              professional&apos;s long-term commitment to improving their skills
              and proficiency.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src="/images/Stage2CompetencyAssessment/req4.png"
                alt="Confirm the payment"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </div>
          </Col>
          <Col xs={12} className="px-md-5 pt-md-5 ">
            <h4 className="stepsSubHeading pt-5 ourCDRServicesTitle">
              4. Updated Resume
            </h4>
            <p className="stepsParagraph">
              You must upload your most recent CV/Resume with your Stage 2
              Competency Assessment for chartered membership of Engineers
              Australia. Include both your most recent work experience and the
              one you are currently working on. It should be simple and
              well-written.
            </p>
          </Col>
        </Row> */}
      </div>
    </Container>
  );
};

export default RequiredDocuments;
