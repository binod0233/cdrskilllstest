import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import Headings from "../Headings";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowForward from "@mui/icons-material/ArrowForward";
import GridView from "@mui/icons-material";
import parse from "html-react-parser";

const RecentBlogs = ({ resBlogData }) => {
  const [data, setData] = useState([]);
  const router = useRouter();

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
  console.log(resBlogData);

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
          {resBlogData.map((item, index) => {
            return (
              <>
                <Col key={item.id} md={4} xs={12} className="px-1 py-3">
                  <div
                    className="mb-2"
                    style={{
                      background: "#FAFAFA",
                      boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                      borderRadius: "10px",
                      zIndex: "-1",
                      height: "100%",
                    }}
                  >
                    <Row className="p-0">
                      <img
                        src={item.attributes?.image?.data?.attributes?.url}
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
                          <CalendarMonthIcon />
                          {new Date(item.attributes.createdAt).toLocaleString()}
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
                        {item.attributes.title}
                      </h1>
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
                        <Link href={`/blog/${item.attributes.slug}`}>
                          <a style={{ textDecoration: "none", color: "white" }}>
                            Read More <ArrowForwardIcon />
                          </a>
                        </Link>
                      </Button>
                    </Row>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default RecentBlogs;
