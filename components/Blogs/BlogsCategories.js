import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useRouter} from 'next/router'
const BlogsCategories = () => {
  const router = useRouter()
  const content = [
    {
      image: "/images/Blogs/mer.png",
      title: `Skills Assessment `,
      paragraph: `Check our Blogs written by Experienced 
      Bloggers. Blogs related to CDR Service, 
      Australia Migration & Skill Assessment. 
      `,
      alt: ``,
    },
    {
      image: "/images/Blogs/per.png",
      title: `Australian Migration `,
      paragraph: `Check our Blogs written by Experienced 
      Bloggers. Blogs related to CDR Service, 
      Australia Migration & Skill Assessment. 
      `,
      alt: ``,
    },
    {
      image: "/images/Blogs/ter.png",
      title: `CDR Service`,
      paragraph: `Check our Blogs written by Experienced 
      Bloggers. Blogs related to CDR Service, 
      Australia Migration & Skill Assessment. 
      `,
      alt: ``,
    },
  ];
  return (
    <div>
      <Container>
        <h1
          style={{
            color: "#203546",
            textAlign: "center",
            fontFamily: "Century Gothic",
            fontWeight: "700",
          }}
          className="p-4"
        >
          {" "}
          Blogs
        </h1>

        <p style={{ color: "#666666", textAlign: "center" }} className=" ">
          {" "}
          Check our Blogs written by Experienced Bloggers. Blogs related to CDR
          Service, Australia Migration & Skill Assessment.
        </p>
        <h1
          style={{
            color: "#203546",
            textAlign: "center",
            fontFamily: "Century Gothic",
            fontWeight: "700",
          }}
          className="pt-4"
        >
          {" "}
          Popular Categories
        </h1>

        <Row>
          {content.map((c, index) => (
            <Col xs={12} md={4} key={index} className=" p-md-0">
              <div
                className="thousandsCard p-5"
                style={{
                  borderRadius: "10px",
                  zIndex: "-1",
                  height: "405px",
                  cursor: "pointer",
                }}
                onClick={() => router.push(`/blog/category/${c.title}`)}
              >
                <div className="d-flex justify-content-center ">
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
                  className="ourCDRServicesParagraph"
                  style={{
                    color: "#017CC9",
                    textAlign: "center",
                    marginTop: "40px",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                >
                  <strong>{c.title}</strong>
                </h5>
                <p
                  className="thousandsParagraph ourCDRServicesTitle"
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

export default BlogsCategories;
