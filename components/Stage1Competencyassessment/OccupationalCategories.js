import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const OccupationalCategories = () => {
  const content = [
    {
      image: "/images/Stage1CompetencyAssessment/manager.png",
      title: `Professional Engineer`,
      paragraph: `Candidates with 4 years of Bachelor’s 
    in Engineering Degree or 5 years of 
    Engineering Masters can apply in this 
    occupational category.`,
      alt: ``,
    },
    {
      image: "/images/Stage1CompetencyAssessment/technologist.png",
      title: `Engineering Technologist`,
      paragraph: `Candidates with 3 years of Bachelor’s in 
  Engineering Technology or Bachelor of 
  Engineering Science Degree can apply 
  in this occupational category.`,
      alt: ``,
    },
    {
      image: "/images/Stage1CompetencyAssessment/associate.png",
      title: `Engineering Associate`,
      paragraph: `Candidates with 2 years of Advance 
  Engineering Diploma or Associate 
  Degree in Engineering can apply in 
  this occupational category.`,
      alt: ``,
    },
  ];
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container className="py-5">
        <Headings
          title="Engineers Australia has categorised Stage 1 Competency Assessment 
into 3 occupational Categories."
        />
        <Paragraphs
          data="Engineers can be eligible to be a member of Engineers Australia through Stage 1 Competency Assessment in three different 
occupational categories."
        />
        <Row>
          {content.map((c, index) => (
            <Col xs={12} md={4} key={index} className="p-5 p-md-3">
              <div
                className="thousandsCard"
                style={{
                  borderRadius: "10px",
                  zIndex: "-1",
                  minHeight: "405px",
                  maxHeight: "fit-content",
                }}
              >
                <div className="d-flex justify-content-center ">
                  <div style={{ height: "300px", width: "300px" }}>
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
                    color: "#203546",
                    textAlign: "center",
                    marginTop: "40px",
                    fontFamily: "Century Gothic",
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
                    fontFamily: "Century Gothic",
                  }}
                >
                  {c.paragraph}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OccupationalCategories;
