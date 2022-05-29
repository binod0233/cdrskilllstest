import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link'
import {useRouter} from 'next/router'
import Head from 'next/head'
import Headings from "../../components/Headings";
import { Col, Container, Form, Row,Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Hero3 from "../../components/FAQ/Hero3";
import axios from "axios";
import parse from "html-react-parser";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SpecificBlog = () => {
  const router = useRouter()
  const slug = router.query.slug
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});
  const [recentData, setRecentData] = useState([]);

  const submitFormhandler = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_1id88yh",
      "template_dgcdon2",
      form.current,
      "e8bqI-l1U0nY9GlSa"
    )
      .then(
        (result) => {
          alert("Email sent.");
          setFullName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Sorry something went wrong.");
        }
      );
  };

  const getBlog = () => {
    axios
      .get(`https://cdrdashboardbackend.herokuapp.com/api/blogs?slug=${slug}`)
      .then((res) => setData(res.data));
  };
  const getRecentBlogList = () => {
    axios
      .get(
        `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrskillassessment/recent`
      )
      .then((res) => setRecentData(res.data.blog));
  };

  useEffect(() => {
    getBlog();
    getRecentBlogList();
  }, [slug]);
  return (
    <div>
      <Head>
           <title>{data?.title}</title>
             <meta name="description" content={data?.title} />
           </Head>
      <Container>
        <div className="p-5">
          <Headings title={data?.title} />

          {/* <button
            style={{
              background: "#017CC9",
              color: "#FFF",
              borderRadius: "5px",
              padding: "3px 11px ",
              fontWeight: "600",
              border: "none",
              outline: "none",
              fontSize: "25px",
              marginTop: "30px",
            }}
          >
            Table of Contents
          </button> */}
          <Row>
            <img src={data?.image} alt={data?.title} className="img-fluid" />
          </Row>
          <div>{data?.content && parse(data.content)}</div>

          <Row>
            <Col md={7}>
              <h1
                style={{
                  color: "#203546",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                }}
                className="pt-5"
              >
                Is this information helpful?
              </h1>
              <p style={{ color: "#666", fontFamily: "Asap" }}>
                {" "}
                We have tried to make you understand by answering your queries
                through this informative article. If you want to know more about
                this subject matter and facing trouble with the effective CDR
                Report writing process for your Migration skill Assessment visa,
                you can give us an instant call. Our professional writers are
                always eager to provide 24/7 support services.
              </p>

              <h2
                style={{
                  color: "#203546",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                }}
                className="pt-5"
              >
                Want to share?
              </h2>
              <Row>
                <Col md={3}>
                  <a href="https://www.facebook.com/CDRSkill-Assessment-114392794578547">
                    <img
                      src="/images/Specificblog/fb.png"
                      target="_blank"
                      rel="noreferrer"
                      alt="facebook"
                      className="img-fluid mt-1"
                      style={{ height: "160px", width: "160px" }}
                    />
                  </a>
                </Col>
                <Col md={3}>
                  <a href="https://twitter.com/CdrSkill">
                    <img
                      src="/images/Specificblog/tweet.png"
                      target="_blank"
                      rel="noreferrer"
                      alt="Twitter"
                      className="img-fluid mt-1"
                      style={{ height: "160px", width: "160px" }}
                    />
                  </a>
                </Col>
                <Col md={3}>
                  <a href="CDR Skill Assessment (social8248) - Profile | Pinterest">
                    {" "}
                    <img
                      src="/images/Specificblog/pin.png"
                      target="_blank"
                      rel="noreferrer"
                      alt="pininterest"
                      className="img-fluid mt-1"
                      style={{ height: "160px", width: "160px" }}
                    />
                  </a>
                </Col>
                <Col md={3}>
                  <a href="https://www.linkedin.com/in/cdr-skill-assessment-883648238/">
                    {" "}
                    <img
                      src="/images/Specificblog/link.png"
                      target="_blank"
                      rel="noreferrer"
                      alt="LinekdIn"
                      className="img-fluid mt-1"
                      style={{ height: "160px", width: "160px" }}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <Col className="mt-5">
                <Form
                  ref={form}
                  onSubmit={submitFormhandler}
                  className="bg-white p-4 formContainer"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h2>Drop your Questions</h2>
                  </div>

                  <Form.Group className="mb-3" controlId="fullName">
                    <Form.Control
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="inputField"
                      name="fullName"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      value={email}
                      className="inputField"
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Control
                      as="textarea"
                      rows={6}
                      placeholder="Your queries"
                      value={message}
                      className="inputField"
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                    />
                  </Form.Group>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Button
                      className="formSubmitButton"
                      variant="primary"
                      type="submit"
                    >
                      Submit Queries
                    </Button>
                  </Row>
                </Form>
              </Col>
            </Col>
          </Row>

          <h2
            style={{
              color: "#203546",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              textAlign: "center",
            }}
            className="pt-5"
          >
            More Blogs
          </h2>

          <Row>
            {recentData?.slice(0, 3).map((d) => (
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
                        <CalendarMonthIcon />
                        {d.createdAt && new Date(d.createdAt).toLocaleString()}
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
                        href={`/blog/${d.slug}`}
                      >
                        <a>

                        Read More<ArrowForwardIcon /> 
                        </a>
                      </Link>
                    </Button>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="whatsapp"
        buttonName2="Facebook"
      />
    </div>
  );
};

export default SpecificBlog;
