import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";
const Whatdoes = ({ data }) => {
  const { include, include_content } = data;
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container>
        <Headings title={include?.title} />
        <Paragraphs data={include && parse(include.paragraph)} />
        <div className="desktopScreenSteps">
          {include_content &&
            include_content.map((item, index) => {
              return (
                <Row key={item.id}>
                  <Col xs={12} md={6} className="px-md-5 pt-md-5">
                    <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
                      {item?.title}
                    </h4>
                    <p className="stepsParagraph">{parse(item?.paragraph)}</p>
                  </Col>
                  <Col xs={12} md={6} className="px-5">
                    <img
                      src={item?.image?.data?.attributes?.url}
                      alt="discuss your project with our top Expert
            writers"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
              );
            })}
        </div>
        <div className="mobileScreenSteps">
          {include_content &&
            include_content.map((item, index) => {
              return (
                <Row key={item.id}>
                  <Col xs={12} className="px-5">
                    <img
                      src={item?.image?.data?.attributes?.url}
                      alt="discuss your project with our top Expert
            writers"
                      className="img-fluid"
                    />
                  </Col>
                  <Col xs={12} className="px-md-5 pt-md-5">
                    <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
                      {item?.title}
                    </h4>
                    <p className="stepsParagraph">{parse(item?.paragraph)}</p>
                  </Col>
                </Row>
              );
            })}
          {/* <Row>
            <Col xs={12} className="px-5">
              <img
                src="/images/CDRWriting/services1.png"
                alt="discuss your project with our top Expert
            writers"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} className="px-md-5 pt-md-5">
              <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
                1. Writing Career Episodes
              </h4>
              <p className="stepsParagraph">
                Career Episodes are the most critical aspect of CDR report
                authoring. Making a good impression on Engineers Australia takes
                additional thought and effort. There are three career episodes
                in CDR, and each episode is based on three separate projects
                that you completed in your last year of engineering, internship
                program, and working projects. Our experienced team can support
                you in preparing Career Episode Writing based on your
                professional experiences by enabling you to write all three
                career episodes distinctively.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div>
                <img
                  src="/images/CDRWriting/services2.png"
                  alt="CDRXpert's Work Process"
                  style={{ marginLeft: "5vw" }}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col xs={12} className="px-md-5 pt-md-5">
              <h4 className="stepsSubHeading mt-md-4 ourCDRServicesTitle">
                2. Writing a Summary Statement
              </h4>
              <p className="stepsParagraph">
                A Summary Statement may be one page long, but it does not
                diminish its significance. It is centred on the significant
                focal section of your three career experiences. The summary
                statement&apos;s contents are the competency aspects claimed by
                you, demonstrating how and where you have achieved/applied the
                claims in your professional episodes. Our writers are skilled at
                aiding you in creating the ideal summary statement for your
                professional experience.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div>
                <img
                  src="/images/CDRWriting/services3.png"
                  alt="top-quality CDR Report"
                  style={{
                    marginLeft: "5vw",
                    objectFit: "contain",
                  }}
                  className="img-fluid"
                />
              </div>
            </Col>

            <Col xs={12} className="px-md-5 pt-md-5">
              <h4 className="stepsSubHeading mt-md-5 ourCDRServicesTitle">
                3. Writing for Continuing Professional Development
              </h4>
              <p className="stepsParagraph ">
                CPD writing allows you to evaluate, review, and document your
                learning and grow and refresh your engineering knowledge and
                skills. Our skilled staff can assist you with CPD Writing to
                offer a continuous assessment of your professional learning and
                development.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <img
                src="/images/CDRWriting/services4.png"
                alt="Confirm the payment"
                style={{
                  marginLeft: "5vw",
                  objectFit: "contain",
                }}
                className="img-fluid"
              />
            </Col>
            <Col xs={12} className="px-md-5 pt-md-5">
              <h4 className="stepsSubHeading ourCDRServicesTitle">
                4. Cv – Resume Writing.
              </h4>
              <p className="stepsParagraph">
                The CV is considered the easiest part of the CDR report writing
                process, but it must be appropriately prepared to make a good
                impression on Engineers Australia (EA). Our professional staff
                can help you write an engaging personal statement for your CV.
              </p>
            </Col>
          </Row> */}
        </div>
      </Container>
    </div>
  );
};

export default Whatdoes;
