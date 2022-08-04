import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import parse from "html-react-parser";

const Factors = ({ factor }) => {
  const dataList = [
    {
      image: "/images/Landing/licensed-professional-final-1.png",
      title: "Licensed Professional",
      desription: `Expert writers with years of experience in 
  CDR writing will assist you in writing a 
  proper CDR report to get a positive 
  assessment. `,
    },
    {
      image: "/images/Landing/professional-writer-2.png",
      title: "Team of Experienced Engineers",
      desription: `CDR writers from different engineering 
  backgrounds work together and prepare 
  a flawless CDR report that will get 
  approved by Engineers Australia.  `,
    },
    {
      image: "/images/Landing/professional-report.png",
      title: "Correct Report Structure and Format",
      desription: `Professional writers will write CDR 
  reports presenting your skills, education 
  and experience in the perfect format 
  prescribed by Engineers Australia.`,
    },
    {
      image: "/images/Landing/professional-report.png",
      title: "Zero Plagiarism in CDR Report.",
      desription: `Using content from the internet in your 
  CDR report will get you banned for 
  plagiarism by Engineers Australia. 
  We prepare CDR reports free of 
  plagiarism. `,
    },
    {
      image: "/images/Landing/experienced-writer.png",
      title: "Positive Assessment Outcome ",
      desription: `Our Expert writers have years of 
  experience in this CDR report writing field 
  and always work smart to deliver promised 
  services. We successfully maintained a 
  high approval rate of CDR report from 
  Engineers Australia.`,
    },
    {
      image: "/images/Landing/approvel-rate.png",
      title: "Unique and Sufficient content",
      desription: `An incomplete CDR Report will not get 
  assessed by Engineers Australia. Our 
  professional writers with years of 
  experience ensure complete CDR report 
  writing. All the CDR reports go through 
  a special checking process before 
  delivering them to a customer.`,
    },
  ];
  // console.log("Factors", factor.factor_data.data);

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <Container>
        <Row className="pt-5">
          <Headings title={factor.factor} />
          {factor.factor_data.data.map((d, i) => (
            <Col
              key={d.id}
              md="4"
              xs="12"
              className="d-flex flex-column justify-content-center align-items-center px-5"
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
                    margin: "18px 0 0 18px",
                  }}
                  src={d.attributes.image.data.attributes.url}
                  alt="licensed-professional-final-1"
                  className="img-fluid"
                ></img>
              </div>
              <h4
                className="landingFactorTitle"
                style={{
                  marginTop: "20px",
                  fontFamily: "Century Gothic",
                  color: "#203546",
                  fontWeight: "700",
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                {d.attributes.title}
              </h4>
              <p
                className="landingFactorText"
                style={{
                  textAlign: "center",
                  fontFamily: "Asap",
                  color: " #747474",
                  fontWeight: "400",
                  fontSize: "18px",
                }}
              >
                {parse(d.attributes.paragraph)}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Factors;
