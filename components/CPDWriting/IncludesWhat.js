import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";

const IncludesWhat = ({ data }) => {
  const content = [
    {
      image: "/images/CPDWriting/image.png",
      title: `Structured CPD `,
      paragraph: `In a CPD Statement Writing 
          structured CPD covers Aspects 
          like attending training courses,
          workshops, conferences, e-learning 
          courses, seminars, and CPD 
          certified events.`,
      alt: ``,
    },
    {
      image: "/images/CPDWriting/image1.png",
      title: `Reflective CPD `,
      paragraph: `CPD Statement Writing involves 
          no participant-based interactions, 
          so this kind of continued professional 
          development is also known as CPD. 
          CPD writing for Engineers Australia 
          is more directional and passive.`,
      alt: ``,
    },
    {
      image: "/images/CPDWriting/image2.png",
      title: `Self-directed CPD`,
      paragraph: `Self-directed in CPD Statement 
          writing covers all the unaccompanied 
          CPD activities, including reading 
          documents, articles, and publications 
          in print or online form.`,
      alt: ``,
    },
  ];
  const { what, what_data } = data;
  return (
    <Container>
      <Headings title={what[0]?.title} />
      <Paragraphs data={what[0]?.paragraph && parse(what[0].paragraph)} />
      <Row>
        {what_data.map((item, index) => (
          <Col xs={12} md={4} key={index} className=" p-md-3 px-5">
            <div
              className="thousandsCard"
              style={{
                borderRadius: "10px",
                zIndex: "-1",
                height: "405px",
              }}
            >
              <div className="d-flex justify-content-center ">
                <div style={{ height: "100px", width: "100px" }}>
                  <img
                    src={item?.image?.data?.attributes?.url}
                    // alt={c.alt}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
              <h5
                className="ourCDRServicesParagraph"
                style={{
                  color: "#017CC9",
                  textAlign: "center",
                  marginTop: "40px",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                }}
              >
                <strong>{item?.title}</strong>
              </h5>
              <p
                className="thousandsParagraph ourCDRServicesTitle"
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  fontFamily: "Century Gothic",
                }}
              >
                {item?.paragraph && parse(item.paragraph)}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IncludesWhat;
