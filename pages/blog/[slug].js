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
  Accordion,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Hero3 from "../../components/FAQ/Hero3";
import axios from "axios";
import parse from "html-react-parser";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Select from "react-select";
import AddIcon from "@mui/icons-material/Add";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import GridViewIcon from "@mui/icons-material/GridView";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter"; // import Seo from "../../components/Seo";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
  //substring  {parse(resBlogData.attributes.content)[
  //   item.key
  // ].props.children.substring(0, 14)}

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

  console.log("data", parse(resBlogData.attributes.content));

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
          <Container style={{ backgroundColor: "" }}>
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
              // height: "60%",
              // width: "100%",
              position: "relative",
              overflow: "hidden",

              clipPath: "ellipse(226% 100% at 50% 16%)",
              zIndex: "-1",
            }}
          >
            <Container className="pt-5 mb-3  text-light">
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
                  <p className="">
                    <FiberManualRecordIcon color="primary" />
                    Last Update :{"1hrs ago "}
                  </p>
                </Col>
                <Col className=" ">
                  <p className="">
                    <GridViewIcon color="primary" />
                    Australia Migration
                  </p>
                </Col>
              </Row>
              <Row xs={2} md={4} lg={4}></Row>
            </Container>
          </div>
          <Container style={{ backgroundColor: "" }}>
            <Row className="container">
              <Col sm={8} className="  ">
                <div
                  style={{
                    fontFamily: "Arial",
                    fontWeight: "400",
                    fontSize: "19px",
                    lineHeight: "21.52px",
                    backgroundColor: "#2D495F",
                    color: "white",
                    marginTop: "10px",
                    marginBottom: "0px",
                  }}
                >
                  Home /Blogs /{""}
                  {resBlogData?.attributes?.title}
                </div>
                <Card.Img
                  variant="top"
                  src={resBlogData?.attributes?.image?.data?.attributes?.url}
                />
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <span
                        style={{
                          fontFamily: "Arial",
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "19.52px",
                          color: "#203546",
                        }}
                      >
                        {" "}
                        <AddIcon />
                        {resBlogData?.attributes?.title}
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      {resBlogData?.attributes?.content &&
                        parse(resBlogData?.attributes?.content).map(
                          (item, index) => (
                            <>
                              {item.type === "h2" && (
                                <>
                                  <Link id={item.key} href={`#${item.key}`}>
                                    <a
                                      key={item.key}
                                      style={{ color: "black" }}
                                    >
                                      {
                                        parse(resBlogData.attributes.content)[
                                          item.key
                                        ].props.children
                                      }
                                    </a>
                                  </Link>
                                  <br />
                                </>
                              )}
                            </>
                          )
                        )}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                {resBlogData?.attributes?.content &&
                  parse(resBlogData?.attributes?.content).map((item, index) => (
                    <>
                      {item.type === "h2" ? (
                        <div key={item.key}>
                          <h2 id={item.key}>
                            {parse(resBlogData.attributes.content)[item.key]}
                          </h2>
                        </div>
                      ) : (
                        <>{parse(resBlogData.attributes.content)[item.key]}</>
                      )}
                    </>
                  ))}
              </Col>
              <Col className="  ">
                <Row className="bg-white py-2  ">
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
                <Row className="bg-light ">
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
                          style={{ background: "#017CC9" }}
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
                    <Col>
                      {" "}
                      <Button size="sm" style={{ background: "#29487D" }}>
                        <FacebookIcon /> Share
                      </Button>
                    </Col>
                    <Col>
                      {" "}
                      <Button size="sm" style={{ background: "#1DA1F2" }}>
                        <TwitterIcon /> Tweet
                      </Button>
                    </Col>
                    <Col>
                      {" "}
                      <Button size="sm" style={{ background: "#0E76A8" }}>
                        <LinkedInIcon /> Share
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
