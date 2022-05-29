import React, { useState, useEffect } from "react";
import axios from "axios";
import {useRouter} from 'next/router'
import { Container, Row, Col } from "react-bootstrap";

const BlogCategoryScreen = () => {
  const router = useRouter()
  const type = router.query.type
  const [data, setData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const getBlogList = () => {
    axios
      .get(
        `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrskillassessment?type=${type}`
      )
      .then((res) => setData(res.data.blog));
  };
  const getRecentBlogList = () => {
    axios
      .get(
        `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrskillassessment/recent`
      )
      .then((res) => setRecentData(res.data.blog));
  };
  console.log(data, recentData);
  useEffect(() => {
    getBlogList();
    getRecentBlogList();
  }, []);
  return (
    <div>
      <Container>
        <h1
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "center",
          }}
          className="pt-5 "
        >
          Skills Assessment
        </h1>

        <p
          style={{ color: "#666", fontFamily: "Asap", textAlign: "center" }}
          className="px-5 pt-4 pb-5"
        >
          Check our Blogs written by Experienced Bloggers. Blogs related to CDR
          Service, Australia Migration & Skill Assessment.
        </p>

        <Row>
          <Col md={8}>
            {data?.map((d, index) => (
              <Row key={index}>
                <img src={d.image} alt={d.alt} className="img-fluid" />
                <h2
                  style={{
                    color: "#203546",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                  }}
                  className="pt-5 "
                >
                  {d.title}
                </h2>

                <p
                  style={{ color: "#666", fontFamily: "Asap" }}
                  className=" pt-2 pb-1 "
                >
                  {d.data}
                </p>
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
                    width: "100px",
                  }}
                  className="mx-2"
                  onClick={() => router.push(`/blog/${d.slug}`)}
                >
                  Read More
                </button>
              </Row>
            ))}
          </Col>

          <Col md={4}>
            <h4 style={{ color: "#767676" }}> Recent Posts</h4>
            {recentData?.map((c, index) => (
              <Row key={index} onClick={() => router.push(`/blog/${c.slug}`)}>
                <h5 style={{ color: "#000" }} className="p-3">
                  {c.title}
                </h5>
                <p style={{ color: "#767676" }}>{c.createsAt}</p>
                <hr style={{ color: "#017CC9", border: "2px solid" }} />
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogCategoryScreen;
