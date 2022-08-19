import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Headings from "../../components/Headings";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Card,
  Stack,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Hero3 from "../../components/FAQ/Hero3";
import axios from "axios";
import parse from "html-react-parser";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Select from "react-select";

// import Seo from "../../components/Seo";

const SpecificBlog = ({ resBlogData }) => {
  const router = useRouter();
  const slug = router.query.slug;
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});
  const [recentData, setRecentData] = useState([]);
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  console.log("blogData", resBlogData);

  const submitFormhandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_swmc1ha",
        "template_u77tatf",
        form.current,
        "hWJYhr4QPZh-TxVMc"
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
    <div className="">
      {router.isFallback || resBlogData === null ? (
        <>
          <Head>
            <title>{data?.title}</title>
            <meta name="description" content={data?.title} />
            <link rel="canonical" href={canonicalUrl} />
          </Head>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/copenned/image/upload/v1659366267/small_her_9ad2b6da87.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "70vh",
              width: "100%",
              position: "relative",
              overflow: "hidden",

              clipPath: "ellipse(226% 27% at 50% 16%)",
              zIndex: "-1",
            }}
          >
            <Container className="pt-5 text-light">
              <p className="">
                Top 5 Tips to prepare perfect CDR reports for Engineers
                migrating to Australia
              </p>
              <Row xs={2} md={4} lg={4}>
                <Col className=" ">
                  <p className="">Last Update</p>
                </Col>
                <Col className=" ">
                  <p className="">Australia Migration</p>
                </Col>
              </Row>
            </Container>
          </div>
          <Container style={{ marginTop: "-25%", backgroundColor: "" }}>
            <Row className="">
              <Col sm={9} className="ms-4  ">
                <Card.Img
                  variant="top"
                  src={
                    "https://res.cloudinary.com/copenned/image/upload/v1658911391/8_Common_CDR_Report_Mistakes_Made_by_Engineering_Applicants_884_by_444_4e35834a9b.png"
                  }
                />
                <h1 className=" ">dsssssssssssssd</h1>{" "}
              </Col>
              <Col className=" bg-light pt-2 ps-4">
                <Stack gap={2}>
                  <div
                    className=" "
                    style={{
                      fontFamily: "Century Gothic",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "20.52px",
                      color: "#203546",
                    }}
                  >
                    About Cdr for Engineers
                  </div>
                  <div
                    className=" "
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "400",
                      fontSize: "19px",
                      lineHeight: "21.52px",
                      color: "#7C7C7C",
                    }}
                  >
                    CDRforengineer Blog is a Blog hub for Engineers migrating to
                    Australia on all facets of CDR writing, ranging from
                    detailed Australia Migration to in-depth coverage of new CDR
                    writing trends and techniques.
                  </div>
                  <div
                    className=" "
                    style={{
                      fontFamily: "Century Gothic",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "20.52px",
                      color: "#203546",
                    }}
                  >
                    Search Blog
                  </div>
                  <Select />
                  <div
                    className=" "
                    style={{
                      fontFamily: "Century Gothic",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "20.52px",
                      color: "#203546",
                    }}
                  >
                    Latest Blog
                  </div>
                  <div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "18px",
                        color: "#203546",
                      }}
                    >
                      Australia Migration
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      CDRforengineer Blog is a Blog hub for Engineers migrating
                      to Australia on all facets of .
                      <hr />
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      Australia Migration
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      CDRforengineer Blog is a Blog hub for Engineers migrating
                      to Australia on all facets of .
                      <hr />
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "18px",
                        color: "#203546",
                      }}
                    >
                      Australia Migration
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      CDRforengineer Blog is a Blog hub for Engineers migrating
                      to Australia on all facets of .
                      <hr />
                    </div>
                  </div>
                  <Stack>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "20.52px",
                        color: "#203546",
                      }}
                    >
                      Categories
                    </div>
                    <span
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      Australia Migration
                    </span>
                    <span
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      Australia Migration
                    </span>{" "}
                    <span
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      Australia Migration
                    </span>
                  </Stack>
                  <div
                    className=" "
                    style={{
                      fontFamily: "Century Gothic",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "20.52px",
                      color: "#203546",
                    }}
                  >
                    Is this information helpful?
                  </div>

                  <div
                    className=" "
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "400",
                      fontSize: "19px",
                      lineHeight: "21.52px",
                      color: "#7C7C7C",
                    }}
                  >
                    We have tried to make you understand by answering your
                    queries through this informative article. If you want to
                    know more about this subject matter and facing trouble with
                    the effective CDR Report writing process for your Migration
                    skill Assessment visa, you can give us an instant call. Our
                    professional writers are always eager to provide 24/7
                    support services.
                  </div>
                  <div
                    className=" "
                    style={{
                      fontFamily: "Century Gothic",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "20.52px",
                      color: "#203546",
                    }}
                  >
                    Leave your Feedback{" "}
                  </div>
                  <Form
                    ref={form}
                    onSubmit={submitFormhandler}
                    className="bg-white p-4 formContainer"
                  >
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
                        Post Feedback
                      </Button>
                    </Row>
                  </Form>
                  <Row className="pb-3">
                    <div
                      className=" "
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "20.52px",
                        color: "#203546",
                      }}
                    >
                      Show your love!
                    </div>
                    <Col sm={4}>
                      {" "}
                      <Button size="sm" variant="primary">
                        Facebook
                      </Button>
                    </Col>
                    <Col sm={4}>
                      {" "}
                      <Button size="sm" variant="primary">
                        Facebook
                      </Button>
                    </Col>
                    <Col sm={4}>
                      {" "}
                      <Button size="sm" variant="primary">
                        Facebook
                      </Button>
                    </Col>
                  </Row>
                </Stack>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
          {/* <Seo seo={resBlogData?.attributes?.seo} /> */}
          {/* <Container>
            <div className="p-5">
              <Headings title={resBlogData?.attributes?.title} />

              <Row>
                <Image
                  src={resBlogData?.attributes?.image?.data?.attributes?.url}
                  alt={
                    resBlogData?.attributes?.image?.data?.attributes
                      ?.alternativeText
                  }
                  className="img-fluid"
                  width={
                    resBlogData?.attributes?.image?.data?.attributes?.width
                  }
                  height={
                    resBlogData?.attributes?.image?.data?.attributes?.height
                  }
                />
              </Row>
              <div>
                {resBlogData?.attributes?.content &&
                  parse(resBlogData?.attributes?.content)}
              </div>
            </div>
          </Container> */}
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/copenned/image/upload/v1659366267/small_her_9ad2b6da87.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "90vh",
              width: "100%",
              position: "relative",
              overflow: "hidden",

              clipPath: "ellipse(226% 27% at 50% 16%)",
              zIndex: "-1",
            }}
          >
            <Container className="pt-5 text-light">
              <h1
                className="headingTitle"
                style={{
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "34x",
                }}
              >
                {resBlogData?.attributes?.title}
              </h1>
              <Row xs={2} md={4} lg={4}>
                <Col className=" ">
                  <p className="">Last Update</p>
                </Col>
                <Col className=" ">
                  <p className="">Australia Migration</p>
                </Col>
              </Row>
            </Container>
          </div>
          <Container style={{ marginTop: "-30%", backgroundColor: "" }}>
            <Row className="">
              <Col sm={8} className="ms-4  ">
                <Card.Img
                  variant="top"
                  src={resBlogData?.attributes?.image?.data?.attributes?.url}
                />
                {resBlogData?.attributes?.content &&
                  parse(resBlogData?.attributes?.content)}
              </Col>
              <Col className="  ">
                <Row className="bg-white py-2 container ">
                  <div
                    className="container-fluid "
                    style={{
                      fontFamily: "Century Gothic",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "20.52px",
                      color: "#203546",
                    }}
                  >
                    About Cdr for Engineers
                  </div>
                  <div
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "400",
                      fontSize: "19px",
                      lineHeight: "21.52px",
                      color: "#7C7C7C",
                    }}
                  >
                    CDRforengineer Blog is a Blog hub for Engineers migrating to
                    Australia on all facets of CDR writing, ranging from
                    detailed Australia Migration to in-depth coverage of new CDR
                    writing trends and techniques.
                  </div>
                </Row>
                <Row className="bg-light container">
                  <div
                    className="py-2 "
                    style={{
                      fontFamily: "Century Gothic",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "20.52px",
                      color: "#203546",
                    }}
                  >
                    Search Blog
                  </div>
                  <Select />
                  <div
                    className="py-2 "
                    style={{
                      fontFamily: "Century Gothic",
                      fontWeight: "700",
                      fontSize: "20px",
                      lineHeight: "20.52px",
                      color: "#203546",
                    }}
                  >
                    Latest Blog
                  </div>
                  <div className="pt-3">
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "18px",
                        color: "#203546",
                      }}
                    >
                      Australia Migration
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      CDRforengineer Blog is a Blog hub for Engineers migrating
                      to Australia on all facets of .
                      <hr />
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "18px",
                        color: "#203546",
                      }}
                    >
                      Australia Migration
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      CDRforengineer Blog is a Blog hub for Engineers migrating
                      to Australia on all facets of .
                      <hr />
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "18px",
                        color: "#203546",
                      }}
                    >
                      Australia Migration
                    </div>
                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      CDRforengineer Blog is a Blog hub for Engineers migrating
                      to Australia on all facets of .
                      <hr />
                    </div>
                  </div>
                  <Row className="py-2 bg-white ">
                    <div
                      className=" pb-2 "
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "20.52px",
                        color: "#203546",
                      }}
                    >
                      Categories
                    </div>
                    <Stack>
                      <Row>
                        <Col md={9}>
                          <span
                            className=" "
                            style={{
                              fontFamily: "Asap",
                              fontWeight: "400",
                              fontSize: "19px",
                              lineHeight: "21.52px",
                              color: "#7C7C7C",
                            }}
                          >
                            Skill Assessment{" "}
                          </span>
                        </Col>
                        <Col>
                          <span
                            className=" "
                            style={{
                              fontFamily: "Asap",
                              fontWeight: "400",
                              fontSize: "19px",
                              lineHeight: "21.52px",
                              color: "#7C7C7C",
                            }}
                          >
                            12
                          </span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={9}>
                          <span
                            className=" "
                            style={{
                              fontFamily: "Asap",
                              fontWeight: "400",
                              fontSize: "19px",
                              lineHeight: "21.52px",
                              color: "#7C7C7C",
                            }}
                          >
                            Australia Migration
                          </span>
                        </Col>
                        <Col>
                          <span
                            className=" "
                            style={{
                              fontFamily: "Asap",
                              fontWeight: "400",
                              fontSize: "19px",
                              lineHeight: "21.52px",
                              color: "#7C7C7C",
                            }}
                          >
                            12
                          </span>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={9}>
                          <span
                            className=" "
                            style={{
                              fontFamily: "Asap",
                              fontWeight: "400",
                              fontSize: "19px",
                              lineHeight: "21.52px",
                              color: "#7C7C7C",
                            }}
                          >
                            CDR Service{" "}
                          </span>
                        </Col>
                        <Col>
                          <span
                            className=" "
                            style={{
                              fontFamily: "Asap",
                              fontWeight: "400",
                              fontSize: "19px",
                              lineHeight: "21.52px",
                              color: "#7C7C7C",
                            }}
                          >
                            12
                          </span>
                        </Col>
                      </Row>
                    </Stack>
                  </Row>
                  <Row className="bg-white py-2 ">
                    <div
                      className=" "
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "20.52px",
                        color: "#203546",
                      }}
                    >
                      Is this information helpful?
                    </div>

                    <div
                      className=" "
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "400",
                        fontSize: "19px",
                        lineHeight: "21.52px",
                        color: "#7C7C7C",
                      }}
                    >
                      We have tried to make you understand by answering your
                      queries through this informative article. If you want to
                      know more about this subject matter and facing trouble
                      with the effective CDR Report writing process for your
                      Migration skill Assessment visa, you can give us an
                      instant call. Our professional writers are always eager to
                      provide 24/7 support services.
                    </div>
                  </Row>

                  <Row className="bg-white py-2 ">
                    <div
                      className=" "
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "20.52px",
                        color: "#203546",
                      }}
                    >
                      Leave your Feedback{" "}
                    </div>
                    <Form
                      ref={form}
                      onSubmit={submitFormhandler}
                      className="bg-white p-4 formContainer"
                    >
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
                          Post Feedback
                        </Button>
                      </Row>
                    </Form>
                  </Row>

                  <Row className="bg-white py-2 ">
                    <div
                      className=" pb-2"
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "20.52px",
                        color: "#203546",
                      }}
                    >
                      Show your love!
                    </div>
                    <Col sm={4}>
                      {" "}
                      <Button size="sm" variant="primary">
                        Share
                      </Button>
                    </Col>
                    <Col sm={4}>
                      {" "}
                      <Button size="sm" variant="primary">
                        Tweet
                      </Button>
                    </Col>
                    <Col sm={4}>
                      {" "}
                      <Button size="sm" variant="primary">
                        Share
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Container>
          <Hero3
            title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
            buttonName1="whatsapp"
            buttonName2="Facebook"
          />
        </>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const blog = await fetch("https://cdrskill.herokuapp.com/api/blogs");
  const allBlogs = await blog.json();
  return {
    paths: allBlogs.data.map((blog) => ({
      params: {
        slug: blog.attributes.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const blog = await fetch(
    `https://cdrskill.herokuapp.com/api/blogs/${params.slug}?populate=deep`
  );
  const blogData = await blog.json();

  return {
    props: { resBlogData: blogData?.data },
    revalidate: 1,
  };
}

export default SpecificBlog;
