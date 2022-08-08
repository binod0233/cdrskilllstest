import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ALLBLOGS = () => {
  const [data, setData] = useState([]);
  const getBlogList = () => {
    axios
      .get(
        `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrskillassessment`
      )
      .then((res) => {
        setData(res.data.blog);
      });
  };
  useEffect(() => {
    getBlogList();
  }, []);
  console.log(data);
  return (
    <div>
      <Container>
        <h1
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textDecoration: "underline",
            textDecorationColor: "red",
          }}
        >
          ALL BLOGS
        </h1>
        <Row>
          {data?.map((d) => (
            <Col key={d._id} md={4} xs={12} className="px-1 py-3">
              <div
                className="mb-2"
                style={{
                  background: "#FAFAFA",
                  boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                  borderRadius: "10px",
                  zIndex: "-1",
                }}
              >
                <Row className="p-0">
                  <img
                    src={d.image}
                    alt="blog"
                    className=" img-fluid rounded"
                    style={{ height: "180px" }}
                  />
                </Row>
                <Row className="px-5 my-0">
                  <Col
                    style={{
                      fontFamily: "Arial",
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  ></Col>
                  <Col
                    style={{
                      fontFamily: "Arial",
                      fontSize: "12px",
                      fontWeight: "400",
                    }}
                  >
                    <span style={{ float: "right" }}>
                      <i className="fa-solid fa-calendar-range"></i>
                      {new Date(d.createdAt).toLocaleString()}
                    </span>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center mb-0 px-3">
                  <h1
                    className="purpleHeading"
                    style={{
                      fontSize: "16px",
                      color: "#203546",
                      fontFamily: "Cambria",
                      fontWeight: "700",
                    }}
                  >
                    {d.title}
                  </h1>
                  {/* <div
                    style={{
                      height: "40px",
                    }}
                  >
                    <p
                      className="textParagraphP"
                      style={{
                        color: "#666666",
                        fontSize: "15px",
                        fontFamily: "Arial",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    ></p>
                  </div> */}
                </Row>
                <Row className="d-flex justify-content-center align-items-center px-3">
                  <Button
                    className="px-4"
                    style={{
                      fontSize: "18px",
                      background: "#017CC9",

                      borderRadius: "10px",
                      outline: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={`/blog/${d.slug}`}
                    >
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </Button>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ALLBLOGS;
