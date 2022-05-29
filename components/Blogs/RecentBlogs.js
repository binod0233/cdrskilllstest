import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import axios from "axios";
import { useRouter } from "next/router";
import parse from "html-react-parser";

const RecentBlogs = () => {
  const [data, setData] = useState([]);
  const router = useRouter()

  const getBlogList = () => {
    axios
      .get(
        `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrskillassessment/recent`
      )
      .then((res) => setData(res.data.blog));
  };

  useEffect(() => {
    getBlogList();
  }, []);

  return (
    <div>
      <Container className="my-4">
        <h1
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textDecoration: "underline",
            textDecorationColor: "red",
            textAlign: "center",
          }}
          className="p-y-4"
        >
          RECENT BLOGS
        </h1>
        <Row className="pt-0">
          {data.length !== 0 && (
            <>
              <Col className="pt-md-5">
                <Headings title={data[0].title} />
                {/* <Paragraphs data={parse(data[0].content)} /> */}
                <button
                  style={{
                    background: "#017CC9",
                    color: "#FFF",
                    borderRadius: "5px",
                    padding: "3px 11px ",
                    fontWeight: "600",
                    border: "none",
                    outline: "none",
                    marginBottom: "50px",
                  }}
                  onClick={() => router.push(`/blog/${data[0].slug}`)}
                >
                  Read More
                </button>
              </Col>
              <Col>
                <img
                  src={data[0].image}
                  alt="image-Recovered-Recovered 1"
                  className="img-fluid mt-md-5"
                />
              </Col>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default RecentBlogs;


