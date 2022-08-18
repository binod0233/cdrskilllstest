import React from "react";
import { Suspense } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Card,
  Stack,
  CardGroup,
  Figure,
} from "react-bootstrap";
import { Box } from "@mui/material";
import Select from "react-select";

import styles from "../../styles/Blog.module.css";
import BlogsCategories from "../../components/Blogs/BlogsCategories";
import RecentBlogs from "../../components/Blogs/RecentBlogs";
import Hero3 from "../../components/FAQ/Hero3";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  ArrowBack,
  ArrowForward,
  FaceOutlined,
  GridView,
} from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";

const ALLBLOGS = React.lazy(() => import("../../components/Blogs/ALLBLOGS"));

const Blogs = () => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(page);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="pt-5 pt-md-0">
      <Head>
        <title>Blogs | CDR Skill Assessment</title>
        <meta
          name="description"
          content="Articles on and about cdr with cdrskillassessment | CDR Skill Assessment"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/copenned/image/upload/v1659366267/small_her_9ad2b6da87.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",

          clipPath: "ellipse(70% 60% at 50% 16%)",
          zIndex: "-1",
        }}
      >
        <Container className="pt-5 text-light">
          <Row>
            <Col className="ps-5 pb-2">
              <h4 className="">home/blogs</h4>
              <h1 className="">Skill Assessment</h1>
              <p className="">
                Read latest blogs about CDR writing, Austrlia Migration & Skill
                Assessment service from the world’s top most Blogger.
              </p>
            </Col>
            <Col className="ps-5 py-2">
              <Select options={options} />
              <h4 className="py-3" style={{ textAlign: "center" }}>
                OR
              </h4>

              <Select options={options} />
            </Col>
          </Row>
        </Container>
      </div>

      <Container style={{ marginTop: "-91px" }}>
        <h2 className={styles.te}>Feature Block</h2>
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Header as="p" className="bg-white border-bottom-0">
                <Stack direction="horizontal" gap={3}>
                  <GridView color="primaray" />
                  Australia Migration
                  <div className="text-muted ">2 days ago</div>
                </Stack>
              </Card.Header>

              <Card.Body>
                <Card.Title>
                  Top 5 Tips to prepare perfect CDR reports for Engineers
                  migrating to Australia
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content. With supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Read More -&gt;</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Header as="h5" className="bg-white border-bottom-0">
                Recent Blogs
              </Card.Header>

              <Card.Body>
                <Card.Title as="p">
                  Top 5 Tips to prepare perfect CDR reports for Engineers
                  migrating to Australia
                </Card.Title>
                <Card.Title as="p">
                  Top 5 Tips to prepare perfect CDR reports for Engineers
                  migrating to Australia
                </Card.Title>
                <Card.Title as="p">
                  Top 5 Tips to prepare perfect CDR reports for Engineers
                  migrating to Australia
                </Card.Title>
                <Card.Title as="p">
                  Top 5 Tips to prepare perfect CDR reports for Engineers
                  migrating to Australia
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row sm={1} md={3} className="my-4 g-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx}>
              <>
                <div
                  style={{
                    boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.15)",
                    borderRadius: "5px",
                    height: "100%",
                  }}
                >
                  {" "}
                  <Card.Img
                    variant="top"
                    src={
                      "https://res.cloudinary.com/copenned/image/upload/v1658911391/8_Common_CDR_Report_Mistakes_Made_by_Engineering_Applicants_884_by_444_4e35834a9b.png"
                    }
                  />
                  <Card.Body>
                    <GridView color="primaray" />
                    Australia Migration
                    <Card.Title className="pt-1">
                      CDR got Rejected by Engineers Australia; reapply again to
                      get a positive assessment
                    </Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Button className="container" size="lg">
                    Read More <ArrowForward />
                  </Button>
                </div>
              </>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center py-4">
          {" "}
          <Pagination
            count={5}
            page={page}
            shape="rounded"
            size="large"
            onChange={handleChange}
            // disabled={page === 4}
          />
        </div>
      </Container>

      <Container>
        <h2>Recommended Blogs</h2>
        <p>
          Like what you see? More stories from Lead with Indeed to spark your
          intereest.
        </p>
        <Row>
          <Col>
            <Figure>
              <Stack direction="horizontal" gap={3}>
                <Figure.Image
                  width={101}
                  height={100}
                  alt="171x180"
                  src="images/Blogs/per.png"
                />
                <Figure.Caption className="mb-5">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <p>sss</p>
                </Figure.Caption>{" "}
              </Stack>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Stack direction="horizontal" gap={3}>
                <Figure.Image
                  width={101}
                  height={100}
                  alt="171x180"
                  src="images/Blogs/per.png"
                />
                <Figure.Caption className="mb-5">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <p>sss</p>
                </Figure.Caption>{" "}
              </Stack>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col>
            <Figure>
              <Stack direction="horizontal" gap={3}>
                <Figure.Image
                  width={101}
                  height={100}
                  alt="171x180"
                  src="images/Blogs/per.png"
                />
                <Figure.Caption className="mb-5">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <p>sss</p>
                </Figure.Caption>{" "}
              </Stack>
            </Figure>
          </Col>{" "}
          <Col>
            <Figure>
              <Stack direction="horizontal" gap={3}>
                <Figure.Image
                  width={101}
                  height={100}
                  alt="171x180"
                  src="images/Blogs/per.png"
                />
                <Figure.Caption className="mb-5">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                  <p>sss</p>
                </Figure.Caption>{" "}
              </Stack>
            </Figure>
          </Col>
        </Row>
      </Container>
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="Facebook"
      />
    </div>
  );
};

export default Blogs;
