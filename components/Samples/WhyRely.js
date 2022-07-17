import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";

const WhyRely = ({ data }) => {
  const content = [
    {
      image: "/images/Samples/why1.png",
      title: `Licensed Professional`,
      paragraph: `Expert writers with years of 
      experience in CDR writing will 
      assist you in writing a proper 
      CDR report to get a positive 
      assessment. `,
      alt: ``,
    },
    {
      image: "/images/Samples/why2.png",
      title: `Correct Report Structure & Format`,
      paragraph: `Professional writers will write 
      CDR reports presenting your 
      skills, education and experience 
      in the perfect format prescribed 
      by Engineers Australia.`,
      alt: ``,
    },
    {
      image: "/images/Samples/why3.png",
      title: `Unique and Sufficient content`,
      paragraph: `Our professional writers ensure 
      complete CDR report writing.
      All the CDR reports go through a 
      unique checking process before 
      delivering them to a customer.`,
      alt: ``,
    },
    {
      image: "/images/Samples/why4.png",
      title: `Positive Assessment Outcome`,
      paragraph: `Our Expert writers always work 
      smart to deliver promised services. 
      We successfully maintained a high 
      approval rate for the CDR report 
      from Engineers Australia.`,
      alt: ``,
    },
    {
      image: "/images/Samples/why5.png",
      title: `Team of Experienced Engineers`,
      paragraph: `CDR writers from different 
      engineering backgrounds work 
      together and prepare a flawless 
      CDR report that will get approved 
      by Engineers Australia.  `,
      alt: ``,
    },
    {
      image: "/images/Samples/why6.png",
      title: `Zero Plagiarism in CDR Report`,
      paragraph: `Using content from the internet 
      in your CDR report will get you 
      banned for plagiarism by Engineers 
      Australia. We prepare CDR reports 
      free of plagiarism. `,
      alt: ``,
    },
  ];
  return (
    <Container>
      <Headings title={data?.title} />
      <Paragraphs data={parse(data?.paragraph)} />
      <Row className="mt-5">
        {content.map((c, index) => (
          <Col xs={12} md={4} key={index} className="px-md-5">
            <div
              className="thousandsCard"
              style={{
                borderRadius: "10px",
                zIndex: "-1",
                height: "405px",
              }}
            >
              <div className="d-flex justify-content-center">
                <div style={{ height: "100px", width: "100px" }}>
                  <img
                    src={c.image}
                    alt={c.alt}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <h5
                className="ourCDRServicesTitle"
                style={{
                  color: "#017CC9",
                  textAlign: "center",
                  marginTop: "40px",
                  fontFamily: "Asap",
                  fontWeight: "700",
                }}
              >
                <strong>{c.title}</strong>
              </h5>
              <p
                className="thousandsParagraph ourCDRServicesParagraph"
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontFamily: "Asap",
                }}
              >
                {c.paragraph}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyRely;
